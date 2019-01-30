import React, { Component, Fragment } from 'react';
import CrudLayout from '../CrudLayout/CrudLayout';
import CreateSell from './CreateSell';
import RenderRows from '../../helpers/render_rows';
import CreatePayment from './CreatePayment';

import {
    Divider,
	Popconfirm
} from 'antd';

class Sells extends CrudLayout {
    constructor(props) {
		super(props);
		this.custom_submit = CreateSell;
		this.custom_modals = {
			'open_create_payment': CreatePayment
		}
		this.state = { // render vars:
			filters_layout: ['search','date_range']
		};
        this.model = {
			name: 'sell',
			singular: 'sell',
			plural: 'sells',
			label: 'Ventas'
		};
		this.additional_get_data = {
			subsidiary_id: this.props.session.subsidiary._id,
			is_service: false
		}
		this.populate_ids = ['client_id'];
		this.additional_submit_data = {
			subsidiary_id: this.props.session.subsidiary._id
		}

        this.table_columns = [
			{
            	title: 'Fecha',
            	dataIndex: 'date',
				key: 'date',
				fixed: 'left',
				render: RenderRows.renderRowDateSells,
				width: '15%'
			},
			{
            	title: 'Folio',
            	dataIndex: 'folio',
				key: 'folio',
				render: RenderRows.renderRowTextSells,
				width: '15%'
			},
			{
            	title: 'Cliente',
            	dataIndex: 'client_id.name',
				key: 'client_id.name',
				render: RenderRows.renderRowTextSells,
				width: '20%'
			},
			{
            	title: 'Total',
            	dataIndex: 'total',
				key: 'total',
				render: RenderRows.renderRowNumberSells,
				width: '15%'
			}
		];
		if (this.props.session.user.rol === 'admin' ||
			this.props.session.user.rol === 'manager') {
			this.table_columns.push({
            	title: 'Acciones',
				key: 'action',
				width: '15%',
            	render: (text, record) => {
					let PayButton = <div></div>;
					if (!record.is_payed) {
						PayButton = (
							<Fragment>
								<a 
									href="javascript:;" 
									onClick={(event)=> {
										event.stopPropagation();
										this.setState({
											selected_data: record,
											open_custom_modal: 'open_create_payment'
										});
									}}
								>
									Pagar
								</a>
								<Divider type="vertical" />
							</Fragment>
						);
					};
					return (
						<span>
							{PayButton}
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
					);
				}
			});
		} else {
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
					</span>
            	),
			});
		}
	}
}

export default Sells;