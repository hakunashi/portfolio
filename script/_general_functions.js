const burgerbtn = document.getElementById("burger-btn");
const menuNav = document.getElementById("menu-nav");

export function navToggle() {
    const closeMenu = (event) => {
        if (!event.target.closest('#burger-btn')) {
            menuNav.classList.remove('active');
        }
    }
    
    document.addEventListener('click', closeMenu)
    
    burgerbtn.addEventListener('click',() => {
        menuNav.classList.toggle('active');
    });
}

export function createHtmlElement(htmlElement,content) {
    let htmlEleme = document.createElement(htmlElement);
    htmlEleme.append(content);
    return htmlEleme
}