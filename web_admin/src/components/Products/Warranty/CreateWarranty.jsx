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
import { FetchXHR, formatNumber } from "../../../helpers/generals";
import isEmpty from "lodash/isEmpty";
//import OrderCreator from "../../helpers/OrderCreator/OrderCreator";
import RenderRows from "../../../helpers/render_rows";
import async from "async";
import moment from "moment";
import FormGenerator from "../../FormGenerator/FormGenerator";
import Schema from '../../Clients/ClientsSchema';
import PrinterDownload from '../../PrinterDownload/PrinterDownload';
import CrudLayoutClientsSell from '../../CrudLayout/CrudLayoutClientsSell';
import OrderCreatorClients from '../../../helpers/OrderCreator/OrderCreatorClients';
import OrderCreatorWarranty from "../../../helpers/OrderCreator/OrderCreatorWarranty";

class CreateWarranty extends CrudLayoutClientsSell {
  
  constructor(props) {
    super(props);
    this.schema = Schema;
    
    let initial_state = {
      error: this.props.error,
      open: this.props.open,
      loading: this.props.loading,
      loading_clients: false,
      client_id: {},
      client_name: '',      
      clients: [],
      notes: "",
      products: [],
      total: 0,
      payments: [],
      total_payments: 0,
    };

    if (props.fields) {
      if (props.fields.client_id) {
        initial_state.client_id = props.fields.client_id;
      }
      if (props.fields.client_name) {
        initial_state.client_name = props.fields.client_name;
    }   
      if (props.fields.products) {
        initial_state.products = props.fields.products;
      }
      if (props.fields.total) {
        initial_state.total = props.fields.total;
      }
    }

    this.state = initial_state;

    this.getClients = this.getClients.bind(this);
    this.getPayments = this.getPayments.bind(this);

    this.onChangeField = this.onChangeField.bind(this);
    this.onChangeDropdown = this.onChangeDropdown.bind(this);
    this.onChangeClient = this.onChangeClient.bind(this);

    this.onErrorOrderCreatorWarranty = this.onErrorOrderCreatorWarranty.bind(this);
    
    this.onChangeOrderCreatorWarranty = this.onChangeOrderCreatorWarranty.bind(this);
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
      filters: {
        subsidiary_id: this.props.session.subsidiary._id,
        warranty_id: this.props.fields._id,
      },
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

    FetchXHR(url, "POST", POSTDATA)
      .then((response) => {
        if (response.json.success) {
          this.setState({
            clients: response.json.data.docs.map((el, index) => ({
              ...el,
              key: index,
            })),
            loading_users: false,
          });
        } else {
          this.scrollToAlert();
          this.setState({
            loading_clients: false,
            error: response.message,
          });
        }
      })
      .catch((onError) => {
        this.scrollToAlert();
        this.setState({
          loading_clients: false,
          error: onError.message,
        });
      });
  }

  onChangeClientInfo(key, value) {
    console.log(key, value);
    console.log(this.state.client_id);
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
    if (!isEmpty(this.state.client_id)) {
      if (this.state.products.length > 0 || this.state.services.length > 0) {
        let Warranty = {
          subsidiary_id: this.props.session.subsidiary._id,
          user_id: this.props.session.user._id,
          client_id: this.state.client_id._id,
          client_name: this.state.client_id.name,          
          notes: this.state.notes,
          products: this.state.products,          
          total: this.state.total,          
          is_finished: true,
        };      
        // CUSTOM UPLOAD FUNCTION AND SEND THE NEW ARRAY TO CRUDLAYOUT
        let POSTDATA = {
          ...Warranty,
          subsidiary_id: this.props.session.subsidiary._id,
          populate_ids: ["client_id"],
        };
        let method = "POST";
        let url = process.env.REACT_APP_API_URL + "/warranty";
        if (this.props.fields) {
          method = "PUT";
          url = process.env.REACT_APP_API_URL + "/warranty/" + this.props.fields._id;
        }

        const client_url = process.env.REACT_APP_API_URL + "/client/" + this.state.client_id._id;
        FetchXHR(client_url, "PUT", this.state.client_id);

        // group products for calculate minus stock.... and exclude the already saved products.
        // check for relationships and save it apart in her owns models
        FetchXHR(url, method, POSTDATA).then((response) => {
            if (response.json.success) {
              const saved_sell = response.json.obj;                           
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
                    process.env.REACT_APP_API_URL + "/warranty/" + el;
                  FetchXHR(url_put_product, "PUT", new_p).then((response_p) => {
                    if (response_p.json.success) {
                      callback(null, response_p.json.obj);
                    }
                  });
                });
              });

              this.state.products.forEach((p) => {
                OperationsProducts.push((callback) => {
                  //create transaction obj...
                  const new_transaction = {
                    subsidiary_id: this.props.session.subsidiary._id,
                    product_id: p.id,
                    user_id: p.user_id,
                    quantity: p.quantity,                    
                    price: p.price,
                    discount: p.discount,
                    total: p.total,
                    type: "VENTA",
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

  scrollToAlert = () => {
    this.alertDiv.scrollIntoView({ behavior: "smooth" });
  };

  onErrorOrderCreatorWarranty(err) {
    this.scrollToAlert();
    this.setState({
      error: err,
    });
  }

  onChangeOrderCreatorWarranty(values) {
    this.setState({
      products: values.products,      
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
      <Button key="cancel" onClick={this.props.onClose}>
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
        <Button key="cancel" onClick={this.props.onClose}>
          Cerrar
        </Button>,
      ];
    }

    const OptionsClients = this.state.clients.map((item, index) => {
      return (
        <Select.Option value={item._id} key={`${item._id} - ${index}`}>
          {item.name}
        </Select.Option>
      );
    });

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
    if (this.state.client_id._id) {
      CardContent = (
        <Fragment>                   
          <Card.Grid style={styles.grid_element}>
          <Select
            showSearch
            onFocus={() => {
              console.log(this);
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
                        disabled={
                          this.props.is_disabled || this.props.fields
                            ? true
                            : false
                        }
                        showSearch
                        value={this.state.client_id.name}
                        placeholder={"Buscar Cliente..."}
                        style={styles.inputSearchClient}
                        defaultActiveFirstOption={false}
                        showArrow={false}
                        filterOption={false}
                        onSearch={(value) => {
                          this.getClients(value);
                        }}
                        onChange={(value) => {
                          this.onChangeClient(value);
                        }}
                        notFoundContent={
                          this.state.loading_clients ? (
                            <Spin size="small" />
                          ) : null
                        }
                      >
                        {OptionsClients}
                      </Select>                     
                    </Fragment>
                  }
                  style={styles.cardContainer}
                  bodyStyle={styles.cardBody}
                >
                  {CardContent}
                  
                </Card>

                <Fragment>
                <OrderCreatorClients
                    isWarranty
                    can_edit_price                           
                    can_edit_description  
                    can_edit_quantity={true}
                    can_edit_disccount={true}
                    is_recovered={this.state.quotation_folio !== "" ? true : false}
                    disabled={this.props.is_disabled}
                    onError={this.onErrorOrderCreatorWarranty}
                    onChange={this.onChangeOrderCreatorWarranty}
                    price_type={this.state.price_type}
                    session={this.props.session}
                    init_data={{
                      products: this.props.fields
                        ? this.props.fields.products
                        : this.state.products,                      
                      total: this.props.fields
                        ? this.props.fields.total
                        : this.state.total,
                    }}
                    update_data={{
                      products: this.state.products,                    
                      total: this.state.total,
                    }}
                />
                </Fragment>
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
            <OrderCreatorWarranty
              isWarranty
              can_edit_price                           
              can_edit_description  
              can_edit_quantity={true}
              can_edit_disccount={true}
              is_recovered={this.state.quotation_folio !== "" ? true : false}
              disabled={this.props.is_disabled}
              onError={this.onErrorOrderCreatorWarranty}
              onChange={this.onChangeOrderCreatorWarranty}
              price_type={this.state.price_type}
              session={this.props.session}
              init_data={{
                products: this.props.fields
                  ? this.props.fields.products
                  : this.state.products,                
                total: this.props.fields
                  ? this.props.fields.total
                  : this.state.total,
              }}
              update_data={{
                products: this.state.products,               
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
export default CreateWarranty;