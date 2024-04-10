const burgerbtn = document.getElementById("burger-btn");
const menuNav = document.getElementById("menu-nav");
const containerImg = document.getElementById("container-items");
const buttonSlides = document.querySelectorAll('#slide-btn button');

let indexImagesActive = 0;

const closeMenu = (event) => {
    console.log(event.target.closest('#burger-btn'))
    if (!event.target.closest('#burger-btn')) {
        menuNav.classList.remove('active');
    }
}
document.addEventListener('click', closeMenu)

burgerbtn.addEventListener('click',() => {
    menuNav.classList.toggle('active');
});

buttonSlides[0].addEventListener('click', () => {
    indexImagesActive--;
    if(indexImagesActive < 0) {
        indexImagesActive = containerImg.children.length - 1;
    }
    console.log(indexImagesActive);
    containerImg.style.transform = `translateX(-${indexImagesActive * 100}%)`;
})

buttonSlides[1].addEventListener('click', () => {
    indexImagesActive++;
    if(indexImagesActive >= containerImg.children.length) {
        indexImagesActive = 0;
    }
    console.log(indexImagesActive);
    containerImg.style.transform = `translateX(-${indexImagesActive * 100}%)`;
})

for(i=0,message="yo man"; i< 10; i++) {
    console.log("toto",message)
}