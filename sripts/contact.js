export function SendEmail(formInputs) {

    Email.send({
        SecureToken: '1a199232-fc77-4fab-a341-14f99800686c',
        To : 'rasolofoisaac22@gmail.com',
        From : "rasolofoisaac22@gmail.com",
        Subject : formInputs.object,
        Body : `
        Message de: ${formInputs.mail}
        Nom : ${formInputs.name}

        ${formInputs.message}
        `
    }).then(
      message => console.log(message)
    );

}