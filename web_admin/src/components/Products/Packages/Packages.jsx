import React, { Component, Fragment } from 'react';
import CrudLayout from '../../CrudLayout/CrudLayout';
import CreatePackages from './CreatePackages';

import { 
    Divider,
	Popconfirm
} from 'antd';

class Packages extends CrudLayout {
    constructor(props) {
		super(props);
		this.custom_submit = CreatePackages;
		this.state = { // render vars:
			filters_layout: ['search']
		};
        this.model = {
			name: 'product-package',
			singular: 'product-package',
			plural: 'product-packages',
			label: 'Paquetes'
		};
		this.additional_get_data = {
			subsidiary_id: this.props.session.subsidiary._id
		}
		this.additional_submit_data = {
			subsidiary_id: this.props.session.subsidiary._id
		}
		this.populate_ids = ['products.product_id'];
        this.table_columns = [
			{
            	title: 'Nombre',
            	dataIndex: 'name',
				key: 'name',
				sorter: true
			}, 
			{
            	title: 'Descripcion',
            	dataIndex: 'description',
            	key: 'description'
			},
			{
            	title: 'Precio',
            	dataIndex: 'price',
            	key: 'price'
			}
		];

		if (this.props.session.user.rol === 'ADMIN' ||
			this.props.session.user.rol === 'MANAGER') {
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

export default Packages;