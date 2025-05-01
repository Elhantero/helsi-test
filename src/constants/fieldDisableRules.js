import * as fieldNames from '../constants/fields/fieldNames.js';
import * as documentIds from '../constants/documents/documentIds.js';
export default {
  [fieldNames.IPN]: (formValues) => !formValues?.[fieldNames.witnIPN],
  [fieldNames.middleName]: (formValues) => !formValues?.[fieldNames.withMiddleName],
  [fieldNames.UNZR]: (formValues) => formValues?.[fieldNames.documentType] !== documentIds.idCartPassport,
};
