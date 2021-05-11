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
import OrderCreatorMissing from '../../../helpers/OrderCreator/OrderCreatorMissing';



moment.locale('es');

class createMissing extends Component {
    constructor(props) {
        super(props);
        let initial_state = {
            error: this.props.error,
            open: this.props.open,
            loading: this.props.loading,
            price_type: undefined,
            client_name: '',
            line: '',
            brand: '',
            client_phone: '',
            client_job: '',            
            notes: '',                                           
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
        this.onErrorOrderCreatorMissing = this.onErrorOrderCreatorMissing.bind(this);
        this.onChangeOrderCreatorMissing = this.onChangeOrderCreatorMissing.bind(this);
    }
    componentDidMount() {
        FetchXHR(process.env.REACT_APP_API_URL + '/helpers/car_makes', 'POST', {}).then((response) => {
            if(response.json.objs) {
                this.setState({
                  
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

    onSubmit = (event) => {
        event.preventDefault();
        // do validations:
        if (this.state.client_name !== '' && this.state.client_phone !== '' && this.state.car_brand !== '' && this.state.car_model !== '') {
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
                    error: 'Agregar algun producto o servicio o paquete a la cotización.'
                });
            }
        } else {
            this.setState({
                error: 'Rellenar los campos obligatorios (*) de carro y usuario para guardar.'
            });
        }
    }

    onErrorOrderCreatorMissing(err) {
        this.setState({
            error: err
        });
    }

    onChangeOrderCreatorMissing(values) {
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
           
            search_text: client.name,
            client_id: client,
            client_name: client.name,
            client_phone: phone,
            price_type: client.price_type
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
      
        let title = "Nuevos faltantes";
        if(this.props.fields && this.props.fields.folio) {
            title = 'Faltante  | FOLIO: #' + this.props.fields.folio;
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
                                    title="Información de faltantes"
                                   
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
                                        disabled={this.props.is_disabled || (this.props.fields && this.props.session.user.rol !== 'ADMIN')}
                                        style={styles.inputElement}
                                        value={this.state.brand}
                                        autosize={{ minRows: 2, maxRows: 6 }}
                                        placeholder="MARCA"
                                        
                                        onChange={(value) => {
                                            this.onChangeField(value, 'brand');
                                        }}
                                    />

                                    <Input
                                        disabled={this.props.is_disabled || (this.props.fields && this.props.session.user.rol !== 'ADMIN')}
                                        style={styles.inputElement}
                                        value={this.state.line}
                                        autosize={{ minRows: 2, maxRows: 6 }}
                                        placeholder="LINEA"
                                        
                                        onChange={(value) => {
                                            this.onChangeField(value, 'line');
                                        }}
                                    />

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
                                        placeholder="Notas adicionales..."
                                        
                                        onChange={(value) => {
                                            this.onChangeField(value, 'notes');
                                        }}
                                    />
                                </div>
                                    
                                </Card>                               
                            </div>
                        </div>
                        

                        <OrderCreatorMissing
                            can_edit_disccount={this.props.is_disabled ? false : true }
                            is_quotation={true}
                            disabled={this.props.is_disabled}
                            onError={this.onErrorOrderCreatorMissing}
                            onChange={this.onChangeOrderCreatorMissing}
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
export default createMissing;