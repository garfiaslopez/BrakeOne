import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';

import './Styles.css';

const propTypes = {
    subsidiary: PropTypes.object,
    client: PropTypes.object,
    folio: PropTypes.string
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
}

const SellTicket = ({
    folio,
    client,
    subsidiary
}) => {
    const renderHeader = () => (
        <header className="sell-ticket__header">
            <img
                className="sell-ticket__logo"
                src="/images/MainLogo.png"
            />
            <p className="sell-ticket__subsidiary">
                <span>{`Punto de venta: ${subsidiary.street}`}</span>
                <span>{`Col. ${subsidiary.colony}`}</span>
                <span>{`${subsidiary.city} CP ${subsidiary.postalCode}`}</span>
                <span>{`Tel: ${subsidiary.phone}`}</span>
            </p>
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
                    {moment().format('MM-DD-YYYY')}
                </span>
            </li>
        </ul>
    );

    const renderClient = () => (
        <ul className="sell-ticket__client recipe__column-container">
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

    return (
        <div className="sell-ticket">
            {renderHeader()}
            <h1 className="sell-ticket__title">
                Ticket de venta sin valor fiscal
            </h1>
            {renderFolioAndDate()}
            {renderClient()}
        </div>
    );
}

SellTicket.propTypes = propTypes;
SellTicket.defaultProps = defaultProps;

export default SellTicket;