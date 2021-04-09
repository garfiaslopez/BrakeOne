import React, { Component, Fragment } from 'react';
import CrudLayout from '../../CrudLayout/CrudLayout';
import Schema from './KardexSchema';
import RenderRows from '../../../helpers/render_rows';
import moment from 'moment';

import { 
    Divider,
	Popconfirm
} from 'antd';

const FontSize = 11.3;

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
				width: '10%'
			},
			{
            	title: 'TipoMov',
            	dataIndex: 'type',
				key: 'type',				
				render: renderRowTextSells,
				width: '10%',
				filters: [
					{ text: 'VENTA', value: 'VENTA' },
					{ text: 'RECEPCION', value: 'RECEPCION'},
					{text: 'VENTA_SERVICIO', value: 'VENTA_SERVICIO'},
					{ text: 'CANCELADO', value: 'CANCELADO'},
				],
			},
			{
            	title: 'Clave',
            	dataIndex: 'product_id.key_id',
				key: 'product_id.key_id',				
				render: renderRowTextSells,
				width: '10%',
			},
			{
            	title: 'Marca',
            	dataIndex: 'product_id.brand',
				key: 'product_id.brand',				
				render: renderRowTextSells,
				width: '10%',
			},
			{
            	title: 'Vendedor',
            	dataIndex: 'user_id.name',
				key: 'user_id.name',				
				render: renderRowTextSells,
				width: '10%',
				/* filters: [
					{ text: 'MICHEL DE LOERA', value: 'MICHEL DE LOERA' },
					{ text: 'ROBERTO QRO', value: 'ROBERTO QRO'},
					{text: 'ANTONIO SALDIVAR', value: 'ANTONIO SALDIVAR'},
					{ text: 'ANGEL ARMANDO SALDIVAR', value: 'ANGEL ARMANDO SALDIVAR'},
					{ text: 'JONATHAN DE LOERA', value: 'JONATHAN DE LOERA'},
					{ text: 'LEONARDO SALDIVAR', value: 'LEONARDO SALDIVAR'},
				], */
			},
			{
            	title: 'Salidas',
            	dataIndex: 'quantity',
				key: 'quantity',			
				render: renderRowQuantity,
				width: '6%',
			},			
			{
            	title: 'Precio',
            	dataIndex: 'price',
				key: 'price',							
				render: renderRowTextSells,
				width: '10%',
			},
			{
            	title: 'Total',
            	dataIndex: 'total',
				key: 'total',							
				render: renderRowTextSells,
				width: '10%',
			}
		];
	}
}

export default ProductService;