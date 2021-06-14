export function radio_value(name:string) {
	const element_a:NodeList = document.getElementsByName(name)
	for (let i = 0, l = element_a.length; i < l; i++) {
		const element = element_a[i] as HTMLInputElement
		if (element.checked) {
			return element.value
		}
	}
}
