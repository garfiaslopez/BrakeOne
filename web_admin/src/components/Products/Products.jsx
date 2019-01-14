import React, { Component, Fragment } from 'react';
import CrudLayout from '../CrudLayout/CrudLayout';
import Schema from './ProductsSchema';
import RenderRows from '../../helpers/render_rows';

import { 
    Divider,
	Popconfirm
} from 'antd';

class Products extends CrudLayout {
    constructor(props) {
		super(props);
		this.schema = Schema;
		this.state = { // render vars:
			filters_layout: ['search'],
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
		this.x_scroll_on_table = 2000;
        this.table_columns = [
			{
            	title: 'Llave',
            	dataIndex: 'key_id',
				key: 'key_id',
				fixed: 'left',
				render: RenderRows.renderRowTextProducts,
				width: '10%',
			},
			{
            	title: 'FMSI',
            	dataIndex: 'fmsi',
				key: 'fmsi',
				render: RenderRows.renderRowTextProducts,
				width: '10%',
			},
			{
            	title: 'Linea',
            	dataIndex: 'line',
				key: 'line',
				render: RenderRows.renderRowTextProducts,
				width: '10%',
			},
			{
            	title: 'Marca',
            	dataIndex: 'brand',
				key: 'brand',
				render: RenderRows.renderRowTextProducts,
				width: '10%',
			},
			{
            	title: 'Descripción',
            	dataIndex: 'description',
				key: 'description',
				sorter: true,
				render: RenderRows.renderRowTextProducts,
				width: '25%',
			}, 
			{
            	title: 'Costo',
            	dataIndex: 'price',
				key: 'price',
				render: RenderRows.renderRowNumberProducts,
				width: '5%',
			},
			{
            	title: 'Publico',
            	dataIndex: 'price_public',
				key: 'price_public',
				render: RenderRows.renderRowNumberProducts,
				width: '5%',
			},
			{
            	title: 'Taller',
            	dataIndex: 'price_workshop',
				key: 'price_workshop',
				render: RenderRows.renderRowNumberProducts,
				width: '5%',
			},
			{
            	title: 'Mayoreo',
            	dataIndex: 'price_wholesale',
				key: 'price_wholesale',
				render: RenderRows.renderRowNumberProducts,
				width: '5%',
			},
			{
            	title: 'Stock',
            	dataIndex: 'stock',
				key: 'stock',
				render: RenderRows.renderRowTextProducts,
				sorter: true,
				width: '5%',
				filters: [
					{ text: 'Con Existencia', value: 'stock.exists' },
					{ text: 'Sin Existencia', value: 'stock.no.exists'},
				],
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
		}
	}
}

export default Products;