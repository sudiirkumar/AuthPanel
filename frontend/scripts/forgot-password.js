// forgot-password.js

document.getElementById('verifyButton').addEventListener('click', function() {
    const emailOrUsername = document.getElementById('emailOrUsername').value;
    const securityQuestion = document.getElementById('securityQuestion').value;
    const securityAnswer = document.getElementById('securityAnswer').value;

    // Dummy verification logic (replace with actual logic)
    if (emailOrUsername=='sudiirkumar' && securityQuestion=='pet' && securityAnswer=='cat') {
        document.getElementById('verification-section').style.display = 'none'; // Hide verification fields
        document.getElementById('new-password-section').style.display = 'block'; // Show new password fields
        document.getElementById('userNameLabel').innerText = `Welcome, ${emailOrUsername}!`; // Display user name
    } else {
        alert('Incorrect credentials!');
    }
});

document.getElementById('forgot-password-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting

    const newPassword = document.getElementById('newPassword').value;
    const confirmPassword = document.getElementById('confirmPassword').value;

    // Validate the new password
    if (newPassword && confirmPassword) {
        if (newPassword === confirmPassword) {
            alert('Password has been changed successfully!'); // Confirm success (replace with actual logic)
            window.location.href = 'login.html'; // Redirect to login page
        } else {
            alert('New passwords do not match. Please try again.');
        }
    } else {
        alert('Please fill in all fields correctly.');
    }
});