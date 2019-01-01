import Rules from '../../helpers/rules';

export default [
	[
		{
			id: 'name',
			type: 'String',
			placeholder: 'Nombre',
			prefixIcon: 'user',
			rules: Rules['string']
		},
		{
			id: 'rfc',
			type: 'String',
			placeholder: 'RFC',
			prefixIcon: 'idcard',
			rules: Rules['rfc']
		}
	], 
	[
		{
			id: 'address',
			type: 'String',
			placeholder: 'Domicilio',
			prefixIcon: 'environment',
			rules: Rules['string']
		},
		{
			id: 'address_cp',
			type: 'Postal_Code',
			placeholder: 'Código Postal',
			prefixIcon: 'environment',
			rules: Rules['string']
		}
	],
	[
		{
			id: 'address_city',
			type: 'Dropdown_Postal_Code',
			placeholder: 'Colonia',
			prefixIcon: 'environment',
			rules: Rules['string']
		},
		{
			id: 'address_country',
			type: 'String',
			placeholder: 'Zona / Municipio',
			prefixIcon: 'environment',
			rules: Rules['string']
		},
		{
			id: 'address_state',
			type: 'String',
			placeholder: 'Ciudad / Estado',
			prefixIcon: 'environment',
			rules: Rules['string']
		}
	],
	[
		{
			id: 'phone_number',
			type: 'String',
			placeholder: 'Teléfono',
			prefixIcon: 'phone',
			rules: Rules['phone']
		},
		{
			id: 'email',
			type: 'String',
			placeholder: 'Email',
			prefixIcon: 'mail',
			rules: Rules['email'],
		},
		{
			id: 'credit_days',
			type: 'Number',
			placeholder: 'Crédito',
			prefixIcon: 'credit-card',
			options: { max: 30, min: 0, step: 15 },
			rules: Rules['number_credit']
		}
	],
	[
		{
			id: 'div1',
			type: 'Divider',
			placeholder: 'Información de contacto'
		}
	],
	[
		{
			id: 'contacts',
			type: 'Nested_Object',
			placeholder: 'Contacto',
			rules: Rules['contacts'],
			schema: [
				[
					{
						id: 'name',
						type: 'String',
						placeholder: 'Nombre',
						rules: Rules['string']
					},
					{
						id: 'job_role',
						type: 'String',
						placeholder: 'Puesto',
						rules: Rules['string']
					}
				],
				[
					{
						id: 'phone_number',
						type: 'String',
						placeholder: 'Numero Celular',
						rules: Rules['phone']
					},
					{
						id: 'email',
						type: 'String',
						placeholder: 'Email',
						rules: Rules['email']
					}
				]
			]
		}
	]
];