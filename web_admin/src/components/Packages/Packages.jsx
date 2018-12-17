import React, { Component, Fragment } from 'react';
import CrudLayout from '../CrudLayout/CrudLayout';
import CreatePackages from './CreatePackages';

import { 
    Divider,
	Popconfirm
} from 'antd';

class Packages extends CrudLayout {
    constructor(props) {
		super(props);
		this.custom_submit = CreatePackages;
		this.state = { // render vars:
			filters_layout: ['search']
		};
        this.model = {
			name: 'product-package',
			singular: 'product-package',
			plural: 'product-packages',
			label: 'Paquetes'
		};
		this.additional_get_data = {
			subsidiary_id: this.props.session.subsidiary._id
		}
		this.additional_submit_data = {
			subsidiary_id: this.props.session.subsidiary._id
		}
		this.populate_ids = ['products.product_id'];
        this.table_columns = [
			{
            	title: 'Nombre',
            	dataIndex: 'name',
				key: 'name',
				sorter: true
			}, 
			{
            	title: 'Descripcion',
            	dataIndex: 'description',
            	key: 'description'
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