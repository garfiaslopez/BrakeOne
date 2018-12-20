import Rules from '../../helpers/rules';

export default [
	[
		{
			id: 'name',
			type: 'String',
			placeholder: 'Nombre',
			prefixIcon: 'inbox',
			rules: Rules['string']
		},
		{
			id: 'denomination',
			type: 'String',
			placeholder: 'Descripcion',
			prefixIcon: 'profile',
			rules: Rules['string']
		},
		{
			id: 'price',
			type: 'Number',
			placeholder: 'Precio',
			prefixIcon: 'credit-card',
			options: { min: 0, step: 1 },
			rules: Rules['number']
		}
	]
];