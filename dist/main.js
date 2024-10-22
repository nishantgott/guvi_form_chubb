function handleSubmit() {
    var form = document.getElementById('contactForm');
    var responseMessage = document.getElementById('responseMessage');
    var formData = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        contactNumber: document.getElementById('contactNumber').value,
        subject: document.getElementById('subject').value,
        message: document.getElementById('message').value,
    };
    // console.log(formData);
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
        responseMessage.textContent = "Invalid email address!";
        return;
    }
    fetch('https://6717512bb910c6a6e0278177.mockapi.io/students', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
    })
        .then(function (response) {
        if (response.ok) {
            responseMessage.textContent = "Form Submitted Successfully!";
            form.reset();
        }
        else {
            responseMessage.textContent = "Submission Failed.";
        }
    })
        .catch(function (error) {
        responseMessage.textContent = "Submission Failed";
    });
}
function validateEmail(email) {
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}
window.handleSubmit = handleSubmit;
