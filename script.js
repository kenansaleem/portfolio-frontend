// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Navbar scroll effect
window.addEventListener('scroll', function () {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Form submission handling
const contactForm = document.getElementById('contactForm');
const formMessage = document.getElementById('formMessage');

if (contactForm) {
    contactForm.addEventListener('submit', function (e) {
        e.preventDefault();

        // Get form values
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;

        // Create message object
        const messageData = {
            name: name,
            email: email,
            message: message,
            timestamp: firebase.database.ServerValue.TIMESTAMP
        };

        // Show loading state
        formMessage.innerHTML = '<div class="alert alert-info">Sending message...</div>';

        // Save to Firebase
        const messagesRef = firebase.database().ref('messages');
        messagesRef.push(messageData)
            .then(() => {
                // Show success message
                formMessage.innerHTML = '<div class="alert alert-success">Message sent successfully!</div>';
                // Reset form
                contactForm.reset();
                // Clear success message after 3 seconds
                setTimeout(() => {
                    formMessage.innerHTML = '';
                }, 3000);
            })
            .catch((error) => {
                // Show error message
                formMessage.innerHTML = `<div class="alert alert-danger">Error: ${error.message}</div>`;
            });
    });
}

// Add animation to sections when they come into view
const sections = document.querySelectorAll('section');
const options = {
    threshold: 0.1
};

const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate');
            observer.unobserve(entry.target);
        }
    });
}, options);

sections.forEach(section => {
    observer.observe(section);
});

// Add hover effect to project cards
document.querySelectorAll('.projects .card').forEach(card => {
    card.addEventListener('mouseenter', function () {
        this.style.transform = 'translateY(-10px)';
    });

    card.addEventListener('mouseleave', function () {
        this.style.transform = 'translateY(0)';
    });
});

// Add current year to footer copyright
document.addEventListener('DOMContentLoaded', function () {
    const year = new Date().getFullYear();
    const copyrightElement = document.querySelector('footer p');
    if (copyrightElement) {
        copyrightElement.textContent = `© ${year} Frontend Developer Portfolio. All rights reserved.`;
    }
}); 