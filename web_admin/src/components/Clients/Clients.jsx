import React, { Component, Fragment } from 'react';
import CrudLayout from '../CrudLayout/CrudLayout';
import Schema from './ClientsSchema';

import { 
    Divider,
	Popconfirm
} from 'antd';

class Clients extends CrudLayout {
    constructor(props) {
		super(props);
		this.schema = Schema;
		this.state = { // render vars:
			filters_layout: ['search']
		};
        this.model = {
			name: 'client',
			singular: 'client',
			plural: 'clients',
			label: 'Clientes'
		};
		this.additional_submit_data = {
			account_id: this.props.session.user.account_id
		}
        this.table_columns = [
			{
            	title: 'Cliente',
            	dataIndex: 'name',
				key: 'name',
				sorter: true
			}, 
			{
            	title: 'Dirección',
            	dataIndex: 'address',
            	key: 'address'
			},
			{
            	title: 'Telefono',
            	dataIndex: 'phone_number',
            	key: 'phone_number'
			},
			{
            	title: 'Ventas',
            	dataIndex: 'sells',
            	key: 'sells'
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

export default Clients;