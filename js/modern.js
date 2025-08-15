/**
 * Modern JavaScript replacement for jQuery and Bootstrap JS functionality
 * This file provides native JavaScript equivalents to the jQuery and Bootstrap
 * functionality used in the RISE website.
 */

// DOM Ready function (replacement for $(document).ready())
function onDOMReady(callback) {
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', callback);
  } else {
    callback();
  }
}

// Current year for footer
function getCurrentYear() {
  const year = new Date().getFullYear();
  const yearElement = document.getElementById('displayDateYear');
  if (yearElement) {
    yearElement.textContent = year;
  }
}

// Toggle navigation menu (replacement for Bootstrap navbar functionality)
function setupNavToggle() {
  const navbarToggler = document.querySelector('.navbar-toggler');
  const navbarCollapse = document.querySelector('.navbar-collapse');
  
  if (navbarToggler && navbarCollapse) {
    navbarToggler.addEventListener('click', () => {
      navbarCollapse.classList.toggle('show');
    });
  }
}

// Modern carousel implementation (replacement for owl carousel)
function setupCarousel() {
  const carousels = document.querySelectorAll('.owl-carousel');
  
  carousels.forEach(carousel => {
    if (!carousel) return;
    
    const slides = carousel.querySelectorAll('.item');
    const totalSlides = slides.length;
    if (totalSlides === 0) return;
    
    let currentIndex = 0;
    let autoplayInterval = null;
    const autoplayDelay = 5000;
    
    // Create carousel navigation
    const nav = document.createElement('div');
    nav.className = 'carousel-nav';
    
    const prevBtn = document.createElement('button');
    prevBtn.className = 'carousel-prev';
    prevBtn.innerHTML = '<i class="fa fa-long-arrow-left" aria-hidden="true"></i>';
    
    const nextBtn = document.createElement('button');
    nextBtn.className = 'carousel-next';
    nextBtn.innerHTML = '<i class="fa fa-long-arrow-right" aria-hidden="true"></i>';
    
    nav.appendChild(prevBtn);
    nav.appendChild(nextBtn);
    carousel.appendChild(nav);
    
    // Hide all slides except the first one
    slides.forEach((slide, index) => {
      slide.classList.add('carousel-item');
      if (index !== 0) {
        slide.style.display = 'none';
      }
    });
    
    // Navigation functions
    const showSlide = (index) => {
      // Hide current slide
      slides[currentIndex].style.display = 'none';
      
      // Update index and show new slide
      currentIndex = (index + totalSlides) % totalSlides;
      slides[currentIndex].style.display = 'block';
    };
    
    const nextSlide = () => showSlide(currentIndex + 1);
    const prevSlide = () => showSlide(currentIndex - 1);
    
    // Set up event listeners
    prevBtn.addEventListener('click', prevSlide);
    nextBtn.addEventListener('click', nextSlide);
    
    // Autoplay
    const startAutoplay = () => {
      stopAutoplay();
      autoplayInterval = setInterval(nextSlide, autoplayDelay);
    };
    
    const stopAutoplay = () => {
      if (autoplayInterval) {
        clearInterval(autoplayInterval);
      }
    };
    
    // Pause on hover
    carousel.addEventListener('mouseenter', stopAutoplay);
    carousel.addEventListener('mouseleave', startAutoplay);
    
    // Start autoplay
    startAutoplay();
  });
}

// Google Map functionality (unchanged, no jQuery dependency)
function initGoogleMap() {
  const mapElement = document.getElementById("googleMap");
  if (mapElement && window.google && window.google.maps) {
    var mapProp = {
      center: new google.maps.LatLng(40.72048788251907, -74.31571890331308),
      zoom: 18,
    };
    var map = new google.maps.Map(mapElement, mapProp);
  }
}

// Initialize all functionality when DOM is ready
onDOMReady(() => {
  getCurrentYear();
  setupNavToggle();
  setupCarousel();
  initGoogleMap();
});

// Email sending functionality (if needed)
function sendMail() {
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const phone = document.getElementById('phone_number').value;
  const message = document.getElementById('message').value;
  
  if (!name || !email || !phone || !message) {
    alert('Please fill all the fields');
    return false;
  }
  
  const params = {
    name: name,
    email: email,
    phone: phone,
    message: message
  };
  
  if (window.emailjs) {
    emailjs.send('service_j53ljmg', 'template_l0ev93k', params)
      .then(function() {
        alert('Email sent successfully!');
        document.getElementById('name').value = '';
        document.getElementById('email').value = '';
        document.getElementById('phone_number').value = '';
        document.getElementById('message').value = '';
      })
      .catch(function(error) {
        console.error('Failed to send email:', error);
        alert('Failed to send email. Please try again later.');
      });
  } else {
    console.error('EmailJS not loaded');
    alert('Email service not available. Please try again later.');
  }
  
  return false;
}
