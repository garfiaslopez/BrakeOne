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
    Input,
    Pagination
} from 'antd';
import styles from './Styles';
import { FetchXHR } from '../../helpers/generals';
import moment from 'moment';
import RenderRows from '../render_rows';
import isNumber from 'lodash/isNumber';
import { EditableFormRow, EditableCell } from './TableHelpers';

const FontTable = 12;
const round2 = (number) => (Math.round(number * 100) / 100);

const renderRowSmall = (text, record) => {
    return ({
        children: <p style={{fontSize: FontTable}}>{text}</p>,
    });
}
const renderRowSmallTruncate = (text, record) => {
    if (text) {
        return ({
            children: <p style={{fontSize: FontTable}}>{text.length > 16 ? text.substring(0,16) + '...' : text}</p>,
        });
    }
    return '';
}
const renderRowSmallPercent = (text, record) => {
    return ({
        children: <p style={{fontSize: FontTable}}>%{text}</p>,
    });
}
const renderRowSmallNumber = (text, record) => {
    return ({
        children: <p style={{fontSize: FontTable}}>${String(round2(text ? text : 0)).replace(/\B(?=(\d{3})+(?!\d))/g, ',')}</p>,
    });
}

const renderRow = (text, record) => {
    console.log(record);
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
        children: <p style={{fontSize: FontTable}}>{text.length > 16 ? text.substring(0,16) + '...' : text}</p>,
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
            selected_discount: undefined,
            selected_user: {},
            total: props.init_data.total | 0,
            products: props.init_data.products
        }

        this.scroll_table = 300;
        this.table_columns_results = [
            {
            	title: <div style={{ fontSize: FontTable }}>Sucursal</div>,
            	dataIndex: 'subsidiary_id.denomination',
				key: 'subsidiary_id.denomination',
                render: renderRow,
                width: '8%'
            },
            {
            	title: <div style={{ fontSize: FontTable }}>FMSI</div>,
            	dataIndex: 'fmsi',
				key: 'fmsi',
                render: renderTruncateRow,
                width: '8%'
            },
            {
                title: <div style={{ fontSize: FontTable }}>Clave</div>,
            	dataIndex: 'key_id',
				key: 'key_id',
                render: renderRow,
                width: '8%'
            },
            {
                title: <div style={{ fontSize: FontTable }}>Linea</div>,
            	dataIndex: 'line',
				key: 'line',
                render: renderRow,
                width: '8%'
            },
            {
                title: <div style={{ fontSize: FontTable }}>Marca</div>,
            	dataIndex: 'brand',
				key: 'brand',
                render: renderRow,
                width: '8%'
			},
			{
                title: <div style={{ fontSize: FontTable }}>Descripción</div>,
            	dataIndex: 'description',
				key: 'description',
                render: renderTruncateRow,
                width: '15%'
            },
            {
                title: <div style={{ fontSize: FontTable }}>Costo</div>,
            	dataIndex: 'price',
            	key: 'price',
                render: renderRowNumber,
                width: '8%'
			},
			{
                title: <div style={{ fontSize: FontTable }}>Publico</div>,
            	dataIndex: 'price_public',
            	key: 'price_public',
                render: renderRowNumber,
                width: '8%'
			},
			{
                title: <div style={{ fontSize: FontTable }}>Taller</div>,
            	dataIndex: 'price_workshop',
            	key: 'price_workshop',
                render: renderRowNumber,
                width: '8%'
			},
			{
                title: <div style={{ fontSize: FontTable }}>Mayoreo</div>,
            	dataIndex: 'price_wholesale',
            	key: 'price_wholesale',
                render: renderRowNumber,
                width: '8%'
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
                width: '5%'
            },
            {
                title: <div style={{ fontSize: FontTable }}>Usuario</div>,
                render: renderRowSmall,
            	dataIndex: 'user_name',
                key: 'user_name',
                width: '8%'
            },
            {
            	title: <div style={{ fontSize: FontTable }}>FMSI</div>,
            	dataIndex: 'fmsi',
				key: 'fmsi',
                render: renderRowSmallTruncate,
                width: '8%'
            },
            {
                title: <div style={{ fontSize: FontTable }}>Clave</div>,
            	dataIndex: 'key_id',
				key: 'key_id',
                render: renderRowSmall,
                width: '8%'
            },
            {
                title: <div style={{ fontSize: FontTable }}>Linea</div>,
            	dataIndex: 'line',
				key: 'line',
                render: renderRowSmall,
                width: '8%'
            },
            {
                title: <div style={{ fontSize: FontTable }}>Marca</div>,
            	dataIndex: 'brand',
				key: 'brand',
                render: renderRowSmall,
                width: '8%'
			},
			{
                title: <div style={{ fontSize: FontTable }}>Descripción</div>,
                render: renderRowSmallTruncate,
            	dataIndex: 'description',
                key: 'description',
                width: '15%'
            },
            {
                title: <div style={{ fontSize: FontTable }}>Precio</div>,
                render: renderRowSmallNumber,
            	dataIndex: 'price',
                key: 'price',
                width: '10%'
			},
            {
                title: <div style={{ fontSize: FontTable }}>Descuento</div>,
                render: renderRowSmallPercent,
            	dataIndex: 'discount',
                key: 'discount',
                width: '10%',
                editable: true,
			},
			{
                title: <div style={{ fontSize: FontTable }}>Total</div>,
                render: renderRowSmallNumber,
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
            	render: (text, record) => {
                    if((this.props.is_quotation) || this.props.is_recovered || (!record._id)) {
                        return (
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
                                    <Button 
                                        type="danger" 
                                        shape="circle"
                                        icon="delete"
                                    />
                                </Popconfirm>
                            </span>
                        );
                    }
                    return <div></div>;
                },
		  	});
        }

        this.onChangeDiscount = this.onChangeDiscount.bind(this);
        this.onChangeQuantity = this.onChangeQuantity.bind(this);
        this.onChangeUser = this.onChangeUser.bind(this);

        this.getUsers = this.getUsers.bind(this);
        this.getData = this.getData.bind(this);

        this.sendToOnChange = this.sendToOnChange.bind(this);
        this.deleteRecord = this.deleteRecord.bind(this);
        this.addRecord = this.addRecord.bind(this);
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

        if (nextProps.update_data) {
            const init_selected_data = [];
            if (nextProps.update_data.products) {
                nextProps.update_data.products.forEach((el, index) => {init_selected_data.push({key: index, ...el, type: el.fmsi ? 'product' : 'service'})});
            }
            if (nextProps.update_data.services) {
                nextProps.update_data.services.forEach((el, index) => {init_selected_data.push({key: init_selected_data.length + index, ...el, type: el.fmsi ? 'product' : 'service'})});
            }
            this.setState({
                selected_data: init_selected_data,
                total: nextProps.update_data.total
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

                                // Get quantity diff from selected data. (?)

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

    // update actual list product stock, minus selected quantity.
    // 
    addRecord(record) {
        console.log(this.props.is_reception, isNumber(this.state.selected_discount),isNumber(this.state.selected_discount) === false);
        if (this.props.is_reception && isNumber(this.state.selected_discount) === false) {
            this.props.onError('Favor de agregar un precio de compra para el producto.');
        } else {
            if ((this.props.is_quotation) || (record.subsidiary_id._id === this.props.session.subsidiary._id)) {
                if ((this.props.is_quotation) || (this.props.is_reception) || (record.stock > 0 && (record.stock - this.state.selected_quantity)) >= 0) {
                    if (record._id && this.state.selected_quantity > 0 && this.state.selected_user != '') {
    
                        let actualProducts = Object.assign([] ,this.state.selected_data);
    
                        // let id = this.state.products.findIndex((el)=>(el.id === record.id));
                        // actualProducts[id].stock -= record.quantity;
    
                        // Price selector:
                        let Price = Number(record.price_public);
                        let Discount = this.state.selected_discount ? Number(this.state.selected_discount) : 0;
    
                        if (this.state.price_type === 'PUBLICO') {
                            Price = Number(record.price_public);
                        } else if (this.state.price_type === 'MAYOREO') {
                            Price = Number(record.price_wholesale);
                        } else if (this.state.price_type === 'TALLER' ) {
                            Price = Number(record.price_workshop);
                        }

                        if (this.props.is_reception) {
                            Price = this.state.selected_discount;
                            Discount = 0;
                        }
    
                        // total price:
                        const P = Number(this.state.selected_quantity) * Price;
                        if (Discount) {
                            Discount = (P * Number(Discount)) / 100;
                        }
                        const new_total = (this.state.total + Math.ceil(P - Discount));
        
                        actualProducts.push({
                            key: this.state.selected_data.length + 1,
                            type: record.fmsi ? 'product' : 'service',
                            id: record._id,
                            user_id: this.state.selected_user._id,
                            user_name: this.state.selected_user.name,
                            subsidiary_id: record.subsidiary_id._id,
                            fmsi: record.fmsi,
                            brand: record.brand,
                            line: record.line,
                            description: record.description,
                            key_id: record.key_id,
                            price_type: this.state.price_type | 'PUBLICO',
                            price: Price,
                            quantity: this.state.selected_quantity,
                            discount: Discount,
                            total: Math.ceil(P - Discount),
                            old_stock: record.stock,
                        });
    
                        this.setState({
                            selected_data: actualProducts,
                            selected_quantity: 1,
                            selected_discount: undefined,
                            total: new_total
                        });
                        this.sendToOnChange(actualProducts, new_total);
                    } else {
                        this.props.onError('Favor de rellenar todos los campos necesarios para agregar un producto.');
                    }
                } else {
                    this.props.onError('No se pueden vender productos sin stock.');
                }
            } else {
                this.props.onError('No se pueden vender productos de otra sucursal.');
            }
        }
    }

    updateRecord = (row) => {
        const newData = [...this.state.selected_data];
        const index = newData.findIndex(item => row.key === item.key);
        const item = newData[index];
        const newTotalRow = Math.ceil(item.price - ((item.price * item.quantity) * row.discount) / 100);
        newData.splice(index, 1, {
          ...item,
          ...row,
          total: newTotalRow
        });
        this.setState({
            total: (this.state.total - item.total + newTotalRow),
            selected_data: newData 
        });
        this.sendToOnChange(newData, newTotalRow);
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
        
        let widthTable = (window.innerWidth/2) - 60;
        if (this.props.disabled) {
            widthTable = window.innerWidth;
        }
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
                    <div
                        style={styles.rowContainer}
                    >
                        <Input.Search
                            style={styles.rowSearchElement}
                            placeholder="Buscar..."
                            onSearch={(value) => { this.getData(value); }}
                            enterButton
                        />
                        <div style={styles.groupLabel}>
                            <p style={styles.quantityLabel}>Cantidad (#)</p>
                            <InputNumber
                                style={styles.rowElementQuantity}
                                placeholder="Cantidad (#)"
                                value={this.state.selected_quantity}
                                onChange={this.onChangeQuantity}
                                size="100%"
                                step={1}
                                min={1}
                            />
                        </div>
                        {(()=>{
                            if (this.props.is_reception) {
                                return (
                                    <div style={styles.groupLabel}>
                                        <p style={styles.discountLabel}>{'Precio ($)'}</p>
                                        <InputNumber
                                            style={styles.rowElementPrice}
                                            placeholder={"Precio Compra ($)"}
                                            value={this.state.selected_discount}
                                            onChange={this.onChangeDiscount}
                                            size="100%"
                                            step={1}
                                            min={0}
                                        />
                                    </div>
                                );
                            }
                        })()}
                        <div style={styles.groupLabel}>
                            <p style={styles.quantityLabel}>Usuario </p>
                            <Select
                                style={styles.rowElementUser}
                                value={this.state.selected_user._id}
                                showSearch
                                optionFilterProp="children"
                                placeholder="Usuario"
                                
                                onChange={this.onChangeUser}
                            >
                                    {OptionsUsers}
                            </Select>
                        </div>                        
                    </div>

                    <div
                        style={styles.rowContainer}
                    >
                        <Table
                            bordered
                            loading={this.state.loading_data}
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
                            pagination={false}
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

        const components = {
            body: {
                row: EditableFormRow,
                cell: EditableCell,
            }
        };

        const columns = this.table_columns_selected.map((col) => {
            if (!col.editable || !this.props.can_edit_disccount) {
              return col;
            }
            return {
                ...col,
                onCell: record => ({
                    record,
                    editable: col.editable,
                    dataIndex: col.dataIndex,
                    title: col.title,
                    handleSave: this.updateRecord,
                }),
            };
        });

        return (
            <Fragment>
                <div
                    style={styles.columnContainer}
                >
                    <Divider> Buscar y seleccionar productos: </Divider>
                    {SearcherProducts}
                    <Divider> Orden de venta </Divider>
                    <div
                        style={styles.rowContainer}
                    >
                        <Table
                            components={components}
                            rowClassName={() => 'editable-row'}
                            bordered
                            columns={columns}
                            size="small"
                            scroll={{ y: 200 }}
                            style={styles.tableLayout}
                            dataSource={this.state.selected_data}
                            locale={{
                                filterTitle: 'Filtro',
                                filterConfirm: 'Ok',
                                filterReset: 'Reset',
                                emptyText: 'Sin Datos'
                            }}
                            pagination={false}
                        />
                    </div>
                    <div style={styles.labelContainer}>
                        <p style={styles.labelTitle}> Total de compra: </p>
                        <p style={styles.labelValue}> {`$ ${round2(this.state.total)}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')}</p>
                    </div>
                </div>
            </Fragment>
        );
    }
}

// wrap a HOC to handle the inject of the fields?
export default OrderCreator;