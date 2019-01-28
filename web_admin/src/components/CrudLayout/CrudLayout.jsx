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
	Pagination,
	Alert
} from 'antd';

import isEmpty from 'lodash/isEmpty';
import locale_es from 'antd/lib/date-picker/locale/es_ES';
import FormGenerator from '../FormGenerator/FormGenerator';
import PrinterDownload from '../PrinterDownload/PrinterDownload'
  
class CrudLayout extends Component {
    state = {
		data: [],
		selected_data: null,
		loading_data: false,
		loading_submit: false,
        error: null,
        search_text: null,
        initial_date: null,
		final_date: null,
		docs_per_page: 10,
		page: 1,
		total_docs: 0,
		opened_submit: false,
		opened_view: false,
		opened_print: false,
		sortedInfo: {
			order: 'descend',
			columnKey: 'denomination',
		},
		open_custom_modal: undefined,
	}

	componentDidMount() {
		this.limit = 10;
		this.page = 1;
		this.getData();
	}

	// GET DATA
	getData() {
		this.setState({
			loading_data: true,
		});
		const url = process.env.REACT_APP_API_URL + '/' + this.model.plural;
        let POSTDATA = {
            limit: this.limit,
			page: this.page,
			filters: {}
		}
		if (this.additional_get_data) {
			POSTDATA['filters'] = this.additional_get_data;
		}
		if (this.sort_field) {
			POSTDATA['sort_field'] = this.sort_field;
			POSTDATA['sort_order'] = this.sort_order;			
		}

		if (!isEmpty(this.search_text)) {
			if (this.model.name === 'sell' | this.model.name === 'quotation' | this.model.name === 'payment') {
				POSTDATA['filters']['folio'] = Number(this.search_text);
			} else {
				POSTDATA['search_text'] = this.search_text;
			}
		}
		if (this.initial_date && this.final_date) {
			POSTDATA['date'] = [this.initial_date.toISOString(), this.final_date.toISOString()];
		}
		if (this.populate_ids) {
			POSTDATA['populate_ids'] = this.populate_ids;
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
					loading_data: false,
					error: response.message
				});
            }
        }).catch((onError) => {
			console.log(onError);
			this.setState({
				loading_data: false,
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
			error: null,
			selected_data: null
		});
	}

	onCloseViewForm = () => {
		this.setState({
			opened_view: false,
			error: null,
			selected_data: null
		});
	}

	// CREATE 
	onSubmitForm = (values, nested_values) => {
		this.setState({
			loading_submit: true
		});
		let POSTDATA = {
			...values,
			...nested_values,
			...this.additional_submit_data
		}
		let method = 'POST';
		let url = process.env.REACT_APP_API_URL + '/' + this.model.singular;
		if (this.state.selected_data) {
			method = 'PUT';
			url = process.env.REACT_APP_API_URL + '/' + this.model.singular + '/' + this.state.selected_data._id;
		}
		if (values.location) { // has geo, need create obj properly
			POSTDATA['location'] = {
				type: 'Point',
				coordinates: values.location.coordinates
			}
		}
		if (this.populate_ids) {
			POSTDATA['populate_ids'] = this.populate_ids;
		}

		// check for relationships and save it apart in her owns models.

		FetchXHR(url, method, POSTDATA).then((response) => {
            if (response.json.success) {
				const newArray = Object.assign([],this.state.table_data);
				if (this.state.selected_data) {
					const i = newArray.findIndex((el)=>(el._id === this.state.selected_data._id));
					newArray[i] = {
						...response.json.obj,
						key: i
					}
				} else {
					newArray.unshift({
						...response.json.obj,
						key: newArray.length
					});
				}
                this.setState({
					table_data: newArray,
					total_docs: newArray.length,
					loading_submit: false,
					opened_submit: false,
					error: null,
					selected_data: null
				});
            } else {
				console.log(response);
				this.setState({
					error: response.json.message,
					loading_submit: false
				});
            }
        }).catch((onError) => {
			console.log(onError);
			this.setState({
				error: onError.message,
				loading_submit: false
			});
        });
	}

	onView = (record) => {
		this.setState({
			selected_data: record,
			opened_view: true,
		});
	} 

	onEdit = (record) => {
		this.setState({
			selected_data: record,
			opened_submit: true,
		});
	}

	onDelete = (record) => {
		const url = process.env.REACT_APP_API_URL + '/' + this.model.singular + '/' + record._id;
		FetchXHR(url, 'DELETE').then((response) => {
            if (response.json.success) {
				const newArray = Object.assign([],this.state.table_data);
				const i = newArray.findIndex((el)=>(el._id === record._id));
				if (i !== -1) {
					newArray.splice(i,1);
					this.setState({
						table_data: newArray,
						total_docs: newArray.length
					});
				}
                
            } else {
				console.log(response);
				this.setState({
					error: response.json.message
				});
            }
        }).catch((onError) => {
			console.log(onError);
			this.setState({
				error: onError.message
			});
        });

	}

	// ACTIONS HANDLERS:


	// COMPONENTS HANDLERS:
	// SEARCH TEXT:
	onClickSearch = (search_text) => {
		this.search_text = search_text;
		this.getData();
	}

	// RANGES DATE:
    onChangeRangeDate = (date, date_string) => {
		this.initial_date = date[0];
		this.final_date = date[1];
		this.getData();
	}

	// TABLE:
	//PAGINATOR:
	onChangePagination = (current, page_size) => {
		console.log(current, page_size);
		this.limit = page_size;
		this.page = current;
		this.getData();
	}

	onChangeTable = (pagination, filters, sorter) => {
		if (pagination.current) {
			this.limit = pagination.pageSize;
			this.page = pagination.current;
		}
		if (sorter.columnKey) {
			this.sort_field = sorter.columnKey;
			this.sort_order = sorter.order == 'ascend' ? 1 : -1;
		}
		this.getData();
	}

	renderFilters = () => {
		const SearchFilter = (
			<Input.Search
				key="search_filter"
				placeholder="Buscador..."
				enterButton="Buscar"
				size="large"
				onSearch={this.onClickSearch}
				style={styles.inputSearch}
			/>
		);
		const DateRangeFilter = (
			<DatePicker.RangePicker 
				key="date_range_filter"
				style={styles.inputRangedate}
				size="large"
				onChange={this.onChangeRangeDate}
				locale={locale_es}
			/>
		);
		if (this.state.filters_layout) {
			return this.state.filters_layout.map((f) => {
				switch (f) {
					case 'search':
						return (SearchFilter);
					case 'date_range':
						return (DateRangeFilter);
				}
			});
		}
		return ([SearchFilter, DateRangeFilter]);
	}

    render() {
		let title = "Agregar " + this.model.label;
		if (this.state.selectedData) {
			title = "Editar " + this.model.label;
		}
		let form = <div></div>;

		if (this.schema) {
			if (this.state.opened_submit) {
				form = (
					<FormGenerator
						key={"Create_Form"}
						is_disabled={false}
						title={title}
						open={this.state.opened_submit}
						loading={this.state.loading_submit}
						onClose={this.onCloseSubmitForm}
						onSubmit={this.onSubmitForm}
						schema={this.schema}
						error={this.state.error}
						dismissError={() => {
							this.setState({ error:null });
						}}
						fields={this.state.selected_data}
					/>
				);
			} else if (this.state.opened_view) {
				form = (
					<FormGenerator
						key={"View_Form"}
						is_disabled={true}
						title={title}
						open={this.state.opened_view}
						onClose={this.onCloseViewForm}
						schema={this.schema}
						error={this.state.error}
						dismissError={() => {
							this.setState({ error:null });
						}}
						fields={this.state.selected_data}
						session={this.props.session}
					/>
				);
			}
		} else {
			if (this.state.opened_submit && this.custom_submit) {
				form = (
					<this.custom_submit
						key={"Create_Custom_Form"}
						title={title}
						is_disabled={false}
						fields={this.state.selected_data}
						open={this.state.opened_submit}
						loading={this.state.loading_submit}
						onClose={this.onCloseSubmitForm}
						onSubmit={this.onSubmitForm}
						schema={this.schema}
						error={this.state.error}
						dismissError={() => {
							this.setState({ error:null });
						}}
						session={this.props.session}
					/>
				);
			} else if (this.state.opened_view) {
				form = (
					<this.custom_submit
						key={"View_Custom_Form"}
						is_disabled={true}
						fields={this.state.selected_data}
						title={title}
						open={this.state.opened_view}
						onClose={this.onCloseViewForm}
						schema={this.schema}
						error={this.state.error}
						dismissError={() => {
							this.setState({ error:null });
						}}
						session={this.props.session}
					/>
				);
			}
		}
		
		if (this.state.opened_print) {
			form = (
				<PrinterDownload
					key={"Print_Form"}
					title={"Imprimir o Descargar"}
					onClose={() => {
						this.setState({
							opened_print: false,
						});
					}}
					schema={this.schema}
					model={this.model}
					additional_get_data = {this.additional_get_data}
					search_text={this.search_text}
					initial_date={this.initial_date}
					final_date={this.final_date}
					sort_field={this.sort_field}
					sort_order={this.sort_order}
					populate_ids={this.populate_ids}
					table_columns={this.table_columns.filter((el) => (el.key != 'action'))}
				/>
			);
		}
		let PrinterDownloadButton = <div></div>;
		if (this.props.session.user.rol === 'admin' || this.props.session.user.rol === 'manager') {
			PrinterDownloadButton = (
				<Button.Group>
					<Button 
						onClick={() => {
							this.setState({
								opened_print: true,
							});
						}} 
						size="large" 
						type="primary" 
						icon="printer"
					>
						Imprimir O Descargar
					</Button>
				</Button.Group>
			);
		}

		if (this.state.open_custom_modal) {
			const ComponentToOpen = this.custom_modals[this.state.open_custom_modal];
			form = (
				<ComponentToOpen
					key={"CustomForm"}
					fields={this.state.selected_data}
					onClose={()=>{
						this.setState({open_custom_modal: undefined})
					}}
					error={this.state.error}
					dismissError={() => {
						this.setState({ error: null });
					}}
					session={this.props.session}
				/>
			);
		}

        return (
            <Fragment>
				{form}
                <Divider dashed={true} orientation="left">Acciones</Divider>
                <div style={styles.actions}>
					{PrinterDownloadButton}
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
                    {this.renderFilters()}
                </div>
                <Divider dashed={true} orientation="left">{"[" + this.state.total_docs + "]   "} Resultados.</Divider>
				<Table 
					style={styles.tableLayout}
					scroll={{ x: this.x_scroll_on_table | window.innerWidth - 272, y: this.y_scroll_on_table | 300 }}
					onChange={this.onChangeTable}
					columns={this.table_columns}
					dataSource={this.state.table_data}
					loading={this.state.loading_data}
					pagination={{
						showSizeChanger: true,
						defaultCurrent: this.page,
						total: this.state.total_docs
					}}
					locale={{
						filterTitle: 'Filtro',
						filterConfirm: 'Ok',
						filterReset: 'Reset',
						emptyText: 'Sin Datos'
					}}
					onRow={(record) => {
						return {
							onClick: () => {
								this.onView(record);
							},
						};
					}}
				/>
            </Fragment>
        );
    }
}

export default CrudLayout;