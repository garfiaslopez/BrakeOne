import Subsidiarys from '../Subsidiarys/Subsidiarys';
import Users from '../Users/Users';
import Providers from '../Providers/Providers';
import Products from '../Products/Products';
import Packages from '../Products/Packages/Packages';
import ProductServices from '../Products/Services/Services';
import Receptions from '../Products/Receptions/Receptions';
import ReceptionPayments from '../Products/ReceptionPayments/ReceptionPayments';
import Kardex from '../Products/Kardex/Kardex';
import Paysheet from '../Paysheet/Paysheet';
import Clients from '../Clients/Clients';
import Cashdrawer from '../Cashdrawer/Cashdrawer';
import Sells from '../Sells/Sells';
import Quotations from '../Quotations/Quotations';
import Spends from '../Spends/Spends';
import Services from '../Services/Services';
import Payments from '../Payments/Payments';

const adminMenu = [
    {
        'name': 'Cotizaciones',
        'icon': 'file-search',
        'component': Quotations,
    },
    {
        'name': 'Ventas',
        'icon': 'shopping-cart',
        'component': Sells,
    },
    {
        'name': 'Servicios',
        'icon': 'tool',
        'component': Services,
    },
    {
        'name': 'Pagos',
        'icon': 'credit-card',
        'component': Payments,
    },
    {
        'name': 'Gastos',
        'icon': 'dollar',
        'component': Spends,
    },
    {
        'name': 'Productos',
        'icon': 'tool',
        'sub_menus': [
            {
                'name': 'Lista de Productos',
                'icon': 'folder',
                'component': Products
            },
            {
                'name': 'Servicios',
                'icon': 'tool',
                'component': ProductServices,
            }, 
            {
                'name': 'Kardex',
                'icon': 'swap',
                'component': Kardex
            },
            {
                'name': 'Compras Productos',
                'icon': 'plus-circle',
                'component': Receptions
            },
            {
                'name': 'Pagos Productos',
                'icon': 'dollar',
                'component': ReceptionPayments
            },
            {
                'name': 'Pruebas consultas',
                'icon': 'plus-circle',
                'component': ReceptionPayments
            }
        ]
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
        'name': 'Personal',
        'icon': 'user',
        'component': Users,
    },
    {
        'name': 'Nómina',
        'icon': 'book',
        'component': Paysheet,
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
        'name': 'Cotizaciones',
        'icon': 'file-search',
        'component': Quotations,
    },
    {
        'name': 'Ventas',
        'icon': 'shopping-cart',
        'component': Sells,
    },
    {
        'name': 'Servicios',
        'icon': 'tool',
        'component': Services,
    },
    {
        'name': 'Pagos',
        'icon': 'credit-card',
        'component': Payments,
    },
    {
        'name': 'Gastos',
        'icon': 'dollar',
        'component': Spends,
    },
    {
        'name': 'Productos',
        'icon': 'tool',
        'sub_menus': [
            {
                'name': 'Lista de Productos',
                'icon': 'folder',
                'component': Products
            },
            {
                'name': 'Servicios',
                'icon': 'tool',
                'component': ProductServices,
            }, 
            {
                'name': 'Kardex',
                'icon': 'swap',
                'component': Kardex
            },
            {
                'name': 'Compras Productos',
                'icon': 'plus-circle',
                'component': Receptions
            },
            {
                'name': 'Pagos Productos',
                'icon': 'dollar',
                'component': ReceptionPayments
            }
        ]
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
        'name': 'Personal',
        'icon': 'user',
        'component': Users,
    },
    {
        'name': 'Nómina',
        'icon': 'book',
        'component': Paysheet,
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

const userMenu = [
    {
        'name': 'Cotizaciones',
        'icon': 'file-search',
        'component': Quotations,
    },
    {
        'name': 'Ventas',
        'icon': 'shopping-cart',
        'component': Sells,
    },
    {
        'name': 'Servicios',
        'icon': 'tool',
        'component': Services,
    },
    {
        'name': 'Pagos',
        'icon': 'credit-card',
        'component': Payments,
    },
    {
        'name': 'Gastos',
        'icon': 'dollar',
        'component': Spends,
    },
    {
        'name': 'Productos',
        'icon': 'tool',
        'sub_menus': [
            {
                'name': 'Lista de Productos',
                'icon': 'folder',
                'component': Products
            },
            {
                'name': 'Servicios',
                'icon': 'tool',
                'component': ProductServices,
            }, 
            {
                'name': 'Kardex',
                'icon': 'swap',
                'component': Kardex
            },
            {
                'name': 'Compras Productos',
                'icon': 'plus-circle',
                'component': Receptions
            },
            {
                'name': 'Pagos Productos',
                'icon': 'dollar',
                'component': ReceptionPayments
            }
        ]
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
    }
];

export default {
    'ADMIN': adminMenu,
    'MANAGER': managerMenu,
    'MOSTRADOR': userMenu
}