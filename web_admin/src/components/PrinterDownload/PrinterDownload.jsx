import React, { Component, Fragment } from 'react';
import { FetchXHR } from '../../helpers/generals';
import ReactToPrint from 'react-to-print';
import ReactPDF from '@react-pdf/renderer';

import styles from './Styles';

import {
    Form,
    Icon,
    Modal,
    Button,
    Alert,
    Table,
    Tabs,
    Popconfirm
} from 'antd';

// for local data use PROPS:
// for alldata use STATE:

class PrinterDownload extends Component {
    constructor(props) {
        super(props);
        console.log("ON PRINTER DOWNLOAD");
        console.log(props);

        this.state = {
            'mode': 'filtered', // 'alldata'
            'loading': false,
            total_precs: 0,
        };

        this.onClickDownload = this.onClickDownload.bind(this);
        this.getData = this.getData.bind(this);
    }

    componentDidMount() {
        this.getData();
    }

    // GET DATA
	getData() {
		this.setState({
			loading_data: true,
		});
		const url = process.env.REACT_APP_API_URL + '/' + this.props.model.plural;
        let POSTDATA = {
            limit: 10000,
            page: 1
        }
        if (this.props.additional_get_data) {
			POSTDATA['filters'] = this.props.additional_get_data;
		}
		if (this.props.sort_field) {
			POSTDATA['sort_field'] = this.props.sort_field;
			POSTDATA['sort_order'] = this.props.sort_order;			
		}
		if (this.props.search_text) {
			POSTDATA['search_text'] = this.props.search_text;
		}
		if (this.props.initial_date && this.props.final_date) {
			POSTDATA['date'] = [this.props.initial_date.toISOString(), this.props.final_date.toISOString()];
		}
		if (this.props.populate_ids) {
			POSTDATA['populate_ids'] = this.props.populate_ids;
        }
        
        FetchXHR(url, 'POST', POSTDATA).then((response) => {
            
            let suma = 0;
            if (response.json.success) {    
                           
                for(let i = 0; i <= 5; i++ ){
                    var totales = response.json.data.docs[i].total;   
                    suma += totales;           

                this.setState({
					table_data: response.json.data.docs.map((el, index)=>({
						...el,
						key: index
					})),

					total_docs: response.json.data.total,
                    loading_data: false,
                    total_precs: suma
                });
            }
            
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

    onClickDownload() {
        // const styles = StyleSheet.create({
        //     page: {
        //         flexDirection: 'row',
        //         backgroundColor: '#E4E4E4'
        //     },
        //     section: {
        //         margin: 10,
        //         padding: 10,
        //         flexGrow: 1
        //     }
        // });
        // const MyDocument = () => (
        //     <Document>
        //         <Page size="A4" style={styles.page}>
        //             <View style={styles.section}>
        //                 <this.tableToPrint />
        //             </View>
        //         </Page>
        //     </Document>
        // );

        ReactPDF.render(<this.tableToPrint />, `${__dirname}/example.pdf`);
    }

    onClickPrint() {

    }

    render() {
        let alert = '';
        return (
            <Fragment>
                <Modal
                    width="80%"
                    style={styles.modalContainer}
                    visible={true}
                    title={this.props.title}
                    onCancel={this.props.onClose}
                    keyboard={true}
                    footer={[
                        <Button 
                            key="cancel"
                            onClick={this.props.onClose}
                        >
                            Cancelar
                        </Button>,
                        <Button 
                            key="download" 
                            type="primary" 
                            loading={this.state.loading}
                            onClick={this.onClickDownload}
                        >
                            Descargar
                        </Button>,
                        <ReactToPrint
                            trigger={() => (
                                <Button 
                                    key="printer" 
                                    type="primary" 
                                    loading={this.state.loading}
                                    onClick={this.onClickPrint}
                                > 
                                    Imprimir
                                </Button>
                            )}
                            content={() => this.tableToPrint}
                        />
                    ]}                    
                    >                
                    <Fragment>
                        {alert}
                        <div style={styles.overflow_container}>
                            <div 
                                style={styles.table_container}
                                ref={el => (this.tableToPrint = el)}
                            >
                                <Table
                                    size="small"
                                    width="210mm"
                                    bodyStyle={styles.table_layout}
                                    style={styles.table_layout}
                                    columns={this.props.table_columns}
                                    dataSource={this.state.table_data}
                                    loading={this.state.loading_data}
                                    pagination={false}
                                    locale={{
                                        filterTitle: 'Filtro',
                                        filterConfirm: 'Ok',
                                        filterReset: 'Reset',
                                        emptyText: 'Sin Datos'
                                    }}
                                />
                                <h5>{this.state.total_docs} {this.props.model.label}</h5><h5>Total:  ${this.state.total_precs}</h5>                                
                            </div>
                        </div>
                    </Fragment>
                </Modal>
            </Fragment>
        );
    }
}

export default PrinterDownload;