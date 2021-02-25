import React, { Component, Fragment } from 'react';
import {
    Icon,
    Modal,
    Button,
    Alert,
    Input,
    Select,
    Spin,
    Card,
    Divider,
    Table
} from 'antd';
import styles from './Styles';
import { FetchXHR } from '../../../helpers/generals';
import isEmpty from 'lodash/isEmpty';
import OrderCreator from '../../../helpers/OrderCreator/OrderCreator';
import RenderRows from '../../../helpers/render_rows';
import async from 'async';
import moment from 'moment';

class CreateReception extends Component {
    constructor(props) {
        super(props);
        let initial_state = {
            error: this.props.error,
            open: this.props.open,
            loading_providers: false,
            provider_id: {},
            providers: [],
            notes: '',
            products: [],
            services: [],
            total: 0,
            payments: [],
            total_payments: 0
        };

        if (props.fields) {
            if (props.fields.provider_id) {
                initial_state.provider_id = props.fields.provider_id;
            }
            if (props.fields.notes) {
                initial_state.notes = props.fields.notes;
            }
            if (props.fields.products) {
                initial_state.products = props.fields.products;
            }
            if (props.fields.services) {
                initial_state.services = props.fields.services;
            }
            if (props.fields.total) {
                initial_state.total = props.fields.total;
            }
            if (props.fields.invoice_folio) {
                initial_state.invoice_folio = props.fields.invoice_folio;
            }
        }
        
        this.state = initial_state;

        this.getProviders = this.getProviders.bind(this);
        this.getPaymentsReceptions = this.getPaymentsReceptions.bind(this);

        this.onChangeField = this.onChangeField.bind(this);
        this.onChangeDropdown = this.onChangeDropdown.bind(this);
        this.onChangeProvider = this.onChangeProvider.bind (this);

        this.onErrorOrderCreator = this.onErrorOrderCreator.bind(this);
        this.onChangeOrderCreator = this.onChangeOrderCreator.bind(this);
    }

    componentDidMount() {
        if(this.props.fields) {
            this.getPaymentsReceptions();
        }
    }

    componentWillReceiveProps(nextProps) {
        // check the state for recovered data values from dropdowns DB: 
        // compare and set manually with setfield....
        this.setState({
            error: nextProps.error
        });
    }

    getPaymentsReceptions() {
		const url = process.env.REACT_APP_API_URL + '/reception-payments';
        let POSTDATA = {
            limit: 1000,
			page: 1,
			filters: {
                subsidiary_id: this.props.session.subsidiary._id,
                reception_id: this.props.fields._id,
            }
		}
        FetchXHR(url, 'POST', POSTDATA).then((response) => {
            if (response.json.success) {
                let total_payments = 0;
                const payments = response.json.data.docs.map((el, index) => {
                    total_payments += el.total;
                    return ({
                        ...el,
                        key: index
                    });
                })
                this.setState({
                    total_payments, 
					payments
                });
            } else {
				console.log(response.message);
				this.setState({
					error: response.message
				});
            }
        }).catch((onError) => {
			console.log(onError);
			this.setState({
				error: onError.message
			});
        });
    }

    getProviders(search_text) {
        this.setState({
			loading_providers: true,
		});
		const url = process.env.REACT_APP_API_URL + '/providers';
        const POSTDATA = {
            limit: 100,
            page: 1,
            search_text
        }
        
        FetchXHR(url, 'POST', POSTDATA).then((response) => {
            if (response.json.success) {
                this.setState({
					providers: response.json.data.docs.map((el, index)=>({
						...el,
						key: index
                    })),
                    loading_providers: false
                });
            } else {
				this.setState({
                    loading_providers: false,
                    error: response.message
				});
            }
        }).catch((onError) => {
			this.setState({
                loading_providers: false,
                error: onError.message
			});
        });
    }

    onChangeProvider(provider_id) {
        this.setState({
            provider_id: this.state.providers.find((el) => (el._id === provider_id))
        });
    }

    onChangeField(event, key) {
        let obj = {};
        obj[key] = event.target.value;
        this.setState(obj);
    }

    onChangeDropdown(value, key) {
        let obj = {};
        obj[key] = value;
        this.setState(obj);
    }

    onSubmit = (event) => {
        event.preventDefault();
        // do validations:
        if (!isEmpty(this.state.provider_id)) {
            if (this.state.products.length > 0) {
                const Reception =  {
                    subsidiary_id: this.props.session.subsidiary._id,
                    user_id: this.props.session.user._id,
                    provider_id: this.state.provider_id._id,
                    notes: this.state.notes,
                    products: this.state.products,
                    invoice_folio: this.state.invoice_folio,
                    total: this.state.total
                }
                console.log(Reception);
                let POSTDATA = {
                    ...Reception,
                    populate_ids: ['user_id', 'provider_id']
                }
                let method = 'POST';
                let url = process.env.REACT_APP_API_URL + '/reception';
                if (this.props.fields) {
                    method = 'PUT';
                    url = process.env.REACT_APP_API_URL + '/reception/' + this.props.fields._id;
                }

                // group products for calculate minus stock.... and exclude the already saved products.
                // check for relationships and save it apart in her owns models
                FetchXHR(url, method, POSTDATA).then((response) => {
                    if (response.json.success) {
                        const saved_reception = response.json.obj;

                        const OperationsProducts = [];
                        let mapped_products_stock = {}; // product_id -> sum_quantity.
                        let actual_max_stock = {};
                        this.state.products.forEach((p) => {
                            if (!p._id) {
                                if (mapped_products_stock[p.id]) {
                                    mapped_products_stock[p.id] += p.quantity;
                                } else {
                                    mapped_products_stock[p.id] = p.quantity;
                                }

                                if (actual_max_stock[p.id]) {
                                    actual_max_stock[p.id] = Math.max(actual_max_stock[p.id], p.old_stock);
                                } else {
                                    actual_max_stock[p.id] = p.old_stock;
                                }
                            }
                        });

                        Object.keys(mapped_products_stock).forEach((el) => {
                            OperationsProducts.push((callback) => {
                                const new_p = {
                                    stock: actual_max_stock[el] + Number(mapped_products_stock[el])
                                }
                                const url_put_product = process.env.REACT_APP_API_URL + '/product/' + el;
                                FetchXHR(url_put_product, 'PUT', new_p).then((response_p) => {
                                    if (response_p.json.success) {
                                        callback(null, response_p.json.obj);
                                    }
                                });
                            });
                        });

                        this.state.products.forEach((p) => {
                            OperationsProducts.push((callback) => {
                                //create transaction obj...
                                const new_transaction = {
                                    subsidiary_id: this.props.session.subsidiary._id,
                                    product_id: p.id,
                                    user_id: p.user_id,
                                    quantity: p.quantity,
                                    price: p.price,
                                    discount: p.discount,
                                    total: p.total,
                                    type: 'RECEPCION',
                                    date: moment().toISOString()
                                }
                                console.log(new_transaction);
                                //te creas! :'v
                                const url_post_op = process.env.REACT_APP_API_URL + '/product-transaction';
                                FetchXHR(url_post_op, 'POST', new_transaction).then((response_pt) => {
                                    if (response_pt.json.success) {
                                        callback(null, response_pt.json.obj);
                                    }
                                });
                            });

                        });

                        async.series(OperationsProducts,(err, responses) => {
                            if (!err) {
                                console.log("NO ERROR");
                                console.log(saved_reception);
                                this.props.onCustomSubmit(saved_reception);
                            } else {
                                console.log(err);
                                console.log("ERROR");
                                console.log(responses);
                                this.setState({
                                    error: 'Error al procesar la petición',
                                    loading_submit: false
                                });
                            }
                        });
                    } else {
                        console.log(response);
                        this.setState({
                            error: response.json.message,
                            loading_submit: false
                        });
                    }
                }).catch((onError) => {
                    console.log(onError);
                    this.setState({
                        error: onError.message,
                        loading_submit: false
                    });
                });
            } else {
                this.setState({
                    error: 'Agregar algun producto o servicio o paquete a la cotización.'
                });
            }
        } else {
            this.setState({
                error: 'Favor de seleccionar algun proveedor.'
            });
        }
    }

    onErrorOrderCreator(err) {
        this.setState({
            error: err
        });
    }

    onChangeOrderCreator(values) {
        this.setState({
            products: values.products,
            services: values.services,
            total: values.total
        });
    }

    render() {
        let alert='';
		if (this.state.error) {
            alert = (
                <Alert
                    style={styles.alertContainer}
                    message={'Error'} 
                    description={this.state.error} 
                    type="error" 
                    banner={true}
                    showIcon={true}
                    closable={true}
                    onClose={() => {
                        console.log("dismissingErr");
                        this.props.dismissError();
                    }}
                />
            )
        }

        let ModalButtons = [
            <Button 
                key="cancel"
                onClick={this.props.onClose}
            >
                Cancelar
            </Button>,
            <Button 
                key="submit" 
                type="primary" 
                loading={this.state.loading}
                onClick={this.onSubmit}
            >
                Guardar
            </Button>,
        ];

        if (this.props.is_disabled) {
            ModalButtons = [
                <Button 
                    key="cancel"
                    onClick={this.props.onClose}
                >
                    Cerrar
                </Button>
            ];
        }

        const OptionsProviders = this.state.providers.map((item, index) => {
            return (
                <Select.Option 
                    value={item._id}
                    key={`${item._id} - ${index}`} 
                >
                    {item.name}
                </Select.Option>
            );
        });

        let CardContent = <div style={styles.cardInitialText}> Favor de buscar y seleccionar un proveedor. </div>;
        if (this.state.provider_id._id) {
            CardContent = (
                <Fragment>
                    <Card.Grid style={styles.grid_element}>
                        <p style={styles.label_title} >Nombre: </p>
                        <p style={styles.label_value} >{this.state.provider_id.name}</p>
                    </Card.Grid>
                    <Card.Grid style={styles.grid_element}>
                        <p style={styles.label_title} >RFC:</p>
                        <p style={styles.label_value}>{this.state.provider_id.rfc}</p>
                    </Card.Grid>
                    <Card.Grid style={styles.grid_element}>
                        <p style={styles.label_title} >Email:</p>
                        <p style={styles.label_value} >{this.state.provider_id.email}</p>
                    </Card.Grid>
                    <Card.Grid style={styles.grid_element}>
                        <p style={styles.label_title} >Número teléfono:</p>
                        <p style={styles.label_value}>{this.state.provider_id.phone_number}</p>
                    </Card.Grid>
                    <Card.Grid style={styles.grid_element}>
                        <p style={styles.label_title} >Número Móvil:</p>
                        <p style={styles.label_value}>{this.state.provider_id.phone_mobil}</p>
                    </Card.Grid>
                    <Card.Grid style={styles.grid_element}>
                        <p style={styles.label_title} >Compras:</p>
                        <p style={styles.label_value}>${this.state.provider_id.buys}</p>
                    </Card.Grid>
                    <Card.Grid style={styles.grid_element}>
                        <p style={styles.label_title} >Días Crédito:</p>
                        <p style={styles.label_value}>{this.state.provider_id.credit_days}</p>
                    </Card.Grid>
                    <Card.Grid style={styles.grid_element}>
                        <p style={styles.label_title} >Factura:</p>
                        <Input
                            disabled={this.props.is_disabled}
                            key="invoice_folio"
                            placeholder="Factura"
                            style={styles.inputSearchCard}
                            value={this.state.invoice_folio}
                            onChange={(e) => {
                                this.onChangeField(e, 'invoice_folio');
                            }}
                        />
                    </Card.Grid>
                </Fragment>
            );
        }

        let PaymentsModel = '';
        if (this.state.payments.length > 0) {
            const payments_table_columns = [
                {
                    title: 'Fecha',
                    dataIndex: 'date',
                    key: 'date',
                    render: RenderRows.renderRowDate,
                    width: '20%'
                },
                {
                    title: 'Folio',
                    dataIndex: 'folio',
                    key: 'folio',
                    width: '10%'
                },
                {
                    title: 'Factura',
                    dataIndex: 'folio_fact',
                    key: 'ffolio_factolio',
                    width: '10%'
                },
                {
                    title: 'Tipo',
                    dataIndex: 'type',
                    key: 'type',
                    width: '10%'
                },
                {
                    title: 'Banco',
                    dataIndex: 'bank',
                    key: 'bank',
                    width: '20%'
                },
                {
                    title: 'Referencia',
                    dataIndex: 'reference',
                    key: 'reference',
                    width: '20%'
                },
                {
                    title: 'Total',
                    dataIndex: 'total',
                    key: 'total',
                    render: RenderRows.renderRowNumber,
                    width: '10%'
                }
            ];

            PaymentsModel = (
                <Fragment>
                    <Divider> Pagos </Divider>
                    <Table
                        bordered
                        size="small"
                        scroll={{ y: 200 }}
                        style={styles.tableLayout}
                        columns={payments_table_columns}
                        dataSource={this.state.payments}
                        locale={{
                            filterTitle: 'Filtro',
                            filterConfirm: 'Ok',
                            filterReset: 'Reset',
                            emptyText: 'Sin Datos'
                        }}
                    />
                </Fragment>
            );
        }

        return (
            <Fragment>
                <Modal
                    width="100%"
                    bodyStyle={styles.modalContainer}
                    style={styles.modalBodyContainer}
                    visible={this.state.open}
                    title={this.props.title}
                    onCancel={this.props.onClose}
                    keyboard={true}
                    footer={ModalButtons}
                >
                    <div
                        key="sub_modal_container"
                        style={styles.modalInBodyContainer}
                    >
                        {alert}
                        <div
                            style={styles.inputsContainer}
                        >
                            <div
                                style={styles.inputsRowContainer}
                            >
                                
                                <Card
                                    title="Información de Proveedor"
                                    extra={
                                        <Select
                                            disabled={this.props.is_disabled || this.props.fields ? true : false }
                                            
                                            showSearch
                                            value={this.state.provider_id.name}
                                            placeholder={'Buscar Proveedor...'}
                                            style={styles.inputSearch}
                                            defaultActiveFirstOption={false}
                                            showArrow={false}
                                            filterOption={false}
                                            onSearch={(value) => { this.getProviders(value) }}
                                            onChange={(value) => { this.onChangeProvider(value) }}
                                            notFoundContent={this.state.loading_providers ? <Spin size="small" /> : null}
                                        >
                                            {OptionsProviders}
                                        </Select>
                                    }
                                    style={styles.cardContainer}
                                    bodyStyle={styles.cardBody}
                                >
                                    {CardContent}
                                </Card>
                            </div>
                            <div
                                style={styles.inputsRowContainer}
                            >
                                <Input.TextArea
                                    disabled={this.props.is_disabled}
                                    style={styles.inputElement}
                                    value={this.state.notes}
                                    autosize={{ minRows: 2, maxRows: 6 }}
                                    placeholder="Notas adicionales..."
                                    
                                    onChange={(value) => {
                                        this.onChangeField(value, 'notes');
                                    }}
                                />
                            </div>
                        </div>

                        <OrderCreator
                            is_reception
                            can_edit_description
                            is_reception
                            can_edit_price
                            can_edit_quantity                            
                            disabled={this.props.is_disabled}
                            onError={this.onErrorOrderCreator}
                            onChange={this.onChangeOrderCreator}
                            price_type={this.state.price_type}
                            session={this.props.session}
                            init_data={{
                                //products: this.props.fields ? this.props.fields.products : null,
                                services: this.props.fields ? this.props.fields.services : null,
                                total: this.props.fields ? this.props.fields.total : null
                            }}
                            update_data={{
                                products: this.state.products,
                                services: this.state.services,
                                total: this.state.total
                            }}
                        />

                        {PaymentsModel}
                    </div>
                </Modal>
            </Fragment>
        );
    }
}

// wrap a HOC to handle the inject of the fields?
export default CreateReception;