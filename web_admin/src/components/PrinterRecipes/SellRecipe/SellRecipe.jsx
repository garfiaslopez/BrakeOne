import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';


import NumeroALetras from '../../../helpers/number_to_letter';
const round2 = (number) => (Math.round(number * 100) / 100);

const propTypes = {
    subsidiary: PropTypes.object,
    client: PropTypes.object,
    folio: PropTypes.string,
    sellItems: PropTypes.array,
    totalNumber: PropTypes.number,
    totalString: PropTypes.string
};

const defaultProps = {
    subsidiary: {
        street: 'Saratoga 313',
        colony: 'Portales Benito Juarez',
        city: 'CDMX',
        postalCode: '03300',
        phone: '7653-6116'
    },
    client: {
        name: 'José de Jesús Garfias Lopez',
        phone_number: '5564230789'
    },
    folio: '3443-2453',
    sellItems: [{
        datakey: 'P56101N',
        description: 'balata trasera brembo 3072',
        quantity: 1,
        charge: 575
    }, {
        datakey: 'P56341N',
        description: 'balata chida brembo 3072',
        quantity: 2,
        charge: 585
    }, {
        datakey: 'P56231N',
        description: 'balata',
        quantity: 1,
        charge: 223
    }],
    totalNumber: 1383,
    totalString: 'mil trescientos ochenta y tres pesos M.N.'
}

const SellTicket = ({
    folio,
    client,
    subsidiary,
    sellItems,
    totalNumber,
    totalString
}) => {
    const renderHeader = () => (
        <header className="sell-ticket__header">
            <img
                className="sell-ticket__logo"
                src="/images/BrakeOneBrembo.png"
            />
            <p className="sell-ticket__subsidiary">
                <span>{`${subsidiary.street}-C`}</span>
                <span>{`Col. Portales Norte`}</span>
                <span>{`Alcaldia Benito Juarez`}</span>
                <span>{`${subsidiary.city} CP ${subsidiary.postalCode}`}</span>
                <span>{`Tel: (55)${subsidiary.phone} / (55)68402850 
                (55)52733450`}</span>
            </p>
            <h1 className="sell-ticket__title">
                Ticket sin valor fiscal
            </h1>
        </header>
    );

    const renderFolioAndDate = () => (
        <ul className="recipe__flex-container">
            <li>
                
                <span className="recipe__item__data">
                   Folio: {folio}
                </span>
            </li>
            <li>
              
                <span className="recipe__item__data">
                    Fecha: {moment().format('MM-DD-YYYY')}
                </span>
            </li>
        </ul>
    );

    const renderClient = () => (
        <div className="sell-ticket__list">
            <h2 className="sell-ticket__list__title">
                Cliente:  {client.name}
            </h2>
            <h2 className="sell-ticket__list__title">
                Tel. {client.phone_number}
            </h2>
            <h2 className="sell-ticket__list__title">
                Col. {client.address_country} {`C.p. ${client.address_cp}`} {client.address_city} {client.address_state}
            </h2>
        </div>
    );

    const renderSellItems = () => (
        <div className="sell-ticket__list">
            <h2 className="sell-ticket__list__title recipe__flex-container">
                <span>Cant. / Concepto</span>
                <span>Importe</span>
            </h2>
            <ul>
                {sellItems.map((item, i) => (
                    <li className="recipe__flex-container" key={i}>
                    <span>{item.datakey}</span>
                        <span>{`$${item.total} `}</span>

                        <span>{`${item.quantity} ${item.fmsi} ${item.key_id} 
                        ${item.line} ${item.brand}`}</span>
                    </li>
                ))}
            </ul>
            <div className="sell-ticket__list__total recipe__flex-container">
                <span>Total</span>
                <span>
                    ${String(round2(totalNumber ? totalNumber : 0)).replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
                </span>
            </div>
            <p>{NumeroALetras(totalNumber)}</p>
        </div>
    );

    const renderFooter = () => (
        <footer className="sell-ticket__footer">
            <p>SOLO SE PODRA HACER CAMBIO FISICO DEL. PRODUCTO EN CASO DE DEFECTO DE FABRICA. NO MALTRATE EMPAQUE NI MERCANCIA.</p>
            <p>RECOMENDACIÓN: NO ABUSE DE LOS FRENOS. DURANTE LOS PRIMEROS 200 A 300 KMS.</p>
            <img
                className="sell-ticket__QR"
                src="/images/CodigoQR.png"
            />
        </footer>
    );
    

    return (
        <div className="sell-ticket">
            {renderHeader()}
            {renderFolioAndDate()}
            {renderClient()}
            {renderSellItems()}
            {renderFooter()}
        </div>
    );
    
}


SellTicket.propTypes = propTypes;
SellTicket.defaultProps = defaultProps;

export default SellTicket;