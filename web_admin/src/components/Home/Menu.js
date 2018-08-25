import Users from '../Users/Users';

const adminMenu = [
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
    },
    {
        'name': 'Sucursales',
        'icon': 'home',
        'component': Users,
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