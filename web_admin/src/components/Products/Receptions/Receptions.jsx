import React, { Component, Fragment } from 'react';
import CrudLayout from '../../CrudLayout/CrudLayout';
import CreateReception from './CreateReception';
import RenderRows from '../../../helpers/render_rows';
import CreatePaymentReception from '../ReceptionPayments/CreatePaymentReception';
import moment from 'moment';
import { FetchXHR } from '../../../helpers/generals';
import async from 'async';

import {
    Divider,
	Popconfirm,
	Button
} from 'antd';

class Receptions extends CrudLayout {
    constructor(props) {
		super(props);
		this.custom_submit = CreateReception;
		this.custom_modals = {
			'open_create_payment': CreatePaymentReception
		}
		this.state = { // render vars:
			filters_layout: ['search'],
			async_data: ['providers']
		};
        this.model = {
			name: 'reception',
			singular: 'reception',
			plural: 'receptions',
			label: 'Recepciones de Producto'
		};
		this.additional_get_data = {
			subsidiary_id: this.props.session.subsidiary._id
		}
		this.populate_ids = ['user_id', 'provider_id'];
		this.additional_submit_data = {
			subsidiary_id: this.props.session.subsidiary._id
		}
		this.table_columns = [
			{
            	title: 'Fecha',
            	dataIndex: 'date',
				key: 'date',
				render: RenderRows.renderRowDateSells,
				width: '8%'
			},
			{
            	title: 'Folio',
            	dataIndex: 'folio',
				key: 'folio',
				render: RenderRows.renderRowNumbers,
				width: '5%'
			},
			{
            	title: 'Factura',
            	dataIndex: 'invoice_folio',
				key: 'invoice_folio',
				render: RenderRows.renderRowTextSells,
				width: '10%'
			},
			{
            	title: 'Estatus',
            	dataIndex: 'status',
				key: 'status',
				render: RenderRows.renderRowTextSells,
				width: '8%',
				filters: [
					{ text: 'NORMAL', value: 'NORMAL' },
					{ text: 'PAGADA', value: 'PAGADA'},
					{ text: 'CANCELADO', value: 'CANCELADO'},
				],
			},
			{
            	title: 'Proovedor',
            	dataIndex: 'provider_id.name',
				key: 'provider_id.name',
				render: RenderRows.renderRowTextSells,
				width: '20%'
			},
			{
            	title: 'Pagado',
            	dataIndex: 'payed',
				key: 'payed',
				render: RenderRows.renderRowNumberSells,
				width: '7%'
			},
			{
            	title: 'Total',
            	dataIndex: 'total',
				key: 'total',
				render: RenderRows.renderRowNumberSells,
				width: '8%'
			}
		];
		if (this.props.session.user.rol === 'ADMIN' ||
			this.props.session.user.rol === 'MANAGER') {
			this.table_columns.push({
            	title: 'Acciones',
				key: 'action',
				width: '10%',
            	render: (text, record) => {
					let PayButton = '';
					if (!record.is_payed) {
						PayButton = (
							<Fragment>
								<Button 
									type="primary" 
									shape="circle" 
									icon="credit-card"
									onClick={(event)=> {
										event.stopPropagation();
										this.setState({
											selected_data: record,
											open_custom_modal: 'open_create_payment'
										});
									}}
								/>
								<Divider type="vertical" />
							</Fragment>
						);
					};
					let CancelButton = '';
					let EditButton = '';
					if (!record.is_canceled) {
						EditButton = (
							<Fragment>
								<Button 
									type="primary" 
									shape="circle" 
									icon="edit"
									onClick={(event)=> {
										event.stopPropagation();
										this.onEdit(record);
									}}
								/>
								<Divider type="vertical" />
							</Fragment>
						);
						CancelButton = (
							<Popconfirm
								onClick={(event)=> {
									event.stopPropagation();
								}}
								title="¿Esta seguro de cancelar?" 
								okText="Aceptar"
								cancelText="Cancelar"
								onCancel={(event) => {
									event.stopPropagation();
								}}
								onConfirm={(event) => {
									event.stopPropagation();
									this.cancel_reception(record)
								}}
							>
								<Button 
									type="danger" 
									shape="circle" 
									icon="close-circle"
								/>
							</Popconfirm>
						);
					};
					let DeleteButton = '';
				/* 	if (record.is_canceled) {
						DeleteButton = (
							<Popconfirm
								onClick={(event)=> {
									event.stopPropagation();
								}}
								title="¿Esta seguro de eliminar?" 
								okText="Eliminar"
								cancelText="Cancelar"
								onCancel={(event) => {
									event.stopPropagation();
								}}
								onConfirm={(event) => {
									event.stopPropagation();
									this.onDelete(record);
								}}
							>
								<Button 
									type="danger" 
									shape="circle" 
									icon="delete"
								/>
							</Popconfirm>
						);
					}; */

					return (
						<span>
							{PayButton}
							{EditButton}
							{CancelButton}
					{/* 		{DeleteButton} */}
						</span>
					);
				}
			});
		} else {
			this.table_columns.push({
            	title: 'Acciones',
            	key: 'action',
            	render: (text, record) => (
					<span>
						<a 
							href="javascript:;" 
							onClick={(event)=> {
								event.stopPropagation();
								this.onEdit(record);
							}}
						>
							Editar
						</a>
					</span>
            	),
			});
		}

		this.cancel_reception = this.cancel_reception.bind(this);
	}

	cancel_reception = (record) => {
		console.log("CANCEL Reception")
		console.log(record);
		const OperationsProducts = [];

		// 	CAMBIAR STATUS SELL A CANCELADO
		OperationsProducts.push((callback) => {
			const url_sell = process.env.REACT_APP_API_URL + '/reception/' + record._id;
			let new_sell = {
				payed: 0,
				is_canceled: true,
				status: 'CANCELADO'
			}
			FetchXHR(url_sell, 'PUT', new_sell).then((response_sell) => {
				if (response_sell.json.success) {
					callback(null, response_sell.json.obj);
				} else {
					callback(response_sell.message);
				}
			}).catch((onError) => {
				callback(onError);
			});
		});


		// AGRUPAR PRODUCTOS Y POR CADA PRODUCTO SUMARLE EL STOCK
		//POR CADA PRODUCTO CREAR UN MOVIMIENTO DE RETORNO PARA EL KARDEX
		let mapped_products_stock = {}; // product_id -> sum_quantity.
		record.products.forEach((p) => {
			if (mapped_products_stock[p.id]) {
				mapped_products_stock[p.id] += p.quantity;
			} else {
				mapped_products_stock[p.id] = p.quantity;
			}
		});

		Object.keys(mapped_products_stock).forEach((el) => {
			OperationsProducts.push((callback) => {
				const url_get_product = process.env.REACT_APP_API_URL + '/product/' + el;
				FetchXHR(url_get_product, 'GET').then((response_actual_p) => {
					if (response_actual_p.json.success) {
						if (response_actual_p.json.obj) {
							const new_p = {
								stock: response_actual_p.json.obj.stock - mapped_products_stock[el]
							}
							const url_put_product = process.env.REACT_APP_API_URL + '/product/' + el;
							FetchXHR(url_put_product, 'PUT', new_p).then((response_p) => {
								if (response_p.json.success) {
									callback(null, response_p.json.obj);
								} else {
									callback(response_p.message);
								}
							}).catch((onError) => {
								callback(onError);
							});
						} else {
							callback(null, response_actual_p.json.obj);
						}
					} else {
						callback(response_actual_p.message);
					}
				});
			});
		});

		record.products.forEach((p) => {
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
					type: 'RECEPCION_CANCELADO',
					date: moment().toISOString()
				}
				/* const url_post_op = process.env.REACT_APP_API_URL + '/product-transaction';
				FetchXHR(url_post_op, 'POST', new_transaction).then((response_pt) => {
					if (response_pt.json.success) {
						callback(null, response_pt.json.obj);
					} else {
						callback(response_pt.message);
					}
				}).catch((onError) => {
					callback(onError);
				}); */
			});
		});
		
		// GET PAYMENTS.
		let total_payments = 0;
		let payments = [];
		const url_payments = process.env.REACT_APP_API_URL + '/reception-payments';
		let data_payments = {
			limit: 1000,
			page: 1,
			filters: {
				subsidiary_id: this.props.session.subsidiary._id,
				reception_id: record._id,
			}
		}
		FetchXHR(url_payments, 'POST', data_payments).then((response_payments) => {
			if (response_payments.json.success) {
				payments = response_payments.json.data.docs.map((el, index) => {
					total_payments += el.total;
					return ({
						...el,
						key: index
					});
				});
				console.log("PAYMENTS");
				console.log(payments);
				if (payments.length > 0) {
					// 	RESTAR EN SELLS AL CLIENT_ID
					const url_client_id = process.env.REACT_APP_API_URL + '/provider/' + record.provider_id._id;
					let new_client = {
						buys: record.provider_id.buys - total_payments,
					}
					FetchXHR(url_client_id, 'PUT', new_client).then((response_client) => {
						if (response_client.json.success) {
							// for each payment.. update to cancel status.
							
							payments.forEach((pay) => {
								OperationsProducts.push((callback) => {
									const url_payment = process.env.REACT_APP_API_URL + '/reception-payment/' + pay._id;
									let new_payment = {
										is_canceled: true,
										status: 'CANCELADO'
									}
									FetchXHR(url_payment, 'PUT', new_payment).then((response_payment) => {
										if (response_payment.json.success) {
											callback(null, response_payment.json.obj);
										} else {
											callback(response_payment.message);
										}
									}).catch((onError) => {
										callback(onError);
									});
								});
							});

							// normal async actions:
							async.series(OperationsProducts,(err, responses) => {
								if (!err) {
									console.log("NO ERROR");
									console.log(responses);
									this.refreshTable();
								} else {
									console.log(err);
									console.log("ERROR");
									console.log(responses);
									this.setState({
										error: 'Error al procesar la petición',
										loading_submit: false
									});
								}
							});


						} else {
							this.setState({
								error: 'Error al procesar la petición',
							});
						}
					}).catch((onError) => {
						this.setState({
							error: 'Error al procesar la petición',
						});
					});
				} else {
					
					// normal async actions:
					async.series(OperationsProducts,(err, responses) => {
						if (!err) {
							console.log("NO ERROR");
							console.log(responses);
							this.refreshTable();
						} else {
							console.log(err);
							console.log("ERROR");
							console.log(responses);
							this.setState({
								error: 'Error al procesar la petición',
								loading_submit: false
							});
						}
					});

				}
			} else {
				this.setState({
					error: 'Error al procesar la petición',
				});
			}
		}).catch((onError) => {
			this.setState({
				error: 'Error al procesar la petición',
			});
		});		
	}
}

export default Receptions;