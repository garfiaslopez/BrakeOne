import React from 'react';
import PropTypes from 'prop-types';
import { Table } from 'antd';
import moment from 'moment';
import RenderRows from '../../render_rows';

import './Styles.css';
import NumeroALetras from '../../number_to_letter';

const round2 = (number) => (Math.round(number * 100) / 100);

const propTypes = {
    client: PropTypes.object,
    vehicle: PropTypes.object,
    totalNumber: PropTypes.number
};

const defaultProps = {
    client: {
        name: 'Josecito Mailob'
    },
    vehicle: {
        brand: 'Mini',
        model: 'Cooper',
        year: 2013,
        color: 'Negro',
        plates: 'MNX 345',
        kms: 119720,
    },
    totalString: 'dos mil doscientos sesenta y ocho M.N.',
    totalNumber: 2268,
    sellItems: [{
        description: 'DEL ALFA ROMEO GT 147 156 02-07 2.0L 1.9L Ø284.00MM',
        quantity: 2,
        price: 1085.3,
        total: 2170.3
    }, {
        description: 'DEL ALFA ROMEO GT 35432 5432 mm435 1.7L',
        quantity: 2,
        price: 115.3,
        total: 2270.5
    }],
    quotationColumns: [{
        title: 'Cantidad',
        dataIndex: 'quantity',
        key: 'quantity',
    }, {
        title: 'Concepto',
        dataIndex: 'description',
        key: 'description',
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

moment.locale('es');

const QuotationRecipe = ({
    client,
    vehicle,
    totalNumber,
    sellItems,
    quotationColumns
}) => (
    <section className="quotation-recipe">
        <header className="quotation-recipe__header">
            <img src="/images/BrakeOneChristmas.png" />
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
                <span>{vehicle.model}</span>
            </li>
            <li>
                <h3 className="recipe__item__title">Año</h3>
                <span>{vehicle.year}</span>
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