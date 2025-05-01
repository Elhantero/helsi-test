import fieldNameToMaskMap from '../constants/fields/fieldNameToMaskMap.js';

export default (name) => fieldNameToMaskMap?.[name] || String;
