import Papa from 'papaparse';

const init_load_cars = async () => {
    return new Promise((resolve, reject) => {
        if (!window.cars_database) {
            Papa.parse(process.env.REACT_APP_CDN + '/files/cars_database.csv', {
                download: true,
                complete: (cars_csv) => {
                    const cars = {
                        make: [],
                        name: [],
                        trim: [],
                        year: [],
                    };
                    if (cars_csv) {
                        if (cars_csv.data) {
                            for (let i=1; i < cars_csv.data.length; i++) {
                                cars.make.push(cars_csv.data[i][1]);
                                cars.name.push(cars_csv.data[i][2]);
                                cars.trim.push(cars_csv.data[i][3]);
                                cars.year.push(cars_csv.data[i][4]);
                            }
                        }
                    }
                    resolve(cars);
                }
            });
        }
    });
}

export default init_load_cars;