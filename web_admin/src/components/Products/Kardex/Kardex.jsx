import React, { Component, Fragment } from 'react';
import CrudLayout from '../../CrudLayout/CrudLayout';
import Schema from './KardexSchema';
import RenderRows from '../../../helpers/render_rows';

import { 
    Divider,
	Popconfirm
} from 'antd';import React, { Component, Fragment } from 'react';
import CrudLayout from '../../CrudLayout/CrudLayout';
import Schema from './KardexSchema';
import RenderRows from '../../../helpers/render_rows';

import { 
    Divider,
	Popconfirm
} from 'antd';

class ProductService extends CrudLayout {
    constructor(props) {
		super(props);
		this.schema = Schema;
		this.no_render_add = true;
		this.state = { // render vars:
			filters_layout: ['search','date_range'],
		};
        this.model = {
			name: 'product_transaction',
			singular: 'product-transaction',
			plural: 'product-transactions',
			label: 'Kardex'
		};
		this.additional_get_data = {
			subsidiary_id: this.props.session.subsidiary._id
		}
		this.populate_ids=['product_id','user_id', 'client_id', 'subsidiary_id'];
        this.table_columns = [
			{
            	title: 'Folio',
            	dataIndex: 'client_id.folio',
				key: 'client_id.folio',				
				width: '8%',
				render: RenderRows.renderRowTextSells,
			},
			{
            	title: 'Vendedor',
            	dataIndex: 'user_id.name',
				key: 'user_id.name',
				width: '15%',
				render: RenderRows.renderRowText
			},
			{
            	title: 'Fecha',
            	dataIndex: 'date',
				key: 'date',
				render: RenderRows.renderRowDate,
				width: '10%'
			},
			{
            	title: 'Tipo',
            	dataIndex: 'type',
				key: 'type',
				width: '10%',
				render: RenderRows.renderRowText				
			},
			{
            	title: 'Cliente',
            	dataIndex: 'client_id.client_name',
				key: 'client_id.client_name',
				render: RenderRows.renderRowTextSells,
				width: '15%'
			},
			{
            	title: 'Producto',
            	dataIndex: 'product_id.description',
				key: 'product_id.description',
				width: '25%',
				render: RenderRows.renderRowTextMin
			},			
			{
            	title: 'Cantidad',
            	dataIndex: 'quantity',
				key: 'quantity',
				width: '10%',
				render: RenderRows.renderRowQuantity
			},
			{
            	title: 'Precio',
            	dataIndex: 'price',
				key: 'price',
				render: RenderRows.renderRowNumber,
				width: '10%'
			},
			{
            	title: 'Total',
            	dataIndex: 'total',
				key: 'total',
				render: RenderRows.renderRowNumber,
				width: '10%'
			}
		];
	}
}

export default ProductService;

class ProductService extends CrudLayout {
    constructor(props) {
		super(props);
		this.schema = Schema;
		this.no_render_add = true;
		this.state = { // render vars:
			filters_layout: ['search','date_range'],
		};
        this.model = {
			name: 'product_transaction',
			singular: 'product-transaction',
			plural: 'product-transactions',
			label: 'Kardex'
		};
		this.additional_get_data = {
			subsidiary_id: this.props.session.subsidiary._id
		}
		this.populate_ids=['product_id','user_id'];
        this.table_columns = [
			{
            	title: 'Fecha',
            	dataIndex: 'date',
				key: 'date',
				render: RenderRows.renderRowDate,
				width: '10%'
			},
			{
            	title: 'Tipo',
            	dataIndex: 'type',
				key: 'type',
				width: '10%'
			},
			{
            	title: 'Producto',
            	dataIndex: 'product_id.description',
				key: 'product_id.description',
				width: '30%'
			},
			{
            	title: 'Personal',
            	dataIndex: 'user_id.name',
				key: 'user_id.name',
				width: '20%'
			},
			{
            	title: 'Cantidad',
            	dataIndex: 'quantity',
				key: 'quantity',
				width: '10%'
			},
			{
            	title: 'Precio',
            	dataIndex: 'price',
				key: 'price',
				render: RenderRows.renderRowNumber,
				width: '10%'
			},
			{
            	title: 'Total',
            	dataIndex: 'total',
				key: 'total',
				render: RenderRows.renderRowNumber,
				width: '10%'
			}
		];
	}
}

export default ProductService;