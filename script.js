document.getElementById('rsvp-form').addEventListener('submit', function(event) {
    event.preventDefault();

    // Get form values
    const name = document.getElementById('name').value;
    const attending = document.getElementById('attending').value;

    // Confirmation message
    const confirmationMessage = document.getElementById('confirmation-message');

    if (name && attending) {
        confirmationMessage.textContent = `Thank you, ${name}! We have received your RSVP. Status: ${attending}.`;
        confirmationMessage.style.color = '#28a745';
    } else {
        confirmationMessage.textContent = 'Please fill out both fields.';
        confirmationMessage.style.color = '#dc3545';
    }

    // Optionally, clear the form
    document.getElementById('rsvp-form').reset();
});
