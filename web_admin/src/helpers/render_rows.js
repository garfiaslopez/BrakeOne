import React from 'react';
import moment from 'moment';

const round2 = (number) => (Math.round(number * 100) / 100);

export default {
    round2,
    renderRowDate: (text, record) => {
        return ({
            children: <p>{moment(text).format('DD/MM/YYYY')}</p>,
        });
    },
    renderRowNumber: (text, record) => {
        return ({
            children: <p>${String(round2(text ? text : 0)).replace(/\B(?=(\d{3})+(?!\d))/g, ',')}</p>,
        });
    },
    renderRowPercent: (text, record) => {
        return ({
            children: <p>{text.replace(/\B(?=(\d{3})+(?!\d))/g, ',')} %</p>,
        });
    },
    renderRowTextProducts: (text, record) => {
        let color = record.stock < record.stock_ideal ? 'red' : 'blue';
        return ({
            children: <p style={{color}}>{text}</p>,
        });
    },
    renderRowDateProducts: (text, record) => {
        let color = record.stock < record.stock_ideal ? 'red' : 'blue';
        return ({
            children: <p style={{color}}>{moment(text).format('DD/MM/YYYY')}</p>,
        });
    },
    renderRowNumberProducts: (text, record) => {
        let color = record.stock < record.stock_ideal ? 'red' : 'blue';
        return ({
            children: <p style={{color}}>${String(round2(text ? text : 0)).replace(/\B(?=(\d{3})+(?!\d))/g, ',')}</p>,
        });
    },
    renderRowPercentProducts: (text, record) => {
        let color = record.stock < record.stock_ideal ? 'red' : 'blue';
        return ({
            children: <p style={{color}}>{text.replace(/\B(?=(\d{3})+(?!\d))/g, ',')} %</p>,
        });
    },
}