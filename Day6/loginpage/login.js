document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const message = document.getElementById('message');

    // Simple validation (you can expand this)
    if (username === 'user' && password === 'pass') {
        message.textContent = 'Login successful!';
        message.style.color = '#28a745'; // Green for success
    } else {
        message.textContent = 'Invalid username or password!';
    }
});
