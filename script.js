//hero section
const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.getElementById("nav-links");

// Toggle menu open / close
menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});

// Close menu when clicking a nav link
document.querySelectorAll("#nav-links a").forEach(link => {
    link.addEventListener("click", () => {
        navLinks.classList.remove("active");
    });
});

// Close menu when scrolling
window.addEventListener("scroll", () => {
    navLinks.classList.remove("active");
});

// Close menu when clicking outside
document.addEventListener("click", (e) => {
    if (!navLinks.contains(e.target) && !menuToggle.contains(e.target)) {
        navLinks.classList.remove("active");
    }
});



//TTILE CHANGING
const titles = [
    "IT Junior Technician",
    "Tech Enthusiast",
    "An Introvert",
    "Project Management Explorer",
    "IT graduate",
    "Data Analysis Enthusiast",
    "AI Learner",
    "Volunteer Group leader",


];

let index = 0;

function changeTitle() {
    const titleElement = document.getElementById('dynamic-title');
    titleElement.textContent = titles[index];
    index = (index + 1) % titles.length; // Loops back to the first title after the last one
}

// Change the title every 3 seconds (3000ms)
setInterval(changeTitle, 3000);

// Initial title change when the page loads
changeTitle();

// Light/Dark mode function
const toggle = document.getElementById('toggle');
const body = document.body;

toggle.addEventListener('click', () => {

    // Toggle the light mode class on the body
    body.classList.toggle('light-mode');

    // Change icon based on mode
    if (body.classList.contains('light-mode')) {
        toggle.textContent = "☀️";  // Light mode icon
    } else {
        toggle.textContent = "🌙";  // Dark mode icon
    }
});

//CONTACT FORM
document.addEventListener('DOMContentLoaded', function() {
    // 1. Get a reference to the form element
    const form = document.getElementById('contactForm');
    
    // Get references to the input fields
    const nameInput = document.getElementById('nameInput');
    const emailInput = document.getElementById('emailInput');
    const messageTextarea = document.getElementById('messageTextarea');

    // 2. Add an event listener for the form submission
    form.addEventListener('submit', function(event) {
        // Prevent the default form submission (page reload)
        event.preventDefault(); 

        // 3. Define the validation logic
        if (validateForm()) {
            console.log('Form is valid! Submitting data...');
            alert('Form submitted successfully!');
            
            // Optionally clear the form after successful submission
            form.reset();
        } else {
            // If validation fails
            console.log('Form is invalid. Please check the fields.');
            alert('Please fill out all required fields correctly.');
        }
    });

    /**
     * Function to perform the actual validation.
     * @returns {boolean} True if the form is valid, false otherwise.
     */
    function validateForm() {
        let isValid = true;

        // --- Name Validation (Check if not empty) ---
        if (nameInput.value.trim() === '') {
            isValid = false;
            // You might add error styling/messages here
            nameInput.classList.add('input-error');
        } else {
            nameInput.classList.remove('input-error');
        }

        // --- Email Validation (Check if not empty and has basic email format) ---
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (emailInput.value.trim() === '' || !emailPattern.test(emailInput.value.trim())) {
            isValid = false;
            emailInput.classList.add('input-error');
        } else {
            emailInput.classList.remove('input-error');
        }

        // --- Message Validation (Check if not empty) ---
        if (messageTextarea.value.trim() === '') {
            isValid = false;
            messageTextarea.classList.add('input-error');
        } else {
            messageTextarea.classList.remove('input-error');
        }

        return isValid;
    }
});