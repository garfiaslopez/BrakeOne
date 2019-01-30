import React, { Component, Fragment } from 'react';
import {
    Icon,
    Modal,
    Button,
    Alert,
    Input,
    Select,
    Spin,
    Card
} from 'antd';
import styles from './Styles';
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
            if (props.fields.sell_id) {
                initial_state.sell_id = props.fields.sell_id;
            }
            if (props.fields.client_id) {
                initial_state.client_id = props.fields.client_id;
            }
            if (props.fields.notes) {
                initial_state.notes = props.fields.notes;
            }
            if (props.fields.type) {
                initial_state.type = props.fields.type;
            }
            if (props.fields.bank) {
                initial_state.bank = props.fields.bank;
            }
            if (props.fields.reference) {
                initial_state.reference = props.fields.reference;
            }
            if (props.fields.total) {
                initial_state.total = props.fields.total;
            }
        }
        
        this.state = initial_state;
        this.getSells = this.getSells.bind(this);

        this.onChangeField = this.onChangeField.bind(this);
        this.onChangeDropdown = this.onChangeDropdown.bind(this);
        this.onChangeSell = this.onChangeSell.bind (this);
    }

    componentWillReceiveProps(nextProps) {
        // check the state for recovered data values from dropdowns DB: 
        // compare and set manually with setfield....
        this.setState({
            error: nextProps.error
        });
    }

    getSells(search_text) {
        this.setState({
			loading_clients: true,
		});
		const url = process.env.REACT_APP_API_URL + '/sells';
        const POSTDATA = {
            limit: 100,
            page: 1,
            populate_ids:['client_id'],
            filters: {
                folio: Number(search_text)
            }
        }
        
        FetchXHR(url, 'POST', POSTDATA).then((response) => {
            if (response.json.success) {
                this.setState({
					sells: response.json.data.docs.map((el, index)=>({
						...el,
						key: index
                    })),
                    loading_sells: false
                });
            } else {
				this.setState({
                    loading_sells: false,
                    error: response.message
				});
            }
        }).catch((onError) => {
			this.setState({
                loading_sells: false,
                error: onError.message
			});
        });
    }

    onChangeSell(sell_id) {
        this.setState({
            sell_id: this.state.sells.find((el) => (el._id === sell_id))
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
                this.props.onSubmit(Payment);
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
                        <p style={styles.label_value}>{this.state.client_id.name}</p>
                    </Card.Grid>
                    <Card.Grid style={styles.grid_element}>
                        <p style={styles.label_title} >Folio:</p>
                        <p style={styles.label_value}>{this.state.sell_id.folio}</p>
                    </Card.Grid>
                    <Card.Grid style={styles.grid_element}>
                        <p style={styles.label_title} >Total:</p>
                        <p style={styles.label_value} >{this.state.sell_id.total}</p>
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
                    visible={this.state.open}
                    title={this.props.title}
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
                                        <Select
                                            disabled={this.props.is_disabled}
                                            size="large"
                                            showSearch
                                            value={this.state.sell_id.folio}
                                            placeholder={'Buscar Venta o Servicio...'}
                                            style={styles.inputSearch}
                                            defaultActiveFirstOption={false}
                                            showArrow={false}
                                            filterOption={false}
                                            onSearch={(value) => { this.getSells(value) }}
                                            onChange={(value) => { this.onChangeSell(value) }}
                                            notFoundContent={this.state.loading_sells ? <Spin size="small" /> : null}
                                        >
                                            {OptionsSells}
                                        </Select>
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
                                <Input
                                    disabled={this.props.is_disabled}
                                    value={this.state.total}
                                    style={styles.inputElement}
                                    onChange={(value) => {
                                        this.onChangeField(value, 'total');
                                    }}
                                    prefix={(
                                        <Icon
                                            type="dollar"
                                            className="field-icon"
                                        />
                                    )}
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