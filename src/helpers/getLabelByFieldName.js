import fieldNameToLabelMap from '../constants/fields/fieldNameToLabelMap.js';

export default (name) => fieldNameToLabelMap?.[name] || '';
