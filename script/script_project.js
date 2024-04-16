import { infos } from "./_data.js";
import  *  as general from "./_general_functions.js";

general.navToggle();

const projectGrid = document.querySelector('#projects-grid');

for (let i = 0;i < infos.length; i++ ) {
    let li = general.createHtmlElement("li","");
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

    li.appendChild(img);
    li.appendChild(divDescArticle);

    projectGrid.appendChild(li);
}