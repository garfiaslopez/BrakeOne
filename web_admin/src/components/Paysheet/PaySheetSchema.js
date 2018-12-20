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
		}
	], 
	[
		{
			id: 'address',
			type: 'String',
			placeholder: 'Dirección',
			prefixIcon: 'environment',
			rules: Rules['string']
		}
	]
];