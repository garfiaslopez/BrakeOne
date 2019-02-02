import React from 'react';
import PropTypes from 'prop-types';
import { Table } from 'antd';
import moment from 'moment';

import './Styles.css';
import { sellItems, sellColumns } from './SellDataSource';

const propTypes = {
    folio: PropTypes.string,
    client: PropTypes.object,
    vehicle: PropTypes.vehicle,
    totalString: PropTypes.string,
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
        model: '1992',
        kms: 1223
    },
    totalString: 'dos mil doscientos sesenta y ocho M.N.',
    totalNumber: 2268
};

const SellRecipe = ({
    folio,
    client,
    vehicle,
    totalString,
    totalNumber
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

    const renderVehicleData = () => (
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
                    Kms
                </h3>
                <span className="recipe__item__data">
                    {vehicle.kms}
                </span>
            </li>
        </ul>
    );

    const renderTotal = () => (
        <ul className="recipe__flex-container sell-recipe__total">
            <li>
                <h3 className="recipe__item__title">
                    Importe con letra
                </h3>
                <span className="recipe__item__data">
                    {totalString}
                </span>
            </li>
            <li>
                <h3 className="recipe__item__title">
                    Total
                </h3>
                <span className="recipe__item__data">
                    {totalNumber}
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