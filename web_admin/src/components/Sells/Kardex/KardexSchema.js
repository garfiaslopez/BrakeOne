import Rules from '../../../helpers/rules';

//try render here the array;
export default [
	[
		{
			id: 'description',
			type: 'String',
			placeholder: 'Descripción',
			prefixIcon: 'tool',
			rules: Rules['string']
		}
	],
	[
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
	]
];