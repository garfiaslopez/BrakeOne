import React, { Component, Fragment } from 'react';
import { FetchXHR } from '../../helpers/generals';
import ReactToPrint from 'react-to-print';
import ReactPDF from '@react-pdf/renderer';

import QuotationRecipe from './QuotationRecipe/QuotationRecipe';
import SellRecipe from './SellRecipe/SellRecipe';
import SellTicket from './SellTicket/SellTicket';

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

class PrinterRecipes extends Component {
    constructor(props) {
        super(props);
        this.state = {
            'mode': 'filtered', // 'alldata'
            'loading': false
        };
        this.onClickDownload = this.onClickDownload.bind(this);
    }

    onClickDownload() {
        ReactPDF.render(<this.tableToPrint />, `${__dirname}/example.pdf`);
    }

    render() {
        let alert = '';
        let RecipeToPrint = '';
        if (this.props.type === 'QUOTATION') {
            RecipeToPrint = (
                <QuotationRecipe
                    client={this.props.record.client_name}
                    client_phone = {this.props.record.client_phone}
                    
                    vehicle={{
                        brand: this.props.record.car_brand,
                        model: this.props.record.car_model,
                        year: this.props.record.car_year,
                        color: this.props.record.car_color,
                        plates: this.props.record.car_plates,
                        kms: this.props.record.car_kms,                       
                    }}
                    totalNumber={this.props.record.total}
                    sellItems={this.props.record.products}
                    created={this.props.record.created}
                    address_city={this.props.record.address_city}
                    address_country={this.props.record.address_country}
                    address_cp={this.props.record.address_cp}
                    address_state={this.props.record.address_state}
                />
            );
        } else if (this.props.type === 'SELL') {
            let v = {
                brand: 'MOSTRADOR',
                model: '',
                year: '',
                color: '',
                plates: '',
                kms: this.props.record.kilometers,
            };
            if (this.props.record.car_id) {
                console.log(this.props.record);
                const car = this.props.record.client_id.cars.find((el)=>(el._id === this.props.record.car_id));
                console.log(car);
                if (car) {
                    v.brand = car.brand;
                    v.model = car.model;
                    v.year = car.year;
                    v.color = car.color;
                    v.plates = car.plates;
                }
            }
            RecipeToPrint = (
                <SellRecipe
                    is_service={this.props.record.is_service}
                    folio={this.props.record.folio}
                    client={this.props.record.client_id}
                    vehicle={v}
                    totalNumber={this.props.record.total}
                    sellItems={this.props.record.products}
                />
            );
        } else if (this.props.type === 'SELL_TICKET') {
            RecipeToPrint = (
                <SellTicket

                />
            );
        } else if (this.props.type === 'SERVICE') {
            RecipeToPrint = (
                <QuotationRecipe
                    client={this.props.record.client_name}
                    vehicle={{
                        brand: this.props.record.car_brand,
                        model: this.props.record.car_model,
                        year: this.props.record.car_year,
                        color: this.props.record.car_color,
                        plates: this.props.record.car_plates,
                        kms: this.props.record.car_kms,
                    }}
                    totalNumber={this.props.record.total}
                    sellItems={this.props.record.products}
                />
            );
        }

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
                                {RecipeToPrint}
                            </div>
                        </div>
                    </Fragment>
                </Modal>
            </Fragment>
        );
    }
}

export default PrinterRecipes;