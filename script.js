document.getElementById('rsvp-form').addEventListener('submit', function(event) {
    // Allow form submission to Formspree

    // Get form values
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const attending = document.getElementById('attending').value;

    // Confirmation message
    const confirmationMessage = document.getElementById('confirmation-message');

    if (name && email && attending) {
        confirmationMessage.textContent = `Thank you, ${name}! We have received your RSVP. Status: ${attending}.`;
        confirmationMessage.style.color = '#28a745';
    } else {
        confirmationMessage.textContent = 'Please fill out all fields.';
        confirmationMessage.style.color = '#dc3545';
    }

    // The form will now submit to Formspree automatically
});
