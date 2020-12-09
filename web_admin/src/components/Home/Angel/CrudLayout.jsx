import React, { Component, Fragment } from 'react';
import styles from './CrudLayoutStyles.js';
import moment from 'moment';
import { FetchXHR } from './generals';

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
import FormGenerator from './FormGenerator/FormGenerator';
import PrinterDownload from './PrinterDownload';
import PrinterRecipes from './PrinterRecipes/PrinterRecipes';
import { formatNumber } from './generals';
  
class CrudLayout extends Component {
    state = {
		data: [],
		next_folio: undefined,
		selected_data: undefined,
		loading_data: false,
		loading_submit: false,
        error: undefined,
        search_text: undefined,
        initial_date: undefined,
		final_date: undefined,
		docs_per_page: 50,
		page: 1,
		total_docs: 0,
		opened_submit: false,
		opened_view: false,
		opened_print: false,
		opened_printer_recipes: false,
		selected_type_recipes: undefined,
		sortedInfo: {
			order: 'descend',
			columnKey: 'denomination',
		},
		open_custom_modal: undefined,
	}

	componentDidMount() {
		this.limit = 50;
		this.page = 1;
		this.getData();

		this.refresh_interval = setInterval(() => {
			this.getData();
		}, 60000);
	}

	componentWillUnmount() {
		clearInterval(this.refresh_interval);
	}

	// GET DATA
	getData() {
		this.setState({
			loading_data: true,
		});
		const url = process.env.REACT_APP_API_URL + '/' + this.model.plural;
        var POSTDATA = {
            limit: this.limit,
			page: this.page,
			filters: {},
		}
		if (this.additional_get_data) {
			POSTDATA['filters'] = this.additional_get_data;
		}
		if (this.sort_field) {
			POSTDATA['sort_field'] = this.sort_field;
			POSTDATA['sort_order'] = this.sort_order;			
		}
		
		if (!isEmpty(this.search_text)) {
			//Cotizaciones			
			if (this.model.name === 'quotation') {
				alert("Pruebas busquedas" + "Buenos dias equipo BrakeOne!");
				POSTDATA['or_filters'] = {};
				POSTDATA['or_filters']['folio'] = Number(this.search_text);
				POSTDATA['or_filters']['$text'] = { '$search':  this.search_text };
			} 
			
			else if (this.model.name === 'sell') {
				POSTDATA['or_filters'] = {};
				POSTDATA['or_filters']['folio'] = Number(this.search_text);
				POSTDATA['or_filters']['client_id'] = this.search_text;
			} else if (this.model.name === 'reception') {
				POSTDATA['or_filters'] = {};
				POSTDATA['or_filters']['folio'] = Number(this.search_text);
				POSTDATA['or_filters']['provider_id'] = this.search_text;
			} else if (this.model.name === 'payment') {
				POSTDATA['or_filters'] = {};
				POSTDATA['or_filters']['folio'] = Number(this.search_text);
			} else if (this.model.name === 'reception-payment') {
				POSTDATA['or_filters'] = {};
				POSTDATA['or_filters']['folio'] = Number(this.search_text);
			} else if (this.model.name === 'client') {
				POSTDATA['search_text'] = this.search_text;
				// POSTDATA['or_filters'] = {};
				// POSTDATA['or_filters']['cars.plates'] = this.search_text;
				// POSTDATA['or_filters']['rfc'] = this.search_text;
				// POSTDATA['or_filters']['name'] = this.search_text;
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

		// WUATEFOK HERE!
		if (this.table_filters) {
			Object.keys(this.table_filters).forEach((f) => {
				if (this.table_filters[f].length > 0) {
					if (this.table_filters[f][0] === 'stock.low.exists') {
						POSTDATA['filters']['$expr'] ={ $lte: [ "$stock" , "$stock_ideal" ] };
					} else if (this.table_filters[f][0] === 'stock.exists') {
						POSTDATA['filters']['$expr'] ={ $gt: [ "$stock" , "$stock_ideal" ] };
					} else if (this.table_filters[f][0] === 'stock.no.exists') {
						POSTDATA['filters']['stock'] = { $lte: 0 };
					} else {
						POSTDATA['filters'][f] = this.table_filters[f];
					}
				} else {
					delete POSTDATA['filters'][f];
					delete POSTDATA['filters']['stock'];
					delete POSTDATA['filters']['$expr'];
				}
			});
		}
        FetchXHR(url, 'POST', POSTDATA).then((response) => {
            if (response.json.success) {
				let next_folio = undefined;
				if (response.json.data.docs.length > 0 && response.json.data.docs[0].folio) {
					next_folio = response.json.data.docs[0].folio + 1;
				}
				this.setState({
					table_data: response.json.data.docs.map((el, index)=>({
						...el,
						key: index
					})),
					next_folio,
					total_docs: response.json.data.total,
                    loading_data: false
                });
            } else {
				this.setState({
					loading_data: false,
					error: response.message
				});
            }
        }).catch((onError) => {
			this.setState({
				loading_data: false,
				error: onError.message
			});
        });
	}

	// MODAL FORM:

	refreshTable = () => {
		this.getData();
	}

    onOpenSubmitForm = () => {
		this.setState({
			opened_submit: true,
		});
	}

	onCloseSubmitForm = () => {
		this.setState({
			opened_submit: false,
			error: undefined,
			selected_data: undefined
		});
	}

	onCloseViewForm = () => {
		this.setState({
			opened_view: false,
			error: undefined,
			selected_data: undefined
		});
	}

	onCustomSubmitForm = (new_obj) => {
		this.setState({
			loading_submit: true
		});
		const newArray = Object.assign([],this.state.table_data);
		if (this.state.selected_data) {
			const i = newArray.findIndex((el)=>(el._id === this.state.selected_data._id));
			newArray[i] = {
				...new_obj,
				key: i
			}
		} else {
			newArray.unshift({
				...new_obj,
				key: newArray.length
			});
		}
		this.setState({
			table_data: newArray,
			total_docs: newArray.length,
			loading_submit: false,
			opened_submit: false,
			error: undefined,
			selected_data: undefined
		});
	}

	// CREATE NORMAL SUBMIT:
	onSubmitForm = async (values, nested_values) => {
		console.log("onSubmitForm", values, nested_values);
		
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
		
		if (this.model.name === 'product') {
			await FetchXHR(process.env.REACT_APP_API_URL + '/helpers/replicate_product', 'POST', { 
				data: POSTDATA,
				id: this.state.selected_data ? this.state.selected_data._id : null,
				method
			});
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
					error: undefined,
					selected_data: undefined
				});
            } else {
				this.setState({
					error: response.json.message,
					loading_submit: false
				});
            }
        }).catch((onError) => {
			this.setState({
				error: onError.message,
				loading_submit: false
			});
        });
	}

	onView = (record) => {
		/* console.log("onView" + record); */
		this.setState({
			selected_data: record,
			opened_view: true,
		});
	} 

	onEdit = (record) => {
		/* console.log("onEdit" + record); */
		this.setState({
			selected_data: record,
			opened_submit: true,
		});
	}

	onDelete = async (record) => {
		/* console.log("onDelete" + record); */
		const url = process.env.REACT_APP_API_URL + '/' + this.model.singular + '/' + record._id;
		if (this.model.name === 'product') {
			await FetchXHR(process.env.REACT_APP_API_URL + '/helpers/delete_product', 'POST', { 
				key_id: record.key_id,
				_id: record._id,
			});
		}
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
				this.setState({
					error: response.json.message
				});
            }
        }).catch((onError) => {
			this.setState({
				error: onError.message
			});
        });
	}

	onPrint = (record, type) => {
		/* console.log("onPrint" + record + type); */
		this.setState({
			selected_data: record,
			opened_printer_recipes: true,
			selected_type_recipes: type
		});
	}

	// ACTIONS HANDLERS:


	// COMPONENTS HANDLERS:
	// SEARCH TEXT:
	onClickSearch = (search_text) => {		
		/* let POSTDATA = {
			key_id: this.key_id			
		} */

		let method = 'GET';
		let url = process.env.REACT_APP_API_URL + 'helpers/search_product';

		FetchXHR(url, search_text, method).then((response_search)=>{

			if(response_search.json.success){
				this.props.refreshTable();
			}else{
				console.log("Error");	
			}

		});
	}

	// RANGES DATE:
    onChangeRangeDate = (date, date_string) => {
		/* console.log("onChangeRangeDate" + date + date_string); */
		// parse only the day ?
		if (date.length > 0) {
			this.initial_date = date[0].startOf('day');
			this.final_date = date[1].endOf('day');
		} else {
			this.initial_date = undefined;
			this.final_date = undefined;
		}
		this.getData();
	}

	// TABLE:
	//PAGINATOR:
	onChangePagination = (current, page_size) => {
		/* console.log("onChangePagination" + current + page_size); */
		this.limit = page_size;
		this.page = current;
		this.getData();
	}

	onChangeTable = (pagination, filters, sorter) => {
		/* console.log("onChangeTable" + pagination + filters + sorter); */
		if (pagination.current) {
			this.limit = pagination.pageSize;
			this.page = pagination.current;
		}
		if (sorter.columnKey) {
			this.sort_field = sorter.columnKey;
			this.sort_order = sorter.order == 'ascend' ? 1 : -1;
		}
		if (filters) {
			this.table_filters = filters;
		} else {
			this.table_filters = undefined;
		}
		this.getData();
	}

	renderFilters = () => {
		/* console.log("renderFilters"); */
		const SearchFilter = (
			<Input.Search
				key="search_filter"
				placeholder="Buscador..."
				enterButton="Buscar"
				onSearch={this.onClickSearch}
				style={styles.inputSearch}
			/>
		);
		const DateRangeFilter = (
			<DatePicker.RangePicker 
				key="date_range_filter"
				style={styles.inputRangedate}
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
		let form = '';

		if (this.schema) {
			if (this.state.opened_submit) {
				form = (
					<FormGenerator
						session={this.props.session}
						key={"Create_Form"}
						is_disabled={false}
						title={title}
						open={this.state.opened_submit}
						loading={this.state.loading_submit}
						onClose={this.onCloseSubmitForm}
						onSubmit={this.onSubmitForm}
						onCustomSubmit={this.onCustomSubmitForm}
						schema={this.schema}
						error={this.state.error}
						dismissError={() => {
							this.setState({ error:undefined });
						}}
						fields={this.state.selected_data}
						next_folio={this.state.next_folio}
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
							this.setState({ error:undefined });
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
						onCustomSubmit={this.onCustomSubmitForm}
						schema={this.schema}
						error={this.state.error}
						dismissError={() => {
							this.setState({ error:undefined });
						}}
						session={this.props.session}
						next_folio={this.state.next_folio}
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
							this.setState({ error:undefined });
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

		if (this.state.opened_printer_recipes) {
			form = (
				<PrinterRecipes
					record={this.state.selected_data}
					type={this.state.selected_type_recipes}
					key={"Print_Form_Recipe"}
					title={"Imprimir"}
					onClose={() => {
						this.setState({
							opened_printer_recipes: false,
							selected_data: undefined,
							selected_type_recipes: undefined
						});
					}}
				/>
			);
		}

		let PrinterDownloadButton = '';
		if (this.props.session.user.rol === 'ADMIN' || this.props.session.user.rol === 'MANAGER') {
			PrinterDownloadButton = (
				<Button.Group>
					<Button 
						onClick={() => {
							this.setState({
								opened_print: true,
							});
						}} 
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
					refreshTable={this.refreshTable}
					error={this.state.error}
					dismissError={() => {
						this.setState({ error: undefined });
					}}
					session={this.props.session}
				/>
			);
		}
		let Add_Button = '';
		if (!this.no_render_add) {
			Add_Button = (
				<Button 
						type="primary" 
						onClick={this.onOpenSubmitForm}
					>
					<Icon type="plus-circle-o" />
					Agregar Nuevo
				</Button>
			);
		}

		let RenderActions = '';
		if (this.actions) {
			RenderActions = this.actions.map((action) => {
				return (
					<Button 
						type="primary" 
						onClick={() => {
							action.func()
						}}
					>
						<Icon type={action.icon} />
						{action.label}
					</Button>
				);
			});
		}
        return (
            <Fragment>
				{form}
                <Divider dashed={true} orientation="left">Acciones</Divider>
                <div style={styles.actions}>
					{PrinterDownloadButton}
					{RenderActions}
					{this.renderFilters()}
					{Add_Button}
                </div>
                <Divider dashed={true} orientation="left">{"[" + formatNumber(this.state.total_docs) + "]   "} Resultados.</Divider>
				<Table 
					bordered
					style={styles.tableLayout}
					scroll={{y:window.innerHeight - 350}}
					onChange={this.onChangeTable}
					columns={this.table_columns}
					dataSource={this.state.table_data}
					loading={this.state.loading_data}
					size="small"
					pagination={{
						showSizeChanger: true,
						defaultCurrent: this.page,
						total: this.state.total_docs,
						defaultPageSize: 50,
						pageSize: 50,
						pageSizeOptions: ['50','100','200']
					}}
					locale={{
						filterTitle: 'Filtro',
						filterConfirm: 'Ok',
						filterReset: 'Limpiar',
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