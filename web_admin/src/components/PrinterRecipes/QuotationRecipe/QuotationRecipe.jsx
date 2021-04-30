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
        key: 'name',
        width: "10%",
    },
   
    quotationColumns: [
    {
        title: 'Clave',
        dataIndex: 'key_id',
        key: 'key_id',    
        width: "8%",   
    }, 
    {
        title: 'Concepto',
        dataIndex: 'description',
        key: 'description',
        width: "25%",
        /* render: RenderRows.renderRowTextTruncateDesc, */
    }, 
    {
        title: 'Cantidad',
        dataIndex: 'quantity',
        key: 'quantity',
        width: "8%",
        render: RenderRows.renderRowQuantity,
    },{
        title: 'Precio',
        width: "8%",
        dataIndex: 'price',
        key: 'price', 
        render: RenderRows.renderRowNumber,
    }, {
        title: 'Importe',
        dataIndex: 'total',
        key: 'total',
        width: "8%",
        render: RenderRows.renderRowNumber,
    }]
};

moment.locale('es');

const QuotationRecipe = ({
    client,
    client_phone,
    client_address_city,
    client_address_country,
    client_address_cp,
    client_address_state,
    email,
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
           <b>Fecha:</b> {moment().format('DD-MM-YYYY')}
        </p>
        {/* Client Name */}
        <ul className="recipe__flex-container">
        <p><b>CLIENTE:</b> {client}</p>
        <p><b>TEL: </b> {client_phone}</p><br></br>
        <p><b>Direccion: </b> 
       {client_address_city} {client_address_country} C.P. {client_address_cp} {client_address_state}</p>
        </ul>        
       
        <ul className="recipe__flex-container">
           
            <li>
                <h3 className="recipe__item__title">Marca</h3>
                <span>{vehicle.brand}</span>
            </li>
            <li>
                <h3 className="recipe__item__title">Modelo</h3>
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
                <span className="importLetra" >
                    {NumeroALetras(totalNumber) } 00/100 M.N.
                </span>
            </li>
            <li>
                <h3 className="recipe__item__title">
                    Total
                </h3>
                <span className="">
                    ${String(round2(totalNumber ? totalNumber : 0)).replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
                </span>
            </li>
        </ul>
        {/* <p>Agradeciendo la atención que sirva brindar a la presente y en espera de su favorable respuesta, quedo de usted.</p> */}
        {/* <h2>Atentamente</h2> */}
        <p>GARANTIA RECTIFICADO DISCOS: 5 DIAS, GARANTIA BALATAS: 30 DIAS O KM 1,000 LO QUE OCURRA PRIMERO, SOBRE DEFECTO DE FABRICACION, RECOMENDACIÓN: NO ABUSE DE LOS FRENOS DURANTE LOS PRIMEROS KM 200-300</p>
        <footer className="sell-ticket__footer">       
            <center><p class="textCalf">Califica nuestro servicio: </p></center>
            <img
                className="sell-ticket__QR_Services"
                src="/images/QRComents.png"
            />
        </footer>
        <footer className="recipe__footer">
            <p>Saratoga #313-C,
                Col. Portales Norte
                C.p. 03300
                Alcaldía Benito Juárez, CDMX.</p>
            <p>Tels. (55) 4563 – 2063
                    (55) 6840 – 2850
                    (55) 7653 – 6116
                    (55) 5273 – 3450</p>
        </footer>
    </section>
);

QuotationRecipe.propTypes = propTypes;
QuotationRecipe.defaultProps = defaultProps;

export default QuotationRecipe;