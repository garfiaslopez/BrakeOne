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
    Select,
    Popconfirm,
    Divider,
    Input,
    Pagination
} from 'antd';
import styles from './Styles';
import { FetchXHR } from '../../helpers/generals';
import moment from 'moment';
import RenderRows from '../render_rows';
import isNumber from 'lodash/isNumber';
import { EditableFormRow, EditableCell } from './TableHelpers';
import CrudLayout from '../../components/CrudLayout/CrudLayout';
import isEmpty from "lodash/isEmpty";
const FontTable = 12;
const round2 = (number) => (Math.round(number * 100) / 100);

const renderRowSmall = (text, record) => {
    return ({
        children: <p style={{fontSize: FontTable}}>{text}</p>,
    });
}
const renderRowSmallTruncate = (text, record) => {
    if (text) {
        return ({
            children: <p style={{fontSize: FontTable}}>{text.length > 5000 ? text.substring(0,25) + '...' : text}</p>,
        });
    }
    return '';
}
const renderRowSmallPercent = (text, record) => {
    return ({
        children: <p style={{fontSize: FontTable}}>%{String(round2(text ? text : 0)).replace(/\B(?=(\d{3})+(?!\d))/g, ',')}</p>,
    });
}
const renderRowSmallPrec = (text, record) => {
    return ({
        children: <p style={{fontSize: FontTable}}>${String(round2(text ? text : 0)).replace(/\B(?=(\d{3})+(?!\d))/g, ',')}</p>,
    });
}

const renderRowSmallNumber = (text, record) => {
    return ({
        children: <p style={{fontSize: FontTable}}>${String(round2(text ? text : 0)).replace(/\B(?=(\d{3})+(?!\d))/g, ',')}</p>,
    });
}

const renderRow = (text, record) => {
    return ({
        props: {
            style: { background: record.subsidiary_id ? record.subsidiary_id.color : '#8FC7FF' },
        },
        children: <p style={{fontSize: FontTable}}>{text}</p>,
    });
}


const renderTruncateRow = (text, record) => {
    return ({
        props: {
            style: { background: record.subsidiary_id ? record.subsidiary_id.color : '#8FC7FF'  },
        },
        children: <p style={{fontSize: FontTable}}>{text}</p>,
    });
}

const renderRowNumber = (text, record) => {
    return ({
        props: {
            style: { background: record.subsidiary_id ? record.subsidiary_id.color : '#8FC7FF' },
        },
        children: <p style={{fontSize: FontTable}}>${String(round2(text ? text : 0)).replace(/\B(?=(\d{3})+(?!\d))/g, ',')}</p>,
    });
}


class OrderCreatorVentas extends CrudLayout {


	//Contiene las tablas para agregar nuevas ventas
    constructor(props) {
	
        super(props);
        const init_selected_data = [];

        if (props.init_data) {
            if (props.init_data.products) {
                props.init_data.products.forEach((el, index) => {init_selected_data.push({key: index, ...el, type: el.fmsi ? 'product' : 'service'})});
            }
            if (props.init_data.services) {
                props.init_data.services.forEach((el, index) => {init_selected_data.push({key: index, ...el, type: el.fmsi ? 'product' : 'service'})});
            }
        }

        this.state = {
            loading_data: false,
            results_data: [],
            users: [],
            initial_length_data: init_selected_data.length - 1,
            selected_data: init_selected_data,
            price_type: props.price_type,
            selected_quantity: 1,
            selected_discount: undefined,
			selected_user: {},
			user_id: {},
			total: props.init_data.total | 0,
            products: props.init_data.products,
			client_id: {},            
        }

		

        this.scroll_table = 300;
        this.table_columns_results = [
            {
            	title: <div style={{ fontSize: FontTable }}>Sucursal</div>,
            	dataIndex: 'subsidiary_id.denomination',
			    key: 'subsidiary_id.denomination',
                render: renderRow,
                width: '8%',               
            },
            {
            	title: <div style={{ fontSize: FontTable }}>FMSI</div>,
            	dataIndex: 'fmsi',
			      	key: 'fmsi',
              render: renderTruncateRow,
              width: '8%'
            },
            {
              title: <div style={{ fontSize: FontTable }}>Clave</div>,
            	dataIndex: 'key_id',
				      key: 'key_id',
              render: renderRow,
              width: '8%'
            },
            {
              title: <div style={{ fontSize: FontTable }}>Linea</div>,
            	dataIndex: 'line',
				      key: 'line',
              render: renderRow,
              width: '8%'
            },
            {
              title: <div style={{ fontSize: FontTable }}>Marca</div>,
              dataIndex: 'brand',
              key: 'brand',
              render: renderRow,
              width: '8%'
			},
			{
        title: <div style={{ fontSize: FontTable }}>Descripción</div>,
        dataIndex: 'description',
				key: 'description',
        render: renderTruncateRow,
        width: '15%'
            },
      {
        title: <div style={{ fontSize: FontTable }}>Costo</div>,
        dataIndex: 'price',
        key: 'price',
        render: renderRowNumber,
        width: '8%'
			},
			{
                title: <div style={{ fontSize: FontTable }}>Publico</div>,
            	dataIndex: 'price_public',
            	key: 'price_public',
                render: renderRowNumber,
                width: '8%'
			},
			{
                title: <div style={{ fontSize: FontTable }}>Taller</div>,
            	dataIndex: 'price_workshop',
            	key: 'price_workshop',
                render: renderRowNumber,
                width: '8%'
			},
			{
                title: <div style={{ fontSize: FontTable }}>Mayoreo</div>,
            	dataIndex: 'price_wholesale',
            	key: 'price_wholesale',
                render: renderRowNumber,
                width: '8%'
			},
			{
                title: <div style={{ fontSize: FontTable }}>Stock</div>,
            	dataIndex: 'stock',
				key: 'stock',
                render: renderRow,
                width: '15%'
			}
        ];

        this.table_columns_selected = [                      
			{
                title: <div style={{ fontSize: FontTable }}>Clave</div>,
            	dataIndex: 'key_id',
				key: 'key_id',
                render: renderRowSmall,
                width: '10%'
            },
            {
            	title: <div style={{ fontSize: FontTable }}>FMSI</div>,
            	dataIndex: 'fmsi',
				key: 'fmsi',
                render: renderRowSmallTruncate,
                width: '10%'
            },  
			{
                title: <div style={{ fontSize: FontTable }}>Concepto</div>,
                render: renderRowSmallTruncate,
            	dataIndex: 'description',
                key: 'description',
                width: '20%',
				editable: props.can_edit_disccount,
            },    
			{
                title: <div style={{ fontSize: FontTable }}>Cant.</div>,
            	dataIndex: 'quantity',
                key: 'quantity',
                render: renderRowSmall,
                width: '10%',
                editable: props.can_edit_quantity,
            },     
			{
                title: <div style={{ fontSize: FontTable }}>Precio</div>,
                render: renderRowSmallPrec,
            	dataIndex: 'price',
                key: 'price',
                width: '10%',
                editable: props.can_edit_price,
			}, 
			{
                title: <div style={{ fontSize: FontTable }}>Descuento</div>,
                render: renderRowSmallPercent,
            	dataIndex: 'discount',
                key: 'discount',
                width: '10%',
                editable: props.can_edit_disccount,
			},                      				                      
			{
                title: <div style={{ fontSize: FontTable }}>Importe</div>,
                render: renderRowSmallNumber,
            	dataIndex: 'total',
                key: 'total',
                width: '10%'
			}
        ];

        if (this.props.is_quotation) {
            this.table_columns_selected.unshift({
            	title: <div style={{ fontSize: FontTable }}>Sucursal</div>,
            	dataIndex: 'subsidiary_id.denomination',
			        	key: 'subsidiary_id.denomination',
                render: renderRow,
                width: '5%',
                filters: [
                  { text: 'PORTALES', value: 'PORTALES' },
                  { text: 'QRO', value: 'QRO'},                  
                ],
            });
        }

			//Acciones al arrastrar productos a Orden de venta
			this.table_columns_selected.push({
                title: <div style={{ fontSize: FontTable }}>Acciones</div>,
                key: 'action',
                width: '40%',
                render: (text, record) => {
                    if(!record._id) {						
                        return (
                            <span>
                               <Popconfirm
								onClick={(event)=> {
									event.stopPropagation();
								}}
								title="¿Estas seguro de eliminar?" 
								okText="De acuerdo"
								cancelText="Cancelar"
								onCancel={(event) => {
									event.stopPropagation();
								}}
								onConfirm={(event) => {
									event.stopPropagation();
									this.deleteList(record);
								}}
							>
							<b>Eliminar</b>
								<Button 								    
									type="danger" 
									shape="circle"
									icon="minus"
								/>
							</Popconfirm>	
							<Divider type="vertical" />	                            	
                            </span>
                        );
                    }
                    return <div></div>;
                },
		  	});
		

        this.onChangeQuantity = this.onChangeQuantity.bind(this);
		
        this.onChangeUser = this.onChangeUser.bind(this);

        this.getUsers = this.getUsers.bind(this);
      /*   this.getData = this.getData.bind(this); */

        this.sendToOnChange = this.sendToOnChange.bind(this);
        this.deleteRecord = this.deleteRecord.bind(this);
        this.addRecord = this.addRecord.bind(this);
		
    }
	//Funcion para arrastrar productos a Orden de Venta
    componentWillReceiveProps(nextProps) {

        if (nextProps.price_type) {
            this.setState({
                price_type: nextProps.price_type
            });
        }
        if (nextProps.update_data) {
            const init_selected_data = [];
            if (nextProps.update_data.products) {
                nextProps.update_data.products.forEach((el, index) => {init_selected_data.push({key: index, ...el, type: el.fmsi ? 'product' : 'service'})});
            }
            if (nextProps.update_data.services) {

                nextProps.update_data.services.forEach((el, index) => {init_selected_data.push({key: init_selected_data.length + index, ...el, type: el.fmsi ? 'product' : 'service'})});
            }

            console.log("INITIAL STATE DATA");
            console.log(init_selected_data);
            this.setState({
                selected_data: init_selected_data,
                total: nextProps.update_data.total
            });
        }
    }

	//Desplazamiento hacia abajo
    scrollToBottom = () => {
        this.endView.scrollIntoView({ behavior: "smooth" });
    }
    
	//Cambio de la cantidad
    onChangeQuantity(value) {
        this.setState({
            selected_quantity: value
        });
    }
	//Cambio de usuario
    onChangeUser(user_id) {
        this.setState({
            selected_user: this.state.users.find((el) => (el._id === user_id))
        });
		
    }
	//Busqueda de usuarios
    getUsers() {
        this.setState({
			loading_users: true,
		});
		const url = process.env.REACT_APP_API_URL + '/users';
        const POSTDATA = {
            limit: 100,
            page: 1,
            search_text: this.state.search_user
		}
        FetchXHR(url, 'POST', POSTDATA).then((response) => {
            if (response.json.success) {
                this.setState({
					users: response.json.data.docs.map((el, index)=>({
						...el,
						key: index
                    })),
                    selected_user: this.props.session.user,
                    loading_users: false
                });
            } else {
                this.props.onError(response.message);
				this.setState({
					loading_users: false
				});
            }
        }).catch((onError) => {
            this.props.onError(onError.message);
			this.setState({
				loading_users: false
			});
        });
    }
	//Filtros busquedas de productos
    getData() {         
        this.setState({
			loading_data: true,
        });             
        const urlServices = process.env.REACT_APP_API_URL + '/services';
        const urlProducts = process.env.REACT_APP_API_URL + '/products';
        const urlPackages = process.env.REACT_APP_API_URL + '/product-packages';
        var POSTDATA = {
          limit: 50,
          page: 1,
          sort_field: 'stock',
          populate_ids: ['subsidiary_id'],
          filters: {},
        };
          
        
        let num;
        console.log("Prueba de insercción precios", num)
    
        FetchXHR(urlProducts, "POST", POSTDATA).then((response) => {    
    
            var prec1 = response.json.data.docs[0].total;var prec2 = response.json.data.docs[1].total;var prec3 = response.json.data.docs[2].total;var prec4 = response.json.data.docs[3].total;var prec5 = response.json.data.docs[4].total;var prec6 = response.json.data.docs[5].total;var prec7 = response.json.data.docs[6].total;var prec8 = response.json.data.docs[7].total;var prec9 = response.json.data.docs[8].total;var prec10 = response.json.data.docs[9].total;
            var prec11 = response.json.data.docs[10].total;var prec2 = response.json.data.docs[1].total;var prec3 = response.json.data.docs[2].total;var prec4 = response.json.data.docs[3].total;var prec5 = response.json.data.docs[4].total;var prec6 = response.json.data.docs[5].total;var prec7 = response.json.data.docs[6].total;var prec8 = response.json.data.docs[7].total;var prec9 = response.json.data.docs[8].total;var prec10 = response.json.data.docs[9].total;
            num = prec1 + prec2 + prec3 + prec4 + prec5 + prec6 + prec7 + prec8 + prec9 + prec10;
            //alert(totalPrec);   
           console.log("Precios totales", num)
    
        }).then (console.log(num))
    
        console.log(num)
     
    
        this.setState({
          loading_data: true,
        });
        
        if (this.additional_get_data) {
			POSTDATA['filters'] = this.additional_get_data;
		}
		if (this.sort_field) {
			POSTDATA['sort_field'] = this.sort_field;			
			POSTDATA['sort_order'] = this.sort_order;			
		} 
    
       
          if(this.search_text) {
            POSTDATA["or_filters"] = {};
            let busquedas = this.search_text;
            var caracter1 = this.search_text.charAt(0);
            var caracter2 = this.search_text.charAt(1);
            var caracter3 = this.search_text.charAt(2);
            var caracter4 = this.search_text.charAt(3);
            var caracter5 = this.search_text.charAt(4);
            var caracter6 = this.search_text.charAt(5);
            var caracter7 = this.search_text.charAt(6);		
    
            var iniciales = caracter1 + caracter2;
            var letras = caracter1 + caracter2 + caracter3;
            var tresletras = caracter1 + caracter2 + caracter3 + caracter4;
            var ultimas = caracter5 + caracter6 + caracter7;
    
            //Brembo con Xtra, Max y Normar
            if (
              iniciales === "A-" ||
              iniciales === "I-" ||
              iniciales === "a-" ||
              iniciales === "i-"
            ) {
              POSTDATA["search_text"] =
                this.search_text +
                " " +
                "&&" +
                this.search_text +
                "MAX" +
                " " +
                "&&" +
                this.search_text +
                "XTRA";
            }
            //Numeros largos Centric
            else if (
              tresletras === "320." ||
              tresletras === "905." ||
              tresletras === "412." ||
              tresletras === "406." ||
              tresletras === "116." ||
              tresletras === "117." ||
              tresletras === "122." ||
              tresletras === "227." ||
              tresletras === "301." ||
              tresletras === "105." ||
              tresletras === "104." ||
              tresletras === "102." ||
              tresletras === "121." ||
              tresletras === "309." ||
              tresletras === "106." ||
              tresletras === "103." ||
              tresletras === "500." ||
              tresletras === "300." ||
              tresletras === "100." ||
              tresletras === "306." ||
              tresletras === "120." ||
              tresletras === "123." ||
              tresletras === "125." ||
              tresletras === "126." ||
              tresletras === "127." ||
              tresletras === "128." ||
              tresletras === "110." ||
              tresletras === "111." ||
              tresletras === "950." ||
              tresletras === "978." ||
              tresletras === "905." ||
              letras === "83." ||
              letras === "31." ||
              tresletras === "228."
            ) {
              POSTDATA["or_filters"]["key_id"] = busquedas;
            }
            //Brembo numeros largos
            else if (letras === "09." || letras === "08." || letras === "14.") {
              bremLarge.forEach(function(numLargos, indice, array) {
                if (busquedas === numLargos) {
                  POSTDATA["or_filters"]["key_id"] = busquedas;
                }
              });
             
            } else if(caracter5 === '.'){
                bremCort08.forEach(function(numLargos, indice, array) {
                    if (busquedas === numLargos) {
                      POSTDATA["or_filters"]["key_id"] = '08.' + busquedas;
                    }else{
                        bremCort09.forEach(function(numLargos, indice, array) {
                            if (busquedas === numLargos) {
                              POSTDATA["or_filters"]["key_id"] = '09.' + busquedas;
                            }else{
                                bremCorto14.forEach(function(numLargos, indice, array) {		
                                    if(busquedas === numLargos ){			
                                        POSTDATA['or_filters']['key_id'] = '14.' + busquedas;				
                                    }else{									
                                        
                                    }
                                })
                            }
    
                          })
                    }
                  });
                                                   
            }else{
              POSTDATA["search_text"] = this.search_text;
            }
          }
    
          FetchXHR(urlServices, 'POST', POSTDATA).then((responseServices) => {
            if (responseServices.json.success) {
                FetchXHR(urlProducts, 'POST', POSTDATA).then((responseProducts) => {
                    if (responseProducts.json.success) {
                        FetchXHR(urlPackages, 'POST', POSTDATA).then((responsePackages) => {
                            if (responsePackages.json.success) {
                                let results = [];
                                responseProducts.json.data.docs.forEach((el, index)=>{
                                    results.push({
                                        ...el,
                                        key: index
                                    });
                                });
                                responsePackages.json.data.docs.forEach((el, index)=>{
                                    results.push({
                                        ...el,
                                        key: index + results.length
                                    });
                                });
                                responseServices.json.data.docs.forEach((el, index)=>{
                                    results.push({
                                        ...el,
                                        key: index + results.length
                                    });
                                });

                                // Get quantity diff from selected data. (?)

                                this.setState({
                                    results_data: results,
                                    loading_data: false
                                });
                            } else {
                                console.log(responsePackages.message);
                                this.setState({
                                    loading_data: false
                                });
                                this.props.onError(responsePackages.message);
                            }
                        }).catch((onError) => {
                            this.setState({
                                loading_data: false
                            });
                            this.props.onError(onError.message);
                        });
                    } else {
                        this.setState({
                            loading_data: false
                        });
                        this.props.onError(responseProducts.message);
                    }
                }).catch((onError) => {
                    this.setState({
                        loading_data: false
                    });
                    this.props.onError(onError.message);
                });
            }  else {
                this.setState({
                    loading_data: false
                });
                this.props.onError(responseServices.message);
            }
        }).catch((onError) => {
            this.setState({
                loading_data: false
            });
            this.props.onError(onError.message);
        });
    }
    componentDidMount() {
    this.limit = 50;
    this.page = 1;
    this.getData();
    this.getUsers();
    this.refresh_interval = setInterval(() => {
        this.getData();
    }, 10000);
    }

    refreshTable = () => {
    this.getData();
    };
    onClickSearch = (search_text) => {                 
    this.search_text = search_text;
    setTimeout(() => {
    this.getData();
    }, 1000);
    };
	//Al arrastrar los productos a la Orden de Venta
    sendToOnChange( actual_products, actual_total) {
        // split the arrays and do calculation for total:
        const p = [];
        const s = [];
        actual_products.forEach((el) => {
            const newEl = Object.assign({}, el);
            if (newEl.subsidiary_id) {
                newEl.subsidiary_id = newEl.subsidiary_id._id;
            }
            if (newEl.type === 'product') {
                delete newEl.key;
                delete newEl.type;
                p.push(newEl);
            } else if (newEl.type === 'service') {
                delete newEl.key;
                delete newEl.type;
                s.push(newEl);
            }
        });
        this.props.onChange({
            products: p,
            services: s,
            total: actual_total,
        });
    }
    // update actual list product stock, minus selected quantity.
    // 
    addRecord(record) {
        if ((this.props.is_quotation) || (record.subsidiary_id._id === this.props.session.subsidiary._id)) {
            if ((this.props.is_quotation) || (this.props.is_reception) || (record.stock >= 0 && (record.stock - this.state.selected_quantity)) >= 0) {
                if (record._id && this.state.selected_quantity > 0 && this.state.selected_user != '') {

                    let actualProducts = Object.assign([] ,this.state.selected_data);

                    // let id = this.state.products.findIndex((el)=>(el.id === record.id));
                    // actualProducts[id].stock -= record.quantity;

                    // Price selector:
                    let Price = Number(record.price_public);
					let Discount = this.state.selected_discount ? Number(this.state.selected_discount) : 0;
					

                    if (this.state.price_type === 'PUBLICO') {
                        Price = Number(record.price_public);
                    } else if (this.state.price_type === 'MAYOREO') {
                        Price = Number(record.price_wholesale);
                    } else if (this.state.price_type === 'TALLER' ) {
                        Price = Number(record.price_workshop);
					}
					else if (this.state.price_type === 'CREDITO TALLER' ) {
                        Price = Number(record.price_credit_workshop);
                    }

                    if (this.props.is_reception) {
                        Discount = 0;
                    }

                    // total price:
                    const P = Number(this.state.selected_quantity) * Price;
                    if (Discount) {
						Discount = (P * Number(Discount)) / 100;

					}
					
                    const new_total = (this.state.total + Math.ceil(P - Discount));
    
                    actualProducts.push({
                        key: this.state.selected_data.length + 1,
                        type: record.fmsi ? 'product' : 'service',
                        id: record._id,
                        user_id: this.state.selected_user._id,
                        user_name: this.state.selected_user.name,
                        subsidiary_id: record.subsidiary_id,
                        fmsi: record.fmsi,
                        brand: record.brand,
                        line: record.line,
                        description: record.description,
                        key_id: record.key_id,
                        price_type: this.state.price_type | 'PUBLICO',
                        price: Price,
                        quantity: this.state.selected_quantity,
						discount: Discount,
						discount1: Discount,
                        total: Math.ceil(P - Discount),
                        old_stock: record.stock,
                    });

                    this.setState({
                        selected_data: actualProducts,
                        selected_quantity: 1,
						selected_fmsi: 5,
                        selected_discount: undefined,
                        total: new_total
                    });
                    this.sendToOnChange(actualProducts, new_total);//Checar aqui
                    this.scrollToBottom();
                } else {
                    this.props.onError('Favor de rellenar todos los campos necesarios para agregar un producto.');
                }
            } else {
                this.props.onError('No se pueden seleccionar productos sin stock.');
            }
        } else {
            this.props.onError('No se pueden seleccionar productos de otra sucursal.');
        }
	}
	//Porcentaje a precios de balatas u otros 
    updateRecord = (row) => {
        console.log("updateRecord", row);
        const newData = [...this.state.selected_data];
        const index = newData.findIndex(item => row.key === item.key);
        const item = newData[index];
		const rowTotal = (Number(row.price) * Number(row.quantity));
		const precXtra = Number(row.discount1);
		
		const precDesc = Math.ceil(rowTotal - ((rowTotal * Number(row.discount)) / 100) + precXtra) ;
		const newTotalRow =Math.ceil(precDesc);
		console.log("newTotalRow",newTotalRow)		
        newData.splice(index, 1, {
          ...item,
          ...row,
          total: newTotalRow
        });
        const newTotal = (this.state.total - item.total + newTotalRow);

        console.log("ACTUALPRODUCTS", newData);
        console.log("new_total", newTotal);

        this.setState({
            total: newTotal,
            selected_data: newData 
        });
        this.sendToOnChange(newData, newTotal);
	}

	updatePrec = (row) => {
        console.log("updateRecord", row);
        const newData = [...this.state.selected_data];
        const index = newData.findIndex(item => row.key === item.key);
        const item = newData[index];
		const rowTotal = (Number(row.price) * Number(row.quantity));
		console.log(row.quantity);
        const newTotalRow = Math.ceil(rowTotal + Number(row.discount));
		console.log("newTotalRow",newTotalRow)
        newData.splice(index, 1, {
          ...item,
          ...row,
          total: newTotalRow
        });
        const newTotal = (this.state.total - item.total + newTotalRow);

        console.log("ACTUALPRODUCTS", newData);
        console.log("new_total", newTotal);

        this.setState({
            total: newTotal,
            selected_data: newData 
        });
        this.sendToOnChange(newData, newTotal);
	}

    deleteRecord(record) {

		if(true){
				console.log("GOING TO DETELE RECORD");
				console.log(record);
				let actualProducts = Object.assign([], this.state.selected_data);
				console.log("ACTUALPRODUCTS", actualProducts);
				const index = actualProducts.findIndex((el)=>(el.id === record.id && record.quantity === el.quantity));
				console.log("INDEX,", index);
				if (index != -1) {			
					actualProducts.splice(index, 1);

					//////////////////////////////////////////////////////////////
					//Elimina el producto y suma el quantity al stock del producto
					
						
							const url_get_product = process.env.REACT_APP_API_URL + '/product/' + record.id;	
							FetchXHR(url_get_product, 'GET').then((response_actual_p) => {
								const new_p = {
									stock: response_actual_p.json.obj.stock	+ record.quantity		
								}
								const url_put_product = process.env.REACT_APP_API_URL + '/product/' + record.id;
								FetchXHR(url_put_product, 'PUT', new_p).then((response_p) => {
									console.log(response_actual_p.json.obj.stock);
								})
							});
							
				
			}
				
				const new_total = this.state.total - (record.total);

				console.log("ACTUALPRODUCTS", actualProducts);
				console.log("new_total", new_total);

				this.setState({
					total: new_total,
					selected_data: actualProducts,
				});
				this.sendToOnChange(actualProducts, new_total);		
	
		}
    }
	deleteRecordCom(record) {

		if(true){
				console.log("GOING TO DETELE RECORD");
				console.log(record);
				let actualProducts = Object.assign([], this.state.selected_data);
				console.log("ACTUALPRODUCTS", actualProducts);
				const index = actualProducts.findIndex((el)=>(el.id === record.id && record.quantity === el.quantity));
				console.log("INDEX,", index);
				if (index != -1) {					
					actualProducts.splice(index, 1);

					//////////////////////////////////////////////////////////////
					//Elimina el producto y suma el quantity al stock del producto
					
						
							const url_get_product = process.env.REACT_APP_API_URL + '/product/' + record.id;	
							FetchXHR(url_get_product, 'GET').then((response_actual_p) => {
								const new_p = {
									stock: response_actual_p.json.obj.stock	- record.quantity		
								}
								const url_put_product = process.env.REACT_APP_API_URL + '/product/' + record.id;
								FetchXHR(url_put_product, 'PUT', new_p).then((response_p) => {
									console.log(response_actual_p.json.obj.stock);
								})
							});
							
				
			}
				
				const new_total = this.state.total - (record.total);

				console.log("ACTUALPRODUCTS", actualProducts);
				console.log("new_total", new_total);

				this.setState({
					total: new_total,
					selected_data: actualProducts,
				});
				this.sendToOnChange(actualProducts, new_total);		
	
		}
    }
	deleteList(record) {

		if(true){
				console.log("GOING TO DETELE RECORD");
				console.log(record);
				let actualProducts = Object.assign([], this.state.selected_data);
				console.log("ACTUALPRODUCTS", actualProducts);
				const index = actualProducts.findIndex((el)=>(el.id === record.id && record.quantity === el.quantity));
				console.log("INDEX,", index);
				if (index != -1) {				
					actualProducts.splice(index, 1);				
			    }
				
				const new_total = this.state.total - (record.total);

				console.log("ACTUALPRODUCTS", actualProducts);
				console.log("new_total", new_total);

				this.setState({
					total: new_total,
					selected_data: actualProducts,
				});
				this.sendToOnChange(actualProducts, new_total);		
	
		}
    }

    onChangeFieldName(value, key) {
      console.log(value)
      let obj = {};
      obj[key] = value;
      this.setState(obj);
    }

    onSelectClient(client_name) {
      const client = this.state.products.find((el) => (el.key_id === client_name));
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




    render() {		
        let widthTable = (window.innerWidth/2) - 60;
        if (this.props.disabled) {
            widthTable = window.innerWidth;
        }
        const OptionsUsers = this.state.users.map((item, index) => {
            return (
                <Select.Option 
                    value={item._id}
                    key={`${item._id} - ${index}`} 
                >
                    {item.name}
                </Select.Option>
            );
        });

        let SearcherProducts = <div></div>;
       
            SearcherProducts = (
				
                <Fragment>
                    <Divider> Buscar y seleccionar productos: </Divider>
                    <div
                        style={styles.columnContainer}
                    >
                        <div
                            style={styles.rowContainer}
                        >
                            <AutoComplete
                              disabled={this.props.is_disabled || (this.props.fields && this.props.session.user.rol !== 'ADMIN')}
                              autoFocus
                              backfill
                              placeholder={'Buscador...'}
                              onSearch={this.onClickSearch}
                              onSelect={(value) => { this.onClickSearch(value)}}
                              value={this.state.client_name}
                              onChange={(value) => {
                                  this.onChangeFieldName(value, 'client_name');
                              }}
                              dataSource={this.state.name_clients}
                              style={styles.inputElement}
                          />
                            <div style={styles.groupLabel}>
                                <p style={styles.quantityLabel}>Cantidad (#)</p>
                                <InputNumber
                                    style={styles.rowElementQuantity}
                                    placeholder="Cantidad (#)"
                                    value={this.state.selected_quantity}
                                    onChange={this.onChangeQuantity}
                                    size="100%"
                                    step={1}
                                    min={1}
                                />
                            </div>
                            <div style={styles.groupLabel}>
                                <p style={styles.quantityLabel}>Usuario</p>
                                <Select
                                    style={styles.rowElementUser}
                                    value={this.state.selected_user._id}
                                    showSearch
                                    optionFilterProp="children"
                                    placeholder="Usuario"                                    
                                    onChange={this.onChangeUser}
                                >
                                        {OptionsUsers}
                                </Select>
                            </div>     													                     
                        </div>

                        <div
                            style={styles.rowContainer}
                        >
                            <Table
                                bordered
                                loading={this.state.loading_data}
                                size="small"
                                scroll={{ y: 700 }}//Tamaño de tabla al crear una venta o servicio
                                style={styles.tableLayout}
                                columns={this.table_columns_results}
                                dataSource={this.state.results_data}
                                locale={{
                                  filterTitle: "Filtro",
                                  filterConfirm: "Ok",
                                  filterReset: "Limpiar",
                                  emptyText: "Sin Datos",
                                }}
                                pagination={false}
                                onRow={(record) => {
                                    return {
                                        onClick: () => {
                                            this.addRecord(record);
                                        },
                                    };
                                }}
                            />
                        </div>
                    </div>
                </Fragment>
            );
        

        const components = {
            body: {
                row: EditableFormRow,
                cell: EditableCell,
            }
        };


		////////////////////////////////////////////

        const columns = this.table_columns_selected.map((col) => {
            if (!col.editable) {
              return col;
            }
            return {
                ...col,
                onCell: record => {
                    if (Number(record.key) > this.state.initial_length_data) {
                        return ({
                            record,
                            editable: col.editable,
                            dataIndex: col.dataIndex,
                            title: col.title,
							handleSave: this.updateRecord,
                        });
                    }
                    return ({
                        record,
                        editable: false,
                        dataIndex: col.dataIndex,
                        title: col.title,
                        handleSave: this.updateRecord,
                    });
                },
            };
		});
		




		const columns1 = this.table_columns_selected.map((col) => {
            if (!col.editable) {
              return col;
            }
            return {
                ...col,
                onCell: record => {
                    if (Number(record.key) > this.state.initial_length_data) {
                        return ({
                            record,
                            editable: col.editable,
                            dataIndex: col.dataIndex,
                            title: col.title,
							handleSave: this.updateRecord,
                        });
                    }
                    return ({
                        record,
                        editable: false,
                        dataIndex: col.dataIndex,
                        title: col.title,
                        handleSave: this.updateRecord,
                    });
                },
            };
        });






        return (
            <Fragment>
                <div
                    
                >
                    {SearcherProducts}
                    <Divider> Orden de venta </Divider>
                    <div                      
                    >
                        <Table
                            components={components}
                            rowClassName={() => 'editable-row'}
                            bordered
                            columns={columns}
                            size="small"
                            scroll={{ y: 500 }}
                            style={styles.tableLayout}
                            dataSource={this.state.selected_data}
                            locale={{
                                filterTitle: 'Filtro',
                                filterConfirm: 'Ok',
                                filterReset: 'Reset',
                                emptyText: 'Sin Datos'
                            }}
                            pagination={false}
                        />
                    </div>
                    <div style={styles.labelContainer}>
                        <p style={styles.labelTitle}> Total de compra: </p>
                        <p style={styles.labelValue}> {`$ ${round2(this.state.total)}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')}</p>
                    </div>
                    <div 
                        ref={(el) => { this.endView = el; }} 
                    >

                    </div>
                </div>
            </Fragment>
        );
    }
}

// wrap a HOC to handle the inject of the fields?
export default OrderCreatorVentas;

//Numeros largos Discos
const bremLarge = [
  "08.2275.10",
  "08.2536.10",
  "08.2691.10",
  "08.4177.10",
  "08.4177.75",
  "08.4250.10",
  "08.4738.21",
  "08.4931.20",
  "08.4931.21",
  "08.4931.2X",
  "08.4932.10",
  "08.5005.10",
  "08.5085.11",
  "08.5086.11",
  "08.5149.10",
  "08.5178.30",
  "08.5178.31",
  "08.5266.10",
  "08.5334.10",
  "08.5334.11",
  "08.5334.1X",
  "08.5359.10",
  "08.5359.11",
  "08.5366.20",
  "08.5366.21",
  "08.5366.76",
  "08.5443.10",
  "08.5443.60",
  "08.5719.10",
  "08.5743.10",
  "08.5743.11",
  "08.5803.20",
  "08.5803.80",
  "08.5834.25",
  "08.6768.10",
  "08.6838.10",
  "08.6838.11",
  "08.6853.80",
  "08.6853.81",
  "08.6897.11",
  "08.6899.10",
  "08.6903.10",
  "08.6911.10",
  "08.6931.10",
  "08.6931.11",
  "08.6935.10",
  "08.6935.11",
  "08.7019.80",
  "08.7019.81",
  "08.7042.10",
  "08.7042.11",
  "08.7104.10",
  "08.7165.10",
  "08.7165.1X",
  "08.7165.21",
  "08.7165.75",
  "08.7211.20",
  "08.7211.21",
  "08.7288.10",
  "08.7288.11",
  "08.7351.10",
  "08.7518.80",
  "08.7607.10",
  "08.7607.11",
  "08.7626.10",
  "08.7626.11",
  "08.7627.10",
  "08.7627.11",
  "08.7724.10",
  "08.7725.10",
  "08.7725.20",
  "08.7765.10",
  "08.7765.11",
  "08.7811.10",
  "08.7822.10",
  "08.7936.11",
  "08.7984.10",
  "08.7997.10",
  "08.8065.10",
  "08.8094.50",
  "08.8094.60",
  "08.8163.10",
  "08.8163.20",
  "08.8214.80",
  "08.8214.81",
  "08.8264.80",
  "08.8305.10",
  "08.8316.20",
  "08.8405.10",
  "08.8405.11",
  "08.8408.11",
  "08.8445.80",
  "08.8463.10",
  "08.8463.11",
  "08.8843.21",
  "08.8868.20",
  "08.8974.10",
  "08.8994.80",
  "08.9083.10",
  "08.9083.11",
  "08.9084.11",
  "08.9107.10",
  "08.9107.11",
  "08.9163.10",
  "08.9163.1X",
  "08.9163.75",
  "08.9179.10",
  "08.9460.41",
  "08.9488.10",
  "08.9488.11",
  "08.9502.10",
  "08.9502.1X",
  "08.9509.10",
  "08.9511.10",
  "08.9512.27",
  "08.9580.11",
  "08.9584.11",
  "08.9597.17",
  "08.9729.11",
  "08.9734.11",
  "08.9787.11",
  "08.9918.20",
  "08.9918.21",
  "08.9975.10",
  "08.9975.11",
  "08.9975.20",
  "08.9975.21",
  "08.9975.2X",
  "08.A029.10",
  "08.A029.11",
  "08.A029.11",
  "08.A029.20",
  "08.A108.10",
  "08.A108.11",
  "08.A112.11",
  "08.A114.20",
  "08.A114.30",
  "08.A114.31",
  "08.A122.10",
  "08.A135.17",
  "08.A147.10",
  "08.A147.11",
  "08.A147.1X",
  "08.A202.10",
  "08.A202.11",
  "08.A202.1X",
  "08.A205.10",
  "08.A205.11",
  "08.A268.10",
  "08.A274.10",
  "08.A332.11",
  "08.A333.10",
  "08.A351.10",
  "08.A351.11",
  "08.A355.11",
  "08.A403.10",
  "08.A403.11",
  "08.A429.10",
  "08.A429.11",
  "08.A446.11",
  "08.A533.10",
  "08.A533.11",
  "08.A534.30",
  "08.A534.31",
  "08.A540.11",
  "08.A602.10",
  "08.A612.40",
  "08.A612.41",
  "08.A636.10",
  "08.A636.11",
  "08.A708.10",
  "08.A715.10",
  "08.A725.10",
  "08.A725.11",
  "08.A729.17",
  "08.A730.10",
  "08.A737.11",
  "08.A755.10",
  "08.A759.10",
  "08.A759.11",
  "08.A759.1X",
  "08.A863.11",
  "08.A869.10",
  "08.A869.11",
  "08.A871.11",
  "08.A872.11",
  "08.A957.11",
  "08.A970.11",
  "08.B029.10",
  "08.B271.11",
  "08.B347.41",
  "08.B348.41",
  "08.B357.10",
  "08.B412.10",
  "08.B412.11",
  "08.B413.10",
  "08.B413.11",
  "08.B413.1X",
  "08.B437.10",
  "08.B437.11",
  "08.B443.10",
  "08.B449.10",
  "08.B449.11",
  "08.B464.10",
  "08.B464.11",
  "08.B529.11",
  "08.B529.20",
  "08.B529.21",
  "08.B566.10",
  "08.B566.11",
  "08.B566.21",
  "08.B568.10",
  "08.B568.11",
  "08.B568.11",
  "08.B584.10",
  "08.B590.10",
  "08.B590.11",
  "08.B600.10",
  "08.B600.11",
  "08.B601.10",
  "08.B602.10",
  "08.B603.10",
  "08.B605.11",
  "08.B649.11",
  "08.B662.10",
  "08.B992.10",
  "08.C046.11",
  "08.C083.10",
  "08.C115.11",
  "08.C172.10",
  "08.C172.1X",
  "08.C172.21",
  "08.C208.11",
  "08.C247.10",
  "08.C252.11",
  "08.C276.10",
  "08.C307.11",
  "08.C308.11",
  "08.C352.11",
  "08.C423.11",
  "08.C425.11",
  "08.C501.11",
  "08.C653.11",
  "08.C659.11",
  "08.C661.11",
  "08.D222.11",
  "08.D278.11",
  "08.D281.10",
  "08.D326.10",
  "08.D326.11",
  "08.D530.13",
  "08.N123.10",
  "08.N226.10",
  "08.N258.21",
  "08.R101.11",
  "09.3090.10",
  "09.3090.1X",
  "09.3090.20",
  "09.3090.75",
  "09.4765.10",
  "09.4869.41",
  "09.4939.10",
  "09.4939.11",
  "09.4939.20",
  "09.4939.21",
  "09.4939.30",
  "09.4939.31",
  "09.4987.20",
  "09.4987.21",
  "09.5055.10",
  "09.5059.10",
  "09.5084.20",
  "09.5101.10",
  "09.5166.10",
  "09.5166.75",
  "09.5173.10",
  "09.5196.10",
  "09.5196.11",
  "09.5253.10",
  "09.5254.10",
  "09.5254.20",
  "09.5254.21",
  "09.5255.10",
  "09.5285.10",
  "09.5290.10",
  "09.5390.30",
  "09.5390.77",
  "09.5449.10",
  "09.5457.30",
  "09.5457.31",
  "09.5457.3X",
  "09.5509.11",
  "09.5527.20",
  "09.5579.21",
  "09.5581.30",
  "09.5584.10",
  "09.5640.10",
  "09.5640.11",
  "09.5640.30",
  "09.5707.10",
  "09.5708.10",
  "09.5736.10",
  "09.5745.2X",
  "09.5801.10",
  "09.5802.20",
  "09.5802.2X",
  "09.5802.76",
  "09.5843.10",
  "09.5843.30",
  "09.5843.31",
  "09.5870.10",
  "09.6665.11",
  "09.6727.10",
  "09.6727.30",
  "09.6727.77",
  "09.6744.10",
  "09.6747.10",
  "09.6752.20",
  "09.6753.10",
  "09.6753.20",
  "09.6766.10",
  "09.6804.10",
  "09.6845.10",
  "09.6845.11",
  "09.6845.75",
  "09.6859.10",
  "09.6893.10",
  "09.6893.11",
  "09.6924.11",
  "09.6925.10",
  "09.6943.10",
  "09.7010.20",
  "09.7010.2X",
  "09.7010.76",
  "09.7011.10",
  "09.7011.1X",
  "09.7011.75",
  "09.7012.10",
  "09.7012.1X",
  "09.7012.75",
  "09.7131.10",
  "09.7131.11",
  "09.7196.10",
  "09.7196.11",
  "09.7196.1X",
  "09.7217.20",
  "09.7226.10",
  "09.7226.11",
  "09.7263.30",
  "09.7314.10",
  "09.7357.10",
  "09.7359.20",
  "09.7359.21",
  "09.7367.10",
  "09.7376.10",
  "09.7398.10",
  "09.7402.10",
  "09.7409.10",
  "09.7418.10",
  "09.7421.10",
  "09.7421.81",
  "09.7441.80",
  "09.7442.80",
  "09.7444.80",
  "09.7449.10",
  "09.7452.80",
  "09.7453.10",
  "09.7457.80",
  "09.7465.80",
  "09.7485.80",
  "09.7513.80",
  "09.7514.80",
  "09.7516.10",
  "09.7517.80",
  "09.7521.80",
  "09.7606.10",
  "09.7606.11",
  "09.7628.10",
  "09.7629.10",
  "09.7650.10",
  "09.7650.11",
  "09.7651.10",
  "09.7652.10",
  "09.7652.11",
  "09.7653.10",
  "09.7680.10",
  "09.7686.10",
  "09.7701.10",
  "09.7701.11",
  "09.7701.75",
  "09.7702.10",
  "09.7720.10",
  "09.7720.11",
  "09.7727.10",
  "09.7727.11",
  "09.7787.10",
  "09.7806.10",
  "09.7806.1X",
  "09.7806.75",
  "09.7812.2X",
  "09.7813.2X",
  "09.7815.10",
  "09.7823.10",
  "09.7823.11",
  "09.7880.10",
  "09.7880.1X",
  "09.7894.80",
  "09.7895.80",
  "09.7911.20",
  "09.7932.10",
  "09.7932.11",
  "09.7964.10",
  "09.7977.10",
  "09.7978.80",
  "09.7987.10",
  "09.7988.10",
  "09.7989.80",
  "09.8012.80",
  "09.8021.10",
  "09.8025.10",
  "09.8025.11",
  "09.8028.10",
  "09.8032.80",
  "09.8066.10",
  "09.8137.20",
  "09.8137.76",
  "09.8178.80",
  "09.8181.80",
  "09.8182.10",
  "09.8184.80",
  "09.8186.10",
  "09.8187.80",
  "09.8188.80",
  "09.8188.81",
  "09.8189.80",
  "09.8192.80",
  "09.8192.81",
  "09.8193.80",
  "09.8193.81",
  "09.8194.10",
  "09.8194.80",
  "09.8196.80",
  "09.8219.80",
  "09.8304.11",
  "09.8304.20",
  "09.8313.80",
  "09.8324.11",
  "09.8404.10",
  "09.8411.10",
  "09.8411.11",
  "09.8449.80",
  "09.8456.10",
  "09.8459.81",
  "09.8475.10",
  "09.8481.10",
  "09.8490.10",
  "09.8514.80",
  "09.8519.10",
  "09.8519.11",
  "09.8545.10",
  "09.8545.11",
  "09.8555.21",
  "09.8601.10",
  "09.8608.80",
  "09.8608.81",
  "09.8609.11",
  "09.8614.11",
  "09.8616.11",
  "09.8633.10",
  "09.8633.11",
  "09.8655.10",
  "09.8655.75",
  "09.8665.10",
  "09.8681.11",
  "09.8690.11",
  "09.8690.1X",
  "09.8695.10",
  "09.8695.1X",
  "09.8699.11",
  "09.8700.11",
  "09.8709.81",
  "09.8760.10",
  "09.8810.80",
  "09.8811.80",
  "09.8812.80",
  "09.8814.80",
  "09.8815.10",
  "09.8816.80",
  "09.8818.80",
  "09.8818.81",
  "09.8822.80",
  "09.8840.10",
  "09.8852.10",
  "09.8857.80",
  "09.8860.10",
  "09.8864.10",
  "09.8871.10",
  "09.8872.10",
  "09.8876.31",
  "09.8877.31",
  "09.8904.10",
  "09.8917.80",
  "09.8931.21",
  "09.8932.10",
  "09.8937.10",
  "09.8952.10",
  "09.8952.11",
  "09.8952.1X",
  "09.8953.10",
  "09.8953.11",
  "09.8961.21",
  "09.8965.10",
  "09.8965.11",
  "09.8969.20",
  "09.8969.21",
  "09.8972.10",
  "09.8973.10",
  "09.8975.80",
  "09.8976.80",
  "09.8977.10",
  "09.8998.11",
  "09.9022.10",
  "09.9022.11",
  "09.9037.10",
  "09.9042.20",
  "09.9056.80",
  "09.9060.80",
  "09.9077.1X",
  "09.9078.10",
  "09.9078.1X",
  "09.9078.20",
  "09.9103.10",
  "09.9103.11",
  "09.9104.10",
  "09.9111.11",
  "09.9115.80",
  "09.9130.10",
  "09.9130.11",
  "09.9133.80",
  "09.9133.81",
  "09.9142.10",
  "09.9144.10",
  "09.9145.10",
  "09.9145.1X",
  "09.9145.75",
  "09.9159.20",
  "09.9162.10",
  "09.9165.10",
  "09.9167.10",
  "09.9167.1X",
  "09.9167.75",
  "09.9172.11",
  "09.9177.10",
  "09.9185.10",
  "09.9190.80",
  "09.9268.10",
  "09.9355.11",
  "09.9363.21",
  "09.9368.10",
  "09.9368.11",
  "09.9369.10",
  "09.9372.21",
  "09.9373.21",
  "09.9442.10",
  "09.9464.10",
  "09.9464.11",
  "09.9464.20",
  "09.9464.21",
  "09.9464.21",
  "09.9468.10",
  "09.9468.11",
  "09.9468.20",
  "09.9468.2X",
  "09.9483.10",
  "09.9503.10",
  "09.9505.10",
  "09.9505.11",
  "09.9508.10",
  "09.9510.11",
  "09.9510.14",
  "09.9537.10",
  "09.9544.10",
  "09.9554.10",
  "09.9559.20",
  "09.9573.11",
  "09.9573.1X",
  "09.9574.10",
  "09.9581.11",
  "09.9581.1X",
  "09.9582.10",
  "09.9586.11",
  "09.9587.11",
  "09.9590.11",
  "09.9598.11",
  "09.9618.20",
  "09.9727.10",
  "09.9738.10",
  "09.9738.11",
  "09.9750.11",
  "09.9750.21",
  "09.9752.10",
  "09.9752.11",
  "09.9753.10",
  "09.9755.10",
  "09.9755.11",
  "09.9772.10",
  "09.9772.11",
  "09.9772.1X",
  "09.9772.75",
  "09.9793.10",
  "09.9793.11",
  "09.9825.11",
  "09.9825.21",
  "09.9827.10",
  "09.9827.11",
  "09.9848.11",
  "09.9869.80",
  "09.9869.81",
  "09.9870.11",
  "09.9871.11",
  "09.9905.10",
  "09.9911.11",
  "09.9914.11",
  "09.9915.11",
  "09.9921.11",
  "09.9922.10",
  "09.9922.11",
  "09.9923.11",
  "09.9924.10",
  "09.9924.11",
  "09.9925.11",
  "09.9935.11",
  "09.9936.11",
  "09.9996.10",
  "09.A031.10",
  "09.A031.11",
  "09.A047.20",
  "09.A047.31",
  "09.A052.10",
  "09.A110.10",
  "09.A113.11",
  "09.A148.10",
  "09.A148.11",
  "09.A182.11",
  "09.A183.11",
  "09.A185.11",
  "09.A200.10",
  "09.A200.1X",
  "09.A204.10",
  "09.A204.11",
  "09.A229.11",
  "09.A235.20",
  "09.A259.10",
  "09.A259.11",
  "09.A270.10",
  "09.A271.11",
  "09.A334.10",
  "09.A334.20",
  "09.A334.21",
  "09.A353.10",
  "09.A358.11",
  "09.A386.10",
  "09.A386.11",
  "09.A400.10",
  "09.A401.10",
  "09.A401.11",
  "09.A402.10",
  "09.A402.11",
  "09.A404.10",
  "09.A405.10",
  "09.A405.11",
  "09.A406.10",
  "09.A406.11",
  "09.A406.21",
  "09.A407.10",
  "09.A407.11",
  "09.A408.10",
  "09.A409.10",
  "09.A417.11",
  "09.A417.1X",
  "09.A427.11",
  "09.A445.10",
  "09.A448.20",
  "09.A448.21",
  "09.A452.10",
  "09.A455.11",
  "09.A528.11",
  "09.A529.10",
  "09.A531.10",
  "09.A532.10",
  "09.A532.11",
  "09.A532.1X",
  "09.A532.21",
  "09.A535.10",
  "09.A535.11",
  "09.A535.20",
  "09.A538.10",
  "09.A538.11",
  "09.A599.11",
  "09.A613.50",
  "09.A613.51",
  "09.A621.11",
  "09.A621.31",
  "09.A629.11",
  "09.A629.20",
  "09.A630.10",
  "09.A634.10",
  "09.A637.10",
  "09.A652.10",
  "09.A707.10",
  "09.A707.11",
  "09.A712.11",
  "09.A716.20",
  "09.A716.21",
  "09.A727.10",
  "09.A727.1X",
  "09.A728.11",
  "09.A736.11",
  "09.A738.10",
  "09.A758.10",
  "09.A758.11",
  "09.A758.1X",
  "09.A760.11",
  "09.A761.10",
  "09.A761.11",
  "09.A761.1X",
  "09.A771.11",
  "09.A773.11",
  "09.A774.11",
  "09.A815.10",
  "09.A820.10",
  "09.A820.11",
  "09.A820.1X",
  "09.A867.10",
  "09.A868.10",
  "09.A905.10",
  "09.A921.1X",
  "09.A922.10",
  "09.A922.14",
  "09.A956.11",
  "09.A958.11",
  "09.A958.21",
  "09.A959.11",
  "09.A959.21",
  "09.A960.21",
  "09.A961.11",
  "09.A961.21",
  "09.A966.10",
  "09.A966.1X",
  "09.A967.10",
  "09.A967.11",
  "09.A967.1X",
  "09.A968.10",
  "09.A968.11",
  "09.A968.20",
  "09.A969.11",
  "09.A971.10",
  "09.A971.11",
  "09.A972.10",
  "09.B002.50",
  "09.B025.10",
  "09.B026.10",
  "09.B039.10",
  "09.B039.1X",
  "09.B040.1X",
  "09.B042.10",
  "09.B063.10",
  "09.B090.10",
  "09.B093.10",
  "09.B095.10",
  "09.B099.10",
  "09.B100.10",
  "09.B142.10",
  "09.B151.10",
  "09.B262.10",
  "09.B266.10",
  "09.B267.10",
  "09.B268.11",
  "09.B272.10",
  "09.B273.10",
  "09.B280.41",
  "09.B288.10",
  "09.B311.11",
  "09.B312.11",
  "09.B313.11",
  "09.B337.21",
  "09.B337.2X",
  "09.B338.11",
  "09.B344.41",
  "09.B344.4X",
  "09.B354.11",
  "09.B355.10",
  "09.B355.1X",
  "09.B356.10",
  "09.B356.1X",
  "09.B356.20",
  "09.B386.13",
  "09.B411.11",
  "09.B414.11",
  "09.B436.51",
  "09.B448.10",
  "09.B448.11",
  "09.B452.10",
  "09.B459.10",
  "09.B459.11",
  "09.B461.10",
  "09.B461.11",
  "09.B503.11",
  "09.B504.11",
  "09.B518.10",
  "09.B518.11",
  "09.B519.10",
  "09.B519.11",
  "09.B520.10",
  "09.B520.21",
  "09.B521.10",
  "09.B521.11",
  "09.B526.10",
  "09.B530.10",
  "09.B530.11",
  "09.B531.10",
  "09.B532.10",
  "09.B533.10",
  "09.B534.10",
  "09.B534.11",
  "09.B538.11",
  "09.B539.10",
  "09.B541.10",
  "09.B541.11",
  "09.B541.11",
  "09.B542.10",
  "09.B542.11",
  "09.B543.10",
  "09.B543.11",
  "09.B544.10",
  "09.B546.10",
  "09.B546.11",
  "09.B552.10",
  "09.B552.11",
  "09.B553.10",
  "09.B553.11",
  "09.B555.10",
  "09.B555.11",
  "09.B555.11",
  "09.B569.11",
  "09.B570.11",
  "09.B585.10",
  "09.B587.10",
  "09.B588.11",
  "09.B589.11",
  "09.B592.10",
  "09.B593.10",
  "09.B595.10",
  "09.B595.11",
  "09.B595.20",
  "09.B595.21",
  "09.B597.10",
  "09.B599.10",
  "09.B599.20",
  "09.B606.11",
  "09.B608.10",
  "09.B609.10",
  "09.B614.10",
  "09.B616.10",
  "09.B619.10",
  "09.B620.11",
  "09.B623.10",
  "09.B624.11",
  "09.B626.10",
  "09.B632.10",
  "09.B634.10",
  "09.B634.11",
  "09.B638.11",
  "09.B639.10",
  "09.B648.10",
  "09.B648.11",
  "09.B648.20",
  "09.B655.10",
  "09.B656.10",
  "09.B656.11",
  "09.B657.10",
  "09.B657.11",
  "09.B659.10",
  "09.B661.10",
  "09.B745.41",
  "09.B746.51",
  "09.B754.11",
  "09.B754.21",
  "09.B788.11",
  "09.B807.41",
  "09.B807.51",
  "09.B822.11",
  "09.B858.11",
  "09.B913.11",
  "09.B969.11",
  "09.B970.11",
  "09.B971.11",
  "09.B972.11",
  "09.B973.10",
  "09.B973.11",
  "09.B975.10",
  "09.B994.10",
  "09.B994.11",
  "09.C003.10",
  "09.C003.11",
  "09.C004.10",
  "09.C004.11",
  "09.C005.10",
  "09.C005.11",
  "09.C047.11",
  "09.C114.11",
  "09.C116.11",
  "09.C117.11",
  "09.C133.11",
  "09.C171.10",
  "09.C171.11",
  "09.C171.1X",
  "09.C173.11",
  "09.C174.10",
  "09.C176.11",
  "09.C177.11",
  "09.C178.11",
  "09.C182.10",
  "09.C185.10",
  "09.C185.11",
  "09.C207.11",
  "09.C244.10",
  "09.C245.11",
  "09.C246.11",
  "09.C249.11",
  "09.C251.21",
  "09.C274.10",
  "09.C274.11",
  "09.C274.21",
  "09.C282.11",
  "09.C285.11",
  "09.C289.10",
  "09.C306.11",
  "09.C313.11",
  "09.C315.11",
  "09.C348.10",
  "09.C349.10",
  "09.C349.11",
  "09.C350.11",
  "09.C394.13",
  "09.C395.13",
  "09.C396.13",
  "09.C398.13",
  "09.C421.11",
  "09.C424.11",
  "09.C499.10",
  "09.C499.11",
  "09.C542.11",
  "09.C542.21",
  "09.C543.11",
  "09.C545.11",
  "09.C636.11",
  "09.C649.11",
  "09.C651.11",
  "09.C652.11",
  "09.C657.11",
  "09.C743.11",
  "09.C744.11",
  "09.C824.10",
  "09.C877.11",
  "09.C878.11",
  "09.C880.11",
  "09.C881.11",
  "09.C882.11",
  "09.C884.11",
  "09.C892.11",
  "09.C894.10",
  "09.C896.11",
  "09.C927.11",
  "09.C928.11",
  "09.C936.11",
  "09.D018.11",
  "09.D059.11",
  "09.D065.11",
  "09.D155.11",
  "09.D216.11",
  "09.D219.11",
  "09.D272.10",
  "09.D274.11",
  "09.D274.20",
  "09.D276.11",
  "09.D279.11",
  "09.D280.11",
  "09.D395.11",
  "09.D426.11",
  "09.D428.11",
  "09.D449.11",
  "09.D450.11",
  "09.D451.10",
  "09.D452.11",
  "09.D529.13",
  "09.D570.11",
  "09.D619.11",
  "09.D628.11",
  "09.D706.11",
  "09.N124.10",
  "09.N124.11",
  "09.N125.10",
  "09.N125.11",
  "09.N212.10",
  "09.N212.11",
  "09.N234.11",
  "09.N235.11",
  "09.N236.10",
  "09.N236.11",
  "09.N246.21",
  "09.N247.11",
  "09.N264.11",
  "09.R103.11",
  "09.R104.11",
  "09.R105.11",
  "09.R122.11",
  "09.R124.21",
  "14.3219.10",
  "14.3220.10",
  "14.3251.10",
  "14.3256.10",
  "14.3283.10",
  "14.4733.10",
  "14.4978.10",
  "14.5068.10",
  "14.5073.10",
  "14.5102.10",
  "14.5591.10",
  "14.5722.10",
  "14.5815.10",
  "14.5816.10",
  "14.5822.10",
  "14.5826.10",
  "14.6757.10",
  "14.6759.10",
  "14.6764.10",
  "14.6775.10",
  "14.7093.10",
  "14.7248.10",
  "14.7257.10",
  "14.7317.10",
  "14.7715.10",
  "14.7735.10",
  "14.7736.10",
  "14.7743.10",
  "14.7746.10",
  "14.7747.10",
  "14.7754.10",
  "14.7900.10",
  "14.7901.10",
  "14.7903.10",
  "14.7904.10",
  "14.8109.80",
  "14.8110.85",
  "14.8467.80",
  "14.8799.80",
  "14.8801.80",
  "14.8855.80",
  "14.9384.10",
  "14.9384.20",
  "14.9386.10",
  "14.9392.10",
  "14.9395.10",
  "14.A676.10",
  "14.A683.10",
  "14.A695.10",
  "14.A702.10",
  "14.A710.10",
  "14.B240.10",
  "14.B249.10",
  "14.B465.10",
  "14.B571.10",
  "14.B572.10",
  "14.B574.10",
  "14.B575.10",
  "14.B577.10",
  "14.B578.10",
  "14.B579.10",
  "14.B583.10",
  "14.B640.10",
  "14.B641.10",
  "14.B642.10",
  "14.B986.10",
  "14.C001.10",
  "14.C183.10",
  "14.C184.10",
  "14.C212.10",
  "14.C275.10",
  "14.C277.10",
  "14.C278.10",
  "14.C279.10",
  "14.C281.10",
  "14.C337.10",
  "14.D631.20",
  "14.D638.10",
  "14.N204.10",
  "14.XXXX.10",
];
//Numeros cortos Discos sin terminacion .10, .11 etc
const bremCort08 = [
  "2275.10",
  "2536.10",
  "2691.10",
  "4177.10",
  "4177.75",
  "4250.10",
  "4738.21",
  "4931.20",
  "4931.21",
  "4931.2X",
  "4932.10",
  "5005.10",
  "5085.11",
  "5086.11",
  "5149.10",
  "5178.30",
  "5178.31",
  "5266.10",
  "5334.10",
  "5334.11",
  "5334.1X",
  "5359.10",
  "5359.11",
  "5366.20",
  "5366.21",
  "5366.76",
  "5443.10",
  "5443.60",
  "5719.10",
  "5743.10",
  "5743.11",
  "5803.20",
  "5803.80",
  "5834.25",
  "6768.10",
  "6838.10",
  "6838.11",
  "6853.80",
  "6853.81",
  "6897.11",
  "6899.10",
  "6903.10",
  "6911.10",
  "6931.10",
  "6931.11",
  "6935.10",
  "6935.11",
  "7019.80",
  "7019.81",
  "7042.10",
  "7042.11",
  "7104.10",
  "7165.10",
  "7165.1X",
  "7165.21",
  "7165.75",
  "7211.20",
  "7211.21",
  "7288.10",
  "7288.11",
  "7351.10",
  "7518.80",
  "7607.10",
  "7607.11",
  "7626.10",
  "7626.11",
  "7627.10",
  "7627.11",
  "7724.10",
  "7725.10",
  "7725.20",
  "7765.10",
  "7765.11",
  "7811.10",
  "7822.10",
  "7936.11",
  "7984.10",
  "7997.10",
  "8065.10",
  "8094.50",
  "8094.60",
  "8163.10",
  "8163.20",
  "8214.80",
  "8214.81",
  "8264.80",
  "8305.10",
  "8316.20",
  "8405.10",
  "8405.11",
  "8408.11",
  "8445.80",
  "8463.10",
  "8463.11",
  "8843.21",
  "8868.20",
  "8974.10",
  "8994.80",
  "9083.10",
  "9083.11",
  "9084.11",
  "9107.10",
  "9107.11",
  "9163.10",
  "9163.1X",
  "9163.75",
  "9179.10",
  "9460.41",
  "9488.10",
  "9488.11",
  "9502.10",
  "9502.1X",
  "9509.10",
  "9511.10",
  "9512.27",
  "9580.11",
  "9584.11",
  "9597.17",
  "9729.11",
  "9734.11",
  "9787.11",
  "9918.20",
  "9918.21",
  "9975.10",
  "9975.11",
  "9975.20",
  "9975.21",
  "9975.2X",
  "A029.10",
  "A029.11",
  "A029.11",
  "A029.20",
  "A108.10",
  "A108.11",
  "A112.11",
  "A114.20",
  "A114.30",
  "A114.31",
  "A122.10",
  "A135.17",
  "A147.10",
  "A147.11",
  "A147.1X",
  "A202.10",
  "A202.11",
  "A202.1X",
  "A205.10",
  "A205.11",
  "A268.10",
  "A274.10",
  "A332.11",
  "A333.10",
  "A351.10",
  "A351.11",
  "A355.11",
  "A403.10",
  "A403.11",
  "A429.10",
  "A429.11",
  "A446.11",
  "A533.10",
  "A533.11",
  "A534.30",
  "A534.31",
  "A540.11",
  "A602.10",
  "A612.40",
  "A612.41",
  "A636.10",
  "A636.11",
  "A708.10",
  "A715.10",
  "A725.10",
  "A725.11",
  "A729.17",
  "A730.10",
  "A737.11",
  "A755.10",
  "A759.10",
  "A759.11",
  "A759.1X",
  "A863.11",
  "A869.10",
  "A869.11",
  "A871.11",
  "A872.11",
  "A957.11",
  "A970.11",
  "B029.10",
  "B271.11",
  "B347.41",
  "B348.41",
  "B357.10",
  "B412.10",
  "B412.11",
  "B413.10",
  "B413.11",
  "B413.1X",
  "B437.10",
  "B437.11",
  "B443.10",
  "B449.10",
  "B449.11",
  "B464.10",
  "B464.11",
  "B529.11",
  "B529.20",
  "B529.21",
  "B566.10",
  "B566.11",
  "B566.21",
  "B568.10",
  "B568.11",
  "B568.11",
  "B584.10",
  "B590.10",
  "B590.11",
  "B600.10",
  "B600.11",
  "B601.10",
  "B602.10",
  "B603.10",
  "B605.11",
  "B649.11",
  "B662.10",
  "B992.10",
  "C046.11",
  "C083.10",
  "C115.11",
  "C172.10",
  "C172.1X",
  "C172.21",
  "C208.11",
  "C247.10",
  "C252.11",
  "C276.10",
  "C307.11",
  "C308.11",
  "C352.11",
  "C423.11",
  "C425.11",
  "C501.11",
  "C653.11",
  "C659.11",
  "C661.11",
  "D222.11",
  "D278.11",
  "D281.10",
  "D326.10",
  "D326.11",
  "D530.13",
  "N123.10",
  "N226.10",
  "N258.21",
  "R101.11",
];
const bremCort09 = [
  "3090.10",
  "3090.1X",
  "3090.20",
  "3090.75",
  "4765.10",
  "4869.41",
  "4939.10",
  "4939.11",
  "4939.20",
  "4939.21",
  "4939.30",
  "4939.31",
  "4987.20",
  "4987.21",
  "5055.10",
  "5059.10",
  "5084.20",
  "5101.10",
  "5166.10",
  "5166.75",
  "5173.10",
  "5196.10",
  "5196.11",
  "5253.10",
  "5254.10",
  "5254.20",
  "5254.21",
  "5255.10",
  "5285.10",
  "5290.10",
  "5390.30",
  "5390.77",
  "5449.10",
  "5457.30",
  "5457.31",
  "5457.3X",
  "5509.11",
  "5527.20",
  "5579.21",
  "5581.30",
  "5584.10",
  "5640.10",
  "5640.11",
  "5640.30",
  "5707.10",
  "5708.10",
  "5736.10",
  "5745.2X",
  "5801.10",
  "5802.20",
  "5802.2X",
  "5802.76",
  "5843.10",
  "5843.30",
  "5843.31",
  "5870.10",
  "6665.11",
  "6727.10",
  "6727.30",
  "6727.77",
  "6744.10",
  "6747.10",
  "6752.20",
  "6753.10",
  "6753.20",
  "6766.10",
  "6804.10",
  "6845.10",
  "6845.11",
  "6845.75",
  "6859.10",
  "6893.10",
  "6893.11",
  "6924.11",
  "6925.10",
  "6943.10",
  "7010.20",
  "7010.2X",
  "7010.76",
  "7011.10",
  "7011.1X",
  "7011.75",
  "7012.10",
  "7012.1X",
  "7012.75",
  "7131.10",
  "7131.11",
  "7196.10",
  "7196.11",
  "7196.1X",
  "7217.20",
  "7226.10",
  "7226.11",
  "7263.30",
  "7314.10",
  "7357.10",
  "7359.20",
  "7359.21",
  "7367.10",
  "7376.10",
  "7398.10",
  "7402.10",
  "7409.10",
  "7418.10",
  "7421.10",
  "7421.81",
  "7441.80",
  "7442.80",
  "7444.80",
  "7449.10",
  "7452.80",
  "7453.10",
  "7457.80",
  "7465.80",
  "7485.80",
  "7513.80",
  "7514.80",
  "7516.10",
  "7517.80",
  "7521.80",
  "7606.10",
  "7606.11",
  "7628.10",
  "7629.10",
  "7650.10",
  "7650.11",
  "7651.10",
  "7652.10",
  "7652.11",
  "7653.10",
  "7680.10",
  "7686.10",
  "7701.10",
  "7701.11",
  "7701.75",
  "7702.10",
  "7720.10",
  "7720.11",
  "7727.10",
  "7727.11",
  "7787.10",
  "7806.10",
  "7806.1X",
  "7806.75",
  "7812.2X",
  "7813.2X",
  "7815.10",
  "7823.10",
  "7823.11",
  "7880.10",
  "7880.1X",
  "7894.80",
  "7895.80",
  "7911.20",
  "7932.10",
  "7932.11",
  "7964.10",
  "7977.10",
  "7978.80",
  "7987.10",
  "7988.10",
  "7989.80",
  "8012.80",
  "8021.10",
  "8025.10",
  "8025.11",
  "8028.10",
  "8032.80",
  "8066.10",
  "8137.20",
  "8137.76",
  "8178.80",
  "8181.80",
  "8182.10",
  "8184.80",
  "8186.10",
  "8187.80",
  "8188.80",
  "8188.81",
  "8189.80",
  "8192.80",
  "8192.81",
  "8193.80",
  "8193.81",
  "8194.10",
  "8194.80",
  "8196.80",
  "8219.80",
  "8304.11",
  "8304.20",
  "8313.80",
  "8324.11",
  "8404.10",
  "8411.10",
  "8411.11",
  "8449.80",
  "8456.10",
  "8459.81",
  "8475.10",
  "8481.10",
  "8490.10",
  "8514.80",
  "8519.10",
  "8519.11",
  "8545.10",
  "8545.11",
  "8555.21",
  "8601.10",
  "8608.80",
  "8608.81",
  "8609.11",
  "8614.11",
  "8616.11",
  "8633.10",
  "8633.11",
  "8655.10",
  "8655.75",
  "8665.10",
  "8681.11",
  "8690.11",
  "8690.1X",
  "8695.10",
  "8695.1X",
  "8699.11",
  "8700.11",
  "8709.81",
  "8760.10",
  "8810.80",
  "8811.80",
  "8812.80",
  "8814.80",
  "8815.10",
  "8816.80",
  "8818.80",
  "8818.81",
  "8822.80",
  "8840.10",
  "8852.10",
  "8857.80",
  "8860.10",
  "8864.10",
  "8871.10",
  "8872.10",
  "8876.31",
  "8877.31",
  "8904.10",
  "8917.80",
  "8931.21",
  "8932.10",
  "8937.10",
  "8952.10",
  "8952.11",
  "8952.1X",
  "8953.10",
  "8953.11",
  "8961.21",
  "8965.10",
  "8965.11",
  "8969.20",
  "8969.21",
  "8972.10",
  "8973.10",
  "8975.80",
  "8976.80",
  "8977.10",
  "8998.11",
  "9022.10",
  "9022.11",
  "9037.10",
  "9042.20",
  "9056.80",
  "9060.80",
  "9077.1X",
  "9078.10",
  "9078.1X",
  "9078.20",
  "9103.10",
  "9103.11",
  "9104.10",
  "9111.11",
  "9115.80",
  "9130.10",
  "9130.11",
  "9133.80",
  "9133.81",
  "9142.10",
  "9144.10",
  "9145.10",
  "9145.1X",
  "9145.75",
  "9159.20",
  "9162.10",
  "9165.10",
  "9167.10",
  "9167.1X",
  "9167.75",
  "9172.11",
  "9177.10",
  "9185.10",
  "9190.80",
  "9268.10",
  "9355.11",
  "9363.21",
  "9368.10",
  "9368.11",
  "9369.10",
  "9372.21",
  "9373.21",
  "9442.10",
  "9464.10",
  "9464.11",
  "9464.20",
  "9464.21",
  "9464.21",
  "9468.10",
  "9468.11",
  "9468.20",
  "9468.2X",
  "9483.10",
  "9503.10",
  "9505.10",
  "9505.11",
  "9508.10",
  "9510.11",
  "9510.14",
  "9537.10",
  "9544.10",
  "9554.10",
  "9559.20",
  "9573.11",
  "9573.1X",
  "9574.10",
  "9581.11",
  "9581.1X",
  "9582.10",
  "9586.11",
  "9587.11",
  "9590.11",
  "9598.11",
  "9618.20",
  "9727.10",
  "9738.10",
  "9738.11",
  "9750.11",
  "9750.21",
  "9752.10",
  "9752.11",
  "9753.10",
  "9755.10",
  "9755.11",
  "9772.10",
  "9772.11",
  "9772.1X",
  "9772.75",
  "9793.10",
  "9793.11",
  "9825.11",
  "9825.21",
  "9827.10",
  "9827.11",
  "9848.11",
  "9869.80",
  "9869.81",
  "9870.11",
  "9871.11",
  "9905.10",
  "9911.11",
  "9914.11",
  "9915.11",
  "9921.11",
  "9922.10",
  "9922.11",
  "9923.11",
  "9924.10",
  "9924.11",
  "9925.11",
  "9935.11",
  "9936.11",
  "9996.10",
  "A031.10",
  "A031.11",
  "A047.20",
  "A047.31",
  "A052.10",
  "A110.10",
  "A113.11",
  "A148.10",
  "A148.11",
  "A182.11",
  "A183.11",
  "A185.11",
  "A200.10",
  "A200.1X",
  "A204.10",
  "A204.11",
  "A229.11",
  "A235.20",
  "A259.10",
  "A259.11",
  "A270.10",
  "A271.11",
  "A334.10",
  "A334.20",
  "A334.21",
  "A353.10",
  "A358.11",
  "A386.10",
  "A386.11",
  "A400.10",
  "A401.10",
  "A401.11",
  "A402.10",
  "A402.11",
  "A404.10",
  "A405.10",
  "A405.11",
  "A406.10",
  "A406.11",
  "A406.21",
  "A407.10",
  "A407.11",
  "A408.10",
  "A409.10",
  "A417.11",
  "A417.1X",
  "A427.11",
  "A445.10",
  "A448.20",
  "A448.21",
  "A452.10",
  "A455.11",
  "A528.11",
  "A529.10",
  "A531.10",
  "A532.10",
  "A532.11",
  "A532.1X",
  "A532.21",
  "A535.10",
  "A535.11",
  "A535.20",
  "A538.10",
  "A538.11",
  "A599.11",
  "A613.50",
  "A613.51",
  "A621.11",
  "A621.31",
  "A629.11",
  "A629.20",
  "A630.10",
  "A634.10",
  "A637.10",
  "A652.10",
  "A707.10",
  "A707.11",
  "A712.11",
  "A716.20",
  "A716.21",
  "A727.10",
  "A727.1X",
  "A728.11",
  "A736.11",
  "A738.10",
  "A758.10",
  "A758.11",
  "A758.1X",
  "A760.11",
  "A761.10",
  "A761.11",
  "A761.1X",
  "A771.11",
  "A773.11",
  "A774.11",
  "A815.10",
  "A820.10",
  "A820.11",
  "A820.1X",
  "A867.10",
  "A868.10",
  "A905.10",
  "A921.1X",
  "A922.10",
  "A922.14",
  "A956.11",
  "A958.11",
  "A958.21",
  "A959.11",
  "A959.21",
  "A960.21",
  "A961.11",
  "A961.21",
  "A966.10",
  "A966.1X",
  "A967.10",
  "A967.11",
  "A967.1X",
  "A968.10",
  "A968.11",
  "A968.20",
  "A969.11",
  "A971.10",
  "A971.11",
  "A972.10",
  "B002.50",
  "B025.10",
  "B026.10",
  "B039.10",
  "B039.1X",
  "B040.1X",
  "B042.10",
  "B063.10",
  "B090.10",
  "B093.10",
  "B095.10",
  "B099.10",
  "B100.10",
  "B142.10",
  "B151.10",
  "B262.10",
  "B266.10",
  "B267.10",
  "B268.11",
  "B272.10",
  "B273.10",
  "B280.41",
  "B288.10",
  "B311.11",
  "B312.11",
  "B313.11",
  "B337.21",
  "B337.2X",
  "B338.11",
  "B344.41",
  "B344.4X",
  "B354.11",
  "B355.10",
  "B355.1X",
  "B356.10",
  "B356.1X",
  "B356.20",
  "B386.13",
  "B411.11",
  "B414.11",
  "B436.51",
  "B448.10",
  "B448.11",
  "B452.10",
  "B459.10",
  "B459.11",
  "B461.10",
  "B461.11",
  "B503.11",
  "B504.11",
  "B518.10",
  "B518.11",
  "B519.10",
  "B519.11",
  "B520.10",
  "B520.21",
  "B521.10",
  "B521.11",
  "B526.10",
  "B530.10",
  "B530.11",
  "B531.10",
  "B532.10",
  "B533.10",
  "B534.10",
  "B534.11",
  "B538.11",
  "B539.10",
  "B541.10",
  "B541.11",
  "B541.11",
  "B542.10",
  "B542.11",
  "B543.10",
  "B543.11",
  "B544.10",
  "B546.10",
  "B546.11",
  "B552.10",
  "B552.11",
  "B553.10",
  "B553.11",
  "B555.10",
  "B555.11",
  "B555.11",
  "B569.11",
  "B570.11",
  "B585.10",
  "B587.10",
  "B588.11",
  "B589.11",
  "B592.10",
  "B593.10",
  "B595.10",
  "B595.11",
  "B595.20",
  "B595.21",
  "B597.10",
  "B599.10",
  "B599.20",
  "B606.11",
  "B608.10",
  "B609.10",
  "B614.10",
  "B616.10",
  "B619.10",
  "B620.11",
  "B623.10",
  "B624.11",
  "B626.10",
  "B632.10",
  "B634.10",
  "B634.11",
  "B638.11",
  "B639.10",
  "B648.10",
  "B648.11",
  "B648.20",
  "B655.10",
  "B656.10",
  "B656.11",
  "B657.10",
  "B657.11",
  "B659.10",
  "B661.10",
  "B745.41",
  "B746.51",
  "B754.11",
  "B754.21",
  "B788.11",
  "B807.41",
  "B807.51",
  "B822.11",
  "B858.11",
  "B913.11",
  "B969.11",
  "B970.11",
  "B971.11",
  "B972.11",
  "B973.10",
  "B973.11",
  "B975.10",
  "B994.10",
  "B994.11",
  "C003.10",
  "C003.11",
  "C004.10",
  "C004.11",
  "C005.10",
  "C005.11",
  "C047.11",
  "C114.11",
  "C116.11",
  "C117.11",
  "C133.11",
  "C171.10",
  "C171.11",
  "C171.1X",
  "C173.11",
  "C174.10",
  "C176.11",
  "C177.11",
  "C178.11",
  "C182.10",
  "C185.10",
  "C185.11",
  "C207.11",
  "C244.10",
  "C245.11",
  "C246.11",
  "C249.11",
  "C251.21",
  "C274.10",
  "C274.11",
  "C274.21",
  "C282.11",
  "C285.11",
  "C289.10",
  "C306.11",
  "C313.11",
  "C315.11",
  "C348.10",
  "C349.10",
  "C349.11",
  "C350.11",
  "C394.13",
  "C395.13",
  "C396.13",
  "C398.13",
  "C421.11",
  "C424.11",
  "C499.10",
  "C499.11",
  "C542.11",
  "C542.21",
  "C543.11",
  "C545.11",
  "C636.11",
  "C649.11",
  "C651.11",
  "C652.11",
  "C657.11",
  "C743.11",
  "C744.11",
  "C824.10",
  "C877.11",
  "C878.11",
  "C880.11",
  "C881.11",
  "C882.11",
  "C884.11",
  "C892.11",
  "C894.10",
  "C896.11",
  "C927.11",
  "C928.11",
  "C936.11",
  "D018.11",
  "D059.11",
  "D065.11",
  "D155.11",
  "D216.11",
  "D219.11",
  "D272.10",
  "D274.11",
  "D274.20",
  "D276.11",
  "D279.11",
  "D280.11",
  "D395.11",
  "D426.11",
  "D428.11",
  "D449.11",
  "D450.11",
  "D451.10",
  "D452.11",
  "D529.13",
  "D570.11",
  "D619.11",
  "D628.11",
  "D706.11",
  "N124.10",
  "N124.11",
  "N125.10",
  "N125.11",
  "N212.10",
  "N212.11",
  "N234.11",
  "N235.11",
  "N236.10",
  "N236.11",
  "N246.21",
  "N247.11",
  "N264.11",
  "R103.11",
  "R104.11",
  "R105.11",
  "R122.11",
  "R124.21",
];
const bremCorto14 = [
  "3219.10",
  "3220.10",
  "3251.10",
  "3256.10",
  "3283.10",
  "4733.10",
  "4978.10",
  "5068.10",
  "5073.10",
  "5102.10",
  "5591.10",
  "5722.10",
  "5815.10",
  "5816.10",
  "5822.10",
  "5826.10",
  "6757.10",
  "6759.10",
  "6764.10",
  "6775.10",
  "7093.10",
  "7248.10",
  "7257.10",
  "7317.10",
  "7715.10",
  "7735.10",
  "7736.10",
  "7743.10",
  "7746.10",
  "7747.10",
  "7754.10",
  "7900.10",
  "7901.10",
  "7903.10",
  "7904.10",
  "8109.80",
  "8110.85",
  "8467.80",
  "8799.80",
  "8801.80",
  "8855.80",
  "9384.10",
  "9384.20",
  "9386.10",
  "9392.10",
  "9395.10",
  "A676.10",
  "A683.10",
  "A695.10",
  "A702.10",
  "A710.10",
  "B240.10",
  "B249.10",
  "B465.10",
  "B571.10",
  "B572.10",
  "B574.10",
  "B575.10",
  "B577.10",
  "B578.10",
  "B579.10",
  "B583.10",
  "B640.10",
  "B641.10",
  "B642.10",
  "B986.10",
  "C001.10",
  "C183.10",
  "C184.10",
  "C212.10",
  "C275.10",
  "C277.10",
  "C278.10",
  "C279.10",
  "C281.10",
  "C337.10",
  "D631.20",
  "D638.10",
  "N204.10",
  "XXXX.10",
];

