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
		},
		{
			id: 'color',
			type: 'Color_Picker',
			placeholder: 'Color',
			prefixIcon: 'bg-colors'
		}
	], 
	[
		{
			id: 'address',
			type: 'String',
			placeholder: 'Dirección',
			prefixIcon: 'environment',
			rules: [{ required: true }, { min: 3 }, { max: 32 }],
		},
		{
			id: 'location.coordinates[0]',
			type: 'Number',
			placeholder: 'Longitud',
			prefixIcon: 'environment',
			options: { max: 180, min: -180, step: 0.1 },
			rules: [{ required: true }],
		},
		{
			id: 'location.coordinates[1]',
			type: 'Number',
			placeholder: 'Latitud',
			prefixIcon: 'environment',
			options: { max: 90, min: -90, step: 0.1 },
			rules: [{ required: true }],
		}
	]
];