export default [
	[
		{
			id: 'folio',
			type: 'String',
			placeholder: 'Folio',
			prefixIcon: 'home',
			rules: [{ required: true }, { min: 3 }, { max: 32 }]
		},
		{
			id: 'date',
			type: 'Date',
			placeholder: 'Fecha',
			prefixIcon: 'calendar',
			rules: [{ required: true }, { min: 3 }, { max: 32 }]
		},
		{
			id: 'status',
			type: 'Dropdown',
			placeholder: 'Estatus',
			options: ['EMITIDO','CANCELADO'],
			rules: [{ required: true }, { min: 3 }, { max: 32 }],
		},
	],
	[
		{
			id: 'moves',
			type: 'Nested_Object',
			placeholder: 'Movimientos',
			schema: [
				[
					{
						id: 'beneficiary',
						type: 'String',
						placeholder: 'Beneficiario / Procedencia',
						rules: [{ required: true }, { min: 3 }, { max: 32 }],
					},
					{
						id: 'denomination',
						type: 'String',
						placeholder: 'Concepto',
						rules: [{ required: true }, { min: 3 }, { max: 32 }],
					},
					{
						id: 'type',
						type: 'Dropdown',
						placeholder: 'Tipo',
						options: ['DEDUCIBLE','NO DEDUCIBLE'],
						rules: [{ required: true }, { min: 3 }, { max: 32 }],
					}
				],
				[
					{
						id: 'withdrawals',
						type: 'Number',
						placeholder: 'Retiros',
						prefixIcon: 'credit-card',
						options: { max: 120, min: 0, step: 15 },
						rules: [{ required: true }],
					},
					{
						id: 'deposits',
						type: 'Number',
						placeholder: 'Depositos',
						prefixIcon: 'credit-card',
						options: { max: 120, min: 0, step: 15 },
						rules: [{ required: true }],
					},
					{
						id: 'balance',
						type: 'Number',
						placeholder: 'Saldo',
						prefixIcon: 'credit-card',
						options: { max: 120, min: 0, step: 15 },
						rules: [{ required: true }],
					}
				]
			]
		}
	]
];