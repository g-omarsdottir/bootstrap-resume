function sendMail(contactForm) {
    emailjs.send('default_service', 'contact-form-test', {
        "from_name": contactForm.name.value,
        "from_email": contactForm.emailaddress.value,
        "project_request": contactForm.projectsummary.value
    })
    .then(
        function(response) {
            console.log("SUCCESS", response);
        },
        function(error) {
            console.log("FAILED", error);
        }
    );
    return false;  // To block from loading a new page
}

/* copy from emailJS website, commented out on from contact.html
var templateParams = {
    "from_name": contactForm.name.value,
    "from_email": contactForm.emailaddress.value,
    "project_request": contactForm.projectsummary.value,
    notes: 'Check this out!',
};
emailjs.send('default_service', 'contact-form-test', templateParams).then(
    (response) => {
        console.log('SUCCESS!', response.status, response.text);
    },
    (error) => {
        console.log('FAILED...', error);
    },
);
*/