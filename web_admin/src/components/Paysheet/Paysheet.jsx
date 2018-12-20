import React, { Component, Fragment } from 'react';
import CrudLayout from '../CrudLayout/CrudLayout';
import SubsidiarysSchema from './PaySheetSchema';

import { 
    Divider,
	Popconfirm
} from 'antd';

class Paysheet extends CrudLayout {
    constructor(props) {
		super(props);
		this.schema = SubsidiarysSchema;
		this.state = { // render vars:
			filters_layout: ['search', 'date_range']
		};
        this.model = {
			name: 'paysheet',
			singular: 'paysheet',
			plural: 'paysheets',
			label: 'Nóminas'
		};
		this.additional_submit_data = {
			account_id: this.props.session.user.account_id
		}
		this.additional_get_data = {
			account_id: this.props.session.user.account_id
		}
        this.table_columns = [
			{
            	title: 'Fecha',
            	dataIndex: 'date',
				key: 'date',
				sorter: true
			}, 
			{
            	title: 'Semana',
            	dataIndex: 'week',
            	key: 'week'
			},
			{
            	title: 'Inicio',
            	dataIndex: 'start',
            	key: 'start'
			},
			{
            	title: 'Termino',
            	dataIndex: 'end',
            	key: 'end'
			},
			{
            	title: 'Concepto',
            	dataIndex: 'denomination',
            	key: 'denomination'
			},
			{
            	title: 'Percepciones',
            	dataIndex: 'perceptions',
            	key: 'perceptions'
			},
			{
            	title: 'Deducciones',
            	dataIndex: 'deductions',
            	key: 'deductions'
			},
			{
            	title: 'Neto a pagar',
            	dataIndex: 'total_to_pay',
            	key: 'total_to_pay'
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
		}
	}
}

export default Paysheet;