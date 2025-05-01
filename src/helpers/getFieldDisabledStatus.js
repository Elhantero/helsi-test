import fieldDisableRules from '../constants/fieldDisableRules.js';

export default (fieldName, formValues) => fieldDisableRules[fieldName]?.(formValues) || false;
