document.getElementById('report-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Preventing default submission

    console.log("Form Validity: ", this.checkValidity());

    if (!this.checkValidity()) {
        alert('Please fill out all required fields.');
        return;
    }

    let parms = {
        firstName: document.getElementById("firstName").value,
        lastName: document.getElementById("lastName").value,
        email: document.getElementById("email").value,
        phone: document.getElementById("phone").value,
        subject: document.getElementById("subject").value,
        typeReport: document.getElementById("typeReport").value,
        message: document.getElementById("message").value,
    };

    emailjs.send("service_4hv68mh", "template_ngavpjg", parms)
        .then(function(response) {
            console.log('SUCCESS!', response.status, response.text);
            alert("Form Sent!!");
        }, function(error) {
            console.log('FAILED!', response.status, response.text);
            alert("Failed to send form: " + error);
        });
});