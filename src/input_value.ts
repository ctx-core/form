import { _dom2 } from '@ctx-core/dom'
export function input_value(selector, parent?) {
	const dom = _dom2(selector, parent)
	return dom && dom.value
}
