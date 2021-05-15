import { _dom2 } from '@ctx-core/dom'
export function input_value(selector:string|object, parent?:Node&ParentNode|null) {
	const dom = _dom2(selector, parent)
	return dom && (dom as HTMLInputElement).value
}
