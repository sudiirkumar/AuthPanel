document.addEventListener("DOMContentLoaded", function() {
    const loginForm = document.getElementById('login-form');
    const usernameInput = document.getElementById('username');
    const passwordInput = document.getElementById('password');
    const rememberMeCheckbox = document.getElementById('remember-me');
    const savedLoginPrompt = document.getElementById('saved-login-prompt');
    const useSavedAccountButton = document.getElementById('use-saved-account');
    const useOtherAccountButton = document.getElementById('use-other-account');

    // Check if login details are stored in local storage and prompt the user
    function checkSavedLogin() {
        const storedUsername = localStorage.getItem('authPanelUsername');
        const storedPassword = localStorage.getItem('authPanelPassword');

        if (storedUsername && storedPassword) {
            savedLoginPrompt.style.display = 'block';
            loginForm.style.display = 'none';
        }
    }

    // Function to handle login
    function login() {
        const username = usernameInput.value;
        const password = passwordInput.value;

        // Dummy authentication logic (replace with actual backend call)
        if (username && password) {
            alert(`Welcome back, ${username}!`);
            window.location.href = 'dashboard.html';
        } else {
            alert('Invalid username or password. Please try again.');
        }
    }

    // Event listener for form submission
    loginForm.addEventListener('submit', function(event) {
        event.preventDefault();

        const username = usernameInput.value;
        const password = passwordInput.value;

        // Store login details in local storage if "Remember Me" is checked
        if (rememberMeCheckbox.checked) {
            localStorage.setItem('authPanelUsername', username);
            localStorage.setItem('authPanelPassword', password);
        } else {
            // Clear stored login details if "Remember Me" is not checked
            localStorage.removeItem('authPanelUsername');
            localStorage.removeItem('authPanelPassword');
        }

        // Proceed with login logic
        login();
    });

    // Handle using saved account
    useSavedAccountButton.addEventListener('click', function() {
        const storedUsername = localStorage.getItem('authPanelUsername');
        const storedPassword = localStorage.getItem('authPanelPassword');

        if (storedUsername && storedPassword) {
            usernameInput.value = storedUsername;
            passwordInput.value = storedPassword;
            login();
        } else {
            alert('No saved login details found.');
            
        }
    });

    // Handle using another account
    useOtherAccountButton.addEventListener('click', function() {
        localStorage.removeItem('authPanelUsername');
        localStorage.removeItem('authPanelPassword');
        savedLoginPrompt.style.display = 'none';
        loginForm.style.display = 'block';
    });

    // Check if there are stored login details on page load
    checkSavedLogin();
});