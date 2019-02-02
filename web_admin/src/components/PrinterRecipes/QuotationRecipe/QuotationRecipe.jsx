import React from 'react';
import PropTypes from 'prop-types';
import { Table } from 'antd';
import moment from 'moment';

import './Styles.css';
import { sellItems, quotationColumns } from './QuotationDataSource';

const propTypes = {
    client: PropTypes.object,
    vehicle: PropTypes.object,
    totalString: PropTypes.string,
    totalNumber: PropTypes.number
};

const defaultProps = {
    client: {
        name: 'Josecito Mailob'
    },
    vehicle: {
        brand: 'Mini',
        subBrand: 'Cooper',
        model: 2013,
        color: 'Negro',
        plates: 'MNX 345',
        kms: 119720,
    },
    totalString: 'dos mil doscientos sesenta y ocho M.N.',
    totalNumber: 2268
};

moment.locale('es');

const QuotationRecipe = ({
    client,
    vehicle,
    totalString,
    totalNumber,
}) => (
    <section className="quotation-recipe">
        <header className="quotation-recipe__header">
            <img src="/images/MainLogo.png" />
        </header>
        <p className="quotation-recipe__date">
            {moment().format('LL')}
        </p>
        <h1>{client.name}</h1>
        <h2>Presente</h2>
        <p>Por este medio me permito presentar a su amable consideración el presupuesto para la reparación de la siguiente unidad:</p>
        <ul className="recipe__flex-container">
            <li>
                <h3 className="recipe__item__title">Marca</h3>
                <span>{vehicle.brand}</span>
            </li>
            <li>
                <h3 className="recipe__item__title">Marca</h3>
                <span>{vehicle.subBrand}</span>
            </li>
            <li>
                <h3 className="recipe__item__title">Modelo</h3>
                <span>{vehicle.model}</span>
            </li>
            <li>
                <h3 className="recipe__item__title">Color</h3>
                <span>{vehicle.color}</span>
            </li>
            <li>
                <h3 className="recipe__item__title">Placas</h3>
                <span>{vehicle.plates}</span>
            </li>
            <li>
                <h3 className="recipe__item__title">Kms</h3>
                <span>{vehicle.kms}</span>
            </li>
        </ul>
        <p>Detalle de mano de obra y refacciones:</p>
        <Table
            size="small"
            indentSize={0}
            pagination={false}
            dataSource={sellItems}
            columns={quotationColumns}
        />
        <ul className="recipe__flex-container">
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
        <p>Agradeciendo la atención que sirva brindar a la presente y en espera de su favorable respuesta, quedo de usted.</p>
        <h2>Atentamente</h2>
        <footer className="recipe__footer">
            <p>QUETZALCOATL 84 (ESQ. TIZOC) COL. TLAXPANA</p>
            <p>Tels. 55-6840-2850 y 55-5273-3450</p>
        </footer>
    </section>
);

QuotationRecipe.propTypes = propTypes;
QuotationRecipe.defaultProps = defaultProps;

export default QuotationRecipe;