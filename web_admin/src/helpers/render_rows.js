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
    }
}