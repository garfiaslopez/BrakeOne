import React, { Component, Fragment } from 'react';
import CrudLayout from '../CrudLayout/CrudLayout';
import Schema from './ProvidersSchema';
import RenderRows from '../../helpers/render_rows';

import { 
    Divider,
	Popconfirm,
	Button
} from 'antd';

class Providers extends CrudLayout {
    constructor(props) {
		super(props);
		this.schema = Schema;
		this.state = { // render vars:
			filters_layout: ['search']
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
				sorter: true,
				width: '20%'
			}, 
			{
            	title: 'RFC',
            	dataIndex: 'rfc',
            	key: 'rfc',
				width: '20%'
			},
			{
            	title: 'Dirección',
            	dataIndex: 'address',
				key: 'address',
				width: '20%'
			},
			{
            	title: 'Telefono',
            	dataIndex: 'phone_number',
				key: 'phone_number',
				width: '20%'
			},
			{
            	title: 'Compras',
            	dataIndex: 'buys',
				key: 'buys',
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

export default Providers;