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
    Input,
    Select
} from 'antd';
import styles from './Styles';
import { FetchXHR } from '../../helpers/generals';
import moment from 'moment';
import OrderCreator from '../../helpers/OrderCreator/OrderCreator';

class CreateSell extends Component {
    constructor(props) {
        super(props);
        this.state = {
            error: this.props.error,
            open: this.props.open,
            price_type: null,
            client_name: '',
            client_phone: '',
            client_job: '',
            car_brand: '',
            car_model: '',
            notes: ''
        }

        this.onChangeField = this.onChangeField.bind(this);

        this.onErrorOrderCreator = this.onErrorOrderCreator.bind(this);
        this.onChangeOrderCreator = this.onChangeOrderCreator.bind(this);

    }

    onChangeField(value, key) {
        let obj = {};
        obj[key] = value;
        this.setState(obj);
    }

    onSubmit = (event) => {
        event.preventDefault();
        const Quotation =  {

        }

        this.props.onSubmit({});
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
        return (
            <Fragment>
                <Modal
                    width="80%"
                    bodyStyle={styles.modalContainer}
                    style={styles.modalBodyContainer}
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
                        <div
                            style={styles.inputsContainer}
                        >
                            <div
                                style={styles.inputsRowContainer}
                            >
                                <Input
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
                                    placeholder="Nombre"
                                    size="large"
                                />
                                <Input
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
                                    placeholder="Numero"
                                    size="large"
                                />
                                <Input
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
                                    placeholder="Marca Vehiculo"
                                    size="large"
                                />
                                <Input
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
                                    placeholder="Modelo Vehiculo"
                                    size="large"
                                />
                                <Select
                                    style={styles.inputElement}
                                    placeholder="Tipo de precio"
                                    size="large"
                                    onChange={(value) => {
                                        this.onChangeField(value, 'price_type');
                                    }}
                                >
                                    {OptionsTypes}
                                </Select>
                            </div>
                        </div>


                        <OrderCreator
                            onError={this.onErrorOrderCreator}
                            onChange={this.onChangeOrderCreator}
                            price_type={this.state.price_type}
                        />
                    </div>
                </Modal>
            </Fragment>
        );
    }
}

// wrap a HOC to handle the inject of the fields?
export default CreateSell;