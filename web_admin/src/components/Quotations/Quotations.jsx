import React, { Component, Fragment } from 'react';
import CrudLayout from '../CrudLayout/CrudLayout';
import CreateQuotation from './CreateQuotation';
import RenderRows from '../../helpers/render_rows';

import { 
    Divider,
	Popconfirm
} from 'antd';

class Quotations extends CrudLayout {
    constructor(props) {
		super(props);
		this.custom_submit = CreateQuotation;
		this.state = { // render vars:
			filters_layout: ['search','date_range']
		};
        this.model = {
			name: 'quotation',
			singular: 'quotation',
			plural: 'quotations',
			label: 'Cotizaciones'
		};
		this.additional_submit_data = {
			subsidiary_id: this.props.session.subsidiary._id
		}
		this.populate_ids = ['subsidiary_id'];
        this.table_columns = [
			{
            	title: 'Fecha',
            	dataIndex: 'date',
				key: 'date',
				fixed: 'left',
				render: RenderRows.renderRowDate,
				width: '20%'
			},
			{
            	title: 'Sucursal',
            	dataIndex: 'subsidiary_id.denomination',
				key: 'subsidiary_id.denomination',
				width: '15%'
			},
			{
            	title: 'Folio',
            	dataIndex: 'folio',
				key: 'folio',
				width: '15%'
			},
			{
            	title: 'Cliente',
            	dataIndex: 'client_name',
				key: 'client_name',
				width: '20%'
			},
			{
            	title: 'Carro',
            	dataIndex: 'car_model',
				key: 'car_model',
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

		if (this.props.session.user.rol === 'admin' ||
			this.props.session.user.rol === 'manager') {
			this.table_columns.push({
            	title: 'Acciones',
				key: 'action',
				width: '10%',
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
                			<a>Eliminar</a>
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
	}
}

export default Quotations;