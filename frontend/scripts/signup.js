document.addEventListener('DOMContentLoaded', function() {
    const signupForm = document.getElementById('signup-form');
    const emailInput = document.getElementById('email');
    const emailError = document.getElementById('email-error');
    const passwordInput = document.getElementById('password');
    const confirmPasswordInput = document.getElementById('confirm-password');
    const passwordMatchError = document.getElementById('password-match-error');

    // Password criteria checkboxes
    const digitLabel = document.getElementById('digit');
    const lowercaseLabel = document.getElementById('lowercase');
    const uppercaseLabel = document.getElementById('uppercase');
    const specialLabel = document.getElementById('special');
    const lengthLabel = document.getElementById('length');
    const passwordCriteria = document.getElementById('password-criteria');

    passwordCriteria.style.display = 'none';
    // Email validation function
    emailInput.addEventListener('input', function() {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(emailInput.value)) {
            emailError.style.display = 'block';
        } else {
            emailError.style.display = 'none';
        }
    });

    // Password validation function
    passwordInput.addEventListener('input', function() {
        const value = passwordInput.value;
        passwordCriteria.style.display = 'block';
        lengthLabel.style.color = value.length>=8?"green":"grey";
        digitLabel.style.color = /\d/.test(value)?"green":"grey";
        lowercaseLabel.style.color = /[a-z]/.test(value)?"green":"grey";
        uppercaseLabel.style.color = /[A-Z]/.test(value)?"green":"grey";
        specialLabel.style.color = /[!@#$%^&*(),.?":{}|<>]/.test(value)?"green":"grey";
    });

    // Confirm password matching
    confirmPasswordInput.addEventListener('input', function() {
        passwordCriteria.style.display = 'none';
        if (passwordInput.value !== confirmPasswordInput.value) {
            passwordMatchError.style.display = 'block';
        } else {
            passwordMatchError.style.display = 'none';
        }
    });

    // Handle form submission
    signupForm.addEventListener('submit', function(event) {
        event.preventDefault();

        const email = emailInput.value;
        const password = passwordInput.value;
        const confirmPassword = confirmPasswordInput.value;
        var validPassword = (/[0-9a-zA-Z!@#$%^&*(),.?":{}|<>]/.test(password)) && (password.length>=8);
        // Additional validations before submission
        if (emailError.style.display === 'block') {
            alert('Please provide a valid email.');
            return;
        }

        if (passwordMatchError.style.display === 'block') {
            alert('Passwords do not match.');
            return;
        }
        if(!validPassword){
            alert("Password criteria does not match");
            return;
        }
        // Proceed with form submission or backend call here
        alert('Sign-up successful!');
        // Redirect or submit form as needed
        window.location.href = 'login.html';
    });
});