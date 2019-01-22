import React, { Component, Fragment } from 'react';
import {
    AutoComplete,
    Form,
    InputNumber,
    Icon,
    Modal,
    Button,
    Alert,
    Table,
    Tabs,
    Select,
    Popconfirm,
    Divider,
    Input
} from 'antd';
import styles from './Styles';
import { FetchXHR } from '../../helpers/generals';
import moment from 'moment';
import RenderRows from '../render_rows';


const FontTable = 11;


const renderRowSmall = (text, record) => {
    return ({
        children: <p style={{fontSize: FontTable}}>{text}</p>,
    });
}

const renderRow = (text, record) => {
    return ({
        props: {
            style: { background: record.subsidiary_id.color },
        },
        children: <p style={{fontSize: FontTable}}>{text}</p>,
    });
}

const renderTruncateRow = (text, record) => {
    return ({
        props: {
            style: { background: record.subsidiary_id.color },
        },
        children: <p style={{fontSize: FontTable}}>{text.substring(0,30) + '...'}</p>,
    });
}

const renderRowNumber = (text, record) => {
    return ({
        props: {
            style: { background: record.subsidiary_id.color },
        },
        children: <p style={{fontSize: FontTable}}>${String(round2(text ? text : 0)).replace(/\B(?=(\d{3})+(?!\d))/g, ',')}</p>,
    });
}

const round2 = (number) => (Math.round(number * 100) / 100);

class OrderCreator extends Component {
    constructor(props) {
        super(props);
        const init_selected_data = [];

        if (props.init_data) { 
            if (props.init_data.products) {
                props.init_data.products.forEach((el, index) => {init_selected_data.push({key: index, ...el, type: el.fmsi ? 'product' : 'service'})});
            }
            if (props.init_data.services) {
                props.init_data.services.forEach((el, index) => {init_selected_data.push({key: init_selected_data.length + index, ...el, type: el.fmsi ? 'product' : 'service'})});
            }
        }
        this.state = {
            loading_data: false,
            results_data: [],
            users: [],
            selected_data: init_selected_data,
            price_type: props.price_type,
            selected_quantity: 1,
            selected_discount: 0,
            selected_user: {},
            total: props.init_data.total | 0
        }

        this.scroll_table = 300;
        this.table_columns_results = [
            {
            	title: <div style={{ fontSize: FontTable }}>Sucursal</div>,
            	dataIndex: 'subsidiary_id.denomination',
				key: 'subsidiary_id.denomination',
                sorter: true,
                render: renderRow,
                width: '10%'
            },
            {
            	title: <div style={{ fontSize: FontTable }}>FMSI</div>,
            	dataIndex: 'fmsi',
				key: 'fmsi',
                render: renderRow,
                width: '10%'
            },
            {
                title: <div style={{ fontSize: FontTable }}>Clave</div>,
            	dataIndex: 'key_id',
				key: 'key_id',
                render: renderRow,
                width: '10%'
			},
			{
                title: <div style={{ fontSize: FontTable }}>Descripción</div>,
            	dataIndex: 'description',
				key: 'description',
                render: renderTruncateRow,
                width: '30%'
			},
			{
                title: <div style={{ fontSize: FontTable }}>Publico</div>,
            	dataIndex: 'price_public',
            	key: 'price_public',
                render: renderRowNumber,
                width: '10%'
			},
			{
                title: <div style={{ fontSize: FontTable }}>Taller</div>,
            	dataIndex: 'price_workshop',
            	key: 'price_workshop',
                render: renderRowNumber,
                width: '10%'
			},
			{
                title: <div style={{ fontSize: FontTable }}>Mayoreo</div>,
            	dataIndex: 'price_wholesale',
            	key: 'price_wholesale',
                render: renderRowNumber,
                width: '10%'
			},
			{
                title: <div style={{ fontSize: FontTable }}>Stock</div>,
            	dataIndex: 'stock',
				key: 'stock',
                render: renderRow,
                width: '10%'
			}
        ];

        this.table_columns_selected = [
            {
                title: <div style={{ fontSize: FontTable }}>Cant.</div>,
            	dataIndex: 'quantity',
                key: 'quantity',
                render: renderRowSmall,
                width: '10%'
            },
            {
                title: <div style={{ fontSize: FontTable }}>Usuario</div>,
                render: renderRowSmall,
            	dataIndex: 'user_name',
                key: 'user_name',
                width: '20%'
			},
			{
                title: <div style={{ fontSize: FontTable }}>Descripción</div>,
                render: renderRowSmall,
            	dataIndex: 'description',
                key: 'description',
                width: '30%'
            }, 
            {
                title: <div style={{ fontSize: FontTable }}>Descuento</div>,
                render: renderRowSmall,
            	dataIndex: 'discount',
                key: 'discount',
                width: '10%'
			},
			{
                title: <div style={{ fontSize: FontTable }}>Total</div>,
                render: renderRowSmall,
            	dataIndex: 'total',
                key: 'total',
                width: '10%'
			}
        ];

        if (!props.disabled) {
            this.table_columns_selected.push({
                title: <div style={{ fontSize: FontTable }}>Acciones</div>,
                key: 'action',
                width: '20%',
            	render: (text, record) => (
                    <span>
                        <Popconfirm
                            onClick={(event)=> {
                                event.stopPropagation();
                            }}
                            title="¿Esta seguro de eliminar?" 
                            okText="Eliminar"
                            cancelText="Cancelar"
                            onCancel={(event) => {
                                event.stopPropagation();
                            }}
                            onConfirm={(event) => {
                                event.stopPropagation();
                                this.deleteRecord(record);
                            }}
                        >
                            <a>Eliminar</a>
                        </Popconfirm>
                    </span>
                ),
		  	});
        }

        this.onChangeDiscount = this.onChangeDiscount.bind(this);
        this.onChangeQuantity = this.onChangeQuantity.bind(this);
        this.onChangeUser = this.onChangeUser.bind(this);

        this.getUsers = this.getUsers.bind(this);
        this.getData = this.getData.bind(this);

        this.setInitialValues = this.setInitialValues.bind(this);
        this.sendToOnChange = this.sendToOnChange.bind(this);
        this.deleteRecord = this.deleteRecord.bind(this);
        this.addRecord = this.addRecord.bind(this);

        this.setInitialValues();
    }

    componentDidMount() {
        this.getUsers();
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.price_type) {
            this.setState({
                price_type: nextProps.price_type
            });
        }
    }

    onChangeQuantity(value) {
        this.setState({
            selected_quantity: value
        });
    }
    onChangeUser(user_id) {
        this.setState({
            selected_user: this.state.users.find((el) => (el._id === user_id))
        });
    }
    onChangeDiscount(value) {
        this.setState({
            selected_discount: value
        });
    }

    getUsers() {
        this.setState({
			loading_users: true,
		});
		const url = process.env.REACT_APP_API_URL + '/users';
        const POSTDATA = {
            limit: 100,
            page: 1,
            search_text: this.state.search_user
		}
        FetchXHR(url, 'POST', POSTDATA).then((response) => {
            if (response.json.success) {
                this.setState({
					users: response.json.data.docs.map((el, index)=>({
						...el,
						key: index
                    })),
                    selected_user: this.props.session.user,
                    loading_users: false
                });
            } else {
                this.props.onError(response.message);
				this.setState({
					loading_users: false
				});
            }
        }).catch((onError) => {
            this.props.onError(onError.message);
			this.setState({
				loading_users: false
			});
        });
    }

    getData(search_text) {
        console.log("search for:" + search_text);

        this.setState({
			loading_data: true,
        });
        
        const urlServices = process.env.REACT_APP_API_URL + '/services';
        const urlProducts = process.env.REACT_APP_API_URL + '/products';
        const urlPackages = process.env.REACT_APP_API_URL + '/product-packages';
        
        const POSTDATA = {
            limit: 1000,
            page: 1,
            sort_field: 'stock',
            populate_ids: ['subsidiary_id'],
            
        }

        if (search_text) {
			POSTDATA['search_text'] = search_text;
        }

        FetchXHR(urlServices, 'POST', POSTDATA).then((responseServices) => {
            if (responseServices.json.success) {
                FetchXHR(urlProducts, 'POST', POSTDATA).then((responseProducts) => {
                    if (responseProducts.json.success) {
                        FetchXHR(urlPackages, 'POST', POSTDATA).then((responsePackages) => {
                            if (responsePackages.json.success) {
                                let results = [];
                                responseProducts.json.data.docs.forEach((el, index)=>{
                                    results.push({
                                        ...el,
                                        key: index
                                    });
                                });
                                responsePackages.json.data.docs.forEach((el, index)=>{
                                    results.push({
                                        ...el,
                                        key: index + results.length
                                    });
                                });
                                responseServices.json.data.docs.forEach((el, index)=>{
                                    results.push({
                                        ...el,
                                        key: index + results.length
                                    });
                                });
                                this.setState({
                                    results_data: results,
                                    loading_data: false
                                });
                            } else {
                                console.log(responsePackages.message);
                                this.setState({
                                    loading_data: false
                                });
                                this.props.onError(responsePackages.message);
                            }
                        }).catch((onError) => {
                            this.setState({
                                loading_data: false
                            });
                            this.props.onError(onError.message);
                        });
                    } else {
                        this.setState({
                            loading_data: false
                        });
                        this.props.onError(responseProducts.message);
                    }
                }).catch((onError) => {
                    this.setState({
                        loading_data: false
                    });
                    this.props.onError(onError.message);
                });
            }  else {
                this.setState({
                    loading_data: false
                });
                this.props.onError(responseServices.message);
            }
        }).catch((onError) => {
            this.setState({
                loading_data: false
            });
            this.props.onError(onError.message);
        });
    }

    setInitialValues() {
        // set the initial values getting for saved objs.
        if (this.props.products) {

        }
        if (this.props.services) {

        }
    }

    sendToOnChange( actual_products, actual_total) {
        // split the arrays and do calculation for total:
        const p = [];
        const s = [];
        actual_products.forEach((el) => {
            const newEl = Object.assign({}, el);
            if (newEl.type === 'product') {
                delete newEl.key;
                delete newEl.type;
                p.push(newEl);
            } else if (newEl.type === 'service') {
                delete newEl.key;
                delete newEl.type;
                s.push(newEl);
            }
        });

        this.props.onChange({
            products: p,
            services: s,
            total: actual_total,
        });
    }

    addRecord(record) {
        if (record.subsidiary_id._id === this.props.session.subsidiary._id) {
            if (record._id && this.state.selected_quantity > 0 && this.state.selected_user != '') {
                let actualProducts = Object.assign([] ,this.state.selected_data);
                let Price = Number(record.price_public);

                if (this.state.price_type === 'PUBLICO') {
                    Price = Number(record.price_public);
                } else if (this.state.price_type === 'MAYOREO') {
                    Price = Number(record.price_wholesale);
                } else if (this.state.price_type === 'TALLER' ) {
                    Price = Number(record.price_workshop);
                }

                const P = Number(this.state.selected_quantity) * Price;
                const Discount = (P * Number(this.state.selected_discount)) / 100;
                
                console.log(Price, P, Discount);

                actualProducts.push({
                    key: this.state.selected_data.length + 1,
                    type: record.fmsi ? 'product' : 'service',
                    id: record._id,
                    user_id: this.state.selected_user._id,
                    user_name: this.state.selected_user.name,
                    description: record.description,
                    price_type: this.state.price_type | 'PUBLICO',
                    price: Price,
                    quantity: this.state.selected_quantity,
                    discount: this.state.selected_discount | 0,
                    total: round2(P - Discount)
                });
                const new_total = round2(this.state.total + (P - Discount));
                this.setState({
                    selected_data: actualProducts,
                    selected_quantity: 1,
                    selected_discount: 0,
                    total: new_total
                });
                this.sendToOnChange(actualProducts, new_total);
            } else {
                this.props.onError('Favor de rellenar todos los campos necesarios para agregar un producto.');
            }
        } else {
            this.props.onError('No se pueden vender productos de otra sucursal.');
        }
    }

    deleteRecord(record) {
        // delete from table:
        let actualProducts = Object.assign([], this.state.selected_data);
        const index = actualProducts.findIndex((el)=>(el._id === record._id && record.quantity === el.quantity));
        if (index != -1) {
            actualProducts.splice(index, 1);
        }
        const new_total = this.state.total - (record.total);
        this.setState({
            selected_data: actualProducts,
            total: new_total
        });
        this.sendToOnChange(actualProducts, new_total);
    }

    render() {
        const OptionsUsers = this.state.users.map((item, index) => {
            return (
                <Select.Option 
                    value={item._id}
                    key={`${item._id} - ${index}`} 
                >
                    {item.name}
                </Select.Option>
            );
        });

        let SearcherProducts = <div></div>;
        if (!this.props.disabled) {
            SearcherProducts = (
                <div
                    style={styles.columnContainer}
                >
                    <Divider> Buscar producto, paquete o servicio</Divider>
                    <div
                        style={styles.rowContainer}
                    >
                        <Input.Search
                            size="large"
                            style={styles.rowElement}
                            placeholder="Buscar..."
                            onSearch={(value) => { this.getData(value); }}
                            enterButton
                        />
                    </div>
                    
                    <div
                        style={styles.rowContainer}
                    >
                        <InputNumber
                            style={styles.rowElement}
                            placeholder="Cantidad (#)"
                            value={this.state.selected_quantity}
                            onChange={this.onChangeQuantity}
                            size="100%"
                            step={1}
                        />
                        <Select
                            style={styles.rowElement}
                            value={this.state.selected_user._id}
                            showSearch
                            optionFilterProp="children"
                            placeholder="Usuario"
                            size="large"
                            onChange={this.onChangeUser}
                        >
                                {OptionsUsers}
                        </Select>
                        <InputNumber
                            style={styles.rowElement}
                            placeholder="Descuento (%)"
                            value={this.state.selected_discount}
                            onChange={this.onChangeDiscount}
                            size="100%"
                            step={1}
                            min={1}
                        />
                    </div>

                    <div
                        style={styles.rowContainer}
                    >
                        <Table
                            onHeaderRow = {(column, index)=>{
                                console.log(column, index);

                            }}
                            size="small"
                            scroll={{ y: 200 }}
                            style={styles.tableLayout}
                            columns={this.table_columns_results}
                            dataSource={this.state.results_data}
                            locale={{
                                filterTitle: 'Filtro',
                                filterConfirm: 'Ok',
                                filterReset: 'Reset',
                                emptyText: 'Sin Datos'
                            }}
                            onRow={(record) => {
                                return {
                                    onClick: () => {
                                        this.addRecord(record);
                                    },
                                };
                            }}
                        />
                    </div>
                </div>
            );
        }
        return (
            <Fragment>
                <div
                    style={styles.rowContainer}
                >
                    {SearcherProducts}
                    <Divider type="vertical" />
                    <div
                        style={styles.columnContainer}
                    >
                        <Divider> Orden de venta </Divider>
                        <Table
                            bordered
                            size="small"
                            scroll={{ y: 200 }}
                            style={styles.tableLayout}
                            columns={this.table_columns_selected}
                            dataSource={this.state.selected_data}
                            locale={{
                                filterTitle: 'Filtro',
                                filterConfirm: 'Ok',
                                filterReset: 'Reset',
                                emptyText: 'Sin Datos'
                            }}
                        />
                        <div style={styles.labelContainer}>
                            <p style={styles.labelTitle}> Total de compra: </p>
                            <p style={styles.labelValue}> {`$ ${this.state.total}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')}</p>
                        </div>
                    </div>
                </div>
            </Fragment>
        );
    }
}

// wrap a HOC to handle the inject of the fields?
export default OrderCreator;