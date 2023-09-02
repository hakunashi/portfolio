export function headerScrollTo(headerbtn, sectionToScroll) {
    headerbtn.addEventListener('click', () => {
        sectionToScroll.scrollIntoView({
            behavior: "smooth",
            block: "center",
            inline: "center"
        });
    })
}