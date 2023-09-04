import { headerScrollTo } from './header.js';
import { calculAge } from './about.js';

const scrollProfil = document.querySelector('.profil-container');
const scrollAbout = document.querySelector('.about-container');
const scrollProject = document.querySelector('.projects-grid')

const headerName = document.querySelector('.js-header-profil');
const headerAbout = document.querySelector('.js-header-about');
const headerProject = document.querySelector('.js-header-project');
const headerContact = document.querySelector('.js-header-contact');

headerScrollTo(headerName, scrollProfil);
headerScrollTo(headerAbout, scrollAbout);
headerScrollTo(headerProject, scrollProject);
headerScrollTo(headerContact, scrollProfil);

document.querySelector('.about-age').innerHTML = calculAge();

function elementVisible(element) {
    const elemente = element.getBoundingClientRect();
    return (
        elemente.top <= window.innerHeight &&
        elemente.bottom >= 0
    )
}

function afficherElement() {
    const elements = document.querySelectorAll('.projects-grid').forEach((element) => {
        if(elementVisible(element)) {
            element.style.opacity = "1";
            element.style.left = '50%'
        }
    });
}

window.addEventListener('scroll', () => { afficherElement() });

afficherElement()