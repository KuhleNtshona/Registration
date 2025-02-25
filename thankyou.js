// thankyou.js

// Get the student's name from localStorage
const studentName = localStorage.getItem('studentName');

// Display the thank-you message with the student's name
const thankYouMessage = document.getElementById('thankYouMessage');
thankYouMessage.textContent = `Thank you for registering, ${studentName}!`;

// Optionally, clear localStorage so that data doesn't persist after registration
localStorage.clear();
