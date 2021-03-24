import React, { Component, Fragment } from 'react';
import {
    AutoComplete,
    Form,
    InputNumber,
    Icon,
    Modal,
    Button,
    Alert,
    Table,
    Tabs,
    Select,
    Popconfirm,
    Divider,
    Input,
    Pagination
} from 'antd';

import CrudLayoutReceptionSell from '../../components/CrudLayout/CrudLayoutReceptionSell';
import CreateReception from '../../components/Products/Receptions/CreateReception';
import RenderRows from '../render_rows';
import CreatePaymentReception from '../../components/Products/ReceptionPayments/CreatePaymentReception';
import moment from 'moment';
import { FetchXHR } from '../generals';
import async from 'async';
class OrderReception extends CrudLayoutReceptionSell {
    constructor(props) {
		super(props);
		this.custom_submit = CreateReception;
		this.custom_modals = {
			'open_create_payment': CreatePaymentReception
		}
		this.state = { // render vars:
			filters_layout: ['search','date_range']
		};
        this.model = {
			name: 'reception',
			singular: 'reception',
			plural: 'receptions',
			label: 'Recepciones de Producto'
		};
		this.additional_get_data = {
			subsidiary_id: this.props.session.subsidiary._id
		}
		this.populate_ids = ['user_id', 'provider_id'];
		this.additional_submit_data = {
			subsidiary_id: this.props.session.subsidiary._id
		}
	}
}

// wrap a HOC to handle the inject of the fields?
export default OrderReception;

