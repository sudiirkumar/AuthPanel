// signup.js

document.getElementById('signup-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting

    // Get input values
    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirm-password').value;
    const securityAnswer = document.getElementById('security-answer').value;

    // Dummy validation logic (replace with actual backend validation)
    if (username && email && password && confirmPassword) {
        if (password === confirmPassword) {
            // Redirect to login page on successful signup (replace with actual logic)
            alert(`Signup successful! You can now log in. ${username} ${email} ${password} ${securityAnswer}`);
            window.location.href = 'login.html';
        } else {
            alert('Passwords do not match. Please try again.');
        }
    } else {
        alert('Please fill in all fields correctly.');
    }
});