// =============================================
// AXIOM Portfolio - Enhanced Interactions
// =============================================

document.addEventListener('DOMContentLoaded', () => {
    
    // =============================================
    // Custom Cursor
    // =============================================
    const cursorDot = document.querySelector('.cursor-dot');
    const cursorOutline = document.querySelector('.cursor-outline');
    
    let mouseX = 0, mouseY = 0;
    let outlineX = 0, outlineY = 0;
    
    document.addEventListener('mousemove', (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;
        
        // Instant dot movement
        cursorDot.style.left = `${mouseX}px`;
        cursorDot.style.top = `${mouseY}px`;
    });
    
    // Smooth outline movement
    const updateOutline = () => {
        outlineX += (mouseX - outlineX) * 0.15;
        outlineY += (mouseY - outlineY) * 0.15;
        
        cursorOutline.style.left = `${outlineX}px`;
        cursorOutline.style.top = `${outlineY}px`;
        
        requestAnimationFrame(updateOutline);
    };
    updateOutline();
    
    // Add hover effect to clickable elements
    const interactiveElements = document.querySelectorAll('a, button, input, textarea, .skill-card, .project-card');
    interactiveElements.forEach(el => {
        el.addEventListener('mouseenter', () => {
            document.body.classList.add('hovering');
        });
        el.addEventListener('mouseleave', () => {
            document.body.classList.remove('hovering');
        });
    });
    
    // =============================================
    // Smooth Scroll Navigation
    // =============================================
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                const navHeight = document.querySelector('.nav-fixed').offsetHeight;
                const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - navHeight;
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
            
            // Close mobile menu if open
            mobileMenu.classList.remove('active');
        });
    });
    
    // =============================================
    // Navbar Scroll Effect
    // =============================================
    const navFixed = document.querySelector('.nav-fixed');
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 100) {
            navFixed.classList.add('scrolled');
        } else {
            navFixed.classList.remove('scrolled');
        }
    });
    
    // =============================================
    // Mobile Menu
    // =============================================
    const navHamburger = document.getElementById('navHamburger');
    const mobileMenu = document.getElementById('mobileMenu');
    
    navHamburger.addEventListener('click', () => {
        mobileMenu.classList.toggle('active');
        
        // Animate hamburger
        const spans = navHamburger.querySelectorAll('span');
        if (mobileMenu.classList.contains('active')) {
            spans[0].style.transform = 'rotate(45deg) translate(5px, 5px)';
            spans[1].style.opacity = '0';
            spans[2].style.transform = 'rotate(-45deg) translate(5px, -5px)';
        } else {
            spans[0].style.transform = 'none';
            spans[1].style.opacity = '1';
            spans[2].style.transform = 'none';
        }
    });
    
    // =============================================
    // Theme Toggle
    // =============================================
    const themeToggle = document.getElementById('themeToggle');
    const body = document.body;
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)');
    
    // Check saved theme or use system preference
    const savedTheme = localStorage.getItem('axiom-theme');
    const currentTheme = savedTheme || (prefersDark.matches ? 'dark' : 'light');
    
    if (currentTheme === 'light') {
        body.setAttribute('data-theme', 'light');
        themeToggle.innerHTML = '<span class="theme-icon"><i class="fas fa-sun"></i></span>';
    } else {
        body.removeAttribute('data-theme');
        themeToggle.innerHTML = '<span class="theme-icon"><i class="fas fa-moon"></i></span>';
    }
    
    themeToggle.addEventListener('click', () => {
        if (body.hasAttribute('data-theme')) {
            body.removeAttribute('data-theme');
            localStorage.setItem('axiom-theme', 'dark');
            themeToggle.innerHTML = '<span class="theme-icon"><i class="fas fa-moon"></i></span>';
        } else {
            body.setAttribute('data-theme', 'light');
            localStorage.setItem('axiom-theme', 'light');
            themeToggle.innerHTML = '<span class="theme-icon"><i class="fas fa-sun"></i></span>';
        }
    });
    
    // =============================================
    // Scroll Animations with Intersection Observer
    // =============================================
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);
    
    // Observe elements for animation
    const animatedElements = document.querySelectorAll(
        '.about-text, .about-visual, .skill-card, .project-card'
    );
    
    animatedElements.forEach((el, index) => {
        // Add staggered delay
        el.style.transitionDelay = `${index * 0.1}s`;
        observer.observe(el);
    });
    
    // =============================================
    // Contact Form with Firebase
    // =============================================
    const contactForm = document.getElementById('contactForm');
    const formMessage = document.getElementById('formMessage');
    
    if (contactForm) {
        contactForm.addEventListener('submit', async (e) => {
            e.preventDefault();
            
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const message = document.getElementById('message').value;
            
            // Show loading state
            formMessage.innerHTML = '<span class="loading">Sending message...</span>';
            formMessage.className = 'form-message';
            
            try {
                const messageData = {
                    name: name,
                    email: email,
                    message: message,
                    timestamp: firebase.database.ServerValue.TIMESTAMP
                };
                
                const messagesRef = firebase.database().ref('messages');
                await messagesRef.push(messageData);
                
                formMessage.innerHTML = '<span class="success">Message sent successfully!</span>';
                formMessage.className = 'form-message success';
                contactForm.reset();
                
                setTimeout(() => {
                    formMessage.textContent = '';
                    formMessage.className = 'form-message';
                }, 5000);
                
            } catch (error) {
                formMessage.innerHTML = `<span class="error">Error: ${error.message}</span>`;
                formMessage.className = 'form-message error';
            }
        });
    }
    
    // =============================================
    // Dynamic Year in Footer
    // =============================================
    const yearElement = document.getElementById('year');
    if (yearElement) {
        yearElement.textContent = new Date().getFullYear();
    }
    
    // =============================================
    // Parallax Effect on Hero Decor
    // =============================================
    const heroDecor = document.querySelector('.hero-decor');
    
    window.addEventListener('scroll', () => {
        if (heroDecor) {
            const scrollY = window.scrollY;
            heroDecor.style.transform = `translateY(${scrollY * 0.1}px)`;
        }
    });
    
    // =============================================
    // Project Card Hover Effects
    // =============================================
    const projectCards = document.querySelectorAll('.project-card');
    
    projectCards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            const image = card.querySelector('.project-image img');
            if (image) {
                image.style.transform = 'scale(1.1)';
            }
        });
        
        card.addEventListener('mouseleave', () => {
            const image = card.querySelector('.project-image img');
            if (image) {
                image.style.transform = 'scale(1)';
            }
        });
    });
    
    // =============================================
    // Skill Cards Hover Interaction
    // =============================================
    const skillCards = document.querySelectorAll('.skill-card');
    
    skillCards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            const icon = card.querySelector('.skill-icon i');
            if (icon) {
                icon.style.transform = 'scale(1.2) rotate(5deg)';
            }
        });
        
        card.addEventListener('mouseleave', () => {
            const icon = card.querySelector('.skill-icon i');
            if (icon) {
                icon.style.transform = 'scale(1) rotate(0deg)';
            }
        });
    });
    
    // =============================================
    // Scroll Progress Indicator (Optional)
    // =============================================
    // Uncomment below to add scroll progress bar
    /*
    const scrollProgress = document.createElement('div');
    scrollProgress.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 0%;
        height: 3px;
        background: var(--accent-primary);
        z-index: 10001;
        transition: width 0.1s ease;
    `;
    document.body.appendChild(scrollProgress);
    
    window.addEventListener('scroll', () => {
        const scrollTop = window.scrollY;
        const docHeight = document.documentElement.scrollHeight - window.innerHeight;
        const scrollPercent = (scrollTop / docHeight) * 100;
        scrollProgress.style.width = `${scrollPercent}%`;
    });
    */
});