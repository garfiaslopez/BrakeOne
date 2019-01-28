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
import OrderCreator from '../../helpers/OrderCreator/OrderCreator';
import moment from 'moment';

class CreateService extends Component {
    constructor(props) {
        super(props);
        let initial_state = {
            error: this.props.error,
            open: this.props.open,
            loading_clients: false,
            loading_car_history: false,
            selected_car: undefined,
            kilometers: undefined,
            car_id: '',
            client_id: {},
            clients: [],
            notes: '',
            products: [],
            services: [],
            total: 0
        };

        if (props.fields) {
            if (props.fields.client_id) {
                initial_state.client_id = props.fields.client_id;
                if (props.fields.car_id) {
                    initial_state.car_id = props.fields.car_id;
                    initial_state.selected_car = props.fields.client_id.cars.find((el)=>(el._id === props.fields.car_id))
                }
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
            if (props.fields.kilometers) {
                initial_state.kilometers = props.fields.kilometers;
            }
        }
        
        this.state = initial_state;

        this.getClients = this.getClients.bind(this);

        this.onChangeField = this.onChangeField.bind(this);
        this.onChangeDropdown = this.onChangeDropdown.bind(this);
        this.onChangeClient = this.onChangeClient.bind (this);
        this.onChangeCar = this.onChangeCar.bind(this);

        this.onErrorOrderCreator = this.onErrorOrderCreator.bind(this);
        this.onChangeOrderCreator = this.onChangeOrderCreator.bind(this);

        this.deliverService = this.deliverService.bind(this);
        this.printCarHistory = this.printCarHistory.bind(this);
    }

    componentWillReceiveProps(nextProps) {
        // check the state for recovered data values from dropdowns DB: 
        // compare and set manually with setfield....
        this.setState({
            error: nextProps.error
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
        this.setState({
            client_id: this.state.clients.find((el) => (el._id === client_id))
        });
    }

    onChangeCar(car_id) {
        this.setState({
            selected_car: this.state.client_id.cars.find((el)=>(el._id === car_id)), 
            car_id
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
        if (!isEmpty(this.state.client_id) && this.state.car_id != '') {
            if (this.state.products.length > 0 || this.state.services.length > 0) {
                const Sell =  {
                    subsidiary_id: this.props.session.subsidiary._id,
                    user_id: this.props.session.user._id,
                    client_id: this.state.client_id._id,
                    notes: this.state.notes,
                    products: this.state.products,
                    services: this.state.services,
                    total: this.state.total,
                    is_service: true,
                    car_id: this.state.car_id,
                    kilometers: this.state.kilometers
                }
                this.props.onSubmit(Sell);
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

    deliverService(event) {
        // submit and update with changed flags and dates
        event.preventDefault();
        // do validations:
        console.log("DELIVER SERVICE");

        if (!isEmpty(this.state.client_id) && this.state.car_id != '' && this.state.kilometers ) {
            if (this.state.products.length > 0 || this.state.services.length > 0) {
                const Sell =  {
                    subsidiary_id: this.props.session.subsidiary._id,
                    user_id: this.props.session.user._id,
                    client_id: this.state.client_id._id,
                    notes: this.state.notes,
                    products: this.state.products,
                    services: this.state.services,
                    total: this.state.total,
                    is_service: true,
                    car_id: this.state.car_id,
                    kilometers: this.state.kilometers,
                    date_out: moment().toISOString(),
                    is_finished: true
                }
                this.props.onSubmit(Sell);
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

    printCarHistory() {
        if (this.state.car_id) {
            this.setState({
                loading_car_history: true,
            });
            const url = process.env.REACT_APP_API_URL + '/sells';
            const POSTDATA = {
                limit: 100,
                page: 1,
                filters: {
                    client_id: this.state.client_id,
                    car_id: this.state.car_id,
                    is_service: true,
                    is_finished: true,
                }
            }
            FetchXHR(url, 'POST', POSTDATA).then((response) => {
                if (response.json.success) {
                    const sells_by_car = response.json.data.docs;
                    this.setState({
                        loading_car_history: false
                    });
                } else {
                    this.setState({
                        loading_car_history: false,
                        error: response.message
                    });
                }
            }).catch((onError) => {
                this.setState({
                    loading_car_history: false,
                    error: onError.message
                });
            });
        }
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
        if(this.props.fields) { // editing:
            ModalButtons.unshift(
                <Button 
                    key="Entregar"
                    onClick={this.deliverService}
                >
                    Entregar
                </Button>
            )
        }
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
                        {item.brand + ' _ ' + item.model}
                    </Select.Option>
                );
            });
        }

        let CardContent = <div> Favor de buscar y seleccionar un cliente. </div>;
        if (this.state.client_id._id) {
            CardContent = (
                <Fragment>
                    <Card.Grid style={styles.grid_element}>
                        <p style={styles.label_title} >Nombre:</p>
                        <p style={styles.label_value} >{this.state.client_id.name}</p>
                    </Card.Grid>
                    <Card.Grid style={styles.grid_element}>
                        <p style={styles.label_title} >RFC:</p>
                        <p style={styles.label_value}>{this.state.client_id.rfc}</p>
                    </Card.Grid>
                    <Card.Grid style={styles.grid_element}>
                        <p style={styles.label_title} >Tipo de precio:</p>
                        <p style={styles.label_value}>{this.state.client_id.price_type}</p>
                    </Card.Grid>
                    <Card.Grid style={styles.grid_element}>
                        <p style={styles.label_title} >Email:</p>
                        <p style={styles.label_value} >{this.state.client_id.email}</p>
                    </Card.Grid>
                    <Card.Grid style={styles.grid_element}>
                        <p style={styles.label_title} >Número Móvil:</p>
                        <p style={styles.label_value}>{this.state.client_id.phone_mobil}</p>
                    </Card.Grid>
                    <Card.Grid style={styles.grid_element}>
                        <p style={styles.label_title} >Días Crédito:</p>
                        <p style={styles.label_value}>{this.state.client_id.credit_days}</p>
                    </Card.Grid>
                    <Card.Grid style={styles.grid_element}>
                        <p style={styles.label_title} >Marca y modelo:</p>
                        <p style={styles.label_value}>{this.state.selected_car ? this.state.selected_car.brand + ' - ' + this.state.selected_car.model : ''}</p>
                    </Card.Grid>
                    <Card.Grid style={styles.grid_element}>
                        <p style={styles.label_title} >Año y Placas:</p>
                        <p style={styles.label_value}>{this.state.selected_car ? this.state.selected_car.year + ' - ' + this.state.selected_car.plates : '' }</p>
                    </Card.Grid>
                    <Card.Grid style={styles.grid_element}>
                        <p style={styles.label_title} >Numero economico:</p>
                        <p style={styles.label_value}>{this.state.selected_car ? this.state.selected_car.economic_number : ''}</p>
                    </Card.Grid>
                    <Card.Grid style={styles.grid_element}>
                        <p style={styles.label_title} >VIN:</p>
                        <p style={styles.label_value}>{this.state.selected_car ? this.state.selected_car.vin : ''}</p>
                    </Card.Grid>
                </Fragment>
            );
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
                                    title="Información de cliente"
                                    extra={
                                        <Fragment>
                                            <Select
                                                disabled={this.props.is_disabled}
                                                size="large"
                                                showSearch
                                                value={this.state.client_id.name}
                                                placeholder={'Buscar Cliente...'}
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
                                                placeholder="Seleccionar Auto"
                                                size="large"
                                                onChange={this.onChangeCar}
                                            >
                                                {OptionsCars}
                                            </Select>
                                            <Input
                                                disabled={this.props.is_disabled}
                                                value={this.state.kilometers}
                                                style={styles.inputSearch}
                                                onChange={(value) => {
                                                    this.onChangeField(value, 'kilometers');
                                                }}
                                                prefix={(
                                                    <Icon
                                                        type="car"
                                                        className="field-icon"
                                                    />
                                                )}
                                                type="text"
                                                placeholder="Kilometros (*)"
                                                size="large"
                                            />
                                            <Button
                                                icon="reconciliation"
                                                disabled={this.state.car_id ? true : false}
                                                type="primary"
                                                onClick={this.printCarHistory}
                                                style={styles.buttonHistory}
                                                loading={this.state.loading_car_history}
                                            >
                                                Historial
                                            </Button>
                                        </Fragment>
                                    }
                                    style={styles.cardContainer}
                                >
                                    {CardContent}
                                </Card>
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
export default CreateService;