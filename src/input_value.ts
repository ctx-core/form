import { _dom2 } from '@ctx-core/dom'
export function input_value(selector:string|object, parent?:ParentNode|null):string|undefined {
	const dom = _dom2(selector, parent)
	return (dom as HTMLInputElement)?.value
}
