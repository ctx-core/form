/**
 * @param name{string}
 * @returns {string|undefined}
 */
export function radio__value_(name) {
	const element_a = document.getElementsByName(name)
	for (let i = 0, l = element_a.length; i < l; i++) {
		const element = element_a[i]
		if (element.checked) {
			return element.value
		}
	}
	return
}
export {
	radio__value_ as radio_value,
}
