import * as fieldNames from './fieldNames.js';
export const dependentFields = [
  {
    watchKey: fieldNames.withMiddleName,
    expectedValue: true,
    targetKeys: [fieldNames.middleName],
    clearIfNotMatched: true,
  },
  {
    watchKey: fieldNames.witnIPN,
    expectedValue: true,
    targetKeys: [fieldNames.IPN],
    clearIfNotMatched: true,
  },
];
