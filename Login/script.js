document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('form');
    const emailInput = document.getElementById('email');
    const passwordInput = document.getElementById('password');
  
    // Simulate correct login credentials
    const correctEmail = "elya@gmail.com";
    const correctPassword = "elya123";
  
    form.addEventListener('submit', function(event) {
      event.preventDefault();
  
      const email = emailInput.value;
      const password = passwordInput.value;
  
      if (email === correctEmail && password === correctPassword) {
        alert("Login successful!");
        // Redirect to another page or perform desired action on success
        window.location.href = "C:/Users/Lenovo/OneDrive/SEMESTER 5/pemrograman web/dashboard/dashboard.html";  // Replace with your homepage
      } else {
        alert("Invalid email or password. Please try again.");
      }
    });
  });
  