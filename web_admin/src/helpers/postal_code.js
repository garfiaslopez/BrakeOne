import Papa from 'papaparse';

const init_postal_codes = () => {
    if (!window.postal_codes) {
        Papa.parse(process.env.REACT_APP_CDN + '/files/cp_mexico.csv', {
            download: true,
            complete: (mexico_csv) => {
                Papa.parse(process.env.REACT_APP_CDN + '/files/cp_ciudad_de_mexico.csv', {
                    download: true,
                    complete: (ciudad_de_mexico_csv) => {
                        Papa.parse(process.env.REACT_APP_CDN + '/files/cp_queretaro.csv', {
                            download: true,
                            complete: (queretaro_csv) => {
                                const postal_codes = {};
                                if (mexico_csv) {
                                    if (mexico_csv.data) {
                                        for (let i=1; i < mexico_csv.data.length; i++) {
                                            if (postal_codes[mexico_csv.data[i][0]]) {
                                                postal_codes[mexico_csv.data[i][0]].push({
                                                    'address_city': mexico_csv.data[i][1],
                                                    'address_country': mexico_csv.data[i][3],
                                                    'address_state': mexico_csv.data[i][4]
                                                });
                                            } else {
                                                postal_codes[mexico_csv.data[i][0]] = [{
                                                    'address_city': mexico_csv.data[i][1],
                                                    'address_country': mexico_csv.data[i][3],
                                                    'address_state': mexico_csv.data[i][4]
                                                }]
                                            }
                                        }
                                    }
                                }
                                if (ciudad_de_mexico_csv) {
                                    if (ciudad_de_mexico_csv.data) {
                                        for (let i=1; i < ciudad_de_mexico_csv.data.length; i++) {
                                            if (postal_codes[ciudad_de_mexico_csv.data[i][0]]) {
                                                postal_codes[ciudad_de_mexico_csv.data[i][0]].push({
                                                    'address_city': ciudad_de_mexico_csv.data[i][1],
                                                    'address_country': ciudad_de_mexico_csv.data[i][3],
                                                    'address_state': ciudad_de_mexico_csv.data[i][4]
                                                });
                                            } else {
                                                postal_codes[ciudad_de_mexico_csv.data[i][0]] = [{
                                                    'address_city': ciudad_de_mexico_csv.data[i][1],
                                                    'address_country': ciudad_de_mexico_csv.data[i][3],
                                                    'address_state': ciudad_de_mexico_csv.data[i][4]
                                                }]
                                            }
                                        }
                                    }
                                }
                                if (queretaro_csv) {
                                    if (queretaro_csv.data) {
                                        for (let i=1; i < queretaro_csv.data.length; i++) {
                                            if (postal_codes[queretaro_csv.data[i][0]]) {
                                                postal_codes[queretaro_csv.data[i][0]].push({
                                                    'address_city': queretaro_csv.data[i][1],
                                                    'address_country': queretaro_csv.data[i][3],
                                                    'address_state': queretaro_csv.data[i][4]
                                                });
                                            } else {
                                                postal_codes[queretaro_csv.data[i][0]] = [{
                                                    'address_city': queretaro_csv.data[i][1],
                                                    'address_country': queretaro_csv.data[i][3],
                                                    'address_state': queretaro_csv.data[i][4]
                                                }]
                                            }
                                        }
                                    }
                                }
                                window.postal_codes = postal_codes;
                            }
                        });
                    }
                });
            }
        });
    }
}

export default init_postal_codes;