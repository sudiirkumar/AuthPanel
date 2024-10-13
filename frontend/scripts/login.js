document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault();
    // Get input values
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Dummy validation logic (replace with actual backend validation)
    if (username=="sudiirkumar" && password=="1234") {
        // Redirect to dashboard on successful login (replace with actual logic)
        window.location.href = 'dashboard.html';
    } else {
        alert('Please enter valid credentials.');
    }
});