import fieldAlternativeLabelRules from '../constants/fieldAlternativeLabelRules.js';

export default (fieldName, formValues) => fieldAlternativeLabelRules[fieldName]?.(formValues) || '';
