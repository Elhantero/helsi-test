import * as yup from "yup";
import infoTexts from "../infoTexts.js";
import * as regExp from '../regExp.js'

export default yup
	.string()
	.min(2, infoTexts.min2Symbols)
	.matches(
		regExp.onlyCyrrilicWithSpaceDash,
		infoTexts.onlyCyrrilicSpaceDash,
	)
	.test(
		'min-characters-excluding-space',
		infoTexts.min2SymbolsWithoutSpaceDash,
		(value) => {
			const count = (value.replace(/[\s-]/g, '')).length;
			return count >= 2;
		}
	);
