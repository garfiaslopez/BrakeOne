export default [
	[
		{
			id: 'name',
			type: 'String',
			placeholder: 'Nombre Completo',
			prefixIcon: 'user',
			rules: [{ required: true }, { min: 3 }, { max: 32 }]
		},
		{
			id: 'nickname',
			type: 'String',
			placeholder: 'Nombre corto',
			prefixIcon: 'user',
			rules: [{ required: true }, { min: 3 }, { max: 32 }]
		}
	],
	[
		{
			id: 'username',
			type: 'String',
			placeholder: 'Nombre de acceso (unico)',
			prefixIcon: 'user',
			rules: [{ required: true }, { min: 3 }, { max: 32 }],
		},
		{
			id: 'password',
			type: 'String',
			placeholder: 'Contraseña',
			prefixIcon: 'key',
			rules: [{ required: true }, { min: 3 }, { max: 32 }],
		}
	],
	[
		{
			id: 'address',
			type: 'String',
			placeholder: 'Domicilio',
			prefixIcon: 'environment',
			rules: [{ required: true }, { min: 3 }, { max: 32 }],
		
		},
		{
			id: 'address_city',
			type: 'String',
			placeholder: 'Colonia',
			prefixIcon: 'environment',
			rules: [{ required: true }, { min: 3 }, { max: 32 }],
		}
	],
	[
		{
			id: 'address_country',
			type: 'String',
			placeholder: 'Población',
			prefixIcon: 'environment',
			rules: [{ required: true }, { min: 3 }, { max: 32 }],
		},
		{
			id: 'address_state',
			type: 'String',
			placeholder: 'Estado',
			prefixIcon: 'environment',
			rules: [{ required: true }, { min: 3 }, { max: 32 }],
		},
		{
			id: 'address_cp',
			type: 'String',
			placeholder: 'Código postal',
			prefixIcon: 'environment',
			rules: [{ required: true }, { min: 3 }, { max: 32 }],
		
		}
	],
	[
		{
			id: 'phone_number',
			type: 'String',
			placeholder: 'Telefono',
			prefixIcon: 'phone',
			rules: [{ required: true }, { min: 3 }, { max: 32 }],
		},
		{
			id: 'phone_mobil',
			type: 'String',
			placeholder: 'Telefono Celular',
			prefixIcon: 'phone',
			rules: [{ required: true }, { min: 3 }, { max: 32 }],
		},
		{
			id: 'email',
			type: 'String',
			placeholder: 'Email',
			prefixIcon: 'email',
			rules: [{ required: true }, { min: 3 }, { max: 32 }],
		}
	],
	[
		{
			if: 'div1',
			type: 'Divider',
			placeholder: 'Mas información'
		}
	],
	[
		{
			id: 'clave',
			type: 'String',
			placeholder: 'Clave',
			prefixIcon: 'key',
			rules: [{ required: true }, { min: 3 }, { max: 32 }],
		},
		{
			id: 'date_birth',
			type: 'Date',
			placeholder: 'Fecha de nacimiento',
			prefixIcon: 'calendar',
			rules: [{ required: true }],
		},
		{
			id: 'branch',
			type: 'String',
			placeholder: 'Depto',
			prefixIcon: 'team',
			rules: [{ required: true }, { min: 3 }, { max: 32 }],
		}
	],
	[
		{
			id: 'rfc',
			type: 'String',
			placeholder: 'R.F.C',
			prefixIcon: 'idcard',
			rules: [{ required: true }, { min: 3 }, { max: 32 }],
		},
		{
			id: 'job_role',
			type: 'String',
			placeholder: 'Puesto',
			prefixIcon: 'solution',
			rules: [{ required: true }, { min: 3 }, { max: 32 }],
		},
		{
			id: 'curp',
			type: 'String',
			placeholder: 'CURP',
			prefixIcon: 'idcard',
			rules: [{ required: true }, { min: 3 }, { max: 32 }],
		}
	],
	[
		{
			id: 'date_start_working',
			type: 'Date',
			placeholder: 'Fecha Ingreso',
			prefixIcon: 'calendar',
			rules: [{ required: true }],
		},
		{
			id: 'diary_salary',
			type: 'String',
			placeholder: 'Salario Diario',
			prefixIcon: 'dollar',
			rules: [{ required: true }, { min: 3 }, { max: 32 }],
		},
		{
			id: 'imss',
			type: 'String',
			placeholder: 'IMSS',
			prefixIcon: 'idcard',
			rules: [{ required: true }, { min: 3 }, { max: 32 }],
		}
	],
	[
		{
			id: 'comission',
			type: 'String',
			placeholder: 'Comisión',
			prefixIcon: 'dollar',
			rules: [{ required: true }, { min: 3 }, { max: 32 }],
		},
		{
			id: 'status',
			type: 'Dropdown',
			placeholder: 'Estatus',
			options: ['ACTIVO','VACACIONES','INACTIVO'],
			rules: [{ required: true }, { min: 3 }, { max: 32 }],
		},
		{
			id: 'rol',
			type: 'Dropdown',
			placeholder: 'Nivel de usuario',
			options: ['MANAGER','MOSTRADOR'],
			rules: [{ required: true }, { min: 3 }, { max: 32 }],
		}
	]
];