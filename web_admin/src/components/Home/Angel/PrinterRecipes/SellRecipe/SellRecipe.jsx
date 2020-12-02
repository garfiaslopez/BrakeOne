import React from 'react';
import PropTypes from 'prop-types';
import { Table } from 'antd';
import moment from 'moment';
import RenderRows from '../../render_rows';

import './Styles.css';
import NumeroALetras from '../../number_to_letter';
const round2 = (number) => (Math.round(number * 100) / 100);

const propTypes = {
    folio: PropTypes.string,
    client: PropTypes.object,
    vehicle: PropTypes.vehicle,
    totalNumber: PropTypes.number
};

const defaultProps = {
    folio: '9934-5243',
    client: {
        name: 'José de Jesús Garfias Lopez Caste',
        phone_number: '5564230789'
    },
    vehicle: {
        plates: 'Mostrador',
        brand: 'Chevrolet',
        model: 'Silverado',
        year: 1992,
        kms: 1223
    },
    totalNumber: 2268,
    sellItems: [{
        datakey: 'P121 1244',
        description: 'DEL ALFA ROMEO GT 147 156 02-07 2.0L 1.9L Ø284.00MM',
        quantity: 2,
        price: 1085.3,
        charge: 2170.3
    }, {
        datakey: 'P131 1244',
        description: 'DEL ALFA ROMEO GT 35432 5432 mm435 1.7L',
        quantity: 2,
        price: 115.3,
        charge: 2270.5
    }],
    sellColumns: [{
        title: 'Clave',
        dataIndex: 'key_id',
        key: 'key_id',
    }, {
        title: 'Descripción',
        dataIndex: 'description',
        key: 'description',
    }, {
        title: 'Cantidad',
        dataIndex: 'quantity',
        key: 'qantity',
    }, {
        title: 'Precio',
        dataIndex: 'price',
        key: 'price',
        render: RenderRows.renderRowNumber,
    }, {
        title: 'Importe',
        dataIndex: 'total',
        key: 'total',
        render: RenderRows.renderRowNumber,
    }]
};

const SellRecipe = ({
    folio,
    client,
    vehicle,
    totalNumber,
    sellItems,
    sellColumns,
    is_service
}) => {
    const renderHeader = () => (
        <header className="sell-recipe__header">
            <img
                className="sell-recipe__logo"
                src="/images/MainLogo.png"
            />
            <h1 className="sell-recipe__title">
                Remisión
            </h1>
        </header>
    );

    const renderFolioAndDate = () => (
        <ul className="recipe__flex-container">
            <li>
                <h3 className="recipe__item__title">
                    Folio
                </h3>
                <span className="recipe__item__data">
                    {folio}
                </span>
            </li>
            <li>
                <h3 className="recipe__item__title">
                    Fecha
                </h3>
                <span className="recipe__item__data">
                    {moment().format('DD-MM-YYYY')}
                </span>
            </li>
        </ul>
    );

    const renderClientData = () => (
        <ul className="recipe__flex-container">
            <h2>Cliente</h2>
            <li>
                <h3 className="recipe__item__title">
                    Nombre
                </h3>
                <span className="recipe__item__data">
                    {client.name}
                </span>
            </li>
            <li>
                <h3 className="recipe__item__title">
                    Teléfono
                </h3>
                <span className="recipe__item__data">
                    {client.phone_number}
                </span>
            </li>
        </ul>
    );

    const renderVehicleData = () => {
        if (is_service) {
            return (
                <ul className="recipe__flex-container">
                    <h2>Vehículo</h2>
                    <li>
                        <h3 className="recipe__item__title">
                            Placas
                        </h3>
                        <span className="recipe__item__data">
                            {vehicle.plates}
                        </span>
                    </li>
                    <li>
                        <h3 className="recipe__item__title">
                            Marca
                        </h3>
                        <span className="recipe__item__data">
                            {vehicle.brand}
                        </span>
                    </li>
                    <li>
                        <h3 className="recipe__item__title">
                            Modelo
                        </h3>
                        <span className="recipe__item__data">
                            {vehicle.model}
                        </span>
                    </li>
                    <li>
                        <h3 className="recipe__item__title">
                            Año
                        </h3>
                        <span className="recipe__item__data">
                            {vehicle.year}
                        </span>
                    </li>
                    <li>
                        <h3 className="recipe__item__title">
                            Kms
                        </h3>
                        <span className="recipe__item__data">
                            {vehicle.kms}
                        </span>
                    </li>
                </ul>
            );
        } else {
            return ('');
        }
    };

    const renderTotal = () => (
        <ul className="recipe__flex-container sell-recipe__total">
            <li>
                <h3 className="recipe__item__title">
                    Importe con letra
                </h3>
                <span className="recipe__item__data">
                    {NumeroALetras(totalNumber)}
                </span>
            </li>
            <li>
                <h3 className="recipe__item__title">
                    Total
                </h3>
                <span className="recipe__item__data">
                    ${String(round2(totalNumber ? totalNumber : 0)).replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
                </span>
            </li>
        </ul>
    );

    const renderFooter = () => (
        <footer className="recipe__footer">
            <p>QUETZALCOATL 84 (ESQ. TIZOC) COL. TLAXPANA</p>
            <p>Tels. 55-6840-2850 y 55-5273-3450</p>
        </footer>
    );

    return (
        <div className="sell-recipe">
            {renderHeader()}
            {renderFolioAndDate()}
            {renderClientData()}
            {renderVehicleData()}
            <Table
                size="small"
                indentSize={0}
                pagination={false}
                dataSource={sellItems}
                columns={sellColumns}
            />
            {renderTotal()}
            {renderFooter()}
        </div>
    );
};

SellRecipe.propTypes = propTypes;
SellRecipe.defaultProps = defaultProps;

export default SellRecipe;