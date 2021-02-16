import Rules from '../../helpers/rules';

export default [
	[
		{
			id: 'name',
			type: 'String',
			placeholder: 'Cliente',
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
			type: 'String',
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
			placeholder: 'Teléfono Particular',
			prefixIcon: 'phone',
			rules: Rules['string']
		},
		{
			id: 'phone_office',
			type: 'String',
			placeholder: 'Teléfono Oficina',
			prefixIcon: 'phone',
			rules: Rules['string']
		},
		{
			id: 'phone_mobil',
			type: 'String',
			placeholder: 'Teléfono Móvil',
			prefixIcon: 'phone',
			rules: Rules['string']
		},
	],
	[
		{
			id: 'email',
			type: 'String',
			placeholder: 'Email',
			prefixIcon: 'mail',
			rules: Rules['email']
		},
		{
			id: 'credit_days',
			type: 'Number',
			placeholder: 'Crédito',
			prefixIcon: 'credit-card',
			options: { max: 30, min: 0, step: 15 },
			rules: Rules['number_credit']
		},
		{
			id: 'price_type',
			type: 'Dropdown',
			placeholder: 'Tipo de precio',
			options: ['PUBLICO','TALLER','CREDITO TALLER', 'MAYOREO'],
			rules: Rules['string']
		},	
	],
	[
		{
			id: 'div1',
			type: 'Divider',
			placeholder: 'Mas información'
		}
	],
	[
		{
			type: 'Tab_Component',
			fields: [
				[{
					id: 'contacts',
					type: 'Nested_Object',
					placeholder: 'Contacto',
					
					schema: [
						[
							{
								id: 'name',
								type: 'String',
								placeholder: 'Nombre',
								rules: Rules['string'],
								
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
				}],
				[{
					id: 'cars',
					type: 'Nested_Object',
					relationship: 'car',
					placeholder: 'Carro',
					schema: [
						[
							{
								id: 'plates',
								type: 'String',
								placeholder: 'Placas',
								rules: Rules['string']
							},
							{
								id: 'economic_number',
								type: 'String',
								placeholder: 'Numero Economico',
								rules: Rules['string']
							},
							{
								id: 'brand',
								type: 'String',
								placeholder: 'Marca',
								rules: Rules['string']
							},
							{
								id: 'model',
								type: 'String',
								placeholder: 'Modelo',
								rules: Rules['string']
							}
						],
						[
							{
								id: 'year',
								type: 'String',
								placeholder: 'Año',
								rules: Rules['number']
							},
							{
								id: 'color',
								type: 'String',
								placeholder: 'Color',
								rules: Rules['string']
							},
							{
								id: 'vin',
								type: 'String',
								placeholder: 'VIN',
								rules: Rules['string']
							}
						]
					]
				}]
			]
		}
	]
	// [
	// 	{
	// 		id: 'contacts',
	// 		type: 'Nested_Object',
	// 		placeholder: 'Contacto',
	// 		schema: [
	// 			[
	// 				{
	// 					id: 'name',
	// 					type: 'String',
	// 					placeholder: 'Nombre',
	// 					rules: [{ required: true }, { min: 3 }, { max: 32 }],
	// 				},
	// 				{
	// 					id: 'job_role',
	// 					type: 'String',
	// 					placeholder: 'Puesto',
	// 					rules: [{ required: true }, { min: 3 }, { max: 32 }],
	// 				}
	// 			],
	// 			[
	// 				{
	// 					id: 'phone_number',
	// 					type: 'String',
	// 					placeholder: 'Numero Celular',
	// 					rules: [{ required: true }, { min: 3 }, { max: 32 }],
	// 				},
	// 				{
	// 					id: 'email',
	// 					type: 'String',
	// 					placeholder: 'Email',
	// 					rules: [{ required: true }, { min: 3 }, { max: 32 }],
	// 				}
	// 			]
	// 		]
	// 	}
	// ],
	// [
	// 	{
	// 		id: 'cars',
	// 		type: 'Nested_Object',
	// 		placeholder: 'Carro',
	// 		schema: [
	// 			[
	// 				{
	// 					id: 'plates',
	// 					type: 'String',
	// 					placeholder: 'Placas',
	// 					rules: [{ required: true }, { min: 3 }, { max: 32 }],
	// 				},
	// 				{
	// 					id: 'economic_number',
	// 					type: 'String',
	// 					placeholder: 'Numero Economico',
	// 					rules: [{ required: true }, { min: 3 }, { max: 32 }],
	// 				},
	// 				{
	// 					id: 'brand',
	// 					type: 'String',
	// 					placeholder: 'Marca',
	// 					rules: [{ required: true }, { min: 3 }, { max: 32 }],
	// 				},
	// 				{
	// 					id: 'model',
	// 					type: 'String',
	// 					placeholder: 'Modelo',
	// 					rules: [{ required: true }, { min: 3 }, { max: 32 }],
	// 				}
	// 			],
	// 			[
	// 				{
	// 					id: 'year',
	// 					type: 'String',
	// 					placeholder: 'Año',
	// 					rules: [{ required: true }, { min: 3 }, { max: 32 }],
	// 				},
	// 				{
	// 					id: 'color',
	// 					type: 'String',
	// 					placeholder: 'Color',
	// 					rules: [{ required: true }, { min: 3 }, { max: 32 }],
	// 				},
	// 				{
	// 					id: 'vin',
	// 					type: 'String',
	// 					placeholder: 'VIN',
	// 					rules: [{ required: true }, { min: 3 }, { max: 32 }],
	// 				}
	// 			]
	// 		]
	// 	}
	// ]
];