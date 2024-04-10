const burgerbtn = document.getElementById("burger-btn");
const menuNav = document.getElementById("menu-nav");

const closeMenu = (event) => {
    console.log(event.target.closest('#burger-btn'))
    if (!event.target.closest('#burger-btn')) {
        menuNav.classList.remove('active')
    }
}

document.addEventListener('click', closeMenu)

burgerbtn.addEventListener('click',() => {
    menuNav.classList.toggle('active');
})