import React, { Component, Fragment } from 'react';
import CrudLayout from '../CrudLayout/CrudLayout';
import Schema from './CashdrawerSchema';

import { 
    Divider,
	Popconfirm,
	Button
} from 'antd';

class Cashdrawer extends CrudLayout {
    constructor(props) {
		super(props);
		this.schema = Schema;
		this.state = { // render vars:
			filters_layout: ['search','date_range']
		};
        this.model = {
			name: 'cashdrawer',
			singular: 'cashdrawer',
			plural: 'cashdrawers',
			label: 'Movimientos de caja'
		};
		this.additional_submit_data = {
			account_id: this.props.session.user.account_id
		}
		this.additional_get_data = {
			account_id: this.props.session.user.account_id
		}
        this.table_columns = [
			{
            	title: 'Folio',
            	dataIndex: 'folio',
				key: 'folio',
				sorter: true
			},
			{
            	title: 'Fecha',
            	dataIndex: 'date',
				key: 'date',
				sorter: true
			},
			{
            	title: 'Status',
            	dataIndex: 'status',
            	key: 'status'
			},
			{
            	title: 'Retiros',
            	dataIndex: 'withdrawals',
				key: 'withdrawals',
				sorter: true
			},
			{
            	title: 'Depositos',
            	dataIndex: 'deposits',
				key: 'date',
				sorter: true
			},
			{
            	title: 'Saldo',
            	dataIndex: 'balance',
				key: 'balance',
				sorter: true
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

export default Cashdrawer;