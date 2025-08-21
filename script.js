// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Navbar background on scroll
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 100) {
        navbar.style.background = 'rgba(10, 10, 10, 0.98)';
    } else {
        navbar.style.background = 'rgba(10, 10, 10, 0.95)';
    }
});

// Intersection Observer for animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe elements for animation
document.addEventListener('DOMContentLoaded', () => {
    const animateElements = document.querySelectorAll('.game-feature, .feature-card, .about-text, .about-visual');
    
    animateElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
});

// Button interactions
document.querySelectorAll('.btn-primary, .btn-secondary').forEach(button => {
    button.addEventListener('click', function() {
        // Add click animation
        this.style.transform = 'scale(0.95)';
        setTimeout(() => {
            this.style.transform = '';
        }, 150);
        
        // Handle different button actions
        const buttonText = this.textContent.toLowerCase();
        
        if (buttonText.includes('wishlist') || buttonText.includes('beta')) {
            // Scroll to wishlist section
            document.getElementById('wishlist').scrollIntoView({behavior: 'smooth'});
        } else if (buttonText.includes('trailer')) {
            // Open trailer in new tab
            window.open('https://vimeo.com/1107877622', '_blank');
        } else if (buttonText.includes('follow')) {
            // Simulate social follow
            alert('📱 Follow us on social media for the latest updates!');
        }
    });
});

// Dynamic hero text animation
const heroTitle = document.querySelector('.hero-title');
if (heroTitle) {
    const text = heroTitle.innerHTML;
    heroTitle.innerHTML = '';
    
    let i = 0;
    const typeWriter = () => {
        if (i < text.length) {
            heroTitle.innerHTML += text.charAt(i);
            i++;
            setTimeout(typeWriter, 50);
        }
    };
    
    // Start typing animation after a short delay
    setTimeout(typeWriter, 1000);
}

// Parallax effect for hero section
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const heroImage = document.querySelector('.hero-image');
    if (heroImage) {
        heroImage.style.transform = `translateY(${scrolled * 0.5}px)`;
    }
});

// AI visualization animation enhancement
document.addEventListener('DOMContentLoaded', () => {
    const aiNodes = document.querySelectorAll('.ai-node');
    
    aiNodes.forEach((node, index) => {
        node.addEventListener('mouseenter', () => {
            node.style.transform = 'scale(1.3)';
            node.style.boxShadow = '0 0 30px rgba(0, 255, 136, 0.6)';
        });
        
        node.addEventListener('mouseleave', () => {
            node.style.transform = 'scale(1)';
            node.style.boxShadow = 'none';
        });
    });
});

// Hero image handling
document.addEventListener('DOMContentLoaded', () => {
    const heroImage = document.getElementById('hero-main-image');
    
    // Set the correct image source and make it visible
    heroImage.src = 'maze-of-mayhem-hero.png';
    heroImage.style.opacity = '1';
    
    // Add error handling in case image doesn't load
    heroImage.onerror = function() {
        console.log('Hero image not found at maze-of-mayhem-hero.png');
        // Fallback to a simple background color
        heroImage.style.display = 'none';
        const container = heroImage.parentElement;
        container.style.background = 'linear-gradient(135deg, #1a1a1a 0%, #0a0a0a 100%)';
        container.innerHTML = `
            <div style="display: flex; flex-direction: column; align-items: center; justify-content: center; height: 100%; color: white; text-align: center;">
                <h1 style="font-family: 'Orbitron', monospace; font-size: 3rem; margin-bottom: 10px; color: #00ff88;">MAZE OF MAYHEM</h1>
                <p style="color: #00ff88; background: rgba(0, 255, 136, 0.1); padding: 8px 16px; border-radius: 20px;">Featuring World's first AI controlled FPS maps</p>
                <div style="position: absolute; bottom: 40px; font-family: 'Orbitron', monospace; font-weight: 700;">XPERIA LABS<span style="color: #00ff88; margin-left: 5px;">AI</span></div>
            </div>
        `;
    };
});

// Mobile menu toggle (if needed for smaller screens)
const createMobileMenu = () => {
    const navbar = document.querySelector('.navbar');
    const navLinks = document.querySelector('.nav-links');
    
    if (window.innerWidth <= 768) {
        if (!document.querySelector('.mobile-menu-toggle')) {
            const toggleButton = document.createElement('button');
            toggleButton.className = 'mobile-menu-toggle';
            toggleButton.innerHTML = '☰';
            toggleButton.style.cssText = `
                background: none;
                border: none;
                color: white;
                font-size: 1.5rem;
                cursor: pointer;
                display: block;
            `;
            
            navbar.querySelector('.nav-container').appendChild(toggleButton);
            
            toggleButton.addEventListener('click', () => {
                navLinks.style.display = navLinks.style.display === 'flex' ? 'none' : 'flex';
            });
        }
    }
};

window.addEventListener('resize', createMobileMenu);
createMobileMenu();