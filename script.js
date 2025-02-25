// script.js

// Get the form
const form = document.getElementById('registrationForm');

// Handle form submission
form.addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent page refresh on form submission

    // Get form values
    const name = document.getElementById('name').value;
    const dob = document.getElementById('dob').value;  // Get Date of Birth
    const email = document.getElementById('email').value;
    const course = document.getElementById('course').value;  // Get selected course

    // Store student details in localStorage to access on the next page
    localStorage.setItem('studentName', name);
    localStorage.setItem('studentDob', dob);  // Store Date of Birth
    localStorage.setItem('studentEmail', email);
    localStorage.setItem('studentCourse', course);  // Store selected course

    // Redirect to the details page
    window.location.href = 'details.html';
});
