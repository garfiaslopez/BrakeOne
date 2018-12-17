import React, { Component, Fragment } from 'react';
import CrudLayout from '../CrudLayout/CrudLayout';
import Schema from './ProductsSchema';

import { 
    Divider,
	Popconfirm
} from 'antd';

class Products extends CrudLayout {
    constructor(props) {
		super(props);
		this.schema = Schema;
		this.state = { // render vars:
			filters_layout: ['search','data_range'],
			async_data: ['providers']
		};
        this.model = {
			name: 'product',
			singular: 'product',
			plural: 'products',
			label: 'Productos'
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
            	title: 'Llave',
            	dataIndex: 'key_id',
				key: 'key_id',
				fixed: 'left',
			},
			{
            	title: 'FMSI',
            	dataIndex: 'fmsi',
            	key: 'fmsi'
			},
			{
            	title: 'Linea',
            	dataIndex: 'line',
            	key: 'line'
			},
			{
            	title: 'Marca',
            	dataIndex: 'brand',
            	key: 'brand'
			},
			{
            	title: 'Descripción',
            	dataIndex: 'description',
				key: 'description',
				sorter: true
			}, 
			{
            	title: 'Costo',
            	dataIndex: 'price',
            	key: 'price'
			},
			{
            	title: 'Publico',
            	dataIndex: 'price_public',
            	key: 'price_public'
			},
			{
            	title: 'Taller',
            	dataIndex: 'price_workshop',
            	key: 'price_workshop'
			},
			{
            	title: 'Mayoreo',
            	dataIndex: 'price_wholesale',
            	key: 'price_wholesale'
			},
			{
            	title: 'Existencias',
            	dataIndex: 'stock',
				key: 'stock',
				sorter: true,
				filters: [
					{ text: 'Con Existencia', value: 'stock.exists' },
					{ text: 'Sin Existencia', value: 'stock.no.exists'},
				],
			},
			{
            	title: 'Acciones',
				key: 'action',
				fixed: 'right',
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

export default Products;