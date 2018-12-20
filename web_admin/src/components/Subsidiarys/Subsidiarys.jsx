import React, { Component, Fragment } from 'react';
import CrudLayout from '../CrudLayout/CrudLayout';
import SubsidiarysSchema from './SubsidiarysSchema';

import { 
    Divider,
	Popconfirm
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
				sorter: true
			},
			{
            	title: 'Direccion',
            	dataIndex: 'address',
            	key: 'address'
			},
			{
            	title: 'Telefono',
            	dataIndex: 'phone',
            	key: 'phone'
			}
		];

		if (this.props.session.user.rol === 'admin' ||
			this.props.session.user.rol === 'manager') {
			this.table_columns.push({
            	title: 'Acciones',
            	key: 'action',
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

export default Subsidiarys;