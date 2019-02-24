import React, { Component, Fragment } from 'react';
import CrudLayout from '../CrudLayout/CrudLayout';
import UsersSchema from './UsersSchema';

import { 
    Divider,
	Popconfirm,
	Button
} from 'antd';

class Users extends CrudLayout {
    constructor(props) {
        super(props);
        console.log('On User Props');
        console.log(props);
        this.model = {
			name: 'user',
			singular: 'user',
			plural: 'users',
			label: 'Personal'
		};

		this.schema = UsersSchema;
		this.additional_submit_data = {
			account_id: this.props.session.user.account_id
		}
		this.additional_get_data = {
			account_id: this.props.session.user.account_id
		}
        this.table_columns = [
			{
            	title: 'Nombre',
            	dataIndex: 'name',
				key: 'name',
				width: '20%'
			}, 
			{
            	title: 'Nombre Corto',
            	dataIndex: 'nickname',
				key: 'nickname',
				width: '10%'
			}, 
			{
            	title: 'Dirección',
            	dataIndex: 'address',
				key: 'address',
				width: '20%'
			},
			{
            	title: 'Telefono',
            	dataIndex: 'phone_mobil',
				key: 'phone_mobil',
				width: '20%'
			},
			{
            	title: 'Status',
            	dataIndex: 'status',
				key: 'status',
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

    onSubmitted(saved) {
        console.log('on submitted form');
        console.log(saved);
    }
}

export default Users;