import React from 'react';
import PropTypes from 'prop-types';
import { Table } from 'antd';
import moment from 'moment';
import RenderRows from '../../../helpers/render_rows';

import './Styles.css';
import NumeroALetras from '../../../helpers/number_to_letter';

const round2 = (number) => (Math.round(number * 100) / 100);

let fontSize = 14

function renderText (text) {
    let color = 'black';
    return ({
        children: <p style={{color, fontSize}}>{text}</p>,
    });
}

function renderRowNumber (text, record) {
    return ({
        children: <p style={{fontSize}}>${String(round2(text ? text : 0)).replace(/\B(?=(\d{4})+(?!\d))/g, ',')}</p>,
    });
}

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
        render: renderText
    }, 
    {
        title: 'Concepto',
        dataIndex: 'description',
        key: 'description',
        width: "25%",
        render: renderText
    }, 
    {
        title: 'Cantidad',
        dataIndex: 'quantity',
        key: 'quantity',
        width: "8%",
        render: renderText
    },{
        title: 'Precio',
        width: "8%",
        dataIndex: 'price',
        key: 'price', 
        render: renderRowNumber
    }, {
        title: 'Importe',
        dataIndex: 'total',
        key: 'total',
        width: "8%",
        render: renderRowNumber
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
            <b><p className='rem'>Remisión</p></b>
        </header>
        
        {/* Title */}
        

        {/* Date */}
        <body>
        <p className="date">
           <b>Fecha:</b> {moment().format('DD-MM-YYYY')}
        </p>
        {/* Client Name */}
        <ul className="recipe__flex-container_serv">
        <p class="text_gar"><b>CLIENTE:</b> {client}</p>
        <p class="text_gar"><b>TEL: </b> {client_phone}</p><br></br>
        <p class="text_gar"><b>Direccion: </b> 
       {client_address_city} {client_address_country} C.P. {client_address_cp} {client_address_state}</p>
        </ul>        
       
        <ul className="recipe__flex-container_serv">           
            <li>
                <h3 className="recipe__item__title">Marca</h3>
                <p class="text_gar">{vehicle.brand}</p>
            </li>
            <li>
                <h3 className="recipe__item__title">Modelo</h3>
                <p class="text_gar">{vehicle.model}</p>
            </li>
            <li>
                <h3 className="recipe__item__title">Año</h3>
                <p class="text_gar">{vehicle.year}</p>
            </li>
            <li>
                <h3 className="recipe__item__title">Color</h3>
                <p class="text_gar">{vehicle.color}</p>
            </li>
            <li>
                <h3 className="recipe__item__title">Placas</h3>
                <p class="text_gar">{vehicle.plates}</p>
            </li>
            <li>
                <h3 className="recipe__item__title">Kms</h3>
                <p class="text_gar">{vehicle.kms}</p>
            </li>
        </ul>       
        <Table
            size="small"
            indentSize={0}
            pagination={false}
            dataSource={sellItems}
            columns={quotationColumns}
        />
        <ul className="recipe__flex-container_serv">
            <li>
                <h3 className="recipe__item__title">
                    Importe con letra
                </h3>
                <span className="importLetra" >
                    <p class="text_gar">{NumeroALetras(totalNumber) } 00/100 M.N.</p>
                </span>
            </li>
            <li>
                <h3 className="recipe__item__title">
                    Total
                </h3>
                <span className="text_gar">
                    ${String(round2(totalNumber ? totalNumber : 0)).replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
                </span>
            </li>
        </ul>
        {/* <p>Agradeciendo la atención que sirva brindar a la presente y en espera de su favorable respuesta, quedo de usted.</p> */}
        {/* <h2>Atentamente</h2> */}
        <p class="text_gar">GARANTIA RECTIFICADO DISCOS: 5 DIAS, GARANTIA BALATAS: 30 DIAS O KM 1,000 LO QUE OCURRA PRIMERO, SOBRE DEFECTO DE FABRICACION, RECOMENDACIÓN: NO ABUSE DE LOS FRENOS DURANTE LOS PRIMEROS KM 200-300</p>
        </body>
        <footer className="sell-ticket__footer">                  
          
                <ul className="recipe__flex-container_serv">
                    <li>
                        <h3 className="recipe__item__title">
                           <p class="text_gar">Califica nuestro servicio</p>
                           <p class="text_gar">Escaneando el codigo QR </p>
                           <p class="flecha">🢃</p> 
                        </h3>
                        <span className="importLetra" >
                        <img
                            className="sell-ticket__QR_Services"
                            src="/images/QRComents.png"
                        />
                        </span>
                    </li>
                    <li>
                        <h3 className="recipe__item__title">
                            <p class="text_cond">▢ Recibí en buenas condiciones el vehículo<br></br><br></br>
                            ▢ Falto algo de tu vehiculo?<br></br><br></br>
                                
                                Anotar faltantes: </p><br></br><br></br>

                        </h3>                       
                    </li>
                    <li>
                        <h3 className="recipe__item__title">
                         
                        </h3><br></br><br></br><br></br><br></br>
                        <span className="text_firm">
                           ___________________________
                        </span>
                        <p class="firm">Firma</p>
                    </li>
                </ul>
        </footer><br></br><br></br>


        <footer className="recipe__footer">
            <p class="text_gar">Saratoga #313-C,
                Col. Portales Norte
                C.p. 03300
                Alcaldía Benito Juárez, CDMX.</p>
            <p class="text_gar">Tels. (55) 4563 – 2063
                    (55) 6840 – 2850
                    (55) 7653 – 6116
                    (55) 5273 – 3450</p>
        </footer>
    </section>
);

QuotationRecipe.propTypes = propTypes;
QuotationRecipe.defaultProps = defaultProps;

export default QuotationRecipe;