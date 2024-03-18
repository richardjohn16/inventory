document.getElementById("registrationForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form submission
    
    // Get input values
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    
    // Check password conditions
    if (password.length < 8) {
        alert("Password must be at least 8 characters long.");
        return;
    }
    
    if (/^\d+$/.test(password)) {
        alert("Password cannot consist only of integers.");
        return;
    }
    
    if (!/[a-z]/.test(password) || !/[A-Z]/.test(password)) {
        alert("Password must contain both uppercase and lowercase characters.");
        return;
    }
    
    // If all conditions met, proceed with registration
    alert("Registration successful!\nUsername: " + username + "\nPassword: " + password);
    window.location.href = "inventory.html"
    // You can perform further actions here, like sending the data to a server
    
    // Clear form fields
    document.getElementById("username").value = "";
    document.getElementById("password").value = "";
});