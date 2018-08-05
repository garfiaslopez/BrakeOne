import Carwashes from './Sections/Carwash/Carwashes/Carwashes';
import Store from 'material-ui-icons/Store';

import Users from './Sections/Users/Users';
import People from 'material-ui-icons/People';

import Account from './Sections/Account/Accounts';
import Person from 'material-ui-icons/Person';

import Support from './Sections/Support/Support';
import HelpOutline from 'material-ui-icons/HelpOutline';

const Menu = [
    {
        key: 'carwashes',
        title: 'Lavados',
        component: Carwashes,
        icon: Store
    },
    {
        key: 'users',
        title: 'Usuarios',
        component: Users,
        icon: People
    }
    // {
    //     key: 'support',
    //     title: 'Soporte',
    //     component: Support,
    //     icon: HelpOutline
    // }
];

const MenuAdmin = [
    {
        key: 'carwashes',
        title: 'Lavados',
        component: Carwashes,
        icon: Store
    },
    {
        key: 'users',
        title: 'Usuarios',
        component: Users,
        icon: People
    },
    {
        key: 'account',
        title: 'Cuentas',
        component: Account,
        icon: Person
    }
    // {
    //     key: 'support',
    //     title: 'Soporte',
    //     component: Support,
    //     icon: HelpOutline
    // }
];

export default {
    admin: MenuAdmin,
    manager: Menu,
    guest: Menu
};
