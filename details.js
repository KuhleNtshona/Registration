// details.js

// Get the elements where we'll display the student details
const studentName = document.getElementById('studentName');
const studentDob = document.getElementById('studentDob');  // Date of Birth element
const studentEmail = document.getElementById('studentEmail');
const studentCourse = document.getElementById('studentCourse');  // Course element

// Get the student details from localStorage
studentName.textContent = localStorage.getItem('studentName');
studentDob.textContent = localStorage.getItem('studentDob');  // Get Date of Birth
studentEmail.textContent = localStorage.getItem('studentEmail');
studentCourse.textContent = localStorage.getItem('studentCourse');  // Get selected Course

// Handle the "Confirm Registration" button click
const confirmButton = document.getElementById('confirmButton');
confirmButton.addEventListener('click', function() {
    // Redirect to the thankyou.html page
    window.location.href = 'thankyou.html';
});

// Handle the "Back" button click
const backButton = document.getElementById('backButton');
backButton.addEventListener('click', function() {
    // Navigate back to the registration page (index.html)
    window.location.href = 'index.html';
});
