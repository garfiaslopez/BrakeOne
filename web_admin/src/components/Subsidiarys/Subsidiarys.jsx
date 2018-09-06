import React, { Component, Fragment } from 'react';
import CrudLayout from '../CrudLayout/CrudLayout';
import SubsidiarysSchema from './SubsidiarysSchema';

import { 
    Divider,
	Popconfirm
} from 'antd';

class Subsidiarys extends CrudLayout {
    constructor(props) {
		super(props);
		this.schema = SubsidiarysSchema;
		this.state = { // render vars:
			filters_layout: ['search']
		};
        this.model = {
			name: 'subsidiary',
			singular: 'subsidiary',
			plural: 'subsidiarys',
			label: 'Sucursales'
		};
		this.additional_submit_data = {
			account_id: this.props.session.user.account_id
		}
        this.table_columns = [
			{
            	title: 'Denominacion',
            	dataIndex: 'denomination',
				key: 'denomination',
				sorter: true
			},
			{
            	title: 'Direccion',
            	dataIndex: 'address',
            	key: 'address'
			},
			{
            	title: 'Telefono',
            	dataIndex: 'phone',
            	key: 'phone'
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

export default Subsidiarys;