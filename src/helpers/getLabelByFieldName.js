import fieldNameToLabelMap from "../constants/fieldNameToLabelMap.js";

export default (name) => fieldNameToLabelMap?.[name] || '';
