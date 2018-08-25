import React, { Component, Fragment } from 'react';
import styles from './CrudLayoutStyles';
import moment from 'moment';
import { FetchXHR } from '../../helpers/generals';

import { 
    Input,
    Button,
    Icon,
    DatePicker,
    Menu,
    Dropdown,
    Divider,
    Table,
    Tag,
	Modal,
	Pagination
} from 'antd';

import locale_es from 'antd/lib/date-picker/locale/es_ES';
import FormGenerator from '../FormGenerator/FormGenerator';
  
class CrudLayout extends Component {
    state = {
        data: [],
		loading_data: false,
		loading_submit: false,
        error: null,
        search_text: null,
        initial_date: null,
		final_date: null,
		docs_per_page: 10,
		page: 1,
		total_docs: 0,
		opened_submit: false
	}

	componentDidMount() {
		this.getData();
	}

	// GET DATA
	getData() {
		this.setState({
			loading_data: true,
		});
		const url = process.env.REACT_APP_API_URL + '/' + this.model.plural;
        const POSTDATA = {
            'limit': this.state.docs_per_page,
			'page': this.state.page
		}
		if (this.state.search_text) {
			POSTDATA['search_text'] = this.state.search_text;
		}
		if (this.state.initial_date && this.state.final_date) {
			POSTDATA['date'] = [this.state.initial_date.toISOString(),
								 this.state.final_date.toISOString()];
		}
        if (this.props.session.subsidiary) {
            POSTDATA.subsidiary_id = this.props.session.subsidiary._id;
        } else {
            if (this.props.session.user.rol !== 'admin') {
                POSTDATA.account_id = this.props.session.user.account_id;
            }
        }
        FetchXHR(url, 'POST', POSTDATA).then((response) => {
            if (response.json.success) {
                this.setState({
					table_data: response.json.data.docs.map((el, index)=>({
						...el,
						key: index
					})),
					total_docs: response.json.data.total,
                    loading_data: false
                });
            } else {
				console.log(response.message);
				this.setState({
					error: response.message
				});
            }
        }).catch((onError) => {
			console.log(onError);
			this.setState({
				error: onError.message
			});
        });
	}

	// MODAL FORM:
    onOpenSubmitForm = () => {
		this.setState({
			opened_submit: true,
		});
	}
	onCloseSubmitForm = () => {
		this.setState({
			opened_submit: false,
		});
	}

	// CREATE 
	onSubmitForm = (values) => {
		console.log('onSubmitFormModal');
		console.log(values);
		this.setState({
			loading_submit: true
		});
		setTimeout(()=>{
			this.setState({
				opened_submit: false,
				loading_submit: false
			});
		}, 2000);
	}

	// ACTIONS HANDLERS:
	onClickDownload = () => {

	}

	onClickPrint = () => {
		
	}

	// COMPONENTS HANDLERS:
	// SEARCH TEXT:
	onClickSearch = (search_text) => {
		this.setState({
			search_text: search_text,
		});
	}

	// RANGES DATE:
    onChangeRangeDate = (date, date_string) => {
		this.setState({
			initial_date: date[0],
			final_date: date[1]
		});
	}

	// TABLE:
	//PAGINATOR:
	onChangePagination = (current, page_size) => {
		console.log(current, page_size);
		this.setState({
			docs_per_page: page_size,
			page: current
		});
	}


    render() {
		let title = "Agregar " + this.model.label;
		if (this.state.selectedData) {
			title = "Editar " + this.model.label;
		}
        return (
            <Fragment>
				<FormGenerator 
					title={title}
					open={this.state.opened_submit}
					loading={this.state.loading_submit}
					onClose={this.onCloseSubmitForm}
					onSubmit={this.onSubmitForm}
					schema={this.schema}
				/>
                <Divider dashed={true} orientation="left">Acciones</Divider>
                <div style={styles.actions}>
                    <Button.Group>
                        <Button onClick={this.onClickDownload} size="large" type="primary" icon="cloud">Descargar</Button>
                        <Button onClick={this.onClickPrint} size="large" type="primary" icon="printer">Imprimir</Button>
                    </Button.Group>
					<Button 
						type="primary" 
						size="large"
						onClick={this.onOpenSubmitForm}
					>
                        <Icon type="plus-circle-o" />
                        Agregar Nuevo
                    </Button>
                </div>
                <Divider dashed={true} orientation="left">Filtros</Divider>
                <div style={styles.filters}>
                    <Input.Search
						placeholder="Buscador..."
						enterButton="Buscar"
						size="large"
						onSearch={this.onClickSearch}
						style={styles.inputSearch}
					/>
                    <DatePicker.RangePicker 
                        style={styles.inputRangedate}
                        size="large"
						onChange={this.onChangeRangeDate}
						locale={locale_es}
                    />
                </div>
                <Divider dashed={true} orientation="left">Resultados</Divider>
				<Table 
					columns={this.table_columns}
					dataSource={this.state.table_data}
					loading={this.state.loading_data}
					pagination={{
						showSizeChanger: true,
						onShowSizeChange: this.onChangePagination,
						onChange: this.onChangePagination,
						defaultCurrent: this.state.page,
						total: this.state.total_docs
					}}
					locale={{
						filterTitle: 'Filtro',
						filterConfirm: 'Ok',
						filterReset: 'Reset',
						emptyText: 'Sin Datos'
					}}
				/>
            </Fragment>
        );
    }
}

export default CrudLayout;