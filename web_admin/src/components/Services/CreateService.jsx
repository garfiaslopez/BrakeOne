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
import { FetchXHR } from '../../helpers/generals';
import isEmpty from 'lodash/isEmpty';
import OrderCreator from '../../helpers/OrderCreator/OrderCreator';
import RenderRows from '../../helpers/render_rows';
import async from 'async';
import moment from 'moment';
import PrinterDownload from '../PrinterDownload/PrinterDownload';

// CALL TO PRINTER DOWNLOAD AND RENDER WITH CARS MODELS AND PROPS...
// 

class CreateService extends Component {
    constructor(props) {
        super(props);
        let initial_state = {
            error: this.props.error,
            open: this.props.open,
            loading: this.props.loading,
            opened_printer_history: false,
            loading_clients: false,
            loading_car_history: false,
            selected_car: undefined,
            kilometers: undefined,
            car_id: '',
            client_id: {},
            clients: [],
            quotation_folio: '',
            client_name: '',
            client_phone: '',
            client_address_city: '',
            client_address_country: '',
            client_address_cp: '',
            client_address_state:'',
            car_brand: '',
            car_color: '',
            car_kms: '',
            car_model: '',
            car_plates: '',
            car_vin: '',
            car_year: '',
            notes: '',
            products: [],
            services: [],
            total: 0,
            payments: [],
            total_payments: 0
        };

        if (props.fields) {
            if (props.fields.client_id) {
                initial_state.client_id = props.fields.client_id;
                if (props.fields.car_id) {
                    initial_state.car_id = props.fields.car_id;
                    initial_state.selected_car = props.fields.client_id.cars.find((el)=>(el._id === props.fields.car_id))
                }
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
            if (props.fields.kilometers) {
                initial_state.kilometers = props.fields.kilometers;
            }
        }
        
        this.state = initial_state;

        this.getClients = this.getClients.bind(this);
        this.getPayments = this.getPayments.bind(this);
        this.getQuotations = this.getQuotations.bind(this);

        this.onChangeField = this.onChangeField.bind(this);
        this.onChangeDropdown = this.onChangeDropdown.bind(this);
        this.onChangeClient = this.onChangeClient.bind (this);
        this.onChangeCar = this.onChangeCar.bind(this);

        this.onErrorOrderCreator = this.onErrorOrderCreator.bind(this);
        this.onChangeOrderCreator = this.onChangeOrderCreator.bind(this);

        this.deliverService = this.deliverService.bind(this);
        this.printCarHistory = this.printCarHistory.bind(this);
    }

    componentDidMount() {
        if(this.props.fields) {
            this.getPayments();
        }
    }

    componentWillReceiveProps(nextProps) {
        // check the state for recovered data values from dropdowns DB: 
        // compare and set manually with setfield....
        this.setState({
            error: nextProps.error,
            loading: nextProps.loading,
        });
    }

    getPayments() {
        console.log("getting payments");
        const url = process.env.REACT_APP_API_URL + '/payments';
        let POSTDATA = {
            limit: 1000,
            page: 1,
            filters: {
                subsidiary_id: this.props.session.subsidiary._id,
                sell_id: this.props.fields._id,
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

    getClients(search_text) {
        this.setState({
            loading_clients: true,
        });
        const url = process.env.REACT_APP_API_URL + '/clients';
        const POSTDATA = {
            limit: 100,
            page: 1,
            search_text
        }
        
        FetchXHR(url, 'POST', POSTDATA).then((response) => {
            if (response.json.success) {
                this.setState({
                    clients: response.json.data.docs.map((el, index)=>({
                        ...el,
                        key: index
                    })),
                    loading_users: false
                });
            } else {
                this.setState({
                    loading_clients: false,
                    error: response.message
                });
            }
        }).catch((onError) => {
            this.setState({
                loading_clients: false,
                error: onError.message
            });
        });
    }

    getQuotations(search_text) {
        this.setState({
            quotation_folio: search_text,
            loading_quotations: true,
        });
        const url = process.env.REACT_APP_API_URL + '/quotations';
        const POSTDATA = {
            limit: 100,
            page: 1,
            populate_ids: ['client_id'],
            filters: {
                'folio': Number(search_text)
            }
        }
        FetchXHR(url, 'POST', POSTDATA).then((response) => {
            if (response.json.success) {
                if (response.json.data.docs.length >= 1) {
                    const quotation = response.json.data.docs[0];
                    const selected_car = quotation.client_id.cars.find(e => e.plates === quotation.car_plates); 
                    this.setState({
                        selected_car,
                        car_id: selected_car._id,
                        kilometers: quotation.car_kms,
                        client_id: quotation.client_id,
                        car_ids: quotation.car_id,
                        loading_quotations: false,
                        notes: quotation.notes,
                        products: quotation.products,
                        services: quotation.services,
                        total: quotation.total
                    });
                }
            } else {
                this.setState({
                    loading_quotations: false,
                    error: response.message
                });
            }
        }).catch((onError) => {
            this.setState({
                loading_quotations: false,
                error: onError.message
            });
        });
    }

    onChangeClient(client_id) {
        this.setState({
            client_id: this.state.clients.find((el) => (el._id === client_id))
        });
    }

    onChangeCar(car_id) {
        this.setState({
            selected_car: this.state.client_id.cars.find((el)=>(el._id === car_id)), 
            car_id
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
        if (!isEmpty(this.state.client_id)) {
            if (this.state.products.length > 0 || this.state.services.length > 0) {
                const Sell =  {
                    subsidiary_id: this.props.session.subsidiary._id,
                    user_id: this.props.session.user._id,
                    client_id: this.state.client_id._id,
                    client_name: this.state.client_id.name,
                    client_phone: this.state.client_id.phone_mobil,
                    client_address_city: this.state.client_id.address_city,
                    client_address_country: this.state.client_id.address_country,
                    client_address_cp: this.state.client_id.address_cp,
                    client_address_state: this.state.client_id.address_state,          
                    car_brand: this.state.car_ids.brand,
                    car_color: this.state.car_ids.color,
                    car_kms: this.state.car_ids.kms,
                    car_model: this.state.car_ids.model,
                    car_plates: this.state.car_ids.plates,
                    car_vin: this.state.car_ids.vin,
                    car_year: this.state.car_ids.year,          
                    notes: this.state.notes,
                    products: this.state.products,
                    services: this.state.services,
                    total: this.state.total,
                    is_service: true,
                    car_id: this.state.car_id,
                    kilometers: this.state.kilometers,
                }
                //this.props.onSubmit(Sell);

                // CUSTOM UPLOAD FUNCTION AND SEND THE NEW ARRAY TO CRUDLAYOUT
                let POSTDATA = {
                    ...Sell,
                    subsidiary_id: this.props.session.subsidiary._id,
                    populate_ids: ['client_id']
                }
                let method = 'POST';
                let url = process.env.REACT_APP_API_URL + '/sell';
                if (this.props.fields) {
                    method = 'PUT';
                    url = process.env.REACT_APP_API_URL + '/sell/' + this.props.fields._id;
                }

                // group products for calculate minus stock.... and exclude the already saved products.
                // check for relationships and save it apart in her owns models
                FetchXHR(url, method, POSTDATA).then((response) => {
                    if (response.json.success) {
                        const saved_sell = response.json.obj;

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
                                    stock: actual_max_stock[el] - mapped_products_stock[el]
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
                                    type: 'VENTA_SERVICIO',
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
                                console.log(saved_sell);
                                this.props.onCustomSubmit(saved_sell);
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
                error: 'Rellenar los campos obligatorios (*) de carro y usuario para guardar.'
            });
        }
    }

    deliverService(event) {
        // submit and update with changed flags and dates
        event.preventDefault();
        // do validations:
        console.log("DELIVER_SERVICE");
        if (this.props.fields.is_payed) {
            if (!isEmpty(this.state.client_id) && this.state.car_id != '' && this.state.kilometers ) {
                if (this.state.products.length > 0 || this.state.services.length > 0) {
                    const Sell =  {
                        subsidiary_id: this.props.session.subsidiary._id,
                        user_id: this.props.session.user._id,
                        client_id: this.state.client_id._id,
                        notes: this.state.notes,
                        products: this.state.products,
                        services: this.state.services,
                        total: this.state.total,
                        is_service: true,
                        car_id: this.state.car_id,
                        kilometers: this.state.kilometers,
                        date_out: moment().toISOString(),
                        is_finished: true,
                        status: 'ENTREGADO'
                    }
                    this.props.onSubmit(Sell);
                } else {
                    this.setState({
                        error: 'Agregar algun producto o servicio o paquete a la cotización.'
                    });
                }
            } else {
                this.setState({
                    error: 'Rellenar los campos obligatorios (*) de carro y usuario para guardar.'
                });
            }
        } else {
            this.setState({
                error: 'No se puede entregar un servicio sin que el usuario pague la deuda..'
            });
        }
    }

    printCarHistory() {
        this.setState({
            opened_printer_history: true
        });
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

        if(this.props.fields && !this.props.fields.is_finished) { // editing:
            ModalButtons.unshift(
                <Button 
                    key="Entregar"
                    onClick={this.deliverService}
                >
                    Entregar
                </Button>
            )
        }
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

        const OptionsClients = this.state.clients.map((item, index) => {
            return (
                <Select.Option 
                    value={item._id}
                    key={`${item._id} - ${index}`} 
                >
                    {item.name}
                </Select.Option>
            );
        });

        const OptionsCars = [];
        if (this.state.client_id.cars) {
            this.state.client_id.cars.forEach((item, index) => {
                OptionsCars.push(
                    <Select.Option 
                        value={item._id}
                        key={`${item._id} - ${index}`} 
                    >
                        {item.model + ' - ' + item.plates}
                    </Select.Option>
                );
            });
        }

        const OptionsTypes = ["PUBLICO", "MAYOREO", "CREDITO TALLER", "TALLER"].map(
            (item, index) => {
            return (
                <Select.Option value={item} key={`${item} - ${index}`}>
                {item}
                </Select.Option>
            );
            }
        );

        let CardContent = <div style={styles.cardInitialText}> Favor de buscar y seleccionar un cliente. </div>;
        if (this.state.client_id._id) {
            CardContent = (
                <Fragment>
                    <Card.Grid style={styles.grid_element}>
                        <p style={styles.label_title} >Nombre:</p>
                        <p style={styles.label_value} >{this.state.client_id.name}</p>
                    </Card.Grid>                   
                    <Card.Grid style={styles.grid_element}>
                        <p style={styles.label_title} >RFC:</p>
                        <p style={styles.label_value}>{this.state.client_id.rfc}</p>
                    </Card.Grid>
                    <Card.Grid style={styles.grid_element}>
                    <p style={styles.label_title} >Tipo de precio:</p>
                        <Select
                            showSearch
                            onFocus={() => {
                            console.log(this);
                            }}
                            disabled={
                            this.props.is_disabled ||
                            (this.props.fields && this.props.session.user.rol !== "ADMIN")
                            }
                            value={this.state.price_type}
                            style={styles.inputElement}
                            placeholder="TIPO PRECIO"
                            optionFilterProp="children"
                            onChange={(value) => {
                            this.onChangeDropdown(value, "price_type");
                            }}
                        >
                            {OptionsTypes}
                        </Select>
                    </Card.Grid>
                    <Card.Grid style={styles.grid_element}>
                        <p style={styles.label_title} >Email:</p>
                        <p style={styles.label_value} >{this.state.client_id.email}</p>
                    </Card.Grid>
                    <Card.Grid style={styles.grid_element}>
                        <p style={styles.label_title} >Número Móvil:</p>
                        <p style={styles.label_value}>{this.state.client_id.phone_mobil}</p>
                    </Card.Grid>
                    <Card.Grid style={styles.grid_element}>
                        <p style={styles.label_title} >Días Crédito:</p>
                        <p style={styles.label_value}>{this.state.client_id.credit_days}</p>
                    </Card.Grid>
                    <Card.Grid style={styles.grid_element}>
                        <p style={styles.label_title} >Marca y modelo:</p>
                        <p style={styles.label_value}>{this.state.selected_car ? this.state.selected_car.brand + ' - ' + this.state.selected_car.model : ''}</p>
                    </Card.Grid>
                    <Card.Grid style={styles.grid_element}>
                        <p style={styles.label_title} >Año y Placas:</p>
                        <p style={styles.label_value}>{this.state.selected_car ? this.state.selected_car.year + ' - ' + this.state.selected_car.plates : '' }</p>
                    </Card.Grid>
                    <Card.Grid style={styles.grid_element}>
                        <p style={styles.label_title} >Numero economico:</p>
                        <p style={styles.label_value}>{this.state.selected_car ? this.state.selected_car.economic_number : ''}</p>
                    </Card.Grid>
                    <Card.Grid style={styles.grid_element}>
                        <p style={styles.label_title} >VIN:</p>
                        <p style={styles.label_value}>{this.state.selected_car ? this.state.selected_car.vin : ''}</p>
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
                    width: '20%'
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

        let PrinterModal = '';
        if (this.state.opened_printer_history) {
            PrinterModal = (
                <PrinterDownload
                    key={"Print_Form"}
                    title={"Imprimir o Descargar"}
                    onClose={() => {
                        this.setState({
                            opened_printer_history: false,
                        });
                    }}
                    model={{
                        name: 'sell',
                        singular: 'sell',
                        plural: 'sells',
                        label: 'Servicios'
                    }}
                    additional_get_data = {{
                        subsidiary_id: this.props.session.subsidiary._id,
                        client_id: this.state.client_id._id,
                        is_service: true,
                        is_finished: true,
                        car_id: this.state.car_id
                    }}
                    populate_ids={['client_id']}
                    table_columns={[
                        {
                            title: 'Fecha',
                            dataIndex: 'date',
                            key: 'date',
                            render: RenderRows.renderRowDateSells,
                            width: '15%'
                        },
                        {
                            title: 'Folio',
                            dataIndex: 'folio',
                            key: 'folio',
                            render: RenderRows.renderRowTextSells,
                            width: '15%'
                        },
                        {
                            title: 'Cliente',
                            dataIndex: 'client_id.name',
                            key: 'client_id.name',
                            render: RenderRows.renderRowTextSells,
                            width: '20%'
                        },
                        {
                            title: 'Total',
                            dataIndex: 'total',
                            key: 'total',
                            render: RenderRows.renderRowNumberSells,
                            width: '15%'
                        }
                    ]}
                />
            );
        }

        let title = this.props.title;
        if (this.props.next_folio) {
            title += '    | FOLIO: #' + this.props.next_folio;
        }

        return (
            <Fragment>
                <Modal
                    width="100%"
                    bodyStyle={styles.modalContainer}
                    style={styles.modalBodyContainer}
                    visible={this.state.open}
                    title={title}
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
                                    title="Información de cliente"
                                    extra={
                                        <Fragment>
                                            <Input.Search
                                                disabled={this.props.is_disabled || this.props.fields ? true : false }
                                                key="search_filter"
                                                placeholder="Folio"
                                                enterButton="Buscar"
                                                onSearch={this.getQuotations}
                                                style={styles.inputSearch}
                                            />
                                            <Select
                                                disabled={ this.props.is_disabled || this.props.fields ? true : false }
                                                
                                                showSearch
                                                value={this.state.client_id.name}
                                                placeholder={'Buscar Cliente...'}
                                                style={styles.inputSearch}
                                                defaultActiveFirstOption={false}
                                                showArrow={false}
                                                filterOption={false}
                                                onSearch={(value) => { this.getClients(value) }}
                                                onChange={(value) => { this.onChangeClient(value) }}
                                                notFoundContent={this.state.loading_clients ? <Spin size="small" /> : null}
                                            >
                                                {OptionsClients}
                                            </Select>
                                            <Select
                                                disabled={ this.props.is_disabled }
                                                style={styles.inputSearch}
                                                value={this.state.selected_car ? this.state.selected_car.brand + ' - ' + this.state.selected_car.model : undefined}
                                                showSearch
                                                optionFilterProp="children"
                                                placeholder="Seleccionar Auto"
                                                
                                                onChange={this.onChangeCar}
                                            >
                                                {OptionsCars}
                                            </Select>
                                            <Input
                                                disabled={this.props.is_disabled}
                                                value={this.state.kilometers}
                                                style={styles.inputSearch}
                                                onChange={(value) => {
                                                    this.onChangeField(value, 'kilometers');
                                                }}
                                                prefix={(
                                                    <Icon
                                                        type="car"
                                                        className="field-icon"
                                                    />
                                                )}
                                                type="text"
                                                placeholder="Kilometros (*)"
                                                
                                            />
                                            <Button
                                                icon="reconciliation"
                                                disabled={this.state.car_id === '' ? true : false}
                                                type="primary"
                                                onClick={this.printCarHistory}
                                                style={styles.buttonHistory}
                                                loading={this.state.loading_car_history}
                                            >
                                                Historial
                                            </Button>
                                        </Fragment>
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
                            can_edit_price
                            can_edit_quantity
                            can_edit_description
                            can_edit_disccount                            
                            is_recovered={this.state.quotation_folio !== '' ? true : false}
                            disabled={this.props.is_disabled}
                            onError={this.onErrorOrderCreator}
                            onChange={this.onChangeOrderCreator}
                            price_type={this.state.price_type}
                            session={this.props.session}
                            init_data={{
                                products: this.props.fields ? this.props.fields.products : this.state.products,
                                services: this.props.fields ? this.props.fields.services : this.state.services,
                                total: this.props.fields ? this.props.fields.total : this.state.total
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
                {PrinterModal}
            </Fragment>
        );
    }
}

// wrap a HOC to handle the inject of the fields?
export default CreateService;