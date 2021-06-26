import React, { Component, Fragment } from 'react';
import CrudLayout from '../../CrudLayout/CrudLayout';
import Schema from './KardexSchema';
import RenderRows from '../../../helpers/render_rows';
import moment from 'moment';
import render from '../../../helpers/render_rows';

import { 
    Divider,
	Popconfirm,
	Button
} from 'antd';

const FontSize = 11.3;
const round2 = (number) => (Math.round(number * 100) / 100);

const renderRowTextSells =  (text, record) => {
	let color = 'black';
	if (!record.is_payed) {
		color = 'black';
	}
	if (!record.is_finished) {
		color = 'black';
	}
	return ({
		children: <p style={{color, fontSize: FontSize}}>{text}</p>,
	});
}
const renderRowNumberSells =  (text, record) => {
 	let color = 'black';	
	return ({
		children: <p style={{color, fontSize: FontSize}}>${String(round2(text ? text : 0)).replace(/\B(?=(\d{3})+(?!\d))/g, ',')}</p>,
	});
}
const renderTextSubString = (text, record) => {
	let color = 'black';
	return ({
		children: <p style={{color, fontSize: FontSize}}>{text.substring(0,30) + '...'}</p>
	})
}

const renderRowQuantity = (text, record) => {

	let minusMas = ''

	if(record.type === 'VENTA'){
		minusMas = '-';
	}
	if(record.type === 'VENTA_SERVICIO'){
		minusMas = '-';
	}
	if(record.type === 'RECEPCION'){
		minusMas = '+';
	}
	if(record.type === 'CANCELADO'){
		minusMas = '+';
	}
	return ({
		children: <p style = {{fontSize: FontSize}}>{minusMas}{text}</p>
	})

}

const renderRowDateSells =  (text, record) => {
	let color = 'black';
	if (!record.is_payed) {
		color = 'black';
	}
	if (!record.is_finished) {
		color = 'black';
	}
	return ({
		children: <p style={{color, fontSize: FontSize}}>{moment(text).format('DD/MM/YYYY HH:mm')}</p>,
	});
}

class ProductService extends CrudLayout {
    constructor(props) {
		super(props);
		this.schema = Schema;
		this.no_render_add = true;
		this.state = { // render vars:
			filters_layout: ['search','date_range'],
		};
        this.model = {
			name: 'product_transaction',
			singular: 'product-transaction',
			plural: 'product-transactions',
			label: 'Kardex'
		};
		this.additional_get_data = {
			subsidiary_id: this.props.session.subsidiary._id
		}
		this.populate_ids=['product_id','user_id'];	
        this.table_columns = [
			{
            	title: 'Fecha',
            	dataIndex: 'date',
				key: 'date',				
				render: renderRowDateSells,
				width: '8%'
			},
			{
            	title: 'Tipo de Movimiento',
            	dataIndex: 'type',
				key: 'type',				
				render: renderRowTextSells,
				width: '8%',
				filters: [
					{ text: 'VENTA', value: 'VENTA' },
					{ text: 'RECEPCION', value: 'RECEPCION'},
					{text: 'VENTA_SERVICIO', value: 'VENTA_SERVICIO'},
					{ text: 'CANCELADO', value: 'CANCELADO'},
				],
			},
			{
            	title: 'Factura',
            	dataIndex: 'invoice_folio',
				key: 'invoice_folio',				
				render: renderRowTextSells,
				width: '6%',
			},
			{
            	title: 'Folio',
            	dataIndex: 'folio',
				key: 'folio',				
				render: renderRowTextSells,
				width: '10%',
			},
			{
            	title: 'Clave',
            	dataIndex: 'product_id.key_id',
				key: 'product_id.key_id',				
				render: renderRowTextSells,
				width: '6%',				
			},
			{
            	title: 'FMSI',
            	dataIndex: 'product_id.fmsi',
				key: 'product_id.fmsi',				
				render: renderRowTextSells,
				width: '8%',
			},
			{
            	title: 'Marca',
            	dataIndex: 'product_id.brand',
				key: 'product_id.brand',				
				render: renderRowTextSells,
				width: '10%',
			},			
			{
				title: 'Cliente',
				dataIndex: 'client_name',
				key: 'client_name',
				render: renderRowTextSells,
				width: '10%',
			},	
			{
				title: 'Proveedor',
				dataIndex: 'provider_name',
				key: 'client_name',
				render: renderRowTextSells,
				width: '10%',
			},
			{
            	title: 'Salidas',
            	dataIndex: 'quantity',
				key: 'quantity',			
				render: renderRowQuantity,
				width: '5%',
			},			
			{
            	title: 'Precio',
            	dataIndex: 'price',
				key: 'price',							
				render: renderRowNumberSells,
				width: '8%',
			},
			{
            	title: 'Total',
            	dataIndex: 'total',
				key: 'total',							
				render: renderRowNumberSells,
				width: '6%',
			}
		]
	}
}

export default ProductService;