import { infos } from "./_data.js";

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

function createHtmlElement(htmlElement,content) {
    let htmlEleme = document.createElement(htmlElement);
    htmlEleme.append(content);
    return htmlEleme
}

for (let i = 0;i < 3; i++ ) {
    let article = createHtmlElement("article","");
    let img = createHtmlElement("img",'');
    let pDesc = createHtmlElement("p", infos[i].desc);
    let pTech = createHtmlElement("p", "");
    let divDescArticle = createHtmlElement("div","");

    pTech.innerHTML = infos[i].techno[0];
    pTech.classList.add("item-tech");
    divDescArticle.classList.add('article-desc');
    pDesc.classList.add("item-desc");
    img.setAttribute("src", infos[i].thumbnail_path);

    divDescArticle.appendChild(pTech)
    divDescArticle.appendChild(pDesc)

    article.appendChild(img);
    article.appendChild(divDescArticle);

    containerImg.appendChild(article);

    console.log(infos[i]);
}