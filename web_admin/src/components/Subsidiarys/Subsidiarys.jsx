import React, { Component, Fragment } from 'react';
import CrudLayout from '../CrudLayout/CrudLayout';
import SubsidiarysSchema from './SubsidiarysSchema';

import { 
    Divider,
	Popconfirm,
	Button
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
				sorter: true,
				width: '40%',
			},
			{
            	title: 'Direccion',
            	dataIndex: 'address',
				key: 'address',
				width: '20%',
			},
			{
            	title: 'Telefono',
            	dataIndex: 'phone',
				key: 'phone',
				width: '20%',
			}
		];

		if (this.props.session.user.rol === 'admin' ||
			this.props.session.user.rol === 'manager') {
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

export default Subsidiarys;