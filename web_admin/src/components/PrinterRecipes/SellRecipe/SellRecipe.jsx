import React from 'react';
import { Divider, Table } from 'antd';

import './Styles.css';
import { sellSource, sellColumns } from './SellDataSource';

const SellRecipe = () => (
    <div className="sell-recipe__wrapper">
        <header className="sell-recipe__header">
            <img
                className="sell-recipe__logo"
                src="/images/MainLogo.png"
            />
            <h1 className="sell-recipe__title">
                Remisión
            </h1>
        </header>

        <ul className="sell-recipe__flex">
            <li>
                <h3 className="sell-recipe__item-title">
                    Folio
                </h3>
                <span className="sell-recipe__item-data">
                    9600 - 10653
                </span>
            </li>
            <li>
                <h3 className="sell-recipe__item-title">
                    Fecha
                </h3>
                <span className="sell-recipe__item-data">
                    26-ene-2019
                </span>
            </li>
        </ul>

        <Divider>Cliente</Divider>
        <ul className="sell-recipe__flex">
            <li>
                <h3 className="sell-recipe__item-title">
                    Nombre
                </h3>
                <span className="sell-recipe__item-data">
                    José Garfias
                </span>
            </li>
            <li>
                <h3 className="sell-recipe__item-title">
                    Teléfono
                </h3>
                <span className="sell-recipe__item-data">
                    5583562335
                </span>
            </li>
        </ul>

        <Divider>Vehículo</Divider>
        <ul className="sell-recipe__flex">
            <li>
                <h3 className="sell-recipe__item-title">
                    Placas
                </h3>
                <span className="sell-recipe__item-data">
                    Mostrador
                </span>
            </li>
            <li>
                <h3 className="sell-recipe__item-title">
                    Marca
                </h3>
                <span className="sell-recipe__item-data">
                    CHEVROLET 2013
                </span>
            </li>
            <li>
                <h3 className="sell-recipe__item-title">
                    Modelo
                </h3>
                <span className="sell-recipe__item-data">
                    1992
                </span>
            </li>
            <li>
                <h3 className="sell-recipe__item-title">
                    Kms
                </h3>
                <span className="sell-recipe__item-data">
                    1,234
                </span>
            </li>
        </ul>

        <Table
            size="small"
            pagination={false}
            dataSource={sellSource}
            columns={sellColumns}
        />

        <ul className="sell-recipe__flex sell-recipe__total">
            <li>
                <h3 className="sell-recipe__item-title">
                    Importe con letra
                </h3>
                <span className="sell-recipe__item-data">
                    dos mil ciento setenta y cinco pesos M.N.
                </span>
            </li>
            <li>
                <h3 className="sell-recipe__item-title">
                    Total
                </h3>
                <span className="sell-recipe__item-data">
                    $2,175.00
                </span>
            </li>
        </ul>

        <footer className="sell-recipe__footer">
            <p>QUETZALCOATL 84 (ESQ. TIZOC) COL. TLAXPANA</p>
            <p>Tels. 55-6840-2850 y 55-5273-3450</p>
        </footer>
    </div>
);

export default SellRecipe;