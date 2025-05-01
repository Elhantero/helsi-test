import fieldNameToPlaceholderMap from '../constants/fields/fieldNameToPlaceholderMap.js';

export default (name) => fieldNameToPlaceholderMap?.[name] || '';
