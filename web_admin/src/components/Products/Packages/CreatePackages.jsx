import React, { Component, Fragment } from 'react';
import {
    AutoComplete,
    Form,
    Icon,
    Modal,
    Button,
    Alert,
    Table,
    Tabs,
    Popconfirm,
    Divider,
    InputNumber,
    Input
} from 'antd';
import styles from './Styles';
import { FetchXHR } from '../../../helpers/generals';

class CreatePackages extends Component {
    constructor(props) {
        super(props);
        this.state = {
            error: this.props.error,
            open: this.props.open,
            loading_products: false,
            search_product: '',
            results_products: [],
            selected_products: [],
            selected_product: {},
            selected_quantity: 1,
            name: '',
            description: '',
            total: 0,
        }

        this.scroll_on_table = 1500;
        this.table_columns = [
            {
            	title: 'Cantidad',
            	dataIndex: 'quantity',
				key: 'quantity',
			},
			{
            	title: 'Llave',
            	dataIndex: 'key_id',
				key: 'key_id',
			},
			{
            	title: 'FMSI',
            	dataIndex: 'fmsi',
            	key: 'fmsi'
			},
			{
            	title: 'Linea',
            	dataIndex: 'line',
            	key: 'line'
			},
			{
            	title: 'Marca',
            	dataIndex: 'brand',
            	key: 'brand'
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
							onConfirm={() => this.deleteProduct(record)}
						>
                			<a>Eliminar</a>
              			</Popconfirm>
					</span>
            	),
		  	}
        ];

        this.onChangeSearchProduct = this.onChangeSearchProduct.bind(this);
        this.onChangeQuantity = this.onChangeQuantity.bind(this);
        this.onChangeName = this.onChangeName.bind(this);
        this.onChangeDescription = this.onChangeDescription.bind(this);
        this.onChangePrice = this.onChangePrice.bind(this);
        this.getProducts = this.getProducts.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.addProduct = this.addProduct.bind(this);
        this.deleteProduct = this.deleteProduct.bind(this);

    }

    componentDidMount() {
        console.log("componentDidMount - Create packages");
        if (this.props.fields) {
            console.log(this.props.fields);
            this.setState({
                name: this.props.fields.name,
                description: this.props.fields.description,
                total: this.props.fields.price,
                selected_products: this.props.fields.products.map((el)=>({
                    quantity: el.quantity,
                    ...el.product_id
                }))
            });
        }
    }

    onSubmit = (event) => {
        if (this.state.name !== '' && this.state.description !== '' && this.state.total > 0) {
            const new_package = {
                name: this.state.name,
                description: this.state.description,
                price: this.state.total,
                products: this.state.selected_products.map((el) => ({
                    product_id: el._id,
                    quantity: el.quantity,
                    price: (el.quantity * el.price_public)
                }))
            };
            console.log(new_package);
            this.props.onSubmit(new_package);
        }
    }
 
    onChangeSearchProduct(value) {
        this.setState({
            search_product: value
        });
    }
    onChangeQuantity(value) {
        this.setState({
            selected_quantity: value
        });
    }
    onChangeName(event) {
        this.setState({
            name: event.target.value
        });
    }
    onChangeDescription(event) {
        this.setState({
            description: event.target.value
        });
    }
    onChangePrice(value) {
        this.setState({
            total: value
        });
    }

    getProducts() {
        console.log("search for:" + this.state.search_product);
        this.setState({
			loading_products: true,
        });
        
		const urlProducts = process.env.REACT_APP_API_URL + '/products';
        const POSTDATA = {
            limit: 100,
			page: 1
        }
		if (this.state.search_product) {
			POSTDATA['search_text'] = this.state.search_product;
        }
        FetchXHR(urlProducts, 'POST', POSTDATA).then((responseProducts) => {
            if (responseProducts.json.success) {
                this.setState({
                    results_products: responseProducts.json.data.docs.map((el, index)=>({
                        ...el,
                        key: index
                    })),
                    loading_products: false
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

    addProduct() {
        // from search to table
        if (this.state.selected_product._id && this.state.selected_quantity > 0) {
            let actualProducts = Object.assign([] ,this.state.selected_products);
            actualProducts.push({
                ...this.state.selected_product,
                quantity: this.state.selected_quantity
            });
            this.setState({
                selected_products: actualProducts,
                selected_product: {},
                search_product: '',
                selected_quantity: 1,
                total: this.state.total + (this.state.selected_quantity * this.state.selected_product.price_public)
            });
        }
    }

    deleteProduct(product) {
        // delete from table:
        let actualProducts = Object.assign([], this.state.selected_products);
        const index = actualProducts.findIndex((el)=>(el._id === product._id && product.quantity === el.quantity));
        if (index != -1) {
            actualProducts.splice(index, 1);
        }
        this.setState({
            selected_products: actualProducts,
            total: this.state.total - (product.quantity * product.price_public)

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
                            <Input
                                value={this.state.name}
                                onChange={this.onChangeName}
                                prefix={
                                    <Icon
                                        type="inbox"
                                        className="field-icon"
                                    />
                                }
                                type="text"
                                placeholder="Nombre"
                                size="large"
                            />
                            <Input
                                value={this.state.description}
                                onChange={this.onChangeDescription}
                                prefix={
                                    <Icon
                                        type="profile"
                                        className="field-icon"
                                    />
                                }
                                type="text"
                                placeholder="Descripción"
                                size="large"
                            />
                            <div>
                                <p>Precio: </p>
                                <InputNumber
                                    value={this.state.total}
                                    onChange={this.onChangePrice}
                                    size="100%"
                                    step={1}
                                />
                            </div>
                        </div>
                        <div>
                            <div>
                                <p>Cantidad: </p>
                                <InputNumber
                                    value={this.state.selected_quantity}
                                    onChange={this.onChangeQuantity}
                                    size="100%"
                                    step={1}
                                />
                            </div>
                            <AutoComplete
                                value={this.state.search_product || ''}
                                defaultActiveFirstOption={false}
                                dataSource={this.state.results_products.map((product)=>{
                                    return (
                                        <AutoComplete.Option key={product._id} text={product.brand}>
                                            {product.brand + ' - ' + product.description}
                                        </AutoComplete.Option>
                                    );
                                })}
                                style={{ width: 500 }}
                                onSelect={(value) => {
                                    const selected = this.state.results_products.find((el)=>(el._id === value));
                                    this.setState({
                                        selected_product: selected,
                                        search_product: selected.brand + ' - ' + selected.description
                                    });
                                }}
                                onSearch={this.onChangeSearchProduct}
                                placeholder="Nombre producto a buscar ..."
                            >
                                <Input
                                    onPressEnter={this.getProducts}
                                />
                            </AutoComplete>
                            <Button 
                                onClick={this.addProduct}
                                className="search-btn" 
                                size="large" 
                                type="primary"
                            >
                                Agregar al paquete
                                <Icon type="plus-circle" />
                            </Button>
                        </div>
                        <div>
                            <div>
                                <Table
                                    style={styles.tableLayout}
                                    scroll={{ x: this.scroll_on_table || window.innerWidth - 272 }}
                                    columns={this.table_columns}
                                    dataSource={this.state.selected_products}
                                    locale={{
                                        filterTitle: 'Filtro',
                                        filterConfirm: 'Ok',
                                        filterReset: 'Reset',
                                        emptyText: 'Sin Datos'
                                    }}
                                />
                            </div>
                        </div>
                    </div>
                </Modal>
            </Fragment>
        );
    }
}

export default CreatePackages;