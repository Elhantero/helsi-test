import fieldNameToPlaceholderMap from '../constants/fieldNameToPlaceholderMap.js';

export default (name) => fieldNameToPlaceholderMap?.[name] || '';
