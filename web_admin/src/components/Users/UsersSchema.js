import Rules from '../../helpers/rules';

export default [
	[
		{
			id: 'name',
			type: 'String',
			placeholder: 'Nombre Completo',
			prefixIcon: 'user',
			rules: Rules['string']
		},
		{
			id: 'nickname',
			type: 'String',
			placeholder: 'Nombre corto',
			prefixIcon: 'user',
			rules: Rules['string']
		}
	],
	[
		{
			id: 'username',
			type: 'String',
			placeholder: 'Nombre de acceso (unico)',
			prefixIcon: 'user',
			rules: Rules['string']
		},
		{
			id: 'password',
			type: 'String',
			placeholder: 'Contraseña',
			prefixIcon: 'key',
			rules: Rules['string']
		}
	],
	[
		{
			id: 'address',
			type: 'String',
			placeholder: 'Domicilio',
			prefixIcon: 'environment',
			rules: Rules['string']
		
		},
		{
			id: 'address_cp',
			type: 'Postal_Code',
			placeholder: 'Código postal',
			prefixIcon: 'environment',
			rules: Rules['string']
		
		},
	],
	[
		{
			id: 'address_city',
			type: 'Dropdown_Postal_Code',
			placeholder: 'Colonia',
			prefixIcon: 'environment',
			rules: Rules['string']
		},
		{
			id: 'address_country',
			type: 'String',
			placeholder: 'Población',
			prefixIcon: 'environment',
			rules: Rules['string']
		},
		{
			id: 'address_state',
			type: 'String',
			placeholder: 'Estado',
			prefixIcon: 'environment',
			rules: Rules['string']
		}
	],
	[
		{
			id: 'phone_number',
			type: 'String',
			placeholder: 'Telefono',
			prefixIcon: 'phone',
			rules: Rules['phone']
		},
		{
			id: 'phone_mobil',
			type: 'String',
			placeholder: 'Telefono Celular',
			prefixIcon: 'phone',
			rules: Rules['string']
		},
		{
			id: 'email',
			type: 'String',
			placeholder: 'Email',
			prefixIcon: 'mail',
			rules: Rules['email']
		}
	],
	[
		{
			id: 'div1',
			type: 'Divider',
			placeholder: 'Mas información'
		}
	],
	[
		{
			id: 'date_birth',
			type: 'Date',
			placeholder: 'Fecha de nacimiento',
			prefixIcon: 'calendar',
			rules: Rules['date']
		},
		{
			id: 'branch',
			type: 'String',
			placeholder: 'Depto',
			prefixIcon: 'team',
			rules: Rules['string']
		}
	],
	[
		{
			id: 'rfc',
			type: 'String',
			placeholder: 'R.F.C',
			prefixIcon: 'idcard',
			rules: Rules['rfc']
		},
		{
			id: 'job_role',
			type: 'String',
			placeholder: 'Puesto',
			prefixIcon: 'solution',
			rules: Rules['string']
		},
		{
			id: 'curp',
			type: 'String',
			placeholder: 'CURP',
			prefixIcon: 'idcard',
			rules: Rules['string']
		}
	],
	[
		{
			id: 'date_start_working',
			type: 'Date',
			placeholder: 'Fecha Ingreso',
			prefixIcon: 'calendar',
			rules: Rules['date']
		},
		{
			id: 'diary_salary',
			type: 'String',
			placeholder: 'Salario Diario',
			prefixIcon: 'dollar',
			rules: Rules['string']
		},
		{
			id: 'imss',
			type: 'String',
			placeholder: 'IMSS',
			prefixIcon: 'idcard',
			rules: Rules['string']
		}
	],
	[
		{
			id: 'comission',
			type: 'String',
			placeholder: 'Comisión',
			prefixIcon: 'dollar',
			rules: Rules['string']
		},
		{
			id: 'status',
			type: 'Dropdown',
			placeholder: 'Estatus',
			options: ['ACTIVO','VACACIONES','INACTIVO'],
			rules: Rules['string']
		},
		{
			id: 'rol',
			type: 'Dropdown',
			placeholder: 'Nivel de usuario',
			options: ['MANAGER','MOSTRADOR'],
			rules: Rules['string']
		}
	]
];