import React from 'react';
import PropTypes from 'prop-types';
import { Table } from 'antd';
import moment from 'moment';
import RenderRows from '../../../helpers/render_rows';

import './Styles.css';
import NumeroALetras from '../../../helpers/number_to_letter';

const round2 = (number) => (Math.round(number * 100) / 100);

const propTypes = {
    client: PropTypes.object,
    vehicle: PropTypes.object,
    totalNumber: PropTypes.number
};

const defaultProps = {
    client: {
        title: 'Nombre',
        dataIndex: 'name',
        key: 'quantity',
    },
   
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
    quotationColumns,
    created,
    address_city,
    address_country,
    address_cp,
    address_state
}) => (
    <section className="quotation-recipe">
        <header className="">
            <img className="imgLogo" src="/images/BrakeOneBrembo.png" />
        </header>
        
        {/* Title */}
        <b><p className='title'>Remision</p></b>

        {/* Date */}
        <p className="quotation-recipe__date">
           <b>Fecha:</b> {created}
        </p>
        {/* Client Name */}
        <ul className="recipe__flex-container">
        <p><b>Cliente:</b> {client}</p>
        <p><b>Direccion:</b> 
        {address_city} {address_country} {address_cp} {address_state}</p>
        </ul>

        <p>Por este medio me permito presentar a su amable consideración el presupuesto para la reparación de la siguiente unidad:</p>
       
        <ul className="recipe__flex-container">
           
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