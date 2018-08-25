export const gatewayFormSchema = {
  name: {
    type: 'String',
    placeholder: 'Nombre del gateway',
    rules: [{ required: true }, { min: 3 }, { max: 32 }],
  },
  id: {
    type: 'String',
    placeholder: 'Id de configuración del gateway',
    rules: [{ required: true }],
  },
  timezone: {
    type: 'Timezone',
    placeholder: 'Seleccion la zona horaria donde está el gateway',
    rules: [{ required: true }],
  },
  sensors: {
    type: 'Tags',
    placeholder: 'Agrega los ids de lo sensores y pulsa enter',
    rules: [{ required: true }, { type: 'array' }],
  },
  description: {
    type: 'LongString',
    placeholder: 'Descripción',
    rules: [{ min: 3 }, { max: 100 }],
  },
}