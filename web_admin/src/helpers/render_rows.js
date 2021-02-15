import React from 'react';
import moment from 'moment';
import { Icon } from 'antd';

const round2 = (number) => (Math.round(number * 100) / 100);
const fontSize = 12;

export default {
    round2,
    renderRowDate: (text, record) => {
        return ({
            children: <p style={{fontSize}}>{moment(text).format('DD/MM/YYYY HH:mm')}</p>,
        });
    },
    renderRowNumber: (text, record) => {
        return ({
            children: <p style={{fontSize}}>${String(round2(text ? text : 0)).replace(/\B(?=(\d{3})+(?!\d))/g, ',')}</p>,
        });
    },
    renderRowPercent: (text, record) => {
        return ({
            children: <p style={{fontSize}}>{text.replace(/\B(?=(\d{3})+(?!\d))/g, ',')} %</p>,
        });
    },
    renderRowText: (text, record) => {
        return ({
            children: <p style={{fontSize}}>{text}</p>,
        });
    },
    renderRowTextFMSI: (text, record) => {
        let fmsis = '';
        record.products.forEach((p) => {
            fmsis += p.fmsi + ', ';
        });
        return ({
            children: <p style={{fontSize}}>{fmsis.substring(0,20)}</p>,
        });
    },
    renderRowTextProducts: (text, record) => {
        let color = record.stock < 1 ? 'red' : 'blue';
        return ({
            children: <p style={{color, fontSize}}>{text}</p>,
        });
    },
    renderRowTextTruncateProducts: (text, record) => {
        let color = record.stock < 1 ? 'red' : 'blue';
        return ({
            children: <p style={{color, fontSize}}>{text.substring(0,20) + '...'}</p>,
        });
    },
    renderRowDateProducts: (text, record) => {
        let color = record.stock < 1 ? 'red' : 'blue';
        return ({
            children: <p style={{color, fontSize}}>{moment(text).format('DD/MM/YYYY HH:mm')}</p>,
        });
    },
    renderRowNumberProducts: (text, record) => {
        let color = record.stock < 1 ? 'red' : 'blue';
        return ({
            children: <p style={{color, fontSize}}>${Intl.NumberFormat("en-IN").format(Math.trunc(String(round2(text ? text : 0))))}</p>,
        });
    },
    renderRowPercentProducts: (text, record) => {
        let color = record.stock < 1 ? 'red' : 'blue';
        return ({
            children: <p style={{color, fontSize}}>{text.replace(/\B(?=(\d{3})+(?!\d))/g, ',')} %</p>,
        });
    },

    /*
        NEGRO -> TODO NORMAL. 
        ROJO  -> SE HIZO LA VENTA Y TODO PERO TODAVIA NO PAGA.  ENTREGADO Y NO PAGADO
        AZUL. -> ESTA ABIERTA LA ORDEN PERO YA PAGADA. VENTA NO CERRADA.
    */

    renderRowTextSells: (text, record) => {
        let color = 'black';
        if (!record.is_payed) {
            color = 'red';
        }
        if (!record.is_finished) {
            color = 'blue';
        }
        return ({
            children: <p style={{color, fontSize}}>{text}</p>,
        });
    },
    renderRowDateSells: (text, record) => {
        let color = 'black';
        if (!record.is_payed) {
            color = 'red';
        }
        if (!record.is_finished) {
            color = 'blue';
        }
        return ({
            children: <p style={{color, fontSize}}>{moment(text).format('DD/MM/YYYY HH:mm')}</p>,
        });
    },
    renderRowNumberSells: (text, record) => {
        let color = 'black';
        if (!record.is_payed) {
            color = 'red';
        }
        if (!record.is_finished) {
            color = 'blue';
        }
        return ({
            children: <p style={{color, fontSize}}>${String(round2(text ? text : 0)).replace(/\B(?=(\d{3})+(?!\d))/g, ',')}</p>,
        });
    },
    renderRowPercentSells: (text, record) => {
        let color = 'black';
        if (!record.is_finished) {
            color = 'blue';
        }
        if (!record.is_payed) {
            color = 'red';
        }
        return ({
            children: <p style={{color, fontSize}}>{text.replace(/\B(?=(\d{3})+(?!\d))/g, ',')} %</p>,
        });
    },

    //RENDER CAR ROWS

    renderCarServices: (text, record) => {
        const car = record.client_id.cars.find((el)=>(el._id === text));
        let color = 'black';
        if (!record.is_payed) {
            color = 'red';
        }
        if (!record.is_finished) {
            color = 'blue';
        }
        return ({
            children: <p style={{color, fontSize}}></p>,
        });
    },

    // REMAINING TO PAY FOR TABLE
    renderRowRemainingPay: (text, record) => {
        let color = 'black';
        if (!record.is_payed) {
            color = 'red';
        }
        if (!record.is_finished) {
            color = 'blue';
        }
        const newTotal = record.total - record.payed;
        return ({
            children: <p style={{color, fontSize}}>${String(round2(newTotal ? newTotal : 0)).replace(/\B(?=(\d{3})+(?!\d))/g, ',')}</p>,
        });
    },

    renderRowSellBool: (text, record) => {
        let renderIcon = <Icon style={{ fontSize: '28px', textAlign: 'center' }} type="close-circle" theme="twoTone" twoToneColor="#eb2f96" />;
        if (record.sell_id) {
            renderIcon = <Icon  style={{ fontSize: '28px', textAlign: 'center' }} type="check-circle" theme="twoTone" twoToneColor="#52c41a" />;
        }
        return ({
            children: <p>{renderIcon}</p>,
        });
    }

}