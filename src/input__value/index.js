import { _dom2 } from '@ctx-core/dom'
/**
 * @param selector{string|object}
 * @param parent{ParentNode|null}
 * @returns {string|undefined}
 */
export function input__value(selector, parent) {
	const dom = _dom2(selector, parent)
	return dom?.value
}
export {
	input__value as input_value,
}