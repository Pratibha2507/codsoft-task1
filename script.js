
document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Display an alert or handle the form submission
    alert(`Thank you, ${name}! Your message has been received.`);
    
    // Clear the form fields
    this.reset();
});
