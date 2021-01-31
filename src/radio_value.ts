export function radio_value(name:string) {
	const element_a1:NodeList = document.getElementsByName(name)
	for (let i = 0, l = element_a1.length; i < l; i++) {
		const element = element_a1[i] as HTMLInputElement
		if (element.checked) {
			return element.value
		}
	}
}
