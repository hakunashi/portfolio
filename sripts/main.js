import {headerScrollTo} from './header.js'

const scrollProfil = document.querySelector('.profil-container');
const headerName = document.querySelector('.header-name');
const headerAbout = document.querySelector('.js-header-about');
const headerProject = document.querySelector('.js-header-project');
const headerContact = document.querySelector('.js-header-contact');

headerScrollTo(headerName, scrollProfil);
headerScrollTo(headerAbout, scrollProfil);
headerScrollTo(headerProject, scrollProfil);
headerScrollTo(headerContact, scrollProfil);