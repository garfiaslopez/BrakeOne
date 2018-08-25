import React, { Component, Fragment } from 'react';
import CrudLayout from '../CrudLayout/CrudLayout';
import UsersSchema from './UsersSchema';

import { 
    Divider,
    Tag
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

        this.table_columns = [
			{
            	title: 'Nombre',
            	dataIndex: 'name',
            	key: 'name'
			}, 
			{
            	title: 'Direccion',
            	dataIndex: 'address',
            	key: 'address'
			},
			{
            	title: 'Acciones',
            	key: 'action',
            	render: (text, record) => (
					<span>
						<a href="javascript:;">Editar</a>
						<Divider type="vertical" />
						<a href="javascript:;">Eliminar</a>
					</span>
            	),
		  	}
		];
    }

    onSubmitted(saved) {
        console.log('on submitted form');
        console.log(saved);
    }
}

export default Users;