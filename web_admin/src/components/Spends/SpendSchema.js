import Rules from '../../helpers/rules';

export default [
	[
		{
			id: 'description',
			type: 'String',
			placeholder: 'Descripción',
			prefixIcon: 'file-text',
			rules: Rules['string']
		},
		{
			id: 'total',
			type: 'Number',
			placeholder: 'Total',
			prefixIcon: 'credit-card',
			options: { min: 0, step: 1 },
			rules: Rules['number']
		},
	], 
	[
		{
			id: 'type',
			type: 'Dropdown',
			placeholder: 'Tipo de gasto',
			options: ['EFECTIVO','DEPOSITO','TRANSFERENCIA'],
			rules: Rules['string']
		},
		{
			id: 'bank',
			type: 'String',
			placeholder: 'Banco',
			prefixIcon: 'bank',
			rules: Rules['string_no_req']
		},
		{
			id: 'reference',
			type: 'String',
			placeholder: 'Referencia',
			prefixIcon: 'bank',
			rules: Rules['string_no_req']
		}
	],
	[
		{
			id: 'notes',
			type: 'TextArea',
			placeholder: 'Información Adicional.',
			prefixIcon: 'idcard',
			rules: Rules['text_no_req']
		}
	]
];