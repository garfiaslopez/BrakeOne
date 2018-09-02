import Subsidiarys from '../Subsidiarys/Subsidiarys';
import Users from '../Users/Users';
import Providers from '../Providers/Providers';
import Products from '../Products/Products';
import Paysheet from '../Paysheet/Paysheet';
import Packages from '../Packages/Packages';
import Clients from '../Clients/Clients';
import Cashdrawer from '../Cashdrawer/Cashdrawer';

const adminMenu = [
    {
        'name': 'Personal',
        'icon': 'user',
        'component': Users,
    },
    {
        'name': 'Nómina',
        'icon': 'credit-card',
        'component': Paysheet,
    },
    {
        'name': 'Productos',
        'icon': 'tool',
        'sub_menus': [
            {
                'name': 'Catalogo',
                'icon': 'folder',
                'component': Products
            },
            {
                'name': 'Paquetes',
                'icon': 'inbox',
                'component': Products,
            },
            {
                'name': 'Kardex',
                'icon': 'swap',
                'component': Products,
            }
        ]
    },
    {
        'name': 'Paquetes',
        'icon': 'inbox',
        'component': Packages,
    },
    {
        'name': 'Servicios',
        'icon': 'shopping-cart',
        'component': Users,
    },
    {
        'name': 'Clientes',
        'icon': 'smile-o',
        'component': Clients,
    },
    {
        'name': 'Proveedores',
        'icon': 'global',
        'component': Providers,
    },
    {
        'name': 'Caja',
        'icon': 'wallet',
        'component': Cashdrawer,
    },
    {
        'name': 'Sucursales',
        'icon': 'shop',
        'component': Subsidiarys,
    }
    
];

const managerMenu = [
    {
        'name': 'Personal',
        'icon': 'user',
        'component': Users,
    },
    {
        'name': 'Nomina',
        'icon': 'credit-card',
        'component': Users,
    },
    {
        'name': 'Productos',
        'icon': 'tool',
        'sub_menus': [
            {
                'name': 'Catalogo',
                'icon': 'folder',
                'component': Users
            },
            {
                'name': 'Paquetes',
                'icon': 'inbox',
                'component': Users,
            },
            {
                'name': 'Kardex',
                'icon': 'swap',
                'component': Users
            }
        ]
    },
    {
        'name': 'Servicios',
        'icon': 'shopping-cart',
        'component': Users,
    },
    {
        'name': 'Clientes',
        'icon': 'smile-o',
        'component': Users,
    },
    {
        'name': 'Proveedores',
        'icon': 'global',
        'component': Users,
    },
    {
        'name': 'Caja',
        'icon': 'wallet',
        'component': Users,
    }
];

const userMenu = [
    {
        'name': 'Personal',
        'icon': 'user',
        'component': Users,
    },
    {
        'name': 'Nomina',
        'icon': 'credit-card',
        'component': Users,
    },
    {
        'name': 'Productos',
        'icon': 'tool',
        'sub_menus': [
            {
                'name': 'Catalogo',
                'icon': 'folder',
                'component': Users
            },
            {
                'name': 'Paquetes',
                'icon': 'inbox',
                'component': Users,
            },
            {
                'name': 'Kardex',
                'icon': 'swap',
                'component': Users
            }
        ]
    },
    {
        'name': 'Servicios',
        'icon': 'shopping-cart',
        'component': Users,
    },
    {
        'name': 'Clientes',
        'icon': 'smile-o',
        'component': Users,
    },
    {
        'name': 'Proveedores',
        'icon': 'global',
        'component': Users,
    },
    {
        'name': 'Caja',
        'icon': 'wallet',
        'component': Users,
    }
];

export default {
    'admin': adminMenu,
    'manager': managerMenu,
    'user': userMenu
}