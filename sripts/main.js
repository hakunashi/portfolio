import { headerScrollTo } from './header.js';
import { calculAge } from './about.js';
import { afficherElement } from './project.js';

const scrollProfil = document.querySelector('.profil-container');
const scrollAbout = document.querySelector('.about-container');
const scrollProject = document.querySelector('.projects-grid');

const headerName = document.querySelector('.js-header-profil');
const headerAbout = document.querySelector('.js-header-about');
const headerProject = document.querySelector('.js-header-project');
const headerContact = document.querySelector('.js-header-contact');

headerScrollTo(headerName, scrollProfil);
headerScrollTo(headerAbout, scrollAbout);
headerScrollTo(headerProject, scrollProject);
headerScrollTo(headerContact, scrollProfil);

document.querySelector('.about-age').innerHTML = calculAge();

const allProject = document.querySelectorAll('.projects-grid')

window.addEventListener('scroll', () => { afficherElement(allProject) });
afficherElement(allProject);