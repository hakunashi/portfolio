function elementVisible(element) {
    const elemente = element.getBoundingClientRect();
    return (
        elemente.top <= window.innerHeight &&
        elemente.bottom >= 0
    )
}

export function afficherElement(elements) {
    elements.forEach((element) => {
        if (elementVisible(element)) {
            element.style.opacity = '1';
            element.style.left = '50%'
        }
    });
}