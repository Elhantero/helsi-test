import * as fieldNames from '../constants/fields/fieldNames.js';
import * as documentIds from '../constants/documents/documentIds.js';
import infoTexts from './infoTexts.js';
export default {
  [fieldNames.IPN]: (formValues) => !formValues?.[fieldNames.witnIPN] ? infoTexts.noIPN : '',
  [fieldNames.middleName]: (formValues) => !formValues?.[fieldNames.withMiddleName] ? infoTexts.noMiddleName : '',
  [fieldNames.UNZR]: (formValues) => {
    return formValues?.[fieldNames.documentType] !== documentIds.idCartPassport
      ? infoTexts.idCardNotSelected
      : '';
  },
};
