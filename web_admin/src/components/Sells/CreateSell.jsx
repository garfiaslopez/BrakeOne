import React, { Component, Fragment } from "react";
import {
  Icon,
  Modal,
  Button,
  Alert,
  Input,
  Select,
  Spin,
  Card,
  Divider,
  Table,
  Popconfirm,
} from "antd";
import styles from "./Styles";
import { FetchXHR, formatNumber } from "../../helpers/generals";
import isEmpty from "lodash/isEmpty";
//import OrderCreator from "../../helpers/OrderCreator/OrderCreator";
import OrderCreatorVentas from "../../helpers/OrderCreator/OrderCreatorVentas"
import RenderRows from "../../helpers/render_rows";
import async from "async";
import moment from "moment";
import FormGenerator from "../FormGenerator/FormGenerator";
import Schema from '../Clients/ClientsSchema';
import PrinterDownload from '../PrinterDownload/PrinterDownload';
import CrudLayoutClientsSell from '../CrudLayout/CrudLayoutClientsSell';
import OrderCreatorClients from '../../helpers/OrderCreator/OrderCreatorClients';
import OrderReception from "../../helpers/OrderCreator/OrderReception";
import OrderCreatorProducts from '../../helpers/OrderCreator/OrderCreatorProducts';
import clients from "../CrudLayout/bd_clients/clients";

class CreateSell extends Component {
  
  constructor(props) {
    super(props);
    this.schema = Schema;
    
    let initial_state = {
      error: this.props.error,
      open: this.props.open,
      loading: this.props.loading,
      loading_clients: false,
      quotation_id: null,
      client_id: {},
      user_name:'',
      client_name: '',
      client_job: '',
      client_phone: '',
      car_brand: '',
      car_color: '',
      car_kms: '',
      car_model: '',
      car_plates: '',
      car_vin: '',
      car_year: '',      
      clients: [],
      quotation_folio: "",
      notes: "",
      products: [],
      services: [],
      total: 0,
      payments: [],
      total_payments: 0,
      prueba: '',
    };

    if (props.fields) {
      if (props.fields.client_id) {
        initial_state.client_id = props.fields.client_id;
      }
      if (props.fields.client_name) {
        initial_state.client_name = props.fields.client_name;
    }
    if (props.fields.client_job) {
      initial_state.client_job = props.fields.client_job;
  }
      if (props.fields.client_phone) {
        initial_state.client_job = props.fields.client_job;
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
    this.getQuotations = this.getQuotations.bind(this);
    this.getPayments = this.getPayments.bind(this);

    this.onChangeField = this.onChangeField.bind(this);
    this.onChangeDropdown = this.onChangeDropdown.bind(this);
    this.onChangeClient = this.onChangeClient.bind(this);
    this.onChangeCar = this.onChangeCar.bind(this);

    this.onErrorOrderCreatorVentas = this.onErrorOrderCreatorVentas.bind(this);
    
    this.onChangeOrderCreatorVentas = this.onChangeOrderCreatorVentas.bind(this);
    this.onChangeClientInfo = this.onChangeClientInfo.bind(this);

    this.scrollContainer = React.createRef();
  }

  componentDidMount() {
    if (this.props.fields) {
      this.getPayments();
    }
  }

  componentWillReceiveProps(nextProps) {
    // check the state for recovered data values from dropdowns DB:
    // compare and set manually with setfield....
    this.setState({
      error: nextProps.error,
      loading: nextProps.loading,
    });
  }

  getPayments() {
    const url = process.env.REACT_APP_API_URL + "/payments";
    if(false){
    }
    
    let POSTDATA = {
      limit: 50,
      page: 1,
      filters: {},
    };
    FetchXHR(url, "POST", POSTDATA)
      .then((response) => {
        if (response.json.success) {
          let total_payments = 0;
          const payments = response.json.data.docs.map((el, index) => {
            total_payments += el.total;
            return {
              ...el,
              key: index,
            };
          });
          this.setState({
            total_payments,
            payments,
          });
        } else {
          this.scrollToAlert();
          this.setState({
            error: response.message,
          });
        }
      })
      .catch((onError) => {
        this.scrollToAlert();
        this.setState({
          error: onError.message,
        });
      });
  }

  getClients(search_text) {
    this.setState({
      loading_clients: true,
    });
    const url = process.env.REACT_APP_API_URL + "/clients";
    const POSTDATA = {
      limit: 100,
      page: 1,
      search_text,
    };

    FetchXHR(url, "POST", POSTDATA).then((response) => {
     response.json.data.docs.map((el) => {
      if(el.name.search(search_text) != -1){
         console.log("Cliente: ", el.name) 
      }
     })
    }).catch(err => console.log(err))



    FetchXHR(url, "POST", POSTDATA).then((response) => {

      var el3 = '';
     /*  response.json.data.docs.map((el2, index2) => {
        console.log('----------------');
        console.log("Listado clientes: ", el2.name);        
      }) */
        if(true){
          
          this.setState({
            clients: response.json.data.docs.map((el, index) => ({
              ...el,
              key: index === 2,
            })),
            prueba: false,
          })
          console.log(clients);
        }
      

      }).catch((onError) => {
        console.log('Error: ', onError);
        this.scrollToAlert();
        this.setState({
          loading_clients: false,
          error: onError.message,
        });
      });
  }

  getQuotations(search_text) {
    this.setState({
      quotation_folio: search_text,
      loading_quotations: true,
    });
    const url = process.env.REACT_APP_API_URL + "/quotations";
    const POSTDATA = {
      limit: 100,
      page: 1,
      populate_ids: ["client_id", "subsidiary_id", "products.subsidiary_id"],
      filters: {
        client_name: search_text,
      },
    };
    FetchXHR(url, "POST", POSTDATA)
      .then((response) => {
        if (response.json.success) {
          if (response.json.data.docs.length >= 1) {
            const quotation = response.json.data.docs[0];
            const p = quotation.products.filter(
              (p) => p.subsidiary_id._id === this.props.session.subsidiary._id
            );
            let newTotal = 0;
            p.forEach((el) => {
              newTotal += el.total;
            });
            this.setState({
              quotation_id: quotation._id,
              client_id: quotation.client_id,
              loading_quotations: false,
              notes: quotation.notes,
              products: p,
              services: quotation.services,
              total: newTotal,
            });
          }
        } else {
          this.scrollToAlert();
          this.setState({
            loading_quotations: false,
            error: response.message,
          });
        }
      })
      .catch((onError) => {
        this.scrollToAlert();
        this.setState({
          loading_quotations: false,
          error: onError.message,
        });
      });
  }

  onChangeClientInfo(key, value) {   
    const newUser = JSON.parse(JSON.stringify(this.state.client_id));
    newUser[key] = value;
    this.setState({
      client_id: newUser,
    });
  }

  onChangeClient(client_id) {
    this.setState({
      client_id: this.state.clients.find((el) => el._id === client_id),
    });
  }

  onChangeCar(car_id) {
    this.setState({
      car_id,
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
    const url_get_product = process.env.REACT_APP_API_URL + '/product/';	
        FetchXHR(url_get_product, 'GET').then((response_actual_p) => {
          console.log('Response: ', response_actual_p);
        });
    event.preventDefault();
    // do validations:
    if (!isEmpty(this.state.client_id)) {
      if (this.state.products.length > 0 || this.state.services.length > 0) {
        console.log();
        let initialFolio = this.props.next_folio;                

        let Sell = {
          subsidiary_id: this.props.session.subsidiary._id,
          user_id: this.props.session.user._id,
          client_id: this.state.client_id._id,
          user_name: this.state.name,
          client_name: this.state.client_id.name,
          client_job: this.state.client_id.client_job,
          client_phone: this.state.client_id.phone_mobil,
          car_brand: this.state.client_id.car_brand,
          car_color: this.state.client_id.car_color,
          car_kms: this.state.client_id.car_kms,
          car_model: this.state.client_id.car_model,
          car_plates: this.state.client_id.car_plates,
          car_vin: this.state.client_id.car_vin,
          car_year: this.state.client_id.car_year,      
          notes: this.state.notes,
          products: this.state.products,
          services: this.state.services,
          total: this.state.total,      
          folio: initialFolio,    
          is_service: false,
          is_finished: true,
        };       
        if (this.state.quotation_id) {
          Sell["quotation_id"] = this.state.quotation_id;
        }
        // CUSTOM UPLOAD FUNCTION AND SEND THE NEW ARRAY TO CRUDLAYOUT
        let POSTDATA = {
          ...Sell,
          subsidiary_id: this.props.session.subsidiary._id,
          populate_ids: ["client_id"],
        };
        let method = "POST";
        let url = process.env.REACT_APP_API_URL + "/sell";
        if (this.props.fields) {
          method = "PUT";
          url = process.env.REACT_APP_API_URL + "/sell/" + this.props.fields._id;
        }

        const client_url = process.env.REACT_APP_API_URL + "/client/" + this.state.client_id._id;
        FetchXHR(client_url, "PUT", this.state.client_id);

        // group products for calculate minus stock.... and exclude the already saved products.
        // check for relationships and save it apart in her owns models
        FetchXHR(url, method, POSTDATA).then((response) => {
            if (response.json.success) {
              const saved_sell = response.json.obj;
              const quotation_url = process.env.REACT_APP_API_URL + "/quotation/" + this.state.quotation_id;

              FetchXHR(quotation_url, "PUT", { sell_id: saved_sell._id });
              const OperationsProducts = [];
              let mapped_products_stock = {}; // product_id -> sum_quantity.
              let actual_max_stock = {};
              this.state.products.forEach((p) => {
                if (!p._id) {
                  if (mapped_products_stock[p.id]) {
                    mapped_products_stock[p.id] += p.quantity;
                  } else {
                    mapped_products_stock[p.id] = p.quantity;
                  }

                  if (actual_max_stock[p.id]) {
                    actual_max_stock[p.id] = Math.max(
                      actual_max_stock[p.id],
                      p.old_stock
                    );
                  } else {
                    actual_max_stock[p.id] = p.old_stock;
                  }
                }
              });

              Object.keys(mapped_products_stock).forEach((el) => {
                OperationsProducts.push((callback) => {
                  const new_p = {
                    stock: actual_max_stock[el] - mapped_products_stock[el],
                  };
                  const url_put_product =
                    process.env.REACT_APP_API_URL + "/product/" + el;
                  FetchXHR(url_put_product, "PUT", new_p).then((response_p) => {
                    if (response_p.json.success) {
                      callback(null, response_p.json.obj);
                    }
                  });
                });
              });

              /* FetchXHR(process.env.REACT_APP_API_URL + "/sell/" + this.props.fields._id, 'PUT').then(resp => {
                console.log('Respuesta: ', resp);
              }) */
              
              this.state.products.forEach((p) => {
                console.log(this.state.products);
                console.log(p.key_id);
                console.log(p.fmsi);
                OperationsProducts.push((callback) => {
                  //create transaction obj...
                  const new_transaction = {
                    subsidiary_id: this.props.session.subsidiary._id,
                    product_id: p.id,
                    user_id: p.user_id,
                    key_id: p.key_id,
                    fmsi: p.fmsi,
                    client_name:this.state.client_id.name,                     
                    old_stock: p.old_stock,
                    quantity: p.quantity,                    
                    price: p.price,
                    discount: p.discount,
                    total: p.total,
                    type: "VENTA",
                    folio: initialFolio,
                    invoice_folio: p.invoice_folio,
                    date: moment().toISOString(),

                  };
                  const url_post_op =
                    process.env.REACT_APP_API_URL + "/product-transaction";
                  FetchXHR(url_post_op, "POST", new_transaction).then(
                    (response_pt) => {
                      if (response_pt.json.success) {
                        callback(null, response_pt.json.obj);
                      }
                    }
                  );
                });
              });
              
              async.series(OperationsProducts, (err, responses) => {
                if (!err) {
                  this.props.onCustomSubmit(saved_sell);
                } else {
                  this.scrollToAlert();
                  this.setState({
                    error: "Error al procesar la petición",
                    loading_submit: false,
                  });
                }
              });
            } else {
              this.scrollToAlert();
              this.setState({
                error: response.json.message,
                loading_submit: false,
              });
            }
          })
          .catch((onError) => {
            this.scrollToAlert();
            this.setState({
              error: onError.message,
              loading_submit: false,
            });
          });
      } else {
        this.scrollToAlert();
        this.setState({
          error: "Agregar algun producto o servicio o paquete a la cotización.",
        });
      }
    } else {
      this.scrollToAlert();
      this.setState({
        error: "Seleccionar algun cliente.",
      });
    }
  };

  onClose = (event) => {
    event.preventDefault();
    // do validations:
    if (!isEmpty(this.state.client_id)) {
      if (this.state.products.length > 0 || this.state.services.length > 0) {
        let Sell = {
          subsidiary_id: this.props.session.subsidiary._id,
          user_id: this.props.session.user._id,
          client_id: this.state.client_id._id,
          user_name: this.state.name,
          client_name: this.state.client_id.name,
          client_job: this.state.client_id.client_job,
          client_phone: this.state.client_id.phone_mobil,
          car_brand: this.state.client_id.car_brand,
          car_color: this.state.client_id.car_color,
          car_kms: this.state.client_id.car_kms,
          car_model: this.state.client_id.car_model,
          car_plates: this.state.client_id.car_plates,
          car_vin: this.state.client_id.car_vin,
          car_year: this.state.client_id.car_year,      
          notes: this.state.notes,
          products: this.state.products,
          services: this.state.services,
          total: this.state.total,
          is_service: false,
          is_finished: true,
        };
        if (this.state.quotation_id) {
          Sell["quotation_id"] = this.state.quotation_id;
        }
        // CUSTOM UPLOAD FUNCTION AND SEND THE NEW ARRAY TO CRUDLAYOUT
        let POSTDATA = {
          ...Sell,
          subsidiary_id: this.props.session.subsidiary._id,
          populate_ids: ["client_id"],
        };
        let method = "POST";
        let url = process.env.REACT_APP_API_URL + "/sell";
        if (this.props.fields) {
          method = "PUT";
          url = process.env.REACT_APP_API_URL + "/sell/" + this.props.fields._id;
        }

        const client_url = process.env.REACT_APP_API_URL + "/client/" + this.state.client_id._id;
        FetchXHR(client_url, "PUT", this.state.client_id);

        // group products for calculate minus stock.... and exclude the already saved products.
        // check for relationships and save it apart in her owns models
        FetchXHR(url, method, POSTDATA).then((response) => {
            if (response.json.success) {
              const saved_sell = response.json.obj;
              const quotation_url = process.env.REACT_APP_API_URL + "/quotation/" + this.state.quotation_id;

              FetchXHR(quotation_url, "PUT", { sell_id: saved_sell._id });
              const OperationsProducts = [];
              let mapped_products_stock = {}; // product_id -> sum_quantity.
              let actual_max_stock = {};
              this.state.products.forEach((p) => {
                if (!p._id) {
                  if (mapped_products_stock[p.id]) {
                    mapped_products_stock[p.id] += p.quantity;
                  } else {
                    mapped_products_stock[p.id] = p.quantity;
                  }

                  if (actual_max_stock[p.id]) {
                    actual_max_stock[p.id] = Math.max(
                      actual_max_stock[p.id],
                      p.old_stock
                    );
                  } else {
                    actual_max_stock[p.id] = p.old_stock;
                  }
                }
              });

              Object.keys(mapped_products_stock).forEach((el) => {
                OperationsProducts.push((callback) => {
                  const new_p = {
                    stock: actual_max_stock[el] - mapped_products_stock[el],
                  };
                  const url_put_product =
                    process.env.REACT_APP_API_URL + "/product/" + el;
                  FetchXHR(url_put_product, "PUT", new_p).then((response_p) => {
                    if (response_p.json.success) {
                      callback(null, response_p.json.obj);
                    }
                  });
                });
              });


              async.series(OperationsProducts, (err, responses) => {
                if (!err) {
                  this.props.onCustomSubmit(saved_sell);
                } else {
                  this.scrollToAlert();
                  this.setState({
                    error: "Error al procesar la petición",
                    loading_submit: false,
                  });
                }
              });
            } else {
              this.scrollToAlert();
              this.setState({
                error: response.json.message,
                loading_submit: false,
              });
            }
          })
          .catch((onError) => {
            this.scrollToAlert();
            this.setState({
              error: onError.message,
              loading_submit: false,
            });
          });
      } else {
        this.scrollToAlert();
        this.setState({
          error: "Agregar algun producto o servicio o paquete a la cotización.",
        });
      }
    } else {
      this.scrollToAlert();
      this.setState({
        error: "Seleccionar algun cliente.",
      });
    }
  };

  scrollToAlert = () => {
    this.alertDiv.scrollIntoView({ behavior: "smooth" });
  };

  onErrorOrderCreatorVentas(err) {
    this.scrollToAlert();
    this.setState({
      error: err,
    });
  }

  onChangeOrderCreatorVentas(values) {
    this.setState({
      products: values.products,
      services: values.services,
      total: values.total,
    });
  }

  render() {
    
    let alert = "";
    if (this.state.error) {
      alert = (
        <Alert
          style={styles.alertContainer}
          message={"Error"}
          description={this.state.error}
          type="error"
          banner={true}
          showIcon={true}
          closable={true}
          onClose={() => {
            this.props.dismissError();
          }}
        />
      );
    }

    let ModalButtons = [
      <Button
        key="submit"
        type="primary"
        loading={this.state.loading}
        onClick={this.onSubmit}
      >
        Guardar
      </Button>,
    ];

    const optionClients = this.state.clients.map((item, index) => {  
         
          return (
            <Select.Option value={item._id} key={`${item._id} - ${index}`}>
              {item.name}
            </Select.Option>
          );
        }
    );

    const OptionsTypes = ["PUBLICO", "MAYOREO", "CREDITO TALLER", "TALLER"].map(
      (item, index) => {
        return (
          <Select.Option value={item} key={`${item} - ${index}`}>
            {item}
          </Select.Option>
        );
      }
    );

    let CardContent = (
      <div style={styles.cardInitialText}>
        {" "}
        Favor de buscar y seleccionar un cliente.{" "}
      </div>
    );


    //Validación para mostrar la info del cliente segun su _id
    if (this.state.client_id._id) {
      CardContent = (
        <Fragment>
          <Card.Grid style={styles.grid_element}>
            <p style={styles.label_title}>Dirección: </p>
            <Input
              disabled={
                this.props.is_disabled || this.props.fields ? true : false
              }
              key="user_address"
              placeholder="Dirección"
              style={styles.inputSearchCard}
              value={this.state.client_id.address}
              onChange={(e) => {
                this.onChangeClientInfo("address", e.target.value);
              }}
            />
          </Card.Grid>
          <Card.Grid style={styles.grid_element}>
            <p style={styles.label_title}>RFC:</p>
            <Input
              disabled={
                this.props.is_disabled || this.props.fields ? true : false
              }
              key="user_rfc"
              placeholder="RFC"
              style={styles.inputSearchCard}
              value={this.state.client_id.rfc}
              onChange={(e) => {
                this.onChangeClientInfo("rfc", e.target.value);
              }}
            />
          </Card.Grid>           
          <Card.Grid style={styles.grid_element}>
          <Select
            showSearch
            onFocus={() => {
              
            }}
            disabled={
              this.props.is_disabled ||
              (this.props.fields && this.props.session.user.rol !== "ADMIN")
            }
            value={this.state.price_type}
            style={styles.inputElement1}
            placeholder="TIPO PRECIO"
            optionFilterProp="children"
            onChange={(value) => {
              this.onChangeDropdown(value, "price_type");
            }}
          >
            {OptionsTypes}           
           
          </Select>

          </Card.Grid>

          <Card.Grid style={styles.grid_element}>
            <p style={styles.label_title}>Email:</p>
            <Input
              disabled={
                this.props.is_disabled || this.props.fields ? true : false
              }
              key="user_email"
              placeholder="Email"
              style={styles.inputSearchCard}
              value={this.state.client_id.email}
              onChange={(e) => {
                this.onChangeClientInfo("email", e.target.value);
              }}
            />
          </Card.Grid>
          <Card.Grid style={styles.grid_element}>
            <p style={styles.label_title}>Teléfono:</p>
            <Input
              disabled={
                this.props.is_disabled || this.props.fields ? true : false
              }
              key="user_phone_number"
              placeholder="Teléfono"
              style={styles.inputSearchCard}
              value={this.state.client_id.phone_number}
              onChange={(e) => {
                this.onChangeClientInfo("phone_number", e.target.value);
              }}
            />
          </Card.Grid>
          <Card.Grid style={styles.grid_element}>
            <p style={styles.label_title}>Móvil:</p>
            <p style={styles.label_value}>{this.state.client_id.phone_mobil}</p>
          </Card.Grid>
          <Card.Grid style={styles.grid_element}>
            <p style={styles.label_title}>Compras:</p>
            <p style={styles.label_value}>${this.state.client_id.sells}</p>
          </Card.Grid>
          <Card.Grid style={styles.grid_element}>
            <p style={styles.label_title}>Crédito:</p>
            <Input
              disabled={
                this.props.is_disabled || this.props.fields ? true : false
              }
              key="user_credit"
              placeholder="Crédito"
              style={styles.inputSearchCard}
              value={this.state.client_id.credit_days}
              onChange={(e) => {
                this.onChangeClientInfo("credit_days", e.target.value);
              }}
            />
          </Card.Grid>
        </Fragment>
      );
    }

    let PaymentsModel = "";
    if (this.state.payments.length > 0) {
      const payments_table_columns = [
        {
          title: "Fecha",
          dataIndex: "date",
          key: "date",
          render: RenderRows.renderRowDate,
          width: "20%",
        },
        {
          title: "Folio",
          dataIndex: "folio",
          key: "folio",
          width: "20%",
        },
        {
          title: "Tipo",
          dataIndex: "type",
          key: "type",
          width: "10%",
        },
        {
          title: "Banco",
          dataIndex: "bank",
          key: "bank",
          width: "20%",
        },
        {
          title: "Referencia",
          dataIndex: "reference",
          key: "reference",
          width: "20%",
        },
        {
          title: "Total",
          dataIndex: "total",
          key: "total",
          render: RenderRows.renderRowNumber,
          width: "10%",
        },
      ];

      PaymentsModel = (
        <Fragment>
          <Divider> Pagos </Divider>
          <Table
            bordered
            size="small"
            scroll={{ y: 200 }}
            style={styles.tableLayout}
            columns={payments_table_columns}
            dataSource={this.state.payments}
            locale={{
              filterTitle: "Filtro",
              filterConfirm: "Ok",
              filterReset: "Reset",
              emptyText: "Sin Datos",
            }}
          />          
        </Fragment>
      );
    }

    let title = this.props.title;
    if (this.props.next_folio) {
      title += "    | FOLIO: #" + this.props.next_folio;
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
          <div key="sub_modal_container" style={styles.modalInBodyContainer}>
            <div ref={(el) => (this.alertDiv = el)} />
            {alert}
            <div style={styles.inputsContainer}>
              <div style={styles.inputsRowContainer}>
              
                <Card
                  title="Información de cliente"
                  extra={
                    <Fragment>                        
                          <Select
                            showSearch
                            onFocus={() => {
                              
                            }}
                            disabled={
                              this.props.is_disabled ||
                              (this.props.fields && this.props.session.user.rol !== "ADMIN")
                            }
                            value={this.state.client_id.name}
                            style={styles.inputSearchClient}
                            placeholder="Buscar cliente..."
                            optionFilterProp="children"
                            onSearch={(value) => {
                              this.getClients(value);
                            }}
                            onChange={(value) => {
                              this.onChangeClient(value);
                            }}
                            notFoundContent={
                              this.state.loading_clients ? (
                                <Spin size="small" />
                              ) : true
                            }
                          >
                           {optionClients}
           
                          </Select>
                          <Input.Search
                            disabled={
                              this.props.is_disabled || this.props.fields
                                ? true
                                : false
                            }
                            key="search_filter"
                            placeholder="Folio"
                            enterButton="Buscar"
                            onSearch={this.getQuotations}
                            style={styles.inputSearch}
                          />
                                            
                      </Fragment>
                  }

                  style={styles.cardContainer}
                  bodyStyle={styles.cardBody}
                >
                  {CardContent}
                  
                </Card>

                <div style={styles.cardInitialText}>
                <OrderCreatorClients
                    isSell
                    can_edit_price                           
                    can_edit_description  
                    can_edit_quantity={true}
                    can_edit_disccount={true}
                    is_recovered={this.state.quotation_folio !== "" ? true : false}
                    disabled={this.props.is_disabled}
                    onError={this.onErrorOrderCreatorVentas}
                    onChange={this.onChangeOrderCreatorVentas}
                    price_type={this.state.price_type}
                    session={this.props.session}
                    init_data={{
                      products: this.props.fields
                        ? this.props.fields.products
                        : this.state.products,
                      services: this.props.fields
                        ? this.props.fields.services
                        : this.state.services,
                      total: this.props.fields
                        ? this.props.fields.total
                        : this.state.total,
                    }}
                    update_data={{
                      products: this.state.products,
                      services: this.state.services,
                      total: this.state.total,
                    }}
                />
                </div>                
              </div>
              <div style={styles.inputsRowContainer}>
                <Input.TextArea
                  disabled={this.props.is_disabled}
                  style={styles.inputElement}
                  value={this.state.notes}
                  autosize={{ minRows: 2, maxRows: 6 }}
                  placeholder="Notas adicionales..."
                  onChange={(value) => {
                    this.onChangeField(value, "notes");
                  }}
                />
              </div>
            </div>
            <div style={styles.cardInitialText}>
                <OrderReception
                    isSell
                    can_edit_price                           
                    can_edit_description  
                    can_edit_quantity={true}
                    can_edit_disccount={true}
                    is_recovered={this.state.quotation_folio !== "" ? true : false}
                    disabled={this.props.is_disabled}
                    onError={this.onErrorOrderCreatorVentas}
                    onChange={this.onChangeOrderCreatorVentas}
                    price_type={this.state.price_type}
                    session={this.props.session}
                    init_data={{
                      products: this.props.fields
                        ? this.props.fields.products
                        : this.state.products,
                      services: this.props.fields
                        ? this.props.fields.services
                        : this.state.services,
                      total: this.props.fields
                        ? this.props.fields.total
                        : this.state.total,
                    }}
                    update_data={{
                      products: this.state.products,
                      services: this.state.services,
                      total: this.state.total,
                    }}
                />
                
              </div>
            <OrderCreatorVentas
              isSell
              can_edit_price                           
              can_edit_description  
              can_edit_quantity={true}
              can_edit_disccount={true}
              is_recovered={this.state.quotation_folio !== "" ? true : false}
              disabled={this.props.is_disabled}
              onError={this.onErrorOrderCreatorVentas}
              onChange={this.onChangeOrderCreatorVentas}
              price_type={this.state.price_type}
              session={this.props.session}
              init_data={{
                products: this.props.fields
                  ? this.props.fields.products
                  : this.state.products,
                services: this.props.fields
                  ? this.props.fields.services
                  : this.state.services,
                total: this.props.fields
                  ? this.props.fields.total
                  : this.state.total,
              }}
              update_data={{
                products: this.state.products,
                services: this.state.services,
                total: this.state.total,
              }}
            />
            {PaymentsModel}
          </div>
        </Modal>
      </Fragment>
    );
  }
}
export default CreateSell;