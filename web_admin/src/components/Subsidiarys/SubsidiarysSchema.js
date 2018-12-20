import Rules from '../../helpers/rules';

export default [
	[
		{
			id: 'denomination',
			type: 'String',
			placeholder: 'Nombre Sucursal',
			prefixIcon: 'home',
			rules: Rules['string']
		},
		{
			id: 'phone',
			type: 'String',
			placeholder: 'Telefono',
			prefixIcon: 'phone',
			rules: Rules['phone']
		},
		{
			id: 'color',
			type: 'Color_Picker',
			placeholder: 'Color',
			prefixIcon: 'bg-colors',
			rules: Rules['string']
		}
	], 
	[
		{
			id: 'address',
			type: 'String',
			placeholder: 'Dirección',
			prefixIcon: 'environment',
			rules: Rules['string'],
		},
		{
			id: 'location.coordinates[0]',
			type: 'Number',
			placeholder: 'Longitud',
			prefixIcon: 'environment',
			options: { max: 180, min: -180, step: 0.1 },
			rules: Rules['number'],
		},
		{
			id: 'location.coordinates[1]',
			type: 'Number',
			placeholder: 'Latitud',
			prefixIcon: 'environment',
			options: { max: 90, min: -90, step: 0.1 },
			rules: Rules['number']
		}
	]
];