import React, { Component, Fragment } from 'react';
import CrudLayout from '../CrudLayout/CrudLayout';
import CreateQuotation from './CreateQuotation';

import { 
    Divider,
	Popconfirm
} from 'antd';

class Quotations extends CrudLayout {
    constructor(props) {
		super(props);
		this.custom_submit = CreateQuotation;
		this.state = { // render vars:
			filters_layout: ['search','data_range'],
		};
        this.model = {
			name: 'quotation',
			singular: 'quotation',
			plural: 'quotations',
			label: 'Cotizaciones'
		};
		this.additional_get_data = {
			subsidiary_id: this.props.session.subsidiary._id
		}
		this.additional_submit_data = {
			subsidiary_id: this.props.session.subsidiary._id
		}
		this.scroll_on_table = 1500;
        this.table_columns = [
			{
            	title: 'Fecha',
            	dataIndex: 'date',
				key: 'date',
				fixed: 'left',
			},
			{
            	title: 'Folio',
            	dataIndex: 'folio',
            	key: 'folio'
			},
			{
            	title: 'Cliente',
            	dataIndex: 'client_name',
            	key: 'client_name'
			},
			{
            	title: 'Carro',
            	dataIndex: 'car_model',
            	key: 'car_model'
			},
			{
            	title: 'Total',
            	dataIndex: 'total',
            	key: 'total'
			}
		];

		if (this.props.session.user.rol === 'admin' ||
			this.props.session.user.rol === 'manager') {
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