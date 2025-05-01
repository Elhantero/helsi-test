import fieldNameToMaskMap from '../constants/fieldNameToMaskMap.js';

export default (name) => fieldNameToMaskMap?.[name] || String;
