import * as fieldNames from './fieldNames.js';
import * as masks from './masks.js';
export default {
  [fieldNames.dateOfBirth]: masks.defaultDate,
  [fieldNames.phone]:  masks.defaultPhone,
};
