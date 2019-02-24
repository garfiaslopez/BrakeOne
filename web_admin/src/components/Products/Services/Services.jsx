import React, { Component, Fragment } from 'react';
import CrudLayout from '../../CrudLayout/CrudLayout';
import Schema from './ServicesSchema';
import RenderRows from '../../../helpers/render_rows';

import { 
    Divider,
	Popconfirm,
	Button
} from 'antd';

class ProductService extends CrudLayout {
    constructor(props) {
		super(props);
		this.schema = Schema;
		this.state = { // render vars:
			filters_layout: ['search','date_range'],
		};
        this.model = {
			name: 'service',
			singular: 'service',
			plural: 'services',
			label: 'Servicios a ofrecer'
		};
		this.additional_get_data = {
			subsidiary_id: this.props.session.subsidiary._id
		}
		this.additional_submit_data = {
			subsidiary_id: this.props.session.subsidiary._id
		}
        this.table_columns = [
			{
            	title: 'Descripcion',
            	dataIndex: 'description',
				key: 'description',
				width: '50%'
			},
			{
            	title: 'Publico',
            	dataIndex: 'price_public',
				key: 'price_public',
				render: RenderRows.renderRowNumber,
				width: '10%'
			},
			{
            	title: 'Taller',
            	dataIndex: 'price_workshop',
				key: 'price_workshop',
				render: RenderRows.renderRowNumber,
				width: '10%'
			},
			{
            	title: 'Mayoreo',
            	dataIndex: 'price_wholesale',
				key: 'price_wholesale',
				render: RenderRows.renderRowNumber,
				width: '10%'
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

export default ProductService;