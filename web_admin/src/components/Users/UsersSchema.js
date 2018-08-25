export default [
	[
		{
			id: 'name',
			type: 'String',
			placeholder: 'Nombre Completo',
			rules: [{ required: true }, { min: 3 }, { max: 32 }]
		},
		{
			id: 'nickname',
			type: 'String',
			placeholder: 'Nombre corto',
			rules: [{ required: true }, { min: 3 }, { max: 32 }]
		}
	],
	[
		{
			id: 'username',
			type: 'String',
			placeholder: 'Nombre de acceso (unico)',
			rules: [{ required: true }, { min: 3 }, { max: 32 }],
		},
		{
			id: 'password',
			type: 'String',
			placeholder: 'Contraseña',
			rules: [{ required: true }, { min: 3 }, { max: 32 }],
		}
	],
	[
		{
			id: 'address',
			type: 'String',
			placeholder: 'Domicilio',
			rules: [{ required: true }, { min: 3 }, { max: 32 }],
		
		},
		{
			id: 'address_city',
			type: 'String',
			placeholder: 'Colonia',
			rules: [{ required: true }, { min: 3 }, { max: 32 }],
		}
	],
	[
		{
			id: 'address_country',
			type: 'String',
			placeholder: 'Población',
			rules: [{ required: true }, { min: 3 }, { max: 32 }],
		},
		{
			id: 'address_state',
			type: 'String',
			placeholder: 'Estado',
			rules: [{ required: true }, { min: 3 }, { max: 32 }],
		},
		{
			id: 'address_cp',
			type: 'String',
			placeholder: 'Código postal',
			rules: [{ required: true }, { min: 3 }, { max: 32 }],
		
		}
	],
	[
		{
			id: 'phone_number',
			type: 'String',
			placeholder: 'Telefono',
			rules: [{ required: true }, { min: 3 }, { max: 32 }],
		},
		{
			id: 'phone_mobil',
			type: 'String',
			placeholder: 'Telefono Celular',
			rules: [{ required: true }, { min: 3 }, { max: 32 }],
		},
		{
			id: 'email',
			type: 'String',
			placeholder: 'Email',
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
			rules: [{ required: true }, { min: 3 }, { max: 32 }],
		},
		{
			id: 'date_birth',
			type: 'Date',
			placeholder: 'Fecha de nacimiento',
			rules: [{ required: true }],
		},
		{
			id: 'branch',
			type: 'String',
			placeholder: 'Depto',
			rules: [{ required: true }, { min: 3 }, { max: 32 }],
		}
	],
	[
		{
			id: 'rfc',
			type: 'String',
			placeholder: 'R.F.C',
			rules: [{ required: true }, { min: 3 }, { max: 32 }],
		},
		{
			id: 'job_role',
			type: 'String',
			placeholder: 'Puesto',
			rules: [{ required: true }, { min: 3 }, { max: 32 }],
		},
		{
			id: 'curp',
			type: 'String',
			placeholder: 'CURP',
			rules: [{ required: true }, { min: 3 }, { max: 32 }],
		}
	],
	[
		{
			id: 'date_start_working',
			type: 'Date',
			placeholder: 'Fecha Ingreso',
			rules: [{ required: true }],
		},
		{
			id: 'diary_salary',
			type: 'String',
			placeholder: 'Salario Diario',
			rules: [{ required: true }, { min: 3 }, { max: 32 }],
		},
		{
			id: 'imss',
			type: 'String',
			placeholder: 'IMSS',
			rules: [{ required: true }, { min: 3 }, { max: 32 }],
		}
	],
	[
		{
			id: 'comission',
			type: 'String',
			placeholder: 'Comisión',
			rules: [{ required: true }, { min: 3 }, { max: 32 }],
		},
		{
			id: 'status',
			type: 'Dropdown',
			placeholder: 'Estatus',
			options: ['ACTIVO','VACACIONES','INACTIVO'],
			rules: [{ required: true }, { min: 3 }, { max: 32 }],
		}
	]
];