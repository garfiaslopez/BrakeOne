import React, { Component, Fragment } from 'react';
import {
    Icon,
    Modal,
    Button,
    Alert,
    Input,
    Select,
    Card,
    AutoComplete
} from 'antd';
import styles from './Styles';
import { FetchXHR, filterList } from '../../../helpers/generals';
import moment from 'moment';
import OrderCreatorWarranty from '../../../helpers/OrderCreator/OrderCreatorWarranty';



moment.locale('es');

class createWarranty extends Component {
    constructor(props) {
        super(props);
        let initial_state = {
            error: this.props.error,
            open: this.props.open,
            loading: this.props.loading,
            price_type: undefined,
            client_name: '',
            fmsi: '',
            client_phone: '',
            client_job: '',
            car_brand: '',
            car_model: '',
            car_year: '',
            car_vin: '',
            car_color: '',
            car_plates: '',
            car_trim:'',
            notes: '',
            client_id: {},
            clients: [],
            car_id: '',
            selected_car: undefined,
            openCarDropdown: false,
            carsdb_makes: [],
            carsdb_models: [],
            carsdb_trims: [],
        };
        if (props.fields) {
            if (props.fields.price_type) {
                initial_state.price_type = props.fields.price_type;
            }
            if (props.fields.client_id) {
                initial_state.client_id = props.fields.client_id;
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
            if (props.fields.car_trim) {
                initial_state.car_trim = props.fields.car_trim;
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
        this.onChangeCar = this.onChangeCar.bind(this);
        this.onSelectBrand = this.onSelectBrand.bind(this);
        this.onSelectModel = this.onSelectModel.bind(this);

        this.onErrorOrderCreatorWarranty = this.onErrorOrderCreatorWarranty.bind(this);
        this.onChangeOrderCreatorWarranty = this.onChangeOrderCreatorWarranty.bind(this);

        this.filterCarMakes = this.filterCarMakes.bind(this);
        this.filterCarModels = this.filterCarModels.bind(this);
        this.filterCarTrims = this.filterCarTrims.bind(this);
    }
    componentDidMount() {
        FetchXHR(process.env.REACT_APP_API_URL + '/helpers/car_makes', 'POST', {}).then((response) => {
            if(response.json.objs) {
                this.setState({
                    carsdb_makes: response.json.objs.filter((e)=>(e!="")),
                    filtered_car_makes: response.json.objs.filter((e)=>(e!="")),
                })
            }
        });
    }

    componentWillReceiveProps(nextProps) {
        // check the state for recovered data values from dropdowns DB: 
        // compare and set manually with setfield....
        this.setState({
            error: nextProps.error,
            loading: nextProps.loading
        });
    }

    onChangeFieldName(value, key) {
        console.log(value)
        let obj = {};
        obj[key] = value;
        this.setState(obj);
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

    onSelectBrand(value) {
        this.setState({
            car_brand: value,
            car_model: '',
            car_trim: '',
        });
        FetchXHR(process.env.REACT_APP_API_URL + '/helpers/car_models', 'POST', {
            make: value
        }).then((response) => {
            if(response.json.objs) {
                this.setState({
                    carsdb_models: response.json.objs.filter((e)=>(e!="")),
                    filtered_car_models: response.json.objs.filter((e)=>(e!="")),
                });
            }
        });
    }

    onSelectModel(value) {
        this.setState({
            car_model: value,
            car_trim: '',
        });
        FetchXHR(process.env.REACT_APP_API_URL + '/helpers/car_trims', 'POST', {
            make: this.state.car_brand,
            model: value
        }).then((response) => {
            console.log(response.json.objs)
            if(response.json.objs) {
                this.setState({
                    carsdb_trims: response.json.objs.filter((e)=>(e!="")),
                    filtered_car_trims: response.json.objs.filter((e)=>(e!="")),
                })
            }
        });
    }

    onSubmit = (event) => {
        event.preventDefault();
        // do validations:
        if (this.state.client_name !== '' && this.state.client_phone !== '') {
            if (this.state.products.length > 0 || this.state.services.length > 0) {
                console.log("CLIENT", this.state.client_id);
                if(!this.state.client_id._id) {
                    // we need to save that client: 
                    const NewClient = {
                        account_id: this.props.session.subsidiary.account_id,
                        name: this.state.client_name,
                        rfc: '',
                        curp: '',
                        credit_days: 0,
                        sells: 0,
                        price_type: this.state.price_type,
                        address: '',
                        address_city: '',
                        address_country: '',
                        address_state: '',
                        address_cp: '',
                        phone_number: '',
                        phone_mobil: this.state.client_phone,
                        phone_office: '',
                        email: '',
                        contacts: [],
                        cars: [{
                            legacy_id: '',
                            plates: this.state.car_plates,
                            economic_number: '',
                            brand: this.state.car_brand,
                            model: this.state.car_model,
                            year: this.state.car_year,
                            color: this.state.car_color,
                            vin: this.state.car_vin,
                        }],
                    }
                    FetchXHR(process.env.REACT_APP_API_URL + '/client', 'POST', NewClient).then((response) => {
                        if (response.json.success) {
                            const client_id = response.json.obj._id;
                            const Quotation =  {
                                subsidiary_id: this.props.session.subsidiary._id,
                                user_id: this.props.session.user._id,
                                price_type: this.state.price_type,
                                client_id: client_id,
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
                                car_trim: this.state.car_trim,                 
                                notes: this.state.notes,
                                products: this.state.products,
                                services: this.state.services,
                                total: this.state.total,
                                date: moment().toISOString()
                            }
                            this.props.onSubmit(Quotation);
                        } else {
                            console.log(response);
                            this.setState({
                                error: response.json.message,
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
                    const Quotation =  {
                        subsidiary_id: this.props.session.subsidiary._id,
                        user_id: this.props.session.user._id,
                        price_type: this.state.price_type,
                        fmsi: this.state.products.fmsi,
                        client_id: this.state.client_id,
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
                }
            } else {
                this.setState({
                    error: 'Agregar algun producto a la garantia!'
                });
            }
        } else {
            this.setState({
                error: 'Rellenar los campos obligatorios (*) para guardar.'
            });
        }
    }

    onErrorOrderCreatorWarranty(err) {
        this.setState({
            error: err
        });
    }

    onChangeOrderCreatorWarranty(values) {
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
            search_text
		});
		const url = process.env.REACT_APP_API_URL + '/clients';
        const POSTDATA = {
            limit: 100,
            page: 1,
            search_text
        }
        console.log(POSTDATA);
        FetchXHR(url, 'POST', POSTDATA).then((response) => {
            console.log(response);
            if (response.json.success) {
                this.setState({
                    name_clients: response.json.data.docs.map((el)=>(el.name)),
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

    onSelectClient(client_name) {
        const client = this.state.clients.find((el) => (el.name === client_name));
        let phone = client.phone_mobil;
        if (phone === "") {
            phone = client.phone_number;
            if (phone === "") {
                phone = client.phone_office;
            }
        }
        this.setState({
            openCarDropdown: true,
            search_text: client.name,
            client_id: client,
            client_name: client.name,
            client_phone: phone,
            price_type: client.price_type
        });
    }

    onChangeCar(car_id) {
        const car = this.state.client_id.cars.find((el)=>(el._id === car_id));
        this.setState({
            openCarDropdown: false,
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

    filterAutocomplete(value, array) {
        const results = [];
        for (let i = 0; i < array.length; i++) {
            if (array[i].substr(0, value.length).toUpperCase() == value.toUpperCase()) {
                results.push(array[i]);
            }
        }
        return results;
    }

    filterCarMakes(value) {
        this.setState({
            filtered_car_makes: this.filterAutocomplete(value, this.state.carsdb_makes)
        });
    }

    filterCarModels(value) {
        this.setState({
            filtered_car_models: this.filterAutocomplete(value, this.state.carsdb_models)
        });
    }

    filterCarTrims(value) {
        this.setState({
            filtered_car_trims: this.filterAutocomplete(value, this.state.carsdb_trims)
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
        const OptionsTypes = ['PUBLICO', 'MAYOREO', 'CREDITO TALLER' , 'TALLER'].map((item, index) => {
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
        if(this.props.fields && this.props.fields.folio) {
            title = 'Cotización  | FOLIO: #' + this.props.fields.folio;
        } else if (this.props.next_folio) {
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
                                  
                                    style={styles.cardContainer}
                                    bodyStyle={styles.cardBody}
                                >
                                <div
                                    style={styles.inputsContainer}
                                >
                                    <div
                                        style={styles.inputsRowContainer}
                                    >
                                        <AutoComplete
                                            disabled={this.props.is_disabled || (this.props.fields && this.props.session.user.rol !== 'ADMIN')}
                                            autoFocus
                                            backfill
                                            placeholder={'BUSCAR CLIENTE...'}
                                            onSearch={(value) => { this.getClients(value) }}
                                            onSelect={(value) => { this.onSelectClient(value) }}
                                            value={this.state.client_name}
                                            onChange={(value) => {
                                                this.onChangeFieldName(value, 'client_name');
                                            }}
                                            dataSource={this.state.name_clients}
                                            style={styles.inputElement}
                                        />
                                        <Input
                                            disabled={this.props.is_disabled || (this.props.fields && this.props.session.user.rol !== 'ADMIN')}
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
                                        />
                                        <Select
                                            showSearch
                                            onFocus={() => {
                                                console.log(this);
                                            }}
                                            disabled={this.props.is_disabled || (this.props.fields && this.props.session.user.rol !== 'ADMIN')}
                                            value={this.state.price_type}
                                            style={styles.inputElement}
                                            placeholder="TIPO PRECIO"
                                            optionFilterProp="children"
                                            onChange={(value) => {
                                                this.onChangeDropdown(value, 'price_type');
                                            }}
                                        >
                                            {OptionsTypes}
                                        </Select>

                                    </div>
                                </div>
                                <div
                                    style={styles.inputsRowContainer}
                                >                                                                                                          
                                </div>
                                <div
                                    style={styles.inputsRowContainer}
                                >
                                    <Input.TextArea
                                        disabled={this.props.is_disabled || (this.props.fields && this.props.session.user.rol !== 'ADMIN')}
                                        style={styles.inputElement}
                                        value={this.state.notes}
                                        autosize={{ minRows: 2, maxRows: 6 }}
                                        placeholder="Anotar motivos de la garantia..."
                                        
                                        onChange={(value) => {
                                            this.onChangeField(value, 'notes');
                                        }}
                                    />
                                </div>
                                    
                                </Card>                               
                            </div>
                        </div>
                        
                        <OrderCreatorWarranty                                              
                            can_edit_description  
                            can_edit_quantity={true}
                            can_edit_disccount={true}
                            onError={this.onErrorOrderCreatorWarranty}
                            onChange={this.onChangeOrderCreatorWarranty}
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
export default createWarranty;