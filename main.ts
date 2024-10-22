interface ContactFormData {
    name: string;
    email: string;
    contactNumber: string;
    subject: string;
    message: string;
}

function handleSubmit() {
    const form = document.getElementById('contactForm') as HTMLFormElement;
    const responseMessage = document.getElementById('responseMessage') as HTMLParagraphElement;
    const formData: ContactFormData = {
        name: (document.getElementById('name') as HTMLInputElement).value,
        email: (document.getElementById('email') as HTMLInputElement).value,
        contactNumber: (document.getElementById('contactNumber') as HTMLInputElement).value,
        subject: (document.getElementById('subject') as HTMLInputElement).value,
        message: (document.getElementById('message') as HTMLTextAreaElement).value,
    };

    // console.log(formData);
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
        responseMessage.textContent = "Email not valid";
        return;
    }

    fetch('https://6717512bb910c6a6e0278177.mockapi.io/students', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
    })
        .then((response) => {
            if (response.ok) {
                responseMessage.textContent = "Form Submitted Successfully";
                form.reset();
            } else {
                responseMessage.textContent = "Submission Failed";
            }
        })
        .catch((error) => {
            responseMessage.textContent = `Submission Failed`;
        });
}


(window as any).handleSubmit = handleSubmit;
