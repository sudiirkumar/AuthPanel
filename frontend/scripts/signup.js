document.addEventListener("DOMContentLoaded", function() {
    const signupForm = document.getElementById('signup-form');
    const emailInput = document.getElementById('email');
    const passwordInput = document.getElementById('password');
    const confirmPasswordInput = document.getElementById('confirm-password');

    // Function to validate email format
    function validateEmail(email) {
        const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        return emailPattern.test(email);
    }

    // Real-time validation for email input
    emailInput.addEventListener('input', function() {
        const email = emailInput.value;
        const isValidEmail = validateEmail(email);

        if (isValidEmail) {
            emailInput.style.borderColor = "green";
            emailInput.setCustomValidity("");
        } else {
            emailInput.style.borderColor = "red";
            emailInput.setCustomValidity("Please enter a valid email address.");
        }
    });

    // Event listener for form submission
    signupForm.addEventListener('submit', function(event) {
        event.preventDefault();

        const email = emailInput.value;
        const password = passwordInput.value;
        const confirmPassword = confirmPasswordInput.value;

        // Check if passwords match
        if (password !== confirmPassword) {
            alert('Passwords do not match. Please try again.');
            return;
        }

        // If validation passes, proceed with form submission
        // Replace with your backend call here
        alert('Sign-up successful!');
        signupForm.reset(); // Clear the form fields
    });
});