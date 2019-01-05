import React, { Component, Fragment } from 'react';
import {
    Icon,
    Modal,
    Button,
    Alert,
    Input,
    Select
} from 'antd';
import styles from './Styles';
import { FetchXHR } from '../../helpers/generals';
import moment from 'moment';
import OrderCreator from '../../helpers/OrderCreator/OrderCreator';

class CreateQuotation extends Component {
    constructor(props) {
        super(props);
        let initial_state = {
            error: this.props.error,
            open: this.props.open,
            price_type: null,
            client_name: '',
            client_phone: '',
            client_job: '',
            car_brand: '',
            car_model: '',
            notes: ''
        };

        if (props.fields) {
            if (props.fields.price_type) {
                initial_state.price_type = props.fields.price_type;
            }
            if (props.fields.client_name) {
                initial_state.client_name = props.fields.client_name;
            }
            if (props.fields.client_phone) {
                initial_state.client_phone = props.fields.client_phone;
            }
            if (props.fields.client_job) {
                initial_state.client_job = props.fields.client_job;
            }
            if (props.fields.car_brand) {
                initial_state.car_brand = props.fields.car_brand;
            }
            if (props.fields.car_model) {
                initial_state.car_model = props.fields.car_model;
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
        }
        
        this.state = initial_state;

        this.onChangeField = this.onChangeField.bind(this);
        this.onChangeDropdown = this.onChangeDropdown.bind(this);

        this.onErrorOrderCreator = this.onErrorOrderCreator.bind(this);
        this.onChangeOrderCreator = this.onChangeOrderCreator.bind(this);

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

    onChangeDropdown(value, key) {
        let obj = {};
        obj[key] = value;
        this.setState(obj);
    }

    onSubmit = (event) => {
        event.preventDefault();
        // do validations:
        if (this.state.client_name !== '' && this.state.client_phone !== '' && this.state.car_brand !== '' && this.state.car_model !== '') {
            if (this.state.products.length > 0 || this.state.services.length > 0) {
                const Quotation =  {
                    subsidiary_id: this.props.session.subsidiary._id,
                    user_id: this.props.session.user._id,
                    price_type: this.state.price_type,
                    client_name: this.state.client_name,
                    client_phone: this.state.client_phone,
                    client_job: this.state.client_job,
                    car_brand: this.state.car_brand,
                    car_model: this.state.car_model,
                    notes: this.state.notes,
                    products: this.state.products,
                    services: this.state.services,
                    total: this.state.total
                }
                this.props.onSubmit(Quotation);
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

    onErrorOrderCreator(err) {
        this.setState({
            error: err
        });
    }

    onChangeOrderCreator(values) {
        console.log("received:");
        console.log(values);
        this.setState({
            products: values.products,
            services: values.services,
            total: values.total
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
                    onClose={() => {
                        console.log("dismissingErr");
                        this.props.dismissError();
                    }}
                />
            )
        }
        const OptionsTypes = ['PUBLICO', 'MAYOREO', 'TALLER'].map((item, index) => {
            return (
                <Select.Option 
                    value={item}
                    key={`${item} - ${index}`} 
                >
                    {item}
                </Select.Option>
            );
        });
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
                        style={styles.modalContainer}
                    >
                        {alert}
                        <div
                            style={styles.inputsContainer}
                        >
                            <div
                                style={styles.inputsRowContainer}
                            >
                                <Input
                                    disabled={this.props.is_disabled}
                                    value={this.state.client_name}
                                    style={styles.inputElement}
                                    onChange={(value) => {
                                        this.onChangeField(value, 'client_name');
                                    }}
                                    prefix={(
                                        <Icon
                                            type="user"
                                            className="field-icon"
                                        />
                                    )}
                                    type="text"
                                    placeholder="Nombre (*)"
                                    size="large"
                                />
                                <Input
                                    disabled={this.props.is_disabled}
                                    value={this.state.client_phone}
                                    style={styles.inputElement}
                                    onChange={(value) => {
                                        this.onChangeField(value, 'client_phone');
                                    }}
                                    prefix={(
                                        <Icon
                                            type="phone"
                                            className="field-icon"
                                        />
                                    )}
                                    type="text"
                                    placeholder="Numero (*)"
                                    size="large"
                                />
                                <Input
                                    disabled={this.props.is_disabled}
                                    value={this.state.client_job}
                                    style={styles.inputElement}
                                    onChange={(value) => {
                                        this.onChangeField(value, 'client_job');
                                    }}
                                    prefix={(
                                        <Icon
                                            type="trademark"
                                            className="field-icon"
                                        />
                                    )}
                                    type="text"
                                    placeholder="Empresa"
                                    size="large"
                                />
                            </div>
                            <div
                                style={styles.inputsRowContainer}
                            >
                                <Input
                                    disabled={this.props.is_disabled}
                                    value={this.state.car_brand}
                                    style={styles.inputElement}
                                    onChange={(value) => {
                                        this.onChangeField(value, 'car_brand');
                                    }}
                                    prefix={(
                                        <Icon
                                            type="car"
                                            className="field-icon"
                                        />
                                    )}
                                    type="text"
                                    placeholder="Marca Vehiculo (*)"
                                    size="large"
                                />
                                <Input
                                    disabled={this.props.is_disabled}
                                    value={this.state.car_model}
                                    style={styles.inputElement}
                                    onChange={(value) => {
                                        this.onChangeField(value, 'car_model');
                                    }}
                                    prefix={(
                                        <Icon
                                            type="car"
                                            className="field-icon"
                                        />
                                    )}
                                    type="text"
                                    placeholder="Modelo Vehiculo (*)"
                                    size="large"
                                />
                                <Select
                                    disabled={this.props.is_disabled}
                                    value={this.state.price_type}
                                    style={styles.inputElement}
                                    placeholder="Tipo de precio"
                                    size="large"
                                    onChange={(value) => {
                                        this.onChangeDropdown(value, 'price_type');
                                    }}
                                >
                                    {OptionsTypes}
                                </Select>
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
                                    size="large"
                                    onChange={(value) => {
                                        this.onChangeField(value, 'notes');
                                    }}
                                />
                            </div>
                        </div>

                        <OrderCreator
                            disabled={this.props.is_disabled}
                            onError={this.onErrorOrderCreator}
                            onChange={this.onChangeOrderCreator}
                            price_type={this.state.price_type}
                            session={this.props.session}
                            init_data={{
                                products: this.props.fields ? this.props.fields.products : null,
                                services: this.props.fields ? this.props.fields.services : null,
                                total: this.props.fields ? this.props.fields.total : null
                            }}
                        />
                    </div>
                </Modal>
            </Fragment>
        );
    }
}

// wrap a HOC to handle the inject of the fields?
export default CreateQuotation;