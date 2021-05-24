export function radio_value(name) {
    const element_a1 = document.getElementsByName(name);
    for (let i = 0, l = element_a1.length; i < l; i++) {
        const element = element_a1[i];
        if (element.checked) {
            return element.value;
        }
    }
}
