

document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const usernameField = document.getElementById('username');
    const passwordField = document.getElementById('password');
    const messageElement = document.getElementById('message');

    const username = usernameField.value;
    const password = passwordField.value;

   

    if (username === "" || password === "") {
        messageElement.textContent = "Please enter  username and password.";
        messageElement.style.color = "red";
        
    } else if (username === "user" && password === "pass") { 
        messageElement.textContent = "Login successful!";
        messageElement.style.color = "green";
        window.location.href = 'blank.html';

        }
    
    else {
        messageElement.textContent = "Invalid username or password.";
        messageElement.style.color = "red"; 

        usernameField.value = "";
        passwordField.value = "";

    }
    setTimeout(() => {
        messageElement.textContent = "";
    }, 2000);
});
