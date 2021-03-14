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
    InputNumber
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
            loading_submit: false,
            products: [],
            brand: undefined,
            percent: undefined,
            percent2:undefined,
        };
        this.state = initial_state;
        this.getProducts = this.getProducts.bind(this);
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
            if (this.state.percent >= 0 || this.state.percent <= 0) {               
                
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
            }else {
                this.setState({
                    error: 'Agregar un porcentaje.'
                });
            }
        } else {
            this.setState({
                error: 'Favor de buscar una marca.'
            });
        }
    }
    onSubmit2 = (event) => {
        event.preventDefault();
        // do validations:
        if (this.state.products.length > 0) {
            if (this.state.percent >= 0 || this.state.percent <= 0) {                
                
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
            }else {
                this.setState({
                    error: 'Agregar un porcentaje.'
                });
            }
        } else {
            this.setState({
                error: 'Favor de buscar una marca.'
            });
        }
    }


    getProducts() {
        this.setState({
			loading_products: true,
		});
		const url = process.env.REACT_APP_API_URL + '/products';
        const POSTDATA = {
            limit: 50000,
            page: 1,
            filters: {
                brand: this.state.brand
            }
        }
        FetchXHR(url, 'POST', POSTDATA).then((response) => {
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
           /*  <Button 
                is_disabled={this.state.products.length <= 0 && this.state.percent > 0}
                key="submit"
                type="primary" 
                loading={this.state.loading_submit}
                onClick={this.onSubmit}
            >
                Aplicar
            </Button>, */
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
                                placeholder="Marca"
                                
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
                        <p>Publico / Mostrador</p>

                        <InputNumber
                                disabled={this.props.is_disabled}
                                value= {Number(0)}
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
                                loading={this.state.loading_submit                            }
                                onClick={this.onSubmit}
                                 >
                                 Aplicar
                             </Button>,
                            <p>Taller / Tienda en linea</p>
                            <InputNumber
                                disabled={this.props.is_disabled}
                                value= {Number(0)}
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
                                loading={this.state.loading_submit}
                                onClick={this.onSubmit2}
                                 >
                                 Aplicar
                             </Button>,                        
                    </div>
                </Modal>
            </Fragment>
        );
    }
}

// wrap a HOC to handle the inject of the fields?
export default ChangePrices;