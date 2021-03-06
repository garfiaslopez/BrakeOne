import React, { Component, Fragment } from 'react';
import CrudLayout from '../../CrudLayout/CrudLayout';
/* import createMissing from './createMissing'; */
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
import createWarranty from './CreateWarranty';

class warranty extends CrudLayout {
	constructor(props) {
		super(props);
		this.custom_submit = createWarranty;
		this.state = { // render vars:
			filters_layout: ['search','date_range']
		};
        this.model = {
			name: 'warrantyProduct',
			singular: 'warrantyProduct',
			plural: 'warrantyProducts',
			label: 'Garantias'
		};
		this.additional_submit_data = {
			subsidiary_id: this.props.session.subsidiary._id
		}
		this.populate_ids = ['subsidiary_id', 'client_id', 'products.subsidiary_id'];
        this.table_columns = [
			{
            	title: 'Fecha',
            	dataIndex: 'date',
				key: 'date',
				render: RenderRows.renderRowDate,
				width: '10%'
			},			
			{
            	title: 'Folio',
            	dataIndex: 'folio',
				key: 'folio',
				render: RenderRows.renderRowText,
				width: '5%'
			},
			{
				title: 'Clave',
				dataIndex: 'fmsi',
				key: 'products.key_id',
				render: RenderRows.renderRowTextFMSI,
				width: '10%'
			},			
			{
				title: 'FMSI',
				dataIndex: 'fmsi',
				key: 'products.fmsi',
				render: RenderRows.renderRowTextFMSI,
				width: '10%'
			},
			{
				title: 'Marca',
				dataIndex: 'fmsi',
				key: 'products.brand',
				render: RenderRows.renderRowTextFMSI,
				width: '10%'
			},
			{
            	title: 'Detalle garantia',
            	dataIndex: 'notes',
				key: 'notes',
				render: RenderRows.renderRowText,
				width: '30%'
			},
			{
            	title: 'Cliente',
            	dataIndex: 'client_name',
				key: 'client_name',
				render: RenderRows.renderRowText,
				width: '12%'
			},
			
			/* {
            	title: 'Marca',
            	dataIndex: 'car_brand',
				key: 'car_brand',
				render: RenderRows.renderRowText,
				width: '10%'
			}, */
			/* {
            	title: 'Modelo',
            	dataIndex: 'car_model',
				key: 'car_model',
				render: RenderRows.renderRowText,
				width: '5%'
			}, */
			/* {
            	title: 'Año',
            	dataIndex: 'car_year',
				key: 'car_year',
				render: RenderRows.renderRowText,
				width: '5%'
			}, */
			/* {
            	title: 'Total',
            	dataIndex: 'total',
				key: 'total',
				render: RenderRows.renderRowNumber,
				width: '7%'
			} */
		];

		if (this.props.session.user.rol === 'ADMIN' ||
			this.props.session.user.rol === 'MANAGER') {
			this.table_columns.push({
            	title: 'Acciones',
				key: 'action',
				width: '10%',
            	render: (text, record) => (
					<span>
						<Button 
							type="primary" 
							shape="circle"
							icon="printer"
							onClick={(event)=> {
								event.stopPropagation();
								this.onPrint(record, 'QUOTATION');
							}}
						/>
						<Divider type="vertical" />
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
					</span>
            	),
			});
		} else {
			this.table_columns.push({
            	title: 'Acciones',
            	key: 'action',
            	render: (text, record) => (
					<span>
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
					</span>
            	),
			});
		}

	/* 	this.table_columns.push({
			title: '¿Es Venta?',
			dataIndex: 'converted_to_sell',
			key: 'converted_to_sell',
			render: RenderRows.renderRowSellBool,
			width: '8%',
			filters: [
				{ text: 'Ventas', value: true },
				{ text: 'No Ventas', value: false},
			],
		}); */
	}
}

export default warranty;