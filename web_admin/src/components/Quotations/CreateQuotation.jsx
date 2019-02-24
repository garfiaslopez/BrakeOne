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
import moment from 'moment';
import OrderCreator from '../../helpers/OrderCreator/OrderCreator';

moment.locale('es');

class CreateQuotation extends Component {
    constructor(props) {
        super(props);
        let initial_state = {
            error: this.props.error,
            open: this.props.open,
            loading: this.props.loading,
            price_type: undefined,
            client_name: '',
            client_phone: '',
            client_job: '',
            car_brand: '',
            car_model: '',
            car_year: '',
            car_vin: '',
            car_color: '',
            car_plates: '',
            notes: '',
            client_id: {},
            clients: [],
            car_id: '',
            selected_car: undefined,
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
            if (props.fields.car_year) {
                initial_state.car_year = props.fields.car_year;
            }
            if (props.fields.car_vin) {
                initial_state.car_vin = props.fields.car_vin;
            }
            if (props.fields.car_color) {
                initial_state.car_color = props.fields.car_color;
            }
            if (props.fields.car_plates) {
                initial_state.car_plates = props.fields.car_plates;
            }
            if (props.fields.car_kms) {
                initial_state.car_kms = props.fields.car_kms;
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
        this.getClients = this.getClients.bind(this);

        this.onChangeField = this.onChangeField.bind(this);
        this.onChangeDropdown = this.onChangeDropdown.bind(this);
        this.onChangeClient = this.onChangeClient.bind(this);
        this.onChangeCar = this.onChangeCar.bind(this);

        this.onErrorOrderCreator = this.onErrorOrderCreator.bind(this);
        this.onChangeOrderCreator = this.onChangeOrderCreator.bind(this);

    }

    componentWillReceiveProps(nextProps) {
        // check the state for recovered data values from dropdowns DB: 
        // compare and set manually with setfield....
        this.setState({
            error: nextProps.error,
            loading: nextProps.loading
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
                console.log(moment().format("DD/MM/YYYY : HH:mm:ss"));
                console.log("DATE TO SAVE:", moment().toISOString());
                const Quotation =  {
                    subsidiary_id: this.props.session.subsidiary._id,
                    user_id: this.props.session.user._id,
                    price_type: this.state.price_type,
                    client_name: this.state.client_name,
                    client_phone: this.state.client_phone,
                    client_job: this.state.client_job,
                    car_brand: this.state.car_brand,
                    car_model: this.state.car_model,
                    car_vin: this.state.car_vin,
                    car_color: this.state.car_color,
                    car_plates: this.state.car_plates,
                    car_year: this.state.car_year,
                    car_kms: this.state.car_kms,                 
                    notes: this.state.notes,
                    products: this.state.products,
                    services: this.state.services,
                    total: this.state.total,
                    date: moment().toISOString()
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

    getClients(search_text) {
        this.setState({
			loading_clients: true,
		});
		const url = process.env.REACT_APP_API_URL + '/clients';
        const POSTDATA = {
            limit: 100,
            page: 1,
            search_text
        }
        
        FetchXHR(url, 'POST', POSTDATA).then((response) => {
            if (response.json.success) {
                this.setState({
					clients: response.json.data.docs.map((el, index)=>({
						...el,
						key: index
                    })),
                    loading_users: false
                });
            } else {
				this.setState({
                    loading_clients: false,
                    error: response.message
				});
            }
        }).catch((onError) => {
			this.setState({
                loading_clients: false,
                error: onError.message
			});
        });
    }

    onChangeClient(client_id) {
        const client = this.state.clients.find((el) => (el._id === client_id));
        this.setState({
            client_id: client,
            client_name: client.name,
            client_phone: client.phone_number,
            price_type: client.price_type
        });
    }

    onChangeCar(car_id) {
        const car = this.state.client_id.cars.find((el)=>(el._id === car_id));
        this.setState({
            selected_car: car,
            car_id,
            car_brand: car.brand,
            car_model: car.model,
            car_vin: car.vin,
            car_year: car.year,
            car_color: car.color,
            car_plates: car.plates
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

        const OptionsClients = this.state.clients.map((item, index) => {
            return (
                <Select.Option 
                    value={item._id}
                    key={`${item._id} - ${index}`} 
                >
                    {item.name}
                </Select.Option>
            );
        });

        const OptionsCars = [];
        if (this.state.client_id.cars) {
            this.state.client_id.cars.forEach((item, index) => {
                OptionsCars.push(
                    <Select.Option 
                        value={item._id}
                        key={`${item._id} - ${index}`} 
                    >
                        {item.model + ' - ' + item.plates}
                    </Select.Option>
                );
            });
        }

        let title = "Nueva Cotización";
        if (this.props.next_folio) {
            title += '    | FOLIO: #' + this.props.next_folio;
        }

        return (
            <Fragment>
                <Modal
                    width="100%"
                    bodyStyle={styles.modalContainer}
                    style={styles.modalBodyContainer}
                    visible={this.state.open}
                    title={title}
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
                                <Card
                                    title="Información de cliente"
                                    extra={
                                        <Fragment>
                                            <Select
                                                disabled={this.props.is_disabled}
                                                size="large"
                                                showSearch
                                                value={this.state.client_id.name}
                                                placeholder={'BUSCAR CLIENTE...'}
                                                style={styles.inputSearch}
                                                defaultActiveFirstOption={false}
                                                showArrow={false}
                                                filterOption={false}
                                                onSearch={(value) => { this.getClients(value) }}
                                                onChange={(value) => { this.onChangeClient(value) }}
                                                notFoundContent={this.state.loading_clients ? <Spin size="small" /> : null}
                                            >
                                                {OptionsClients}
                                            </Select>
                                            <Select
                                                disabled={this.props.is_disabled}
                                                style={styles.inputSearch}
                                                value={this.state.selected_car ? this.state.selected_car.brand + ' - ' + this.state.selected_car.model : undefined}
                                                showSearch
                                                optionFilterProp="children"
                                                placeholder="SELECCIONAR AUTO"
                                                size="large"
                                                onChange={this.onChangeCar}
                                            >
                                                {OptionsCars}
                                            </Select>
                                        </Fragment>
                                    }
                                    style={styles.cardContainer}
                                    bodyStyle={styles.cardBody}
                                >
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
                                            placeholder="NOMBRE (*)"
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
                                            placeholder="NUMERO TELEFONO (*)"
                                            size="large"
                                        />
                                        <Select
                                            showSearch
                                            disabled={this.props.is_disabled}
                                            value={this.state.price_type}
                                            style={styles.inputElement}
                                            placeholder="TIPO PRECIO"
                                            size="large"
                                            optionFilterProp="children"
                                            onChange={(value) => {
                                                this.onChangeDropdown(value, 'price_type');
                                            }}
                                        >
                                            {OptionsTypes}
                                        </Select>
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
                                            placeholder="MARCA (*)"
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
                                            placeholder="MODELO (*)"
                                            size="large"
                                        />
                                    </div>
                                </div>
                                <div
                                    style={styles.inputsRowContainer}
                                >
                                    <Input
                                        disabled={this.props.is_disabled}
                                        value={this.state.car_year}
                                        style={styles.inputElement}
                                        onChange={(value) => {
                                            this.onChangeField(value, 'car_year');
                                        }}
                                        prefix={(
                                            <Icon
                                                type="car"
                                                className="field-icon"
                                            />
                                        )}
                                        type="text"
                                        placeholder="AÑO (*)"
                                        size="large"
                                    />

                                    <Input
                                        disabled={this.props.is_disabled}
                                        value={this.state.car_color}
                                        style={styles.inputElement}
                                        onChange={(value) => {
                                            this.onChangeField(value, 'car_color');
                                        }}
                                        prefix={(
                                            <Icon
                                                type="car"
                                                className="field-icon"
                                            />
                                        )}
                                        type="text"
                                        placeholder="COLOR"
                                        size="large"
                                    />
                                    <Input
                                        disabled={this.props.is_disabled}
                                        value={this.state.car_plates}
                                        style={styles.inputElement}
                                        onChange={(value) => {
                                            this.onChangeField(value, 'car_plates');
                                        }}
                                        prefix={(
                                            <Icon
                                                type="car"
                                                className="field-icon"
                                            />
                                        )}
                                        type="text"
                                        placeholder="PLACAS"
                                        size="large"
                                    />

                                    <Input
                                        disabled={this.props.is_disabled}
                                        value={this.state.car_vin}
                                        style={styles.inputElement}
                                        onChange={(value) => {
                                            this.onChangeField(value, 'car_vin');
                                        }}
                                        prefix={(
                                            <Icon
                                                type="car"
                                                className="field-icon"
                                            />
                                        )}
                                        type="text"
                                        placeholder="VIN"
                                        size="large"
                                    />
                                    <Input
                                        disabled={this.props.is_disabled}
                                        value={this.state.car_kms}
                                        style={styles.inputElement}
                                        onChange={(value) => {
                                            this.onChangeField(value, 'car_kms');
                                        }}
                                        prefix={(
                                            <Icon
                                                type="car"
                                                className="field-icon"
                                            />
                                        )}
                                        type="text"
                                        placeholder="KILOMETROS"
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
                                    
                                </Card>
                            </div>
                        </div>

                        <OrderCreator
                            is_quotation={true}
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