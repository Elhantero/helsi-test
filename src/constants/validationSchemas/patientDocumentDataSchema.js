import * as yup from 'yup';
import * as fieldNames from '../fields/fieldNames.js';
import * as regExp from '../regExp.js';
import * as documentsIds from '../documents/documentIds.js';
import defaultStringInputSchema from './defaultStringInputSchema.js';
import infoTexts from '../infoTexts.js';

export default yup.object({
  [fieldNames.documentType]: yup
    .number()
    .required(infoTexts.chooseDocType),
  [fieldNames.docSeriaNumber]: yup
    .string()
    .required(infoTexts.docNumberRequired)
    .when(fieldNames.documentType, {
      is: documentsIds.defaultPassport,
      then: (schema) =>
        schema.matches(
          regExp.defaultUAPassportFormat,
          infoTexts.defaultUAPassportFormat
        ),
      otherwise: (schema) =>
        schema.when(fieldNames.documentType, {
          is: documentsIds.idCartPassport, // ID-карта
          then: (schema) =>
            schema.matches(
              regExp.idCardPassportNumberFormat,
              infoTexts.idCardPassportFormat
            ),
          otherwise: (schema) =>
            schema.matches(
              regExp.defaultUAOtherDocsFormat,
              infoTexts.defaultUAOtherDocsFormat
            ),
        }),
    }),
  [fieldNames.UNZR]: yup
    .string()
    .when(fieldNames.documentType, {
      is: documentsIds.idCartPassport, // ID-карта
      then: (schema) =>
        schema
          .required(infoTexts.unzrRequired)
          .matches(
            regExp.unzrFormat,
            infoTexts.unzrFormat
          ),
      otherwise: (schema) => schema.notRequired(),
    }),
  [fieldNames.docDateStart]: yup
    .string()
    .required(infoTexts.requiredField)
    .matches(regExp.dateFormat, infoTexts.wrongDateFormat),
  [fieldNames.docDateEnd]: yup
    .string()
    .matches(regExp.dateFormat, infoTexts.wrongDateFormat),
  [fieldNames.docCreator]: defaultStringInputSchema.required(infoTexts.requiredField),
});
