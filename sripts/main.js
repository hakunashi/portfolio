import { headerScrollTo } from './header.js';
import { calculAge } from './about.js';
import { afficherElement } from './project.js';
import { dataProject } from './data/data-project.js';
import { SendEmail } from './contact.js';

const scrollProfil = document.querySelector('.profil-container');
const scrollAbout = document.querySelector('.about-container');
const scrollProject = document.querySelector('.js-section-second-title');
const scrollContact = document.querySelector('.js-contact-title');

const headerName = document.querySelector('.js-header-profil');
const headerAbout = document.querySelector('.js-header-about');
const headerProject = document.querySelector('.js-header-project');
const headerContact = document.querySelector('.js-header-contact');

headerScrollTo(headerName, scrollProfil);
headerScrollTo(headerAbout, scrollAbout);
headerScrollTo(headerProject, scrollProject);
headerScrollTo(headerContact, scrollContact);


document.querySelector('.about-age').innerText = calculAge()

function visibleProjectElement() {
    const allProject = document.querySelectorAll('.projects-grid')
    window.addEventListener('scroll', () => {afficherElement(allProject)} );
    afficherElement(allProject);
}

let allProjectGridHTML = document.querySelector('.all-project-grid');

dataProject.forEach((project) => {
    let elementTech = project.techno
    let allElementTech = ''

    elementTech.forEach((tech) => {
        let htmltech = `
        <div class="project-techno-img-container">
            <img class="project-techno-img" src="${tech}">
        </div>
        `

        allElementTech += htmltech
    })

    let element = `
    <div class="projects-grid">
        <a href="${project.link}" class="project-img-container">
            <img class="project-img" src="${project.img}">
        </a>

        <div class="project-description-container">
            <p class="project-title">${project.name}</p>
            <p class="project-description">${project.description}
            </p>

            <div class="project-techno-container">
                ${allElementTech}
            </div>
        </div>
    </div>
    `

    allProjectGridHTML.innerHTML += element
})

visibleProjectElement();

let formErreur = document.querySelector('.form-erreur');

let fomrName = document.querySelector('#form-name')
let formMail = document.querySelector('#form-mail')
let formObject = document.querySelector('#form-subject')
let formMessage = document.querySelector('#form-message')

document.querySelector('.js-submit-form').addEventListener('click', (e) => {
    e.preventDefault();

    const emailRegex = /\S+@\S+\.\S+/;
    if(emailRegex.test(formMail.value) === false) {
        formErreur.innerText = 'Veuillez entrer une adresse mail valide'
        return
    }

    let formInputs = {
        name: fomrName.value,
        mail: formMail.value,
        object: formObject.value,
        message: formMessage.value
    }

    for (let [key, value] of Object.entries(formInputs)) {
        if (!value) {
            formErreur.innerText = 'Veuillez remplir le formulaire correctement';
            return
        }

        formErreur.innerText = '';
    }

    SendEmail(formInputs);

    alert('Votre message a bien été envoyer! Merci.')

    fomrName.value = "";
    formMail.value = "";
    formObject.value = "";
    formMessage.value = "";
})