// DOM Content Loaded
document.addEventListener('DOMContentLoaded', function() {
    // Mobile Navigation Toggle
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');

    hamburger.addEventListener('click', function() {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
    });

    // Close mobile menu when clicking on a link
    document.querySelectorAll('.nav-link').forEach(n => n.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    }));

    // Smooth Scrolling for Navigation Links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                const headerHeight = 100; // Height of fixed header + extra space
                const targetPosition = target.offsetTop - headerHeight;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Header Background on Scroll
    const header = document.querySelector('.header');
    window.addEventListener('scroll', function() {
        if (window.scrollY > 100) {
            header.style.background = 'rgba(13, 13, 13, 0.98)';
            header.style.boxShadow = '0 2px 20px rgba(212, 175, 55, 0.1)';
        } else {
            header.style.background = 'rgba(13, 13, 13, 0.95)';
            header.style.boxShadow = 'none';
        }
    });

    // Intersection Observer for Fade-in Animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Observe elements for animation
    const animatedElements = document.querySelectorAll('.service-card, .technician-card, .testimonial, .section-title');
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });

    // Form Submission
    const serviceForm = document.getElementById('serviceForm');
    const successModal = document.getElementById('successModal');
    const closeModal = document.querySelector('.close');

    serviceForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Get form data
        const formData = new FormData(serviceForm);
        const data = Object.fromEntries(formData);
        
        // Simulate form submission
        setTimeout(() => {
            successModal.style.display = 'block';
            serviceForm.reset();
        }, 500);
    });

    // Close modal
    closeModal.addEventListener('click', function() {
        successModal.style.display = 'none';
    });

    window.addEventListener('click', function(e) {
        if (e.target === successModal) {
            successModal.style.display = 'none';
        }
    });

    // Initialize Swiper Gallery
    const swiper = new Swiper('.gallery-swiper', {
        slidesPerView: 1,
        spaceBetween: 30,
        loop: true,
        autoplay: {
            delay: 4000,
            disableOnInteraction: false,
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        breakpoints: {
            768: {
                slidesPerView: 2,
            },
            1024: {
                slidesPerView: 3,
            }
        }
    });

    // Search Functionality
    const searchButton = document.querySelector('.search-button');
    const serviceFilter = document.getElementById('serviceFilter');
    const timeFilter = document.getElementById('timeFilter');
    const areaFilter = document.getElementById('areaFilter');

    searchButton.addEventListener('click', function() {
        const service = serviceFilter.value;
        const time = timeFilter.value;
        const area = areaFilter.value;

        // Simulate search functionality
        console.log('Search parameters:', { service, time, area });
        
        // Show loading effect
        searchButton.textContent = 'در حال جستجو...';
        searchButton.disabled = true;

        setTimeout(() => {
            searchButton.textContent = 'جستجو';
            searchButton.disabled = false;
            alert('نتایج جستجو در نقشه نمایش داده شد');
        }, 1500);
    });

    // Service Cards Hover Effects
    const serviceCards = document.querySelectorAll('.service-card');
    serviceCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px) scale(1.02)';
        });

        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });

    // Technician Cards Hover Effects
    const technicianCards = document.querySelectorAll('.technician-card');
    technicianCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px) scale(1.02)';
            this.style.boxShadow = '0 15px 40px rgba(212, 175, 55, 0.4)';
        });

        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
            this.style.boxShadow = 'none';
        });
    });

    // Parallax Effect for Hero Section
    window.addEventListener('scroll', function() {
        const scrolled = window.pageYOffset;
        const hero = document.querySelector('.hero');
        if (hero) {
            hero.style.transform = `translateY(${scrolled * 0.5}px)`;
        }
    });

    // Counter Animation for Statistics
    function animateCounter(element, target, duration = 2000, suffix = '', isSpecial = false) {
        let start = 0;
        const increment = target / (duration / 16);
        
        const timer = setInterval(() => {
            start += increment;
            const currentValue = Math.floor(start);
            
            if (isSpecial) {
                element.textContent = currentValue + suffix;
            } else {
                element.textContent = currentValue + suffix;
            }
            
            if (start >= target) {
                element.textContent = target + suffix;
                clearInterval(timer);
            }
        }, 16);
    }

    // Statistics Counter Animation Observer
    const statsObserver = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                console.log('Stats section is visible, starting animation...');
                const statNumbers = entry.target.querySelectorAll('.stat-number');
                console.log('Found stat numbers:', statNumbers.length);
                
                statNumbers.forEach((statNumber, index) => {
                    const target = parseInt(statNumber.getAttribute('data-target'));
                    const suffix = statNumber.getAttribute('data-suffix') || '';
                    const isSpecial = statNumber.getAttribute('data-special') === 'true';
                    
                    console.log(`Animating counter ${index + 1}: target=${target}, suffix=${suffix}`);
                    
                    // Add a slight delay for each counter to create a staggered effect
                    setTimeout(() => {
                        animateCounter(statNumber, target, 2000, suffix, isSpecial);
                    }, index * 300);
                });
                
                // Unobserve after animation starts to prevent re-triggering
                statsObserver.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.3,
        rootMargin: '0px 0px -50px 0px'
    });

    // Function to initialize stats animation
    function initStatsAnimation() {
        const statsContainer = document.querySelector('.stats-container');
        console.log('Looking for stats container:', statsContainer);
        
        if (statsContainer) {
            console.log('Stats container found, setting up observer...');
            statsObserver.observe(statsContainer);
        } else {
            console.log('Stats container not found, retrying in 1 second...');
            setTimeout(initStatsAnimation, 1000);
        }
    }

    // Initialize stats animation
    initStatsAnimation();

    // Initialize Google Map (placeholder)
    function initMap() {
        const mapElement = document.getElementById('map');
        if (mapElement) {
            // Placeholder for Google Maps integration
            mapElement.innerHTML = `
                <div style="display: flex; align-items: center; justify-content: center; height: 100%; color: #d4af37; font-size: 1.2rem;">
                    <div style="text-align: center;">
                        <i class="fas fa-map-marker-alt" style="font-size: 3rem; margin-bottom: 1rem; display: block;"></i>
                        نقشه تعاملی در حال بارگذاری...
                    </div>
                </div>
            `;
        }
    }

    // Initialize map
    initMap();

    // Add loading animation to buttons
    const buttons = document.querySelectorAll('.cta-button, .submit-button, .search-button');
    buttons.forEach(button => {
        button.addEventListener('click', function() {
            if (!this.disabled) {
                this.style.transform = 'scale(0.95)';
                setTimeout(() => {
                    this.style.transform = 'scale(1)';
                }, 150);
            }
        });
    });

    // Testimonials Auto-scroll Effect
    const testimonials = document.querySelectorAll('.testimonial');
    let currentTestimonial = 0;

    function highlightTestimonial() {
        testimonials.forEach((testimonial, index) => {
            if (index === currentTestimonial) {
                testimonial.style.transform = 'scale(1.05)';
                testimonial.style.borderColor = '#d4af37';
                testimonial.style.boxShadow = '0 0 20px rgba(212, 175, 55, 0.3)';
            } else {
                testimonial.style.transform = 'scale(1)';
                testimonial.style.borderColor = 'transparent';
                testimonial.style.boxShadow = 'none';
            }
        });

        currentTestimonial = (currentTestimonial + 1) % testimonials.length;
    }

    // Start testimonial highlighting
    if (testimonials.length > 0) {
        setInterval(highlightTestimonial, 3000);
    }

    // Form Validation
    const formInputs = document.querySelectorAll('input, select, textarea');
    formInputs.forEach(input => {
        input.addEventListener('blur', function() {
            if (this.hasAttribute('required') && !this.value.trim()) {
                this.style.borderColor = '#ff6b6b';
                this.style.boxShadow = '0 0 10px rgba(255, 107, 107, 0.3)';
            } else {
                this.style.borderColor = '#d4af37';
                this.style.boxShadow = '0 0 10px rgba(212, 175, 55, 0.3)';
            }
        });

        input.addEventListener('focus', function() {
            this.style.borderColor = '#d4af37';
            this.style.boxShadow = '0 0 10px rgba(212, 175, 55, 0.3)';
        });
    });

    // Phone number formatting
    const phoneInput = document.getElementById('phone');
    if (phoneInput) {
        phoneInput.addEventListener('input', function() {
            let value = this.value.replace(/\D/g, '');
            if (value.length > 11) {
                value = value.slice(0, 11);
            }
            this.value = value;
        });
    }

    // Add floating labels effect
    formInputs.forEach(input => {
        const label = input.previousElementSibling;
        if (label && label.tagName === 'LABEL') {
            input.addEventListener('focus', function() {
                label.style.transform = 'translateY(-25px) scale(0.8)';
                label.style.color = '#d4af37';
            });

            input.addEventListener('blur', function() {
                if (!this.value) {
                    label.style.transform = 'translateY(0) scale(1)';
                    label.style.color = '#d4af37';
                }
            });
        }
    });

    // Add ripple effect to buttons
    function createRipple(event) {
        const button = event.currentTarget;
        const circle = document.createElement('span');
        const diameter = Math.max(button.clientWidth, button.clientHeight);
        const radius = diameter / 2;

        circle.style.width = circle.style.height = `${diameter}px`;
        circle.style.left = `${event.clientX - button.offsetLeft - radius}px`;
        circle.style.top = `${event.clientY - button.offsetTop - radius}px`;
        circle.classList.add('ripple');

        const ripple = button.getElementsByClassName('ripple')[0];
        if (ripple) {
            ripple.remove();
        }

        button.appendChild(circle);
    }

    // Add ripple effect CSS
    const rippleCSS = `
        .ripple {
            position: absolute;
            border-radius: 50%;
            transform: scale(0);
            animation: ripple 600ms linear;
            background-color: rgba(255, 255, 255, 0.6);
            pointer-events: none;
        }

        @keyframes ripple {
            to {
                transform: scale(4);
                opacity: 0;
            }
        }
    `;

    const style = document.createElement('style');
    style.textContent = rippleCSS;
    document.head.appendChild(style);

    // Apply ripple effect to buttons
    buttons.forEach(button => {
        button.style.position = 'relative';
        button.style.overflow = 'hidden';
        button.addEventListener('click', createRipple);
    });

    // Lazy loading for images
    const images = document.querySelectorAll('img');
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.style.opacity = '0';
                img.style.transition = 'opacity 0.5s ease';
                
                img.onload = () => {
                    img.style.opacity = '1';
                };
                
                observer.unobserve(img);
            }
        });
    });

    images.forEach(img => {
        imageObserver.observe(img);
    });

    // Add scroll-to-top button
    const scrollToTopBtn = document.createElement('button');
    scrollToTopBtn.innerHTML = '<i class="fas fa-chevron-up"></i>';
    scrollToTopBtn.className = 'scroll-to-top';
    scrollToTopBtn.style.cssText = `
        position: fixed;
        bottom: 30px;
        left: 30px;
        width: 50px;
        height: 50px;
        border-radius: 50%;
        background: linear-gradient(45deg, #d4af37, #f4e4a6);
        color: #0d0d0d;
        border: none;
        cursor: pointer;
        opacity: 0;
        visibility: hidden;
        transition: all 0.3s ease;
        z-index: 1000;
        font-size: 1.2rem;
        box-shadow: 0 4px 20px rgba(212, 175, 55, 0.3);
    `;

    document.body.appendChild(scrollToTopBtn);

    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 300) {
            scrollToTopBtn.style.opacity = '1';
            scrollToTopBtn.style.visibility = 'visible';
        } else {
            scrollToTopBtn.style.opacity = '0';
            scrollToTopBtn.style.visibility = 'hidden';
        }
    });

    scrollToTopBtn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    scrollToTopBtn.addEventListener('mouseenter', () => {
        scrollToTopBtn.style.transform = 'translateY(-3px) scale(1.1)';
    });

    scrollToTopBtn.addEventListener('mouseleave', () => {
        scrollToTopBtn.style.transform = 'translateY(0) scale(1)';
    });

    console.log('Golden Life VIP Services website loaded successfully!');
});

// Estate Search Function
function searchEstates() {
    const dealType = document.getElementById('dealType').value;
    const propertyType = document.getElementById('propertyType').value;
    const minPrice = document.getElementById('minPrice').value;
    const maxPrice = document.getElementById('maxPrice').value;
    const area = document.getElementById('area').value;
    const size = document.getElementById('size').value;

    // Collect search parameters
    const searchParams = {
        dealType,
        propertyType,
        minPrice,
        maxPrice,
        area,
        size
    };

    console.log('جستجوی املاک با پارامترهای:', searchParams);

    // Show loading state
    const searchBtn = document.querySelector('.search-estate-btn');
    const originalText = searchBtn.innerHTML;
    searchBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> در حال جستجو...';
    searchBtn.disabled = true;

    // Simulate search
    setTimeout(() => {
        searchBtn.innerHTML = originalText;
        searchBtn.disabled = false;
        
        // Show results message
        let message = 'نتایج جستجو:\n';
        if (dealType) message += `نوع معامله: ${dealType === 'buy' ? 'خرید' : 'رهن و اجاره'}\n`;
        if (propertyType) message += `نوع ملک: ${propertyType}\n`;
        if (minPrice || maxPrice) message += `محدوده قیمت: ${minPrice || '0'} تا ${maxPrice || 'نامحدود'} میلیون تومان\n`;
        if (area) message += `منطقه: ${area}\n`;
        if (size) message += `متراژ: ${size}\n`;
        
        alert(message + '\nاملاک مناسب پیدا شد! برای مشاهده جزئیات با ما تماس بگیرید.');
    }, 2000);
}

// Quick Filter Functionality
function scrollToService(serviceType) {
    // First scroll to services section
    const servicesSection = document.getElementById('services');
    if (servicesSection) {
        const headerHeight = 100;
        const targetPosition = servicesSection.offsetTop - headerHeight;
        
        window.scrollTo({
            top: targetPosition,
            behavior: 'smooth'
        });
    }

    // Highlight the specific service card
    setTimeout(() => {
        highlightServiceCard(serviceType);
    }, 800);

    // Also pre-select the service in the form
    setTimeout(() => {
        preSelectService(serviceType);
    }, 1000);
}

function highlightServiceCard(serviceType) {
    // Remove previous highlights
    document.querySelectorAll('.service-card').forEach(card => {
        card.classList.remove('highlighted');
        card.style.transform = '';
        card.style.boxShadow = '';
        card.style.borderColor = '';
    });

    // Map service types to card positions
    const serviceMap = {
        'shopping': 0,
        'medical': 1,
        'gardening': 2,
        'cleaning': 3,
        'technical': 4,
        'transport': 5,
        'security': 6,
        'catering': 7
    };

    const cardIndex = serviceMap[serviceType];
    if (cardIndex !== undefined) {
        const serviceCards = document.querySelectorAll('.service-card');
        const targetCard = serviceCards[cardIndex];
        
        if (targetCard) {
            targetCard.classList.add('highlighted');
            targetCard.style.transform = 'translateY(-15px) scale(1.05)';
            targetCard.style.boxShadow = '0 15px 40px rgba(212, 175, 55, 0.5)';
            targetCard.style.borderColor = '#d4af37';
            targetCard.style.background = 'linear-gradient(135deg, #333333, rgba(212, 175, 55, 0.1))';

            // Remove highlight after 3 seconds
            setTimeout(() => {
                targetCard.classList.remove('highlighted');
                targetCard.style.transform = '';
                targetCard.style.boxShadow = '';
                targetCard.style.borderColor = '';
                targetCard.style.background = '';
            }, 3000);
        }
    }
}

function preSelectService(serviceType) {
    const serviceSelect = document.getElementById('service');
    if (serviceSelect) {
        serviceSelect.value = serviceType;
        
        // Add visual feedback
        serviceSelect.style.borderColor = '#d4af37';
        serviceSelect.style.boxShadow = '0 0 10px rgba(212, 175, 55, 0.5)';
        
        // Remove visual feedback after 2 seconds
        setTimeout(() => {
            serviceSelect.style.borderColor = '';
            serviceSelect.style.boxShadow = '';
        }, 2000);
    }
}

// Add click effects to filter buttons
document.addEventListener('DOMContentLoaded', function() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    
    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Add click animation
            this.style.transform = 'translateY(-1px) scale(0.95)';
            
            // Reset animation
            setTimeout(() => {
                this.style.transform = '';
            }, 150);

            // Add ripple effect
            const ripple = document.createElement('span');
            const rect = this.getBoundingClientRect();
            const size = Math.max(rect.width, rect.height);
            const x = event.clientX - rect.left - size / 2;
            const y = event.clientY - rect.top - size / 2;
            
            ripple.style.width = ripple.style.height = size + 'px';
            ripple.style.left = x + 'px';
            ripple.style.top = y + 'px';
            ripple.classList.add('filter-ripple');
            
            this.appendChild(ripple);
            
            setTimeout(() => {
                ripple.remove();
            }, 600);
        });
    });

    console.log('Quick filter functionality loaded!');
});

// Additional utility functions
function showNotification(message, type = 'success') {
    const notification = document.createElement('div');
    notification.style.cssText = `
        position: fixed;
        top: 100px;
        right: 20px;
        background: ${type === 'success' ? '#d4af37' : '#ff6b6b'};
        color: #0d0d0d;
        padding: 1rem 2rem;
        border-radius: 10px;
        z-index: 2000;
        transform: translateX(400px);
        transition: transform 0.3s ease;
        font-weight: 600;
        box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
    `;
    
    notification.textContent = message;
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.style.transform = 'translateX(0)';
    }, 100);
    
    setTimeout(() => {
        notification.style.transform = 'translateX(400px)';
        setTimeout(() => {
            document.body.removeChild(notification);
        }, 300);
    }, 3000);
}

// Service worker registration for PWA capabilities (optional)
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('/sw.js')
            .then((registration) => {
                console.log('SW registered: ', registration);
            })
            .catch((registrationError) => {
                console.log('SW registration failed: ', registrationError);
            });
    });
}

// Theme Toggle Function
function toggleTheme() {
    const body = document.body;
    const themeIcon = document.querySelector('.theme-toggle i');
    
    body.classList.toggle('light-mode');
    
    if (body.classList.contains('light-mode')) {
        themeIcon.className = 'fas fa-moon';
        localStorage.setItem('theme', 'light');
    } else {
        themeIcon.className = 'fas fa-sun';
        localStorage.setItem('theme', 'dark');
    }
}

// Language Toggle Function
function toggleLanguage() {
    const html = document.documentElement;
    const langIcon = document.querySelector('.nav-link:last-child i');
    const langText = document.querySelector('.nav-link:last-child');
    
    if (html.getAttribute('lang') === 'fa') {
        html.setAttribute('lang', 'en');
        html.setAttribute('dir', 'ltr');
        langText.innerHTML = '<i class="fas fa-globe"></i>فا/EN';
        localStorage.setItem('language', 'en');
    } else {
        html.setAttribute('lang', 'fa');
        html.setAttribute('dir', 'rtl');
        langText.innerHTML = '<i class="fas fa-globe"></i>EN/فا';
        localStorage.setItem('language', 'fa');
    }
}

// Load saved theme and language on page load
document.addEventListener('DOMContentLoaded', function() {
    // Load saved theme
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'light') {
        document.body.classList.add('light-mode');
        document.querySelector('.theme-toggle i').className = 'fas fa-moon';
    }
    
    // Load saved language
    const savedLanguage = localStorage.getItem('language');
    if (savedLanguage === 'en') {
        document.documentElement.setAttribute('lang', 'en');
        document.documentElement.setAttribute('dir', 'ltr');
        const langButton = document.querySelector('.nav-link:last-child');
        if (langButton) {
            langButton.innerHTML = '<i class="fas fa-globe"></i>فا/EN';
        }
    }
});
