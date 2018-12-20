import React, { Component, Fragment } from 'react';
import CrudLayout from '../CrudLayout/CrudLayout';
import Schema from './ProvidersSchema';

import { 
    Divider,
	Popconfirm
} from 'antd';

class Providers extends CrudLayout {
    constructor(props) {
		super(props);
		this.schema = Schema;
		this.state = { // render vars:
			filters_layout: ['search','date_range']
		};
        this.model = {
			name: 'provider',
			singular: 'provider',
			plural: 'providers',
			label: 'Proveedores'
		};
		this.additional_submit_data = {
			account_id: this.props.session.user.account_id
		}
		this.additional_get_data = {
			account_id: this.props.session.user.account_id
		}
		
        this.table_columns = [
			{
            	title: 'Proveedor',
            	dataIndex: 'name',
				key: 'name',
				sorter: true
			}, 
			{
            	title: 'RFC',
            	dataIndex: 'rfc',
            	key: 'rfc'
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
            	title: 'Compras',
            	dataIndex: 'buys',
            	key: 'buys'
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

export default Providers;