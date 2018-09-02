export default [
	[
		{
			id: 'denomination',
			type: 'String',
			placeholder: 'Nombre Sucursal',
			prefixIcon: 'home',
			rules: [{ required: true }, { min: 3 }, { max: 32 }]
		},
		{
			id: 'phone',
			type: 'String',
			placeholder: 'Telefono',
			prefixIcon: 'phone',
			rules: [{ required: true }, { min: 3 }, { max: 32 }]
		}
	], 
	[
		{
			id: 'address',
			type: 'String',
			placeholder: 'Dirección',
			prefixIcon: 'environment',
			rules: [{ required: true }, { min: 3 }, { max: 32 }],
		}
	]
];