import React, { Component, Fragment } from 'react';
import CrudLayout from '../CrudLayout/CrudLayout';
import Schema from './SpendSchema';
import RenderRows from '../../helpers/render_rows';

import { 
    Divider,
	Popconfirm,
	Button
} from 'antd';

class Spends extends CrudLayout {
    constructor(props) {
		super(props);
		this.schema = Schema;
		this.state = { // render vars:
			filters_layout: ['search','date_range']
		};
        this.model = {
			name: 'spend',
			singular: 'spend',
			plural: 'spends',
			label: 'Gastos'
		};
		this.additional_submit_data = {
			account_id: this.props.session.user.account_id
		}
		this.additional_get_data = {
			account_id: this.props.session.user.account_id
		}
		
        this.table_columns = [
			{
            	title: 'Fecha',
            	dataIndex: 'date',
				key: 'date',
				render: RenderRows.renderRowDate,
				width: '15%'
			}, 
			{
            	title: 'Folio',
            	dataIndex: 'folio',
				key: 'folio',
				width: '15%'
			},
			{
            	title: 'Descripción',
            	dataIndex: 'description',
				key: 'description',
				width: '30%'
			},
			{
            	title: 'Tipo',
            	dataIndex: 'type',
				key: 'type',
				width: '10%'
			},
			{
            	title: 'Total',
            	dataIndex: 'total',
				key: 'total',
				render: RenderRows.renderRowNumber,
				width: '15%'
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

export default Spends;