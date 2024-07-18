document.getElementById('Appointment-Form').addEventListener('submit',function(event) {
    event.preventDefault();

    console.log("Form Validity: ", this.checkValidity());

    if (!this.checkValidity()){
        alert('Please fill out all required fields.');
        return;
    }

    let parms = {
        firstName: document.getElementById('firstName').value,
        lastName: document.getElementById('lastName').value,
        email: document.getElementById('email').value,
        phone: document.getElementById('phone').value,
        date: document.getElementById('date').value,
        time: document.getElementById('time').value,
        location: document.getElementById('location').value,
        appointment: document.getElementById('appointment').value,
        info: document.getElementById('info').value,
    };

    emailjs.send("service_63s5ohe","template_h0u54lc",parms)
    .then(function(response){
        console.log('SUCCESS!', response.status, response.text);
        alert("Form Sent!!");
    }, function(error) {
        console.log('FAILED!', response.status, response.text);
        alert("Failed to send form: " + error);
        });
});