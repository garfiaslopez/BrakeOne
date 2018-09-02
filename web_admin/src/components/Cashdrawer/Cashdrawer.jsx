import React, { Component, Fragment } from 'react';
import CrudLayout from '../CrudLayout/CrudLayout';
import Schema from './CashdrawerSchema';

import { 
    Divider,
	Popconfirm
} from 'antd';

class Cashdrawer extends CrudLayout {
    constructor(props) {
		super(props);
		this.schema = Schema;
		this.state = { // render vars:
			filters_layout: ['search','date_range']
		};
        this.model = {
			name: 'cashdrawer',
			singular: 'cashdrawer',
			plural: 'cashdrawers',
			label: 'Movimientos de caja'
		};
		this.additional_submit_data = {
			account_id: this.props.session.user.account_id
		}
        this.table_columns = [
			{
            	title: 'Folio',
            	dataIndex: 'folio',
				key: 'folio',
				sorter: true
			},
			{
            	title: 'Fecha',
            	dataIndex: 'date',
				key: 'date',
				sorter: true
			},
			{
            	title: 'Status',
            	dataIndex: 'status',
            	key: 'status'
			},
			{
            	title: 'Retiros',
            	dataIndex: 'withdrawals',
				key: 'withdrawals',
				sorter: true
			},
			{
            	title: 'Depositos',
            	dataIndex: 'deposits',
				key: 'date',
				sorter: true
			},
			{
            	title: 'Saldo',
            	dataIndex: 'balance',
				key: 'balance',
				sorter: true
			},
			{
            	title: 'Acciones',
            	key: 'action',
            	render: (text, record) => (
					<span>
						<a href="javascript:;" onClick={()=> this.onEdit(record)}>Editar</a>
						<Divider type="vertical" />
						<Popconfirm 
							title="¿Esta seguro de eliminar?" 
							okText="Eliminar"
							cancelText="Cancelar"
							onConfirm={() => this.onDelete(record)}
						>
                			<a>Eliminar</a>
              			</Popconfirm>
					</span>
            	),
		  	}
		];
	}
}

export default Cashdrawer;