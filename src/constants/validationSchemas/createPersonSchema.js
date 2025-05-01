import * as yup from 'yup';
import patientPersonalDataSchema from './patientPersonalDataSchema.js';
import patientDocumentDataSchema from './patientDocumentDataSchema.js';

export default yup.object().shape({
  ...patientPersonalDataSchema.fields,
  ...patientDocumentDataSchema.fields
});
