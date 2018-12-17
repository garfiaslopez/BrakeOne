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
    Popconfirm,
    Divider,
    Input
} from 'antd';
import styles from './Styles';
import { FetchXHR } from '../../helpers/generals';
import moment from 'moment';

class ClientData extends Component {
    constructor(props) {
        super(props);
        this.state = {
            ...props.client_data
        }
    }
    componentWillReceiveProps(nextProps) {
        if (nextProps.client_data) {
            this.setState({
                ...nextProps.client_data
            })
        }
    }
    render() {
        return (
            <Fragment>
                <p> {this.state.name} </p>
            </Fragment>
        );
    }
}

class CreateSell extends Component {
    constructor(props) {
        super(props);
        this.state = {

            error: this.props.error,
            open: this.props.open,
            loading_users: false,
            loading_products_package: false,

            search_user: '',
            search_package_product: '',

            results_users: [],
            results_products_packages: [],

            selected_quantity: 1,
            selected_user: {},
            selected_car: {},
            selected_products_packages: [],

            total: 0
        }

        this.scroll_on_table = 1500;
        this.table_columns_results = [
            {
            	title: 'Sucursal',
            	dataIndex: 'subsidiary_id.denomination',
				key: 'subsidiary_id.denomination',
				fixed: 'left',
			},
			{
            	title: 'Descripción',
            	dataIndex: 'description',
				key: 'description',
				sorter: true
			}, 
			{
            	title: 'Costo',
            	dataIndex: 'price',
            	key: 'price'
			},
			{
            	title: 'Publico',
            	dataIndex: 'price_public',
            	key: 'price_public'
			},
			{
            	title: 'Taller',
            	dataIndex: 'price_workshop',
            	key: 'price_workshop'
			},
			{
            	title: 'Mayoreo',
            	dataIndex: 'price_wholesale',
            	key: 'price_wholesale'
			},
			{
            	title: 'Existencias',
            	dataIndex: 'stock',
				key: 'stock',
				sorter: true,
				filters: [
					{ text: 'Con Existencia', value: 'stock.exists' },
					{ text: 'Sin Existencia', value: 'stock.no.exists'},
				],
			}
        ];
        this.table_columns_selected = [
            {
            	title: 'Cantidad',
            	dataIndex: 'quantity',
				key: 'quantity',
				fixed: 'left',
			},
			{
            	title: 'Descripción',
            	dataIndex: 'description',
				key: 'description',
				sorter: true
			}, 
			{
            	title: 'Costo',
            	dataIndex: 'price',
            	key: 'price'
			},
			{
            	title: 'Publico',
            	dataIndex: 'price_public',
            	key: 'price_public'
			},
			{
            	title: 'Taller',
            	dataIndex: 'price_workshop',
            	key: 'price_workshop'
			},
			{
            	title: 'Mayoreo',
            	dataIndex: 'price_wholesale',
            	key: 'price_wholesale'
			},
			{
            	title: 'Existencias',
            	dataIndex: 'stock',
				key: 'stock',
				sorter: true,
				filters: [
					{ text: 'Con Existencia', value: 'stock.exists' },
					{ text: 'Sin Existencia', value: 'stock.no.exists'},
				],
			},
			{
            	title: 'Acciones',
				key: 'action',
				fixed: 'right',
            	render: (text, record) => (
					<span>
						<Popconfirm 
							title="¿Esta seguro de eliminar?" 
							okText="Eliminar"
							cancelText="Cancelar"
							onConfirm={() => this.deleteProductPackage(record)}
						>
                			<a>Eliminar</a>
              			</Popconfirm>
					</span>
            	),
		  	}
        ];

        this.handleSearchUsers = this.handleSearchUsers.bind(this);
        this.handleSearchProductsPackages = this.handleSearchProductsPackages.bind(this);
        this.getUsers = this.getUsers.bind(this);
        this.getProductsPackages = this.getProductsPackages.bind(this);
        this.deleteProductPackage = this.deleteProductPackage.bind(this);
        this.onChangeQuantity = this.onChangeQuantity.bind(this);
        this.addProductPackage = this.addProductPackage.bind(this);
    }

    componentDidMount() {
        console.log("componentDidMount - CreateSell");

    }

    onSubmit = (event) => {
        event.preventDefault();

        const products = this.state.results_products_packages.filter((el) => (!el.products)).map((el) => ({
            product_id: '',
            description: '',
            quantity: '',
            price: ''
        }));
        const packages = this.state.results_products_packages.filter((el) => (el.products)).map((el) => ({
            
        }));

        // const sell = {
        //     user: {
        //         user_id: this.props.session.user._id,
        //         name: this.props.session.user.name,
        //     },
        //     status: 'quotation',
        //     date_in: moment().toISOString(),
        //     car: this.state.selected_car,
        //     products: {
        //         product_id: ,
        //         description: ,
        //         quantity: ,
        //         price: ,
        //     }
        //     packages: {

        //     },
        //     total: {

        //     }
        

        this.props.onSubmit({});
    }

    onChangeQuantity(value) {
        this.setState({
            selected_quantity: value
        });
    }

    handleSearchUsers(value) {
        this.setState({
            search_user: value
        });
    }

    handleSearchProductsPackages(event) {
        this.setState({
            search_package_product: event.target.value
        });
    }

    getUsers() {
        console.log("search for:" + this.state.search_user);
        this.setState({
			loading_users: true,
		});
		const url = process.env.REACT_APP_API_URL + '/clients';
        const POSTDATA = {
            limit: 100,
            page: 1,
            search_text: this.state.search_user
		}
        FetchXHR(url, 'POST', POSTDATA).then((response) => {
            if (response.json.success) {
                this.setState({
					results_users: response.json.data.docs.map((el, index)=>({
						...el,
						key: index
					})),
                    loading_users: false
                });
            } else {
				console.log(response.message);
				this.setState({
					loading_users: false,
					error: response.message
				});
            }
        }).catch((onError) => {
			console.log(onError);
			this.setState({
				loading_users: false,
				error: onError.message
			});
        });
    }

    getProductsPackages() {
        console.log("search for:" + this.state.search_package_product);

        this.setState({
			loading_products_package: true,
        });
        
		const urlProducts = process.env.REACT_APP_API_URL + '/products';
        const urlPackages = process.env.REACT_APP_API_URL + '/product-packages';
        
        const POSTDATA = {
            limit: 100,
            page: 1,
            populate_ids: ['subsidiary_id']
        }
        
		if (this.state.search_package_product) {
			POSTDATA['search_text'] = this.state.search_package_product;
        }
        
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
                                key: index + responseProducts.json.data.docs.length
                            });
                        });
                        this.setState({
                            results_products_packages: results,
                            loading_products_package: false
                        });
                    } else {
                        console.log(responsePackages.message);
                        this.setState({
                            loading_products_package: false,
                            error: responsePackages.message
                        });
                    }
                }).catch((onError) => {
                    console.log(onError);
                    this.setState({
                        loading_products_package: false,
                        error: onError.message
                    });
                });
            } else {
				console.log(responseProducts.message);
				this.setState({
					loading_products_package: false,
					error: responseProducts.message
				});
            }
        }).catch((onError) => {
			console.log(onError);
			this.setState({
				loading_products_package: false,
				error: onError.message
			});
        });
    }

    addProductPackage(selected_product_package) {
        if (selected_product_package._id && this.state.selected_quantity > 0) {
            let actualProducts = Object.assign([] ,this.state.selected_products_packages);
            actualProducts.push({
                ...selected_product_package,
                quantity: this.state.selected_quantity
            });
            this.setState({
                selected_products_packages: actualProducts,
                selected_product_package: {},
                search_package_product: '',
                selected_quantity: 1,
                total: this.state.total + (this.state.selected_quantity * selected_product_package.price)
            });
        }
    }

    deleteProductPackage(record) {
        // delete from table:
        let actualProducts = Object.assign([], this.state.selected_products_packages);
        const index = actualProducts.findIndex((el)=>(el._id === record._id && record.quantity === el.quantity));
        if (index != -1) {
            actualProducts.splice(index, 1);
        }
        this.setState({
            selected_products_packages: actualProducts,
            total: this.state.total - (record.quantity * record.price)
        });
    }

    render() {
        let alert=<div></div>;
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
                    onClose={()=>{this.props.dismissError()}}
                />
            )
        }
        return (
            <Fragment>
                <Modal
                    width="80%"
                    bodyStyle={styles.modalContainer}
                    style={styles.modalContainer}
                    visible={this.state.open}
                    title={this.props.title}
                    onCancel={this.props.onClose}
                    keyboard={true}
                    footer={[
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
                    ]}
                    >
                    <div
                        key="sub_modal_container"
                        style={styles.modalContainer}
                    >
                        {alert}
                        <div>
                            <AutoComplete
                                defaultActiveFirstOption={false}
                                dataSource={this.state.results_users.map((user)=>{
                                    return (
                                        <AutoComplete.Option key={user._id} text={user.name}>
                                            {user.name}
                                        </AutoComplete.Option>
                                    );
                                })}
                                style={{ width: 500 }}
                                onSelect={(value) => {
                                    this.setState({
                                        selected_user: this.state.results_users.find((el)=>(el._id === value))
                                    });
                                }}
                                onSearch={this.handleSearchUsers}
                                placeholder="Nombre cliente a buscar ..."
                            >
                                <Input
                                    onPressEnter={this.getUsers}
                                    suffix={(
                                        <Button 
                                            onClick={this.getUsers}
                                            className="search-btn" 
                                            size="large" 
                                            type="primary"
                                        >
                                            <Icon type="search" />
                                        </Button>
                                    )}
                                />
                            </AutoComplete>
                        </div>
                        <div>
                            <ClientData 
                                client_data = {this.state.selected_user}
                            />
                        </div>
                        <div>
                            <div>
                                <Divider> Buscar producto o paquete </Divider>
                                <div>
                                    <p>Cantidad: </p>
                                    <InputNumber
                                        value={this.state.selected_quantity}
                                        onChange={this.onChangeQuantity}
                                        size="100%"
                                        step={1}
                                    />
                                </div>
                                <Input
                                    onChange={this.handleSearchProductsPackages}
                                    onPressEnter={this.getProductsPackages}
                                    suffix={(
                                        <Button 
                                            onClick={this.getProductsPackages}
                                            className="search-btn" 
                                            size="large" 
                                            type="primary"
                                        >
                                            <Icon type="search" />
                                        </Button>
                                    )}
                                />
                            </div>
                            <div>
                                <Divider> Resultados </Divider>
                                <Table
                                    style={styles.tableLayout}
                                    scroll={{ x: this.scroll_on_table || window.innerWidth - 272 }}
                                    columns={this.table_columns_results}
                                    dataSource={this.state.results_products_packages}
                                    locale={{
                                        filterTitle: 'Filtro',
                                        filterConfirm: 'Ok',
                                        filterReset: 'Reset',
                                        emptyText: 'Sin Datos'
                                    }}
                                    onRow={(record) => {
                                        return {
                                            onClick: () => {
                                                this.addProductPackage(record);
                                            },
                                        };
                                    }}
                                />
                            </div>
                            <div>
                                <Divider> Orden de venta </Divider>
                                <Table
                                    style={styles.tableLayout}
                                    scroll={{ x: this.scroll_on_table || window.innerWidth - 272 }}
                                    columns={this.table_columns_selected}
                                    dataSource={this.state.selected_products_packages}
                                    locale={{
                                        filterTitle: 'Filtro',
                                        filterConfirm: 'Ok',
                                        filterReset: 'Reset',
                                        emptyText: 'Sin Datos'
                                    }}
                                />
                            </div>
                            <div>
                                <p>{this.state.total}</p>
                            </div>
                        </div>
                    </div>
                </Modal>
            </Fragment>
        );
    }
}

// wrap a HOC to handle the inject of the fields?
export default CreateSell;