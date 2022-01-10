function sendMail(contactForm){
    emailjs.send("Brian Stritch","Gmail", {
        'from_name': contactForm.name.value, 
        'from_email' : contactForm.emailaddress.value,
        'project_request' : contactForm.projectsummary.value,
    })
    .then(
        function (response){
            console.log('SUCCESS', response)
            
        },
        function (error){
            console.log('ERROR', error);
        });
        document.getElementById('fullname').innerText() = '';
        document.getElementById('emailaddress').innerText('') = '';
        document.getElementById('projectsummary').innerText('') = '';
        return false;

}