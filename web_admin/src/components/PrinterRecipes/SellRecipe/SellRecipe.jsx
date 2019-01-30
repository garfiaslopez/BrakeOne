import React from 'react';
import PropTypes from 'prop-types';
import { Divider, Table } from 'antd';
import moment from 'moment';

import './Styles.css';
import { sellSource, sellColumns } from './SellDataSource';

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
        <ul className="sell-recipe__flex">
            <li>
                <h3 className="sell-recipe__item-title">
                    Folio
                </h3>
                <span className="sell-recipe__item-data">
                    {folio}
                </span>
            </li>
            <li>
                <h3 className="sell-recipe__item-title">
                    Fecha
                </h3>
                <span className="sell-recipe__item-data">
                    {moment().format('MM-DD-YYYY')}
                </span>
            </li>
        </ul>
    );

    const renderClientData = () => (
        <ul className="sell-recipe__flex">
            <li>
                <h3 className="sell-recipe__item-title">
                    Nombre
                </h3>
                <span className="sell-recipe__item-data">
                    {client.name}
                </span>
            </li>
            <li>
                <h3 className="sell-recipe__item-title">
                    Teléfono
                </h3>
                <span className="sell-recipe__item-data">
                    {client.phone_number}
                </span>
            </li>
            </ul>
    );

    const renderVehicleData = () => (
        <ul className="sell-recipe__flex">
            <li>
                <h3 className="sell-recipe__item-title">
                    Placas
                </h3>
                <span className="sell-recipe__item-data">
                    {vehicle.plates}
                </span>
            </li>
            <li>
                <h3 className="sell-recipe__item-title">
                    Marca
                </h3>
                <span className="sell-recipe__item-data">
                    {vehicle.brand}
                </span>
            </li>
            <li>
                <h3 className="sell-recipe__item-title">
                    Modelo
                </h3>
                <span className="sell-recipe__item-data">
                    {vehicle.model}
                </span>
            </li>
            <li>
                <h3 className="sell-recipe__item-title">
                    Kms
                </h3>
                <span className="sell-recipe__item-data">
                    {vehicle.kms}
                </span>
            </li>
        </ul>
    );

    const renderTotal = () => (
        <ul className="sell-recipe__flex sell-recipe__total">
            <li>
                <h3 className="sell-recipe__item-title">
                    Importe con letra
                </h3>
                <span className="sell-recipe__item-data">
                    {totalString}
                </span>
            </li>
            <li>
                <h3 className="sell-recipe__item-title">
                    Total
                </h3>
                <span className="sell-recipe__item-data">
                    {totalNumber}
                </span>
            </li>
        </ul>
    );

    const renderFooter = () => (
        <footer className="sell-recipe__footer">
            <p>QUETZALCOATL 84 (ESQ. TIZOC) COL. TLAXPANA</p>
            <p>Tels. 55-6840-2850 y 55-5273-3450</p>
        </footer>
    );

    return (
        <div className="sell-recipe__wrapper">
            {renderHeader()}
            {renderFolioAndDate()}
            <Divider>Cliente</Divider>
            {renderClientData()}
            <Divider>Vehículo</Divider>
            {renderVehicleData()}
            <Table
                size="small"
                indentSize={0}
                pagination={false}
                dataSource={sellSource}
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