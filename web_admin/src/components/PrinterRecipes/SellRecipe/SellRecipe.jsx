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


/* sellItems.map((item, i) => (
    alert(item.quantity)
))
 */


const items1 ={
sellItems: [{
    datakey: 'P56101N',
    description: 'balata trasera brembo 3072',
    quantity: 1,
    charge: 575
}]
}


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
                className="sell-ticket__logo1"
                src="/images/BrakeOneBrembo.png"
            />
            <p className="">
                <p className="texto" >{`${subsidiary.street}-C`} {`Col. Portales Norte`}</p>
                <p className="texto" >{`Col. Portales Norte`}</p>
                <p className="texto" >{`Alcaldia Benito Juarez`}</p>
                


                <ul className="recipe__flex-container1">
                    <li>
                    <p className="texto" >
                            {subsidiary.city}
                         </p>
                    </li>
                    <li>
                    <p className="texto" >
                        C.p. 03303
                        </p>
                    </li>
                </ul>


                
                <p className="texto" >{`Tel: (55) ${subsidiary.phone} / (55) 68402850 `}</p>
                
                <p className="texto" >{`(55) 52733450`} / {`(55) 43834342`} {' '}
                <img
                    className="sell-ticket_what"
                    src="/images/whatsapp.png"
                />
                </p>
                
            </p>
            <h1 className="sell-ticket__title1">
                Ticket sin valor fiscal
            </h1>
        </header>
    );

    const renderFolioAndDate = () => (
        <ul className="recipe__flex-container">
            <li>
                
            <p className="texto" >
                   <b>Folio:</b> {folio}
            </p>
            </li>
            <li>
              
            <p className="texto" >
                    <b>Fecha:</b> {moment().format('MM-DD-YYYY')}
            </p>
            </li>
        </ul>
    );

    const renderClient = () => (
        <div className="sell-ticket__list">
          <p className="texto3" ><b>Cliente:</b> </p><p className="texto4">{client.name}</p>
                {/* <h1 className="Prueba">RFC: </h1>  */}<p className="texto3" ><b>RFC:</b> {client.rfc}</p>
                {/* <h1 className="Prueba">Tel. </h1>  */}<p className="texto3" ><b>Tel.</b> {client.phone_number}</p>
                {/* <h1 className="Prueba">Col. </h1>  */}<p className="texto4" ><b>Col.</b> {client.address_country} {`C.p. ${client.address_cp}`} {client.address_city} {client.address_state}</p>
        </div>
    );

    const renderSellItems = () => (
        <div className="sell-ticket__list">
            <h2 className="sell-ticket__list__title recipe__flex-container">
            <p className="texto" >Cant. / Concepto</p>
            <p className="texto" >Importe</p>
            </h2>
            <ul>
                {sellItems.map((item, i) => ( 
                    <li className="recipe__flex-container" key={i}>
                   {/*  <span>{item.quantity}</span> */}
                      
                   <p className="texto" > ${String(round2(item.price ? Math.round(item.price) : 0)).replace(/\B(?=(\d{3})+(?!\d))/g, ',')} = Descuento {item.discount} % </p>
                   <p className="texto" > ${String(round2(item.total ? item.total : 0)).replace(/\B(?=(\d{3})+(?!\d))/g, ',')}</p>
                  
                      <p className="texto5" >{/* {`${item.quantity} */} {item.description} {/* ${item.key_id} 
                        ${item.line} ${item.brand}\n` */}</p>{/* {`\n`} */}
                    </li>
                ))}
            </ul>
            <div className="sell-ticket__list__total recipe__flex-container">
              
           {/*Sum total of products */}   
           {sellItems.map((item, i) => parseFloat(item.quantity))

            .reduce((previus, current) => {
               return previus + current;  
            }, 0)
            }
            <p className="texto2" >
            Cantidad piezas
            </p>
                         


                <ul className="recipe__flex-container2">
                        <li>
                        <p className="texto" >
                            <b>Total: </b>${String(round2(totalNumber)).replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
                        </p>
                        </li>

                </ul>     
                
            </div>
        <center><b><p className="texto" >{NumeroALetras(totalNumber)} 00/100 M.N.</p></b></center>   
         <center><p className="texto" >Aviso de privacidad / Terminos y condiciones en: </p></center>
         <center><p className="texto" >www.brakeone.mx</p></center>
        </div>
    );

    const renderFooter = () => (
        <footer className="sell-ticket__footer">            
            <img
                className="sell-ticket__QR"
                src="/images/QR.jpeg"
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