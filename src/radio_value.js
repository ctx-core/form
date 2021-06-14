export function radio_value(name) {
    const element_a = document.getElementsByName(name);
    for (let i = 0, l = element_a.length; i < l; i++) {
        const element = element_a[i];
        if (element.checked) {
            return element.value;
        }
    }
}
//# sourceMappingURL=src/radio_value.js.map