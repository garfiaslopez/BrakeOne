import React, { Component, Fragment } from 'react';
import CrudLayout from '../../CrudLayout/CrudLayout';
import VisPayment from './VisPayment';
import RenderRows from '../../../helpers/render_rows';

import { 
    Divider,
	Popconfirm,
	Button
} from 'antd';

class ReceptionPayments extends CrudLayout {
    constructor(props) {
		super(props);
		this.custom_submit = VisPayment;
		this.no_render_add = true;
		this.state = { // render vars:
			filters_layout: ['search','date_range']
		};
        this.model = {
			name: 'reception-payment',
			singular: 'reception-payment',
			plural: 'reception-payments',
			label: 'Pagos'
		};
		this.additional_get_data = {
			subsidiary_id: this.props.session.subsidiary._id
		}
		this.additional_submit_data = {
			subsidiary_id: this.props.session.subsidiary._id
		}

		this.populate_ids = ['provider_id', 'reception_id'];
		
        this.table_columns = [
			{
            	title: 'Fecha',
            	dataIndex: 'date',
				key: 'date',
				render: RenderRows.renderRowDate,
				width: '15%'
			},
			{
            	title: 'Folio',
            	dataIndex: 'folio',
				key: 'folio',
				width: '10%'
			},
			{
            	title: 'Folio Compra',
            	dataIndex: 'reception_id.folio',
				key: 'reception_id.folio',
				width: '10%'
			},
			{
            	title: 'Proveedor',
            	dataIndex: 'provider_id.name',
				key: 'provider_id.name',
				width: '20%'
			},
			{
            	title: 'Tipo',
            	dataIndex: 'type',
				key: 'type',
				width: '10%'
			},
			{
            	title: 'Estatus',
            	dataIndex: 'status',
				key: 'status',
				width: '10%'
			},
			{
            	title: 'Total',
            	dataIndex: 'total',
				key: 'total',
				render: RenderRows.renderRowNumber,
				width: '10%'
			}
		];

		if (this.props.session.user.rol === 'ADMIN' ||
			this.props.session.user.rol === 'MANAGER') {
			this.table_columns.push({
            	title: 'Acciones',
				key: 'action',
				width: '15%',
            	render: (text, record) => {
					return (
						<span>
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
					);
				},
			});
		}
	}
}

export default ReceptionPayments;