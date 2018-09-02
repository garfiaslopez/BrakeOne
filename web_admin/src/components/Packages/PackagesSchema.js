export default [
	[
		{
			id: 'name',
			type: 'String',
			placeholder: 'Nombre',
			prefixIcon: 'inbox',
			rules: [{ required: true }, { min: 3 }, { max: 32 }]
		},
		{
			id: 'denomination',
			type: 'String',
			placeholder: 'Descripcion',
			prefixIcon: 'profile',
			rules: [{ required: true }, { min: 3 }, { max: 32 }]
		},
		{
			id: 'price',
			type: 'Number',
			placeholder: 'Precio',
			prefixIcon: 'credit-card',
			options: { max: 120, min: 0, step: 1 },
			rules: [{ required: true }],
		}
	]
];