import React, { Component, Fragment } from 'react';
import CrudLayout from '../CrudLayout/CrudLayout';
import Schema from './ProductsSchema';
import RenderRows from '../../helpers/render_rows';
import ChangePrices from './ChangePrices';

import { 
    Divider,
	Popconfirm,
	Button
} from 'antd';

class Products extends CrudLayout {
    constructor(props) {
		super(props);
		this.schema = Schema;

		this.custom_modals = {
			'open_change_prices': ChangePrices,
		}
		this.actions = [
			{
				'label': 'Cambiar Precios',
				'icon': 'dollar',
				'func': () => {
					this.setState({
						open_custom_modal: 'open_change_prices'
					});
				}
			}
		];

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
        this.table_columns = [
			{
            	title: 'Llave',
            	dataIndex: 'key_id',
				key: 'key_id',
				render: RenderRows.renderRowTextProducts,
				width: '5%',
			},
			{
            	title: 'FMSI',
            	dataIndex: 'fmsi',
				key: 'fmsi',
				render: RenderRows.renderRowTextProducts,
				width: '5%',
			},
			{
            	title: 'Linea',
            	dataIndex: 'line',
				key: 'line',
				render: RenderRows.renderRowTextProducts,
				width: '5%',
			},
			{
            	title: 'Marca',
            	dataIndex: 'brand',
				key: 'brand',
				render: RenderRows.renderRowTextProducts,
				width: '5%',
			},
			{
            	title: 'Descripción',
            	dataIndex: 'description',
				key: 'description',
				sorter: true,
				render: RenderRows.renderRowTextTruncateProducts,
				width: '10%',
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
				width: '10%',
				filters: [
					{ text: 'En stock', value: 'stock.exists' },
					{ text: 'Bajo stock', value: 'stock.low.exists'},
					{ text: 'Sin stock', value: 'stock.no.exists'},
				],
			}
		];


		if (this.props.session.user.rol === 'ADMIN' ||
			this.props.session.user.rol === 'MANAGER') {
			this.table_columns.push({
            	title: 'Acciones',
				key: 'action',
				width: '15%',
            	render: (text, record) => (
					<span>
						<Button 
							type="primary" 
							shape="circle"
							icon="edit"
							onClick={(event)=> {
								event.stopPropagation();
								this.onEdit(record);
							}}
						/>				
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
                			<Button 
								type="danger" 
								shape="circle"
								icon="delete"
							/>
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
						<Button 
							type="primary" 
							shape="circle"
							icon="edit"
							onClick={(event)=> {
								event.stopPropagation();
								this.onEdit(record);
							}}
						/>
					</span>
            	),
			});
		}
	}
}

export default Products;