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
import styles from './Styles';
import { FetchXHR } from '../../helpers/generals';
import moment from 'moment';
import RenderRows from '../render_rows';
import isNumber from 'lodash/isNumber';
import { EditableFormRow, EditableCell } from './TableHelpers';
import CrudLayoutClientsSell from '../../components/CrudLayout/CrudLayoutClientsSell';
import Schema from '../../components/Clients/ClientsSchema';


class OrderCreatorClients extends CrudLayoutClientsSell {
    constructor(props) {
		
		super(props);
		this.schema = Schema;
		this.state = { // render vars:
			filters_layout: ['search']
		};
        this.model = {
			name: 'client',
			singular: 'client',
			plural: 'clients',
			label: 'Clientes'
		};
		this.additional_submit_data = {
			account_id: this.props.session.user.account_id
		}
		this.additional_get_data = {
			account_id: this.props.session.user.account_id
		}
	
	}

}

// wrap a HOC to handle the inject of the fields?
export default OrderCreatorClients;
