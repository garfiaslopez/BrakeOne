import React, { Component, Fragment } from 'react';
import CrudLayout from '../CrudLayout/CrudLayout';
import Schema from './PackagesSchema';

import { 
    Divider,
	Popconfirm
} from 'antd';

class Packages extends CrudLayout {
    constructor(props) {
		super(props);
		this.schema = Schema;
		this.state = { // render vars:
			filters_layout: ['search']
		};
        this.model = {
			name: 'product-package',
			singular: 'product-package',
			plural: 'product-packages',
			label: 'Paquetes'
		};
		this.additional_submit_data = {
			account_id: this.props.session.user.account_id
		}
        this.table_columns = [
			{
            	title: 'Nombre',
            	dataIndex: 'name',
				key: 'name',
				sorter: true
			}, 
			{
            	title: 'Descripcion',
            	dataIndex: 'address',
            	key: 'address'
			},
			{
            	title: 'Precio',
            	dataIndex: 'price',
            	key: 'price'
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

export default Packages;