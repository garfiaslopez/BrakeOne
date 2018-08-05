import toPairs from 'lodash/toPairs';

// Reference rules
// https://github.com/yiminghe/async-validator/blob/master/src/messages.js

const rules = {
  required: 'Campo requerido',
  min: 'Ingrese los caracteres minimos para el campo',
  types: {
    email: 'Ingresa un email valido',
    array: 'Ingresa almenos un elemento',
  },
};

const getMessage = (currentRule) => {
  const rulePairs = toPairs(currentRule)[0];

  if (rulePairs[0] === 'type') {
    return Object.assign({}, currentRule, {
      message: rules.types[rulePairs[1]],
    });
  }

  return Object.assign({}, currentRule, {
    message: rules[rulePairs[0]],
  });
};

export default getMessage;
