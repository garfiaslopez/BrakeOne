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
import styles from '../Sells/Styles';
import { FetchXHR } from '../../helpers/generals';
import isEmpty from 'lodash/isEmpty';
import moment from 'moment';

class CreatePayment extends Component {
    constructor(props) {
        super(props);
        let initial_state = {
            error: this.props.error,
            open: this.props.open,
            loading_sells: false,
            sell_id: {},
            sells: [],
            notes: undefined,
            type: undefined,
            bank: undefined,
            reference: undefined,
            total: undefined
        };
        if (props.fields) {
            initial_state.sell_id = props.fields;
        }
        this.state = initial_state;

        this.onChangeField = this.onChangeField.bind(this);
        this.onChangeDropdown = this.onChangeDropdown.bind(this);
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

    onChangeDropdown(value, key) {
        let obj = {};
        obj[key] = value;
        this.setState(obj);
    }

    onSubmitForm = (values, nested_values) => {
		this.setState({
			loading_submit: true
		});
		let POSTDATA = {
			...values,
			...nested_values,
			subsidiary_id: this.props.session.subsidiary._id
		}
		let method = 'POST';
        let method_put = 'PUT';

        let url = process.env.REACT_APP_API_URL + '/payment';
        let url_sell = process.env.REACT_APP_API_URL + '/sell/' + this.props.fields._id;
        const new_price = this.props.fields.payed + values.total;
        const NEW_SELL = {
            payed: new_price,
            is_payed: new_price === this.props.fields.total ? true : false,
        }
        
        let url_user = process.env.REACT_APP_API_URL + '/client/' + this.props.fields.client_id._id;
        const NEW_CLIENT =  {
            sells: this.props.fields.client_id.sells + values.total
        }

        FetchXHR(url_sell, method_put, NEW_SELL).then((response_sell) => {
            if (response_sell.json.success) {
                // sell updated:
                FetchXHR(url, method, POSTDATA).then((response_payment) => {
                    if (response_payment.json.success) {
                        FetchXHR(url_user, method_put, NEW_CLIENT).then((response_client) => {
                            if (response_client.json.success) {
                                this.props.refreshTable();
                                this.props.onClose();
                            } else {
                                console.log(response_client);
                                this.setState({
                                    error: response_client.json.message,
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
                        console.log(response_payment);
                        this.setState({
                            error: response_payment.json.message,
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
				console.log(response_sell);
				this.setState({
					error: response_sell.json.message,
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
    }
    
    onSubmit = (event) => {
        event.preventDefault();
        // do validations:
        if (!isEmpty(this.state.sell_id)) {
            if (this.state.type != '' || this.state.total > 0) {
                const Payment =  {
                    subsidiary_id: this.props.session.subsidiary._id,
                    user_id: this.props.session.user._id,
                    sell_id: this.state.sell_id._id,
                    client_id: this.state.sell_id.client_id._id,
                    notes: this.state.notes,
                    bank: this.state.bank,
                    reference: this.state.reference,
                    notes: this.state.notes,
                    type: this.state.type,
                    total: this.state.total,
                }
                this.onSubmitForm(Payment);
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
        const OptionsTypes = ['EFECTIVO', 'DEPOSITO', 'TRANSFERENCIA'].map((item, index) => {
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

        const OptionsSells = this.state.sells.map((item, index) => {
            return (
                <Select.Option 
                    value={item._id}
                    key={`${item._id} - ${index}`} 
                >
                    {moment(item.date).format("DD/MM/YY") + ' - ' + item.folio + ' - ' + item.client_id.name + ' - $' + item.total }
                </Select.Option>
            );
        });

        let CardContent = <div> Favor de buscar y seleccionar una venta. </div>;
        if (this.state.sell_id._id) {
            CardContent = (
                <Fragment>
                    <Card.Grid style={styles.grid_element}>
                        <p style={styles.label_title} >Fecha:</p>
                        <p style={styles.label_value} >{moment(this.state.sell_id.date).format("DD/MM/YY")}</p>
                    </Card.Grid>
                    <Card.Grid style={styles.grid_element}>
                        <p style={styles.label_title} >Cliente:</p>
                        <p style={styles.label_value}>{this.state.sell_id.client_id.name}</p>
                    </Card.Grid>
                    <Card.Grid style={styles.grid_element}>
                        <p style={styles.label_title} >Total:</p>
                        <p style={styles.label_value} >{this.state.sell_id.total}</p>
                    </Card.Grid>
                    <Card.Grid style={styles.grid_element}>
                        <p style={styles.label_title} >Por pagar:</p>
                        <p style={styles.label_value} >{this.state.sell_id.total - this.state.sell_id.payed}</p>
                    </Card.Grid>
                </Fragment>
            );
        }

        return (
            <Fragment>
                <Modal
                    width="80%"
                    bodyStyle={styles.modalContainer}
                    style={styles.modalBodyContainer}
                    visible={true}
                    title={this.props.fields.is_service ? "Pago de Servicio" : "Pago de Venta"}
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
                                    title="Venta o Servicio"
                                    extra={
                                        <p> Folio # {this.state.sell_id.folio}</p>
                                    }
                                    style={styles.cardContainer}
                                >
                                    {CardContent}
                                </Card>
                            </div>
                            <div
                                style={styles.inputsRowContainer}
                            >
                                <Select
                                    disabled={this.props.is_disabled}
                                    value={this.state.type}
                                    style={styles.inputElement}
                                    placeholder="Tipo de precio"
                                    size="large"
                                    onChange={(value) => {
                                        this.onChangeDropdown(value, 'type');
                                    }}
                                >
                                    {OptionsTypes}
                                </Select>
                                <Input
                                    disabled={this.props.is_disabled | this.state.type === 'EFECTIVO'}
                                    value={this.state.bank}
                                    style={styles.inputElement}
                                    onChange={(value) => {
                                        this.onChangeField(value, 'bank');
                                    }}
                                    prefix={(
                                        <Icon
                                            type="credit-card"
                                            className="field-icon"
                                        />
                                    )}
                                    type="text"
                                    placeholder="Banco"
                                    size="large"
                                />
                                <Input
                                    disabled={this.props.is_disabled | this.state.type === 'EFECTIVO'}
                                    value={this.state.reference}
                                    style={styles.inputElement}
                                    onChange={(value) => {
                                        this.onChangeField(value, 'reference');
                                    }}
                                    prefix={(
                                        <Icon
                                        type="credit-card"
                                        className="field-icon"
                                        />
                                    )}
                                    type="text"
                                    placeholder="Referencia"
                                    size="large"
                                />
                                <InputNumber
                                    disabled={this.props.is_disabled}
                                    value={this.state.total}
                                    style={styles.inputElement}
                                    onChange={(value) => {
                                        this.onChangeFieldNumber(value, 'total');
                                    }}
                                    prefix={(
                                        <Icon
                                            type="dollar"
                                            className="field-icon"
                                        />
                                    )}
                                    max={this.state.sell_id.total - this.state.sell_id.payed}
                                    type="text"
                                    placeholder="Total ($)"
                                    size="large"
                                />
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
                    </div>
                </Modal>
            </Fragment>
        );
    }
}

// wrap a HOC to handle the inject of the fields?
export default CreatePayment;