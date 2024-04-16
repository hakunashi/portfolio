import { infos } from "./_data.js";
import  *  as general from "./_general_functions.js";

general.navToggle();

const containerImg = document.getElementById("container-items");
const buttonSlides = document.querySelectorAll('#slide-btn button');

let indexImagesActive = 0;

buttonSlides[0].addEventListener('click', () => {
    indexImagesActive--;
    if(indexImagesActive < 0) {
        indexImagesActive = containerImg.children.length - 1;
    }
    containerImg.style.transform = `translateX(-${indexImagesActive * 100}%)`;
})

buttonSlides[1].addEventListener('click', () => {
    indexImagesActive++;
    if(indexImagesActive >= containerImg.children.length) {
        indexImagesActive = 0;
    }
    containerImg.style.transform = `translateX(-${indexImagesActive * 100}%)`;
})


for (let i = 0;i < 3; i++ ) {
    let article = general.createHtmlElement("article","");
    let img = general.createHtmlElement("img",'');
    let pDesc = general.createHtmlElement("p", infos[i].desc);
    let pTech = general.createHtmlElement("p", "");
    let divDescArticle = general.createHtmlElement("div","");

    pTech.innerHTML = infos[i].techno[0];
    pTech.classList.add("item-tech");
    divDescArticle.classList.add('article-desc');
    pDesc.classList.add("item-desc");
    img.setAttribute("src", infos[i].thumbnail_path);
    img.setAttribute("alt", "thumbnail project" + i);

    divDescArticle.appendChild(pTech)
    divDescArticle.appendChild(pDesc)

    article.appendChild(img);
    article.appendChild(divDescArticle);

    containerImg.appendChild(article);
}

