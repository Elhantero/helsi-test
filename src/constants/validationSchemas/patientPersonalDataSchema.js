import * as yup from 'yup';
import * as fieldNames from '../fields/fieldNames.js';
import * as regExp from '../regExp.js';
import * as contactMethodIds from '../contacts/contactMethodIds.js';
import defaultStringInputSchema from './defaultStringInputSchema.js';
import infoTexts from '../infoTexts.js';

export default yup.object({
  [fieldNames.secondName]: defaultStringInputSchema.required(infoTexts.requiredField),
  [fieldNames.firstName]: defaultStringInputSchema.required(infoTexts.requiredField),
  [fieldNames.countryOfBirth]: defaultStringInputSchema.required(infoTexts.requiredField),
  [fieldNames.placeOfBirth]: defaultStringInputSchema.required(infoTexts.requiredField),
  [fieldNames.withMiddleName]: yup.boolean(),
  [fieldNames.witnIPN]: yup.boolean(),
  [fieldNames.middleName]: yup
    .string()
    .when(fieldNames.withMiddleName, {
      is: true,
      then: (schema) =>
        schema
          .min(2, infoTexts.min2Symbols)
          .matches(regExp.defaultStringInputFormat, infoTexts.onlyCyrrilicSpaceDash)
          .required(infoTexts.requiredField),
      otherwise: (schema) => schema.notRequired(),
    }),
  [fieldNames.IPN]: yup
    .string()
    .when(fieldNames.witnIPN, {
      is: true,
      then: (schema) =>
        schema
          .matches(regExp.ipnFormat, infoTexts.ipnMustHave10Digits)
          .required(infoTexts.requiredField),
      otherwise: (schema) => schema.notRequired(),
    }),
  [fieldNames.dateOfBirth]: yup
    .string()
    .required(infoTexts.requiredField)
    .matches(regExp.dateFormat, infoTexts.wrongDateFormat),
  [fieldNames.gender]: yup.number().required(infoTexts.requiredField),
  [fieldNames.preferedContactMethod]: yup.number(),
  [fieldNames.phone]: yup
    .string()
    .matches(regExp.phoneFormat, infoTexts.wrongPhoneFormat)
    .when(fieldNames.preferedContactMethod, {
      is: contactMethodIds.phoneId,
      then: (schema) =>
        schema
          .required(infoTexts.requiredField),
      otherwise: (schema) => schema.notRequired(),
    }),
  [fieldNames.email]: yup
    .string()
    .matches(regExp.emailFormat, infoTexts.wrongMailFormat)
    .when(fieldNames.preferedContactMethod, {
      is: contactMethodIds.emailId,
      then: (schema) =>
        schema
          .required(infoTexts.requiredField),
      otherwise: (schema) => schema.notRequired(),
    }),
  [fieldNames.secretQuestion]: yup
    .string()
    .required(infoTexts.requiredField)
    .min(6, infoTexts.min6ymbols)
    .matches(regExp.secretQuestionFormat, infoTexts.onlySymbolsDigits),
});
