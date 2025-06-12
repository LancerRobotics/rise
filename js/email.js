function sendMail() {
    event.preventDefault(); 

    let parms = {
        name: document.getElementById('name').value,
        phone_number: document.getElementById('phone_number').value,
        email: document.getElementById('email').value,
        message: document.getElementById('message').value,
        timestampp: new Date().toLocaleString('en-US', { 
            timeZone: 'America/New_York',
            dateStyle: 'full',
            timeStyle: 'long'
        })
    };

    const serviceID = "service_4lxjiug";
    const templateID = "template_5bj8quq";

    emailjs.send(serviceID, templateID, parms)
        .then(function(response) {
            alert("Your message has been sent successfully!");
            console.log("Email sent successfully:", response.status, response.text);

            document.getElementById("name").value = "";
            document.getElementById("phone_number").value = "";
            document.getElementById("email").value = "";
            document.getElementById("message").value = "";
        })
        .catch(function(error) {
            // Mainly used for debugging
            alert("There was an error sending your message. Please try again.");
            console.error("Failed to send email:", error);
        });
}