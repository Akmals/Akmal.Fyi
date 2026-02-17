// ===================================
// SMOOTH SCROLLING FOR NAVIGATION
// When you click a nav link, the page smoothly scrolls to that section
// ===================================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        
        if (target) {
            // Smooth scroll to the target section
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// ===================================
// NAVBAR TRANSPARENCY ON SCROLL
// Makes the navbar more transparent at the top, solid when scrolling
// ===================================
const navbar = document.querySelector('.navbar');
let lastScroll = 0;

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    // Add 'scrolled' class when page is scrolled down
    if (currentScroll > 50) {
        navbar.style.background = 'rgba(10, 10, 10, 0.95)';
    } else {
        navbar.style.background = 'rgba(10, 10, 10, 0.8)';
    }
    
    lastScroll = currentScroll;
});

// ===================================
// INTERSECTION OBSERVER FOR FADE-IN ANIMATIONS
// Elements fade in as you scroll down to them
// ===================================
const observerOptions = {
    threshold: 0.1,  // Trigger when 10% of element is visible
    rootMargin: '0px 0px -50px 0px'  // Trigger slightly before element enters viewport
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe all sections for fade-in effect
const sections = document.querySelectorAll('section');
sections.forEach(section => {
    // Set initial state
    section.style.opacity = '0';
    section.style.transform = 'translateY(30px)';
    section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    
    // Start observing
    observer.observe(section);
});

// ===================================
// STAGGERED ANIMATION FOR PROJECT CARDS
// Project cards appear one after another with a slight delay
// ===================================
const projectCards = document.querySelectorAll('.project-card');
projectCards.forEach((card, index) => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(30px)';
    card.style.transition = `opacity 0.5s ease ${index * 0.1}s, transform 0.5s ease ${index * 0.1}s`;
});

const projectObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, { threshold: 0.1 });

projectCards.forEach(card => projectObserver.observe(card));

// ===================================
// SKILL ITEMS ANIMATION
// Skills appear with a staggered effect
// ===================================
const skillItems = document.querySelectorAll('.skill-item');
const skillObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const items = entry.target.querySelectorAll('.skill-item');
            items.forEach((item, index) => {
                setTimeout(() => {
                    item.style.opacity = '1';
                    item.style.transform = 'translateY(0)';
                }, index * 50);  // 50ms delay between each skill
            });
        }
    });
}, { threshold: 0.2 });

// Observe skill categories
document.querySelectorAll('.skill-category').forEach(category => {
    const items = category.querySelectorAll('.skill-item');
    items.forEach(item => {
        item.style.opacity = '0';
        item.style.transform = 'translateY(20px)';
        item.style.transition = 'opacity 0.3s ease, transform 0.3s ease';
    });
    skillObserver.observe(category);
});

// ===================================
// CUSTOM CURSOR EFFECT (Optional - can be removed if too much)
// Creates a subtle glow effect around the cursor
// ===================================
const cursor = document.createElement('div');
cursor.classList.add('custom-cursor');
document.body.appendChild(cursor);

// Add CSS for custom cursor
const style = document.createElement('style');
style.textContent = `
    .custom-cursor {
        width: 400px;
        height: 400px;
        border-radius: 50%;
        background: radial-gradient(circle, rgba(0, 255, 170, 0.15) 0%, transparent 70%);
        position: fixed;
        pointer-events: none;
        z-index: 9999;
        transform: translate(-50%, -50%);
        transition: opacity 0.3s ease;
        opacity: 0;
    }
    
    body:hover .custom-cursor {
        opacity: 1;
    }
`;
document.head.appendChild(style);

// Update cursor position
let mouseX = 0;
let mouseY = 0;
let cursorX = 0;
let cursorY = 0;

document.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
});

// Smooth cursor movement with easing
function animateCursor() {
    const speed = 0.15;  // Lower = smoother/slower
    
    cursorX += (mouseX - cursorX) * speed;
    cursorY += (mouseY - cursorY) * speed;
    
    cursor.style.left = cursorX + 'px';
    cursor.style.top = cursorY + 'px';
    
    requestAnimationFrame(animateCursor);
}
animateCursor();

// ===================================
// ACTIVE NAVIGATION LINK
// Highlights the current section in the navigation
// ===================================
const navLinks = document.querySelectorAll('.nav-links a');

window.addEventListener('scroll', () => {
    let current = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        
        if (window.pageYOffset >= sectionTop - 100) {
            current = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').slice(1) === current) {
            link.classList.add('active');
        }
    });
});

// Add active link styling
const activeLinkStyle = document.createElement('style');
activeLinkStyle.textContent = `
    .nav-links a.active {
        color: var(--accent-primary);
    }
    
    .nav-links a.active::after {
        width: 100%;
    }
`;
document.head.appendChild(activeLinkStyle);

// ===================================
// CONSOLE MESSAGE (Easter Egg)
// Fun message for developers who open the console
// ===================================
console.log('%c👋 Hey there, fellow developer!', 'color: #00ffaa; font-size: 20px; font-weight: bold;');
console.log('%cLooking at the code? Nice! Feel free to reach out if you want to collaborate.', 'color: #a0a0a0; font-size: 14px;');
console.log('%cThis site was built with vanilla HTML, CSS, and JavaScript.', 'color: #a0a0a0; font-size: 14px;');

// ===================================
// PERFORMANCE OPTIMIZATION
// Reduces animation on low-end devices
// ===================================
const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');

if (mediaQuery.matches) {
    // Disable animations for users who prefer reduced motion
    document.querySelectorAll('*').forEach(element => {
        element.style.animation = 'none';
        element.style.transition = 'none';
    });
}

// ===================================
// PREVENT FOUC (Flash of Unstyled Content)
// Makes sure content is hidden until fully loaded
// ===================================
window.addEventListener('load', () => {
    document.body.style.visibility = 'visible';
});

document.body.style.visibility = 'hidden';
