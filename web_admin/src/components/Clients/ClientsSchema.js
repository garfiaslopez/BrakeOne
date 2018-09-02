export default [
	[
		{
			id: 'name',
			type: 'String',
			placeholder: 'Cliente',
			prefixIcon: 'user',
			rules: [{ required: true }, { min: 3 }, { max: 32 }]
		},
		{
			id: 'rfc',
			type: 'String',
			placeholder: 'RFC',
			prefixIcon: 'idcard',
			rules: [{ required: true }, { min: 3 }, { max: 32 }]
		}
	], 
	[
		{
			id: 'address',
			type: 'String',
			placeholder: 'Domicilio',
			prefixIcon: 'environment',
			rules: [{ required: true }, { min: 3 }, { max: 32 }]
		},
		{
			id: 'address_city',
			type: 'String',
			placeholder: 'Colonia',
			prefixIcon: 'environment',
			rules: [{ required: true }, { min: 3 }, { max: 32 }],
		}
	],
	[
		{
			id: 'address_country',
			type: 'String',
			placeholder: 'Zona / Municipio',
			prefixIcon: 'environment',
			rules: [{ required: true }, { min: 3 }, { max: 32 }]
		},
		{
			id: 'address_state',
			type: 'String',
			placeholder: 'Ciudad / Estado',
			prefixIcon: 'environment',
			rules: [{ required: true }, { min: 3 }, { max: 32 }],
		},
		{
			id: 'address_cp',
			type: 'String',
			placeholder: 'Código Postal',
			prefixIcon: 'environment',
			rules: [{ required: true }, { min: 3 }, { max: 32 }],
		}
	],
	[
		{
			id: 'phone_number',
			type: 'String',
			placeholder: 'Teléfono Particular',
			prefixIcon: 'phone',
			rules: [{ required: true }, { min: 3 }, { max: 32 }]
		},
		{
			id: 'phone_office',
			type: 'String',
			placeholder: 'Teléfono Oficina',
			prefixIcon: 'phone',
			rules: [{ required: true }, { min: 3 }, { max: 32 }]
		},
		{
			id: 'phone_mobil',
			type: 'String',
			placeholder: 'Teléfono Móvil',
			prefixIcon: 'phone',
			rules: [{ required: true }, { min: 3 }, { max: 32 }]
		},
	],
	[
		{
			id: 'email',
			type: 'String',
			placeholder: 'Email',
			prefixIcon: 'mail',
			rules: [{ required: true }, { min: 3 }, { max: 32 }],
		},
		{
			id: 'credit_days',
			type: 'Number',
			placeholder: 'Crédito',
			prefixIcon: 'credit-card',
			options: { max: 120, min: 0, step: 15 },
			rules: [{ required: true }],
		},
		{
			id: 'price_type',
			type: 'Dropdown',
			placeholder: 'Estatus',
			options: ['PUBLICO','TALLER','MAYOREO'],
			rules: [{ required: true }, { min: 3 }, { max: 32 }],
		},	
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
								rules: [{ required: true }, { min: 3 }, { max: 32 }],
							},
							{
								id: 'job_role',
								type: 'String',
								placeholder: 'Puesto',
								rules: [{ required: true }, { min: 3 }, { max: 32 }],
							}
						],
						[
							{
								id: 'phone_number',
								type: 'String',
								placeholder: 'Numero Celular',
								rules: [{ required: true }, { min: 3 }, { max: 32 }],
							},
							{
								id: 'email',
								type: 'String',
								placeholder: 'Email',
								rules: [{ required: true }, { min: 3 }, { max: 32 }],
							}
						]
					]
				}],
				[{
					id: 'cars',
					type: 'Nested_Object',
					placeholder: 'Carro',
					schema: [
						[
							{
								id: 'plates',
								type: 'String',
								placeholder: 'Placas',
								rules: [{ required: true }, { min: 3 }, { max: 32 }],
							},
							{
								id: 'economic_number',
								type: 'String',
								placeholder: 'Numero Economico',
								rules: [{ required: true }, { min: 3 }, { max: 32 }],
							},
							{
								id: 'brand',
								type: 'String',
								placeholder: 'Marca',
								rules: [{ required: true }, { min: 3 }, { max: 32 }],
							},
							{
								id: 'model',
								type: 'String',
								placeholder: 'Modelo',
								rules: [{ required: true }, { min: 3 }, { max: 32 }],
							}
						],
						[
							{
								id: 'year',
								type: 'String',
								placeholder: 'Año',
								rules: [{ required: true }, { min: 3 }, { max: 32 }],
							},
							{
								id: 'color',
								type: 'String',
								placeholder: 'Color',
								rules: [{ required: true }, { min: 3 }, { max: 32 }],
							},
							{
								id: 'vin',
								type: 'String',
								placeholder: 'VIN',
								rules: [{ required: true }, { min: 3 }, { max: 32 }],
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