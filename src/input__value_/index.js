import { _dom2 } from '@ctx-core/dom'
/**
 * @param selector{string|object}
 * @param parent{ParentNode|null}
 * @returns {string|undefined}
 */
export function input__value_(selector, parent) {
	const dom = _dom2(selector, parent)
	return dom?.value
}
export {
	input__value_ as input_value,
}
