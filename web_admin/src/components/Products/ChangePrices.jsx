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
    InputNumber,
    Divider
} from 'antd';
import styles from './Styles';
import { FetchXHR } from '../../helpers/generals';
import isEmpty from 'lodash/isEmpty';
import moment from 'moment';

class ChangePrices extends Component {
    constructor(props) {
        super(props);
        let initial_state = {
            error: this.props.error,
            open: this.props.open,
            loading_products: false,
            loading_productsKey: false, 
            loading_submit: false,
            products: [],
            productKey: [],
            brand: undefined,
            key_id: undefined,
            percent: undefined,
            percent2:undefined,
            percent3:undefined,
            percent4:undefined,
            percent5: undefined,
            percent6: undefined,
            percent_public: 0,
            percent_taller: 0,
            percent_credito: 0,
            percent_mayoreo: 0,
            price_price: 0,
            price_public: 0,
            price_taller: 0,
            price_credito: 0,
            price_mayoreo: 0,
            product_key: '',
            bodyPrice: undefined,
            body_percentP: undefined,
            body_percentT: undefined,
            body_percentC: undefined,
            body_percentM: undefined
        };
        this.state = initial_state;
        this.getProducts = this.getProducts.bind(this);
        this.getProductsKey = this.getProductsKey.bind(this);
        this.onChangeField = this.onChangeField.bind(this);
        this.onChangeFieldNumber = this.onChangeFieldNumber.bind(this);
    }
    componentWillMount() {
        console.log("RENDERED");
        console.log(this.props);
    }
    componentDidMount() {
        console.log("RENDERED");
        console.log(this.props);
    }

    componentWillReceiveProps(nextProps) {
        // check the state for recovered data values from dropdowns DB: 
        // compare and set manually with setfield....
        this.setState({
            error: nextProps.error
        });
    }

    onChangeField(event, key) {
        let obj = {};
        obj[key] = event.target.value;
        this.setState(obj);
    }

    onChangeFieldNumber(value, key) {
        let obj = {};
        obj[key] = value;
        this.setState(obj);
    }
    
    onSubmit = (event) => {
        event.preventDefault();
        // do validations:
        if (this.state.products.length > 0) {                                     
                this.setState({
                    loading_submit: true
                });
                let POSTDATA = {
                    brand: this.state.brand,
                    quantity_percent: this.state.percent,
                    subsidiary_id: this.props.session.subsidiary._id
                }
                let method = 'POST';
                let url = process.env.REACT_APP_API_URL + '/helpers/updatestockPublico';
        
                FetchXHR(url, method, POSTDATA).then((response_update) => {
                    if (response_update.json.success) {
                        alert('Precios actualizados');
                        this.props.refreshTable();
                       /*  this.props.onClose(); */
                    } else {
                        alert('No se realizo la actualización');
                        console.log(response_update);
                        this.setState({
                            error: response_update.json.message,
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
                error: 'Favor de buscar una marca.'
            });
        }
    }
    onSubmit2 = (event) => {
        event.preventDefault();
        // do validations:
        if (this.state.productsKey.length > 0) {                                      
                this.setState({
                    loading_submit: true
                });
                let POSTDATA = {
                    brand: this.state.brand,
                    quantity_percent: this.state.percent2,
                    subsidiary_id: this.props.session.subsidiary._id
                }
                let method = 'POST';
                let url = process.env.REACT_APP_API_URL + '/helpers/updatestockTaller';
        
                FetchXHR(url, method, POSTDATA).then((response_update) => {
                    if (response_update.json.success) {
                        alert('Precios actualizados');
                        this.props.refreshTable();
                       /*  this.props.onClose(); */
                    } else {
                        alert('No se realizo la actualización');                       
                        this.setState({
                            error: response_update.json.message,
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
                error: 'Favor de buscar una marca.'
            });
        }
    }
    onSubmit3 = (event) => {
        event.preventDefault();
        // do validations:
        if (this.state.products.length > 0) {                                      
                this.setState({
                    loading_submit: true
                });
                let POSTDATA = {
                    brand: this.state.brand,
                    quantity_percent: this.state.percent3,
                    subsidiary_id: this.props.session.subsidiary._id
                }
                let method = 'POST';
                let url = process.env.REACT_APP_API_URL + '/helpers/updatestockCredito';
        
                FetchXHR(url, method, POSTDATA).then((response_update) => {
                    if (response_update.json.success) {
                        alert('Precios actualizados');
                        this.props.refreshTable();
                       /*  this.props.onClose(); */
                    } else {
                        alert('No se realizo la actualización');                       
                        this.setState({
                            error: response_update.json.message,
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
                error: 'Favor de buscar una marca.'
            });
        }
    }
    onSubmit4 = (event) => {
        event.preventDefault();
        // do validations:
        if (this.state.products.length > 0) {                                      
                this.setState({
                    loading_submit: true
                });
                let POSTDATA = {
                    brand: this.state.brand,
                    quantity_percent: this.state.percent4,
                    subsidiary_id: this.props.session.subsidiary._id
                }
                let method = 'POST';
                let url = process.env.REACT_APP_API_URL + '/helpers/updatestockMayoreo';
        
                FetchXHR(url, method, POSTDATA).then((response_update) => {
                    if (response_update.json.success) {
                        alert('Precios actualizados');
                        this.props.refreshTable();
                       /*  this.props.onClose(); */
                    } else {
                        alert('No se realizo la actualización');                       
                        this.setState({
                            error: response_update.json.message,
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
                error: 'Favor de buscar una marca.'
            });
        }
    }
    onSubmit5 = (event) => {
        event.preventDefault();
        // do validations:
        if (this.state.products.length > 0) {                                      
                this.setState({
                    loading_submit: true
                });
                let POSTDATA = {
                    brand: this.state.brand,
                    quantity_percent: this.state.percent5,
                    subsidiary_id: this.props.session.subsidiary._id
                }
                let method = 'POST';
                let url = process.env.REACT_APP_API_URL + '/helpers/updatestockCosto';
        
                FetchXHR(url, method, POSTDATA).then((response_update) => {
                    if (response_update.json.success) {
                        alert('Precios actualizados');
                        this.props.refreshTable();
                       /*  this.props.onClose(); */
                    } else {
                        alert('No se realizo la actualización');                       
                        this.setState({
                            error: response_update.json.message,
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
                error: 'Favor de buscar una marca.'
            });
        }
    }
    onSubmit6 = (event) => {
        event.preventDefault();
       
        // do validations:
        if (this.state.products.length > 0) {                                      
                this.setState({
                    loading_submit: true
                });
                let POSTDATA = {
                    brand: this.state.brand,
                    quantity_percent: this.state.percent6,
                    subsidiary_id: this.props.session.subsidiary._id
                }
                let method = 'POST';
                let url = process.env.REACT_APP_API_URL + '/helpers/updatestockCPTCM';
        
                FetchXHR(url, method, POSTDATA).then((response_update) => {
                    if (response_update.json.success) {
                        alert('Precios actualizados');
                        this.props.refreshTable();
                       /*  this.props.onClose(); */
                    } else {
                        alert('No se realizo la actualización');                       
                        this.setState({
                            error: response_update.json.message,
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
                error: 'Favor de buscar una marca.'
            });
        }
    }
    //Inserccion de productos
    onSubmitInserccion = (event) => {
        event.preventDefault();
        // do validations:
        if (this.state.productsKey.length > 0) {                                      
                this.setState({
                    loading_submit: true
                });
                let POSTDATA = {
                    brand: this.state.brand, 
                    fmsi: 'ANGEL PRUEBA',  
                    key_id: 'ANGEL123',    
                    brand: 'BREMBO',
                    description: 'INSERCCIÓN DE BALATAS DESDE API REST',
                    price: 425,
                    price_credit_workshop: 730,
                    price_public: 845,
                    price_wholesale: 530,
                    price_workshop: 635,
                    provider_id: "60a58aa51032c17226d1fc2b",
                    stock: 0,
                    stock_ideal: 1,
                    subsidiary_id: "5b79c3755526c91360058101",
                    units: "SET",
                    barcode: "SPC-82Y2-Z",
                    line: 'BALATAS PRUEBA',
                    localization: "A001",
                    subsidiary_id: this.props.session.subsidiary._id
                }
                let method_POST = 'POST';
                let method_PUT = 'PUT';

                let url = process.env.REACT_APP_API_URL + '/product/';
        
                FetchXHR(url, method_POST, POSTDATA).then((res) => {
                    if (res.json.success) {                       

                        res.json.data.docs.map(res => {
                            const new_p = {
                                price_public: res.price + 1000000
                            }
                            console.log(res.price);
                            const url_put_product = process.env.REACT_APP_API_URL + '/products/';
                            /* FetchXHR(url_put_product, 'PUT', new_p).then((response_p) => {                                
                                console.log(response_p);
                                this.props.refreshTable();
                                 this.props.onClose();                                 
                            }); */
                        })

                    } else {
                        alert('No se realizo la tarea');                       
                        this.setState({
                            error: res.json.message,
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
                error: 'Favor de buscar una marca.'
            });
        }
    }
    onSubmit7 = (event) => {
        event.preventDefault();
       
        // do validations:
        if (this.state.productKey.length > 0) {                                      
                this.setState({
                    loading_submit: true
                });
                let POSTDATA = {
                    key_id: this.state.key_id,
                    /* quantity_percent: this.state.percent6, */
                    subsidiary_id: this.props.session.subsidiary._id
                }

                let method = 'POST';
                let method_PUT = 'PUT';
                let url = process.env.REACT_APP_API_URL + '/products/';

                FetchXHR(url, method, {filters: { key_id: this.state.key_id}, subsidiary_id: this.props.session.subsidiary._id })
                .then((response_update) => {
                    
                    if (response_update.json.success) {        
                        
                        console.log(response_update.json.data.docs.map( res => res._id)); 
                        
                        response_update.json.data.docs.map(product => {
                            
                            const url_products = process.env.REACT_APP_API_URL + '/product/' + product._id;

                            let percentP = product.percent_public / 100; let priceP = product.price * percentP; 
                            let totalP = Math.round(product.price + priceP); 
                            let percentT = product.percent_workshop / 100; let priceT = product.price * percentT; 
                            let totalT = Math.round(product.price + priceT);
                            let percentC = product.percent_credit_workshop / 100;  let priceC = product.price * percentC; 
                            let totalC = Math.round(product.price + priceC);
                            let percentM = product.percent_wholesale / 100; let priceM = product.price * percentM; 
                            let totalM = Math.round(product.price + priceM); 
                            let price = Math.round(product.price);

                            let POSDATA_PRODUCTS = {
                                price: price,
                                price_public: totalP,
                                price_workshop: totalT,
                                price_credit_workshop: totalC,                               
                                price_wholesale: totalM,
                            }

                            FetchXHR(url_products, method_PUT, POSDATA_PRODUCTS).then( res => {                                                                
                                this.props.refreshTable();                                                                                              
                            }).catch(err => console.log(err));

                        })
                       
                    } else {
                        alert('No se realizo la actualización');                       
                        this.setState({
                            error: response_update.json.message,
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
                error: 'Favor de buscar una marca.'
            });
        }
    }
    onSubmitPrices = (event) => {
        event.preventDefault();
       
        // do validations:
        if (this.state.products.length > 0) {                                      
                this.setState({
                    loading_submit: true
                });
                let POSTDATA = {
                    brand: this.state.brand,   
                    body_Price: this.state.bodyPrice,
                    body_PercentP: this.state.body_percentP,
                    body_PercentT: this.state.body_percentT,
                    body_PercentC: this.state.body_PercentC,
                    body_PercentM: this.state.body_percentM,         
                    subsidiary_id: this.props.session.subsidiary._id
                }
                let method = 'POST';
                let url = process.env.REACT_APP_API_URL + '/helpers/update_prices';
        
                FetchXHR(url, method, POSTDATA).then((response_update) => {
                    if (response_update.json.success) {
                        alert('Precios actualizados correctamente...');
                        this.props.refreshTable();
                       /*  this.props.onClose(); */
                    } else {
                        alert('No se realizo la actualización...');                       
                        this.setState({
                            error: response_update.json.message,
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
                error: 'Favor de buscar una marca.'
            });
        }
    }
    getProducts() {

        let method = 'POST';             

        this.setState({
			loading_products: true,
		});

        const url_key = process.env.REACT_APP_API_URL + '/products/';

        const POSDATA_PRO = {
            limit: 10,
            page: 1,
            filters: {
                brand: this.state.brand
            },
            subsidiary_id: this.props.session.subsidiary._id
        }

        FetchXHR(url_key, method, POSDATA_PRO).then((res) => {                              

            let clave = res.json.data.docs[0].key_id;
            let percentP =  res.json.data.docs[0].percent_public;
            let percentT = res.json.data.docs[0].percent_workshop;
            let percentC = res.json.data.docs[0].percent_credit_workshop;
            let percentM = res.json.data.docs[0].percent_wholesale;
            let pricePrice = res.json.data.docs[0].price;
            let priceP = res.json.data.docs[0].price_public;
            let priceT = res.json.data.docs[0].price_workshop;
            let priceC = res.json.data.docs[0].price_credit_workshop;
            let priceM = res.json.data.docs[0].price_wholesale;
            this.setState({
                loading_data: false,
                percent_public: percentP,
                percent_taller: percentT,
                percent_credito: percentC,
                percent_mayoreo: percentM,
                price_price: pricePrice,
                price_public: priceP,
                price_taller: priceT,
                price_credito: priceC,
                price_mayoreo: priceM,
                product_key: clave

            })
            
        });

		const url = process.env.REACT_APP_API_URL + '/products/';
        const POSTDATA = {
            limit: 50000,
            page: 1,
            filters: {
                brand: this.state.brand
            }
        }
        FetchXHR(url, 'POST', POSTDATA).then((response) => {
            response.json.data.docs.map((res) => {
               console.log(res);
            })
            if (response.json.success) {
                this.setState({
					products: response.json.data.docs.map((el, index)=>({                        
						...el,
						key: index
                    })),
                    loading_products: false
                });
            } else {
				this.setState({
                    loading_products: false,
                    error: response.message
				});
            }
        }).catch((onError) => {
			this.setState({
                loading_products: false,
                error: onError.message
			});
        });
    }
    getProductsKey() {

        let method = 'POST';             

        this.setState({
			loading_productsKey: true,
		});

        const url_key = process.env.REACT_APP_API_URL + '/products/';

        const POSDATA_PRO = {
            limit: 10,
            page: 1,
            filters: {
                key_id: this.state.key_id
            },
            subsidiary_id: this.props.session.subsidiary._id
        }

        FetchXHR(url_key, method, POSDATA_PRO).then((res) => {                              

            let clave = res.json.data.docs[0].key_id;
            let percentP =  res.json.data.docs[0].percent_public;
            let percentT = res.json.data.docs[0].percent_workshop;
            let percentC = res.json.data.docs[0].percent_credit_workshop;
            let percentM = res.json.data.docs[0].percent_wholesale;
            let pricePrice = res.json.data.docs[0].price;
            let priceP = res.json.data.docs[0].price_public;
            let priceT = res.json.data.docs[0].price_workshop;
            let priceC = res.json.data.docs[0].price_credit_workshop;
            let priceM = res.json.data.docs[0].price_wholesale;
            this.setState({
                loading_data: false,
                percent_public: percentP,
                percent_taller: percentT,
                percent_credito: percentC,
                percent_mayoreo: percentM,
                price_price: pricePrice,
                price_public: priceP,
                price_taller: priceT,
                price_credito: priceC,
                price_mayoreo: priceM,
                product_key: clave

            })
            
        });

		const url = process.env.REACT_APP_API_URL + '/products/';
        const POSTDATA = {
            limit: 50000,
            page: 1,
            filters: {
                key_id: this.state.key_id
            }
        }
        FetchXHR(url, 'POST', POSTDATA).then((response) => {
           
            if (response.json.success) {
                this.setState({
					productKey: response.json.data.docs.map((el, index)=>({                        
						...el,
						key: index
                    })),
                    loading_productsKey: false
                });
            } else {
				this.setState({
                    loading_productsKey: false,
                    error: response.message
				});
            }
        }).catch((onError) => {
			this.setState({
                loading_productsKey: false,
                error: onError.message
			});
        });
    }

    render() {
        let alert = '';
		if (this.state && this.state.error) {
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
                Cerrar
            </Button>,           
        ];

        return (
            <Fragment>
                <Modal
                    width="80%"
                    bodyStyle={styles.modalContainer}
                    style={styles.modalBodyContainer}
                    visible={true}
                    title={'Cambiar precio productos.'}
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
                            style={styles.inputsRowContainer}
                        >
                            <Input
                                disabled={this.props.is_disabled}
                                value={this.state.brand}
                                style={styles.inputElement}
                                onChange={(value) => {
                                    this.onChangeField(value, 'brand');
                                }}
                                prefix={(
                                    <Icon
                                        type="car"
                                        className="field-icon"
                                    />
                                )}
                                type="text"
                                placeholder="MARCA"
                                
                            />
                            <Button
                                icon="search"
                                disabled={this.state.brand === undefined ? true : false}
                                type="primary"
                                onClick={this.getProducts}
                                style={styles.buttonHistory}
                                loading={this.state.loading_products}
                            >
                                Buscar
                            </Button>
                            <p style={styles.inputLabel}>{this.state.products.length + ' '} Productos Encontrados. </p>
                            
                        </div>                        
                        <Divider>PRECIOS {this.state.product_key}</Divider>
                        <Divider>{`COSTO: $${this.state.price_price}`} <Divider type="vertical"/> {`PUBLICO: $${this.state.price_public}`} <Divider type="vertical"/> {`TALLER: $${this.state.price_taller}`} <Divider type="vertical"/> {`CREDITO: $${this.state.price_credito}`} <Divider type="vertical"/> {`MAYOREO: $${this.state.price_mayoreo}`}</Divider>
                        <Divider></Divider>
                        <div
 	                        style={styles.inputsDesc}
                        >  

                        <div>     
                            <h5>Costo</h5>                
                                <InputNumber
                                    disabled={this.props.is_disabled}
                                    value= {this.props.percent5}
                                    style={styles.inputElement2}
                                    onChange={(value) => {
                                        this.onChangeFieldNumber(value, 'percent5');
                                    }}
                                    prefix={(
                                        <Icon
                                            type="dollar"
                                            className="field-icon"
                                        />
                                    )}
                                        type="text"
                                        placeholder="Descuento Costo"                                
                                    />
                                    <Button 
                                        is_disabled={this.state.products.length <= 0 && this.state.percent > 0}
                                        key="submit"
                                        type="primary"                                
                                        onClick={this.onSubmit5}
                                        >
                                        Aplicar
                                    </Button>, 
                        </div>

                        <div>    
                            <h5>Publico / Mostrador</h5>

                                <InputNumber
                                        disabled={this.props.is_disabled}
                                        value= {this.props.percent}
                                        style={styles.inputElement2}
                                        onChange={(value) => {
                                            this.onChangeFieldNumber(value, 'percent');
                                        }}
                                        prefix={(
                                            <Icon
                                                type="dollar"
                                                className="field-icon"
                                            />
                                        )}
                                        type="text"
                                        placeholder="Descuento Precio Publico"                                
                                    />
                                    <Button 
                                        is_disabled={this.state.products.length <= 0 && this.state.percent > 0}
                                        key="submit"
                                        type="primary"                                
                                        onClick={this.onSubmit}
                                        >
                                        Aplicar
                                    </Button>
                        </div>
                        
                        <div> 
                            <h5>Taller / Tienda en linea</h5>
                                <InputNumber
                                    disabled={this.props.is_disabled}
                                    value= {this.props.percent2}
                                    style={styles.inputElement2}
                                    onChange={(value) => {
                                        this.onChangeFieldNumber(value, 'percent2');
                                    }}
                                    prefix={(
                                        <Icon
                                            type="dollar"
                                            className="field-icon"
                                        />
                                    )}
                                    type="text"
                                    placeholder="Descuento Precio Taller"                                                                
                                />   
                                <Button 
                                    is_disabled={this.state.products.length <= 0 && this.state.percent > 0}
                                    key="submit"
                                    type="primary"                                
                                    onClick={this.onSubmit2}
                                    >
                                    Aplicar
                                </Button>
                        </div>

                        <div>
                            <h5>Credito Taller</h5>
                                <InputNumber
                                        disabled={this.props.is_disabled}
                                        value= {this.props.percent3}
                                        style={styles.inputElement2}
                                        onChange={(value) => {
                                            this.onChangeFieldNumber(value, 'percent3');
                                        }}
                                        prefix={(
                                            <Icon
                                                type="dollar"
                                                className="field-icon"
                                            />
                                        )}
                                        type="text"
                                        placeholder="Descuento Credito Taller"                                
                                    />
                                    <Button 
                                        is_disabled={this.state.products.length <= 0 && this.state.percent > 0}
                                        key="submit"
                                        type="primary"                                
                                        onClick={this.onSubmit3}
                                        >
                                        Aplicar
                                    </Button>
                        </div>

                        <div>
                            <h5>Mayoreo</h5>
                                <InputNumber
                                        disabled={this.props.is_disabled}
                                        value= {this.props.percent4}
                                        style={styles.inputElement2}
                                        onChange={(value) => {
                                            this.onChangeFieldNumber(value, 'percent4');
                                        }}
                                        prefix={(
                                            <Icon
                                                type="dollar"
                                                className="field-icon"
                                            />
                                        )}
                                        type="text"
                                        placeholder="Descuento Mayoreo"                                
                                    />
                                    <Button 
                                        is_disabled={this.state.products.length <= 0 && this.state.percent > 0}
                                        key="submit"
                                        type="primary"                                
                                        onClick={this.onSubmit4}
                                        >
                                        Aplicar
                                    </Button>,  
                        </div>  
                        </div> 
                        <br /><br />
                            <Divider>Actualizar precios desde costo hasta mayoreo</Divider>
                             <h5></h5>
                                <InputNumber
                                        disabled={this.props.is_disabled}
                                        value= {this.props.percent6}
                                        style={styles.inputElement}
                                        onChange={(value) => {
                                            this.onChangeFieldNumber(value, 'percent6');
                                        }}
                                        prefix={(
                                            <Icon
                                                type="dollar"
                                                className="field-icon"
                                            />
                                        )}
                                        type="text"
                                        placeholder="Descuento..."                                
                                    />
                                    <Button 
                                        is_disabled={this.state.products.length <= 0 && this.state.percent > 0}
                                        key="submit"
                                        type="primary"                                
                                        onClick={this.onSubmit6}
                                        >
                                        Aplicar
                                    </Button>,   
                                    <Divider></Divider>
                                    <br /><br /> 

                                    <Divider>Agregar utilidades a productos</Divider>   

                                     <div
                                        style={styles.inputsRowContainer}
                                    >
                                        <Input
                                            disabled={this.props.is_disabled}
                                            value={this.state.key_id}
                                            style={styles.inputElement}
                                            onChange={(value) => {
                                                this.onChangeField(value, 'key_id');
                                            }}
                                            prefix={(
                                                <Icon
                                                    type="car"
                                                    className="field-icon"
                                                />
                                            )}
                                            type="text"
                                            placeholder="KEY_ID"
                                            
                                        />
                                        <Button
                                            icon="search"
                                            disabled={this.state.key_id === undefined ? true : false}
                                            type="primary"
                                            onClick={this.getProductsKey}
                                            style={styles.buttonHistory}
                                            loading={this.state.loading_productsKey}
                                        >
                                            Buscar
                                        </Button>
                                        <p style={styles.inputLabel}>{this.state.productKey.length + ' '} Productos Encontrados. </p>
                                        
                                    </div>  
                                    <><br /><br /></>
                                    <Button 
                                        is_disabled={this.state.productKey.length <= 0}
                                        key="submit"
                                        type="primary"                                
                                        onClick={this.onSubmit7}
                                        >
                                        Aplicar
                                    </Button>,   
                                    <Divider></Divider>     

                                    <Divider>ACTUALIZAR PRECIOS INGRESANDO UTILIDADES</Divider>                                  
                                    <Divider>UTILIDADES {this.state.brand}</Divider>
                                    <Divider>{`PUBLICO: ${this.state.percent_public} %`} <Divider type="vertical"/>{`TALLER: ${this.state.percent_taller} %`} <Divider type="vertical"/> {`CREDITO: ${this.state.percent_credito} %`} <Divider type="vertical"/> {`MAYOREO: ${this.state.percent_mayoreo} %`}</Divider>                                  
                                    <Divider>PRECIOS {this.state.product_key}</Divider>
                                    <Divider>{`COSTO: $${this.state.price_price}`} <Divider type="vertical"/> {`PUBLICO: $${this.state.price_public}`} <Divider type="vertical"/> {`TALLER: $${this.state.price_taller}`} <Divider type="vertical"/> {`CREDITO: $${this.state.price_credito}`} <Divider type="vertical"/> {`MAYOREO: $${this.state.price_mayoreo}`}</Divider>
                                    <Divider></Divider>           
                                    <div
 	                                    style={styles.inputsDesc}
                                    >  

                                    <div>     
                                        <h5>Costo</h5>                
                                            <InputNumber
                                                disabled={this.props.is_disabled}
                                                value= {this.props.body_Price}
                                                style={styles.inputElement2}
                                                onChange={(value) => {
                                                    this.onChangeFieldNumber(value, 'body_Price');
                                                }}
                                                prefix={(
                                                    <Icon
                                                        type="dollar"
                                                        className="field-icon"
                                                    />
                                                )}
                                                    type="text"
                                                    placeholder="$"                                
                                            />                                                 
                                    </div>

                                    <div>    
                                        <h5>% PUBLICO</h5>

                                            <InputNumber
                                                disabled={this.props.is_disabled}
                                                value= {this.props.body_PercentP}
                                                style={styles.inputElement2}
                                                onChange={(value) => {
                                                    this.onChangeFieldNumber(value, 'body_PercentP');
                                                }}
                                                prefix={(
                                                    <Icon
                                                        type="dollar"
                                                        className="field-icon"
                                                    />
                                                )}
                                                type="text"
                                                placeholder="%"                                
                                            />                                               
                                    </div>
                        
                                    <div> 
                                        <h5>% TALLER</h5>
                                            <InputNumber
                                                disabled={this.props.is_disabled}
                                                value= {this.props.body_PercentT}
                                                style={styles.inputElement2}
                                                onChange={(value) => {
                                                    this.onChangeFieldNumber(value, 'body_PercentT');
                                                }}
                                                prefix={(
                                                    <Icon
                                                        type="dollar"
                                                        className="field-icon"
                                                    />
                                                )}
                                                type="text"
                                                placeholder="%"                                                                
                                            />                                             
                                    </div>

                                    <div>
                                        <h5>% CREDITO</h5>
                                            <InputNumber
                                                disabled={this.props.is_disabled}
                                                value= {this.props.body_PercentC}
                                                style={styles.inputElement2}
                                                onChange={(value) => {
                                                    this.onChangeFieldNumber(value, 'body_PercentC');
                                                }}
                                                prefix={(
                                                    <Icon
                                                        type="dollar"
                                                        className="field-icon"
                                                    />
                                                )}
                                                type="text"
                                                placeholder="%"                                
                                            />                                               
                                    </div>

                                    <div>
                                        <h5>% Mayoreo</h5>
                                            <InputNumber
                                                disabled={this.props.is_disabled}
                                                value= {this.props.body_PercentM}
                                                style={styles.inputElement2}
                                                onChange={(value) => {
                                                    this.onChangeFieldNumber(value, 'body_PercentM');
                                                }}
                                                prefix={(
                                                    <Icon
                                                        type="dollar"
                                                        className="field-icon"
                                                    />
                                                )}
                                                type="text"
                                                placeholder="%"                                
                                            />                                                 
                                    </div>  
                                    </div> 

                                    <Divider></Divider>

                                   <Divider><Button 
                                        is_disabled={this.state.products.length <= 0}
                                        key="submit"
                                        type="primary"                                
                                        onClick={this.onSubmitPrices}
                                        >
                                        Aplicar
                                    </Button></Divider>,   
                                    <Divider></Divider>                                               
                        </div>
                </Modal>
            </Fragment>
        );
    }
}

// wrap a HOC to handle the inject of the fields?
export default ChangePrices;