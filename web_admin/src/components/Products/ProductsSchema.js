import Rules from '../../helpers/rules';

const Lines = [
	{
		id: 28,
		denomination: 'ACEITE'
	},
	{
		id: 34,
		denomination: 'ADITIVO'
	},
	{
		id: 6,
		denomination: 'AMORTIGUADORES'
	},
	{
		id: 29,
		denomination: 'ANTICONGELANTE'
	},
	{
		id: 31,
		denomination: 'ATE'
	},
	{
		id: 3,
		denomination: 'BALATAS'
	},
	{
		id: 44,
		denomination: 'BALATAS CERAMICA'
	},
	{
		id: 45,
		denomination: 'BALATAS LOW METAL'
	},
	{
		id: 36,
		denomination: 'BASE AMORTIGUADOR'
	},
	{
		id: 21,
		denomination: 'BIRLO'
	},
	{
		id: 30,
		denomination: 'BIZOL'
	},
	{
		id: 8,
		denomination: 'BMW'
	},
	{
		id: 24,
		denomination: 'BOBINA'
	},
	{
		id: 27,
		denomination: 'BOMBA DE AGUA'
	},
	{
		id: 19,
		denomination: 'BUJIA'
	},
	{
		id: 46,
		denomination: 'CATALOGO'
	},
	{
		id: 18,
		denomination: 'CLUTCH'
	},
	{
		id: 43,
		denomination: 'DISCO / TAMBOR'
	},
	{
		id: 13,
		denomination: 'DISCOS'
	},
	{
		id: 39,
		denomination: 'ENGRANE'
	},
	{
		id: 7,
		denomination: 'FILTROS'
	},
	{
		id: 53,
		denomination: 'FOCO'
	},
	{
		id: 49,
		denomination: 'GALFER'
	},
	{
		id: 40,
		denomination: 'GORRA'
	},
	{
		id: 52,
		denomination: 'HERRAJE'
	},
	{
		id: 38,
		denomination: 'HIPERVENTILADO'
	},
	{
		id: 42,
		denomination: 'INSERTO'
	},
	{
		id: 15,
		denomination: 'INSTALACION BASICA'
	},
	{
		id: 20,
		denomination: 'JUNTA'
	},
	{
		id: 26,
		denomination: 'LIQUIDO FRENOS'
	},
	{
		id: 1,
		denomination: 'LLANTAS'
	},
	{
		id: 51,
		denomination: 'LLAVERO'
	},
	{
		id: 2,
		denomination: 'MANO DE OBRA'
	},
	{
		id: 35,
		denomination: 'PALPADOR'
	},
	{
		id: 32,
		denomination: 'PARTES'
	},
	{
		id: 47,
		denomination: 'PLUMAS'
	},
	{
		id: 17,
		denomination: 'RECTIFICADO'
	},
	{
		id: 37,
		denomination: 'REP SET'
	},
	{
		id: 9,
		denomination: 'ROTORES'
	},
	{
		id: 23,
		denomination: 'RRO'
	},
	{
		id: 10,
		denomination: 'SENSORES'
	},
	{
		id: 4,
		denomination: 'SERV'
	},
	{
		id: 5,
		denomination: 'SERVICIO'
	},
	{
		id: 16,
		denomination: 'SERVICIO BASICA'
	},
	{
		id: 14,
		denomination: 'SERVICIO PLUS'
	},
	{
		id: 48,
		denomination: 'SO'
	},
	{
		id: 11,
		denomination: 'SUSPENSION'
	},
	{
		id: 25,
		denomination: 'TAMBOR'
	},
	{
		id: 33,
		denomination: 'TERMOSTATO'
	},
	{
		id: 12,
		denomination: 'VARIOS'
	},
	{
		id: 41,
		denomination: 'VERIFICACION'
	},
	{
		id: 22,
		denomination: 'ZAPATA'
	}
];

//try render here the array;
export default [
	[
		{
			id: 'key_id',
			type: 'String',
			placeholder: 'Llave',
			prefixIcon: 'key',
			rules: Rules['string']
		},
		{
			id: 'fmsi',
			type: 'String',
			placeholder: 'FMSI',
			prefixIcon: 'idcard',
			rules: Rules['string']
		},
		{
			id: 'line',
			type: 'Dropdown',
			placeholder: 'Línea',
			options: Lines.map((el) => (el.denomination)),
			rules: Rules['string']
		}
	],
	[
		{
			id: 'brand',
			type: 'String',
			placeholder: 'Marca',
			prefixIcon: 'tool',
			rules: Rules['string']
		},
		{
			id: 'provider_id',
			type: 'Dropdown_DataDB',
			placeholder: 'Proveedor',
			data: 'providers',
			label: 'name',
			rules: Rules['string']
		}
	],
	[
		{
			id: 'description',
			type: 'TextArea',
			placeholder: 'Descripción',
			prefixIcon: 'environment',
			rules: Rules['text']
		}
	],
	[
		{
			id: 'units',
			type: 'String',
			placeholder: 'Unidades',
			prefixIcon: 'plus-square',
			rules: Rules['string']
		},
		{
			id: 'stock',
			type: 'Number',
			placeholder: 'Stock',
			prefixIcon: 'inbox',
			options: { min: 0, step: 1 },
			rules: Rules['number']
		},
		{
			id: 'stock_ideal',
			type: 'Number',
			placeholder: 'Stock Ideal',
			prefixIcon: 'inbox',
			options: { min: 0, step: 1 },
			rules: Rules['number']
		},
		{
			id: 'localization',
			type: 'String',
			placeholder: 'Localización',
			prefixIcon: 'folder-open',
			rules: Rules['text']
		}
	],
	[
		{
			id: 'price',
			type: 'Number_Money',
			placeholder: 'Precio Neto',
			prefixIcon: 'dollar',
			options: { min: 0, step: 1 },
			rules: Rules['number']
		},
		{
			id: 'price_public',
			type: 'Number_Money',
			placeholder: 'Precio Público',
			prefixIcon: 'dollar',
			options: { min: 0, step: 1 },
			rules: Rules['number']
		},
		{
			id: 'price_workshop',
			type: 'Number_Money',
			placeholder: 'Precio Taller',
			prefixIcon: 'dollar',
			options: { min: 0, step: 1 },
			rules: Rules['number']
		},
		{
			id: 'price_wholesale',
			type: 'Number_Money',
			placeholder: 'Precio Mayoreo',
			prefixIcon: 'dollar',
			options: { min: 0, step: 1 },
			rules: Rules['number']
		}
	],
	[
		{
			id: 'div1',
			type: 'Divider',
			placeholder: 'Código de barras'
		}
	],
	[
		{
			id: 'barcode',
			type: 'Barcode',
			placeholder: 'Código de barras',
			prefixIcon: 'barcode',
			rules: Rules['text']
		}
	]
];