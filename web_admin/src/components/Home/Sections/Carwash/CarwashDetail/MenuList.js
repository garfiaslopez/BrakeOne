import Dashboard from './Dashboard/Dashboard';
import Today from 'material-ui-icons/Today';

import CarsAndServices from './CarsAndServices/CarsAndServices';
import DirectionsCar from 'material-ui-icons/DirectionsCar';

import Products from './Products/Products';
import LocalOffer from 'material-ui-icons/LocalOffer';

import History from './History/History';
import QueryBuilder from 'material-ui-icons/QueryBuilder';

const Menu = [
    {
        key: 'dashboard',
        title: 'Resumen del día',
        component: Dashboard,
        icon: Today
    },
    {
        key: 'cars',
        title: 'Carros y Servicios',
        component: CarsAndServices,
        icon: DirectionsCar
    },
    {
        key: 'products',
        title: 'Productos',
        component: Products,
        icon: LocalOffer
    },
    {
        key: 'history',
        title: 'Historial',
        component: History,
        icon: QueryBuilder
    }
];

export default {
    admin: Menu,
    manager: Menu,
    guest: Menu,
};
