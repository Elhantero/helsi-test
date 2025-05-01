import * as fieldNames from './fields/fieldNames.js';
import * as documentIds from './documents/documentIds.js';
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
  {
    watchKey: fieldNames.documentType,
    expectedValue: documentIds.idCartPassport,
    targetKeys: [fieldNames.UNZR],
    clearIfNotMatched: true,
  },
];
