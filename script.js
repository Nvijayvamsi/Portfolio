// Global variables
let currentTextIndex = 0;
let currentCharIndex = 0;
let isDeleting = false;
const typewriterTexts = [
  'Aspiring Software Developer',
  'M.Tech CSE Student', 
  'Python Enthusiast',
  'Full-Stack Developer'
];

// Skills data
const skillsData = [
  {
    name: 'Python',
    level: 90,
    icon: 'fab fa-python',
    gradient: 'linear-gradient(45deg, #3b82f6, #fbbf24)'
  },
  {
    name: 'SQL',
    level: 85,
    icon: 'fas fa-database',
    gradient: 'linear-gradient(45deg, #1e40af, #3b82f6)'
  },
  {
    name: 'HTML',
    level: 95,
    icon: 'fab fa-html5',
    gradient: 'linear-gradient(45deg, #f97316, #dc2626)'
  },
  {
    name: 'CSS',
    level: 90,
    icon: 'fab fa-css3-alt',
    gradient: 'linear-gradient(45deg, #3b82f6, #1e40af)'
  },
  {
    name: 'Power BI',
    level: 75,
    icon: 'fas fa-chart-bar',
    gradient: 'linear-gradient(45deg, #fbbf24, #f97316)'
  },
  {
    name: 'MS Office',
    level: 85,
    icon: 'fas fa-file-alt',
    gradient: 'linear-gradient(45deg, #1e40af, #4338ca)'
  }
];

// Projects data
const projectsData = [
  {
    id: 1,
    title: 'Sturdy Hybrid Cryptography',
    shortDesc: 'Python-based file encryption system',
    fullDesc: 'Advanced file encryption system implementing AES, RSA, and BLAKE3 algorithms for maximum security. Features include secure key generation, file integrity verification, and user-friendly interface for seamless encryption/decryption operations.',
    tech: ['Python', 'AES', 'RSA', 'BLAKE3', 'Cryptography'],
    features: [
      'Multi-layer encryption (AES + RSA)',
      'File integrity verification with BLAKE3',
      'Secure key management system',
      'Cross-platform compatibility',
      'Performance optimized algorithms'
    ],
    icon: 'fas fa-shield-alt',
    gradient: 'linear-gradient(45deg, #dc2626, #ec4899)'
  },
  {
    id: 2,
    title: 'Trusted Appliance Repair Website',
    shortDesc: 'Responsive service website',
    fullDesc: 'Professional appliance repair service website built with modern web technologies. Features responsive design, service booking system, customer testimonials, and seamless user experience across all devices.',
    tech: ['HTML5', 'CSS3', 'JavaScript', 'Netlify', 'GitHub'],
    features: [
      'Fully responsive design',
      'Service booking interface',
      'Customer review system',
      'Contact form integration',
      'SEO optimized structure'
    ],
    icon: 'fas fa-tools',
    gradient: 'linear-gradient(45deg, #3b82f6, #06b6d4)'
  }
];

// Education data
const educationData = [
  {
    institution: 'KL University',
    degree: 'M.Tech CSE',
    period: '2023 – 2025',
    score: 'CGPA: 9.3',
    icon: 'fas fa-graduation-cap',
    gradient: 'linear-gradient(45deg, #a855f7, #3b82f6)',
    status: 'current'
  },
  {
    institution: 'MVR College of Engineering',
    degree: 'B.Tech Mechanical',
    period: '2018 – 2022',
    score: 'CGPA: 7.26',
    icon: 'fas fa-cogs',
    gradient: 'linear-gradient(45deg, #3b82f6, #06b6d4)',
    status: 'completed'
  },
  {
    institution: 'Sri Chaitanya Jr. College',
    degree: 'Intermediate',
    period: '2016 – 2018',
    score: '76%',
    icon: 'fas fa-book',
    gradient: 'linear-gradient(45deg, #06b6d4, #14b8a6)',
    status: 'completed'
  },
  {
    institution: 'Sri Chaitanya School',
    degree: 'High School',
    period: '2015 – 2016',
    score: 'CGPA: 7.3',
    icon: 'fas fa-school',
    gradient: 'linear-gradient(45deg, #14b8a6, #10b981)',
    status: 'completed'
  }
];

// Certifications data
const certificationsData = [
  {
    name: 'Python Foundation',
    provider: 'Nextwave',
    icon: 'fab fa-python',
    gradient: 'linear-gradient(45deg, #3b82f6, #fbbf24)',
    skills: ['Python Basics', 'Data Structures', 'OOP']
  },
  {
    name: 'Introduction to Databases',
    provider: 'Nextwave',
    icon: 'fas fa-database',
    gradient: 'linear-gradient(45deg, #10b981, #3b82f6)',
    skills: ['SQL', 'Database Design', 'Queries']
  },
  {
    name: 'React.js Hands-on',
    provider: 'Udemy',
    icon: 'fab fa-react',
    gradient: 'linear-gradient(45deg, #06b6d4, #3b82f6)',
    skills: ['React Components', 'State Management', 'Hooks']
  },
  {
    name: 'JNCIA – Junos',
    provider: 'Juniper Networks',
    icon: 'fas fa-network-wired',
    gradient: 'linear-gradient(45deg, #a855f7, #ec4899)',
    skills: ['Networking', 'Junos OS', 'Routing']
  },
  {
    name: 'Introduction to Cybersecurity',
    provider: 'Cisco',
    icon: 'fas fa-shield-alt',
    gradient: 'linear-gradient(45deg, #dc2626, #f97316)',
    skills: ['Security Fundamentals', 'Threat Analysis', 'Risk Management']
  }
];

// DOM Content Loaded
document.addEventListener('DOMContentLoaded', function() {
  initializeApp();
});

// Initialize application
function initializeApp() {
  setupNavigation();
  startTypewriter();
  generateSkills();
  generateProjects();
  generateEducation();
  generateCertifications();
  setupScrollAnimations();
  setupContactForm();
  setupScrollToTop();
}

// Navigation functionality
function setupNavigation() {
  const navbar = document.getElementById('navbar');
  const mobileMenuBtn = document.getElementById('mobile-menu-btn');
  const mobileMenu = document.getElementById('mobile-menu');
  const navLinks = document.querySelectorAll('.nav-link, .mobile-nav-link');

  // Navbar scroll effect
  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  });

  // Mobile menu toggle
  mobileMenuBtn.addEventListener('click', () => {
    mobileMenuBtn.classList.toggle('active');
    mobileMenu.classList.toggle('active');
  });

  // Navigation link clicks
  navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const targetId = link.getAttribute('href').substring(1);
      scrollToSection(targetId);
      
      // Close mobile menu if open
      mobileMenuBtn.classList.remove('active');
      mobileMenu.classList.remove('active');
    });
  });
}

// Smooth scroll to section
function scrollToSection(sectionId) {
  const element = document.getElementById(sectionId);
  if (element) {
    const offsetTop = element.offsetTop - 80; // Account for fixed navbar
    window.scrollTo({
      top: offsetTop,
      behavior: 'smooth'
    });
  }
}

// Typewriter effect
function startTypewriter() {
  const typewriterElement = document.getElementById('typewriter-text');
  
  function typeEffect() {
    const currentText = typewriterTexts[currentTextIndex];
    
    if (isDeleting) {
      typewriterElement.textContent = currentText.substring(0, currentCharIndex - 1);
      currentCharIndex--;
      
      if (currentCharIndex === 0) {
        isDeleting = false;
        currentTextIndex = (currentTextIndex + 1) % typewriterTexts.length;
        setTimeout(typeEffect, 500);
      } else {
        setTimeout(typeEffect, 50);
      }
    } else {
      typewriterElement.textContent = currentText.substring(0, currentCharIndex + 1);
      currentCharIndex++;
      
      if (currentCharIndex === currentText.length) {
        setTimeout(() => {
          isDeleting = true;
          typeEffect();
        }, 2000);
      } else {
        setTimeout(typeEffect, 100);
      }
    }
  }
  
  typeEffect();
}

// Generate skills section
function generateSkills() {
  const skillsGrid = document.getElementById('skills-grid');
  
  skillsData.forEach((skill, index) => {
    const skillCard = document.createElement('div');
    skillCard.className = 'skill-card reveal-on-scroll';
    skillCard.style.animationDelay = `${index * 100}ms`;
    
    skillCard.innerHTML = `
      <div class="skill-icon" style="background: ${skill.gradient}">
        <i class="${skill.icon}"></i>
      </div>
      <h3 class="skill-name">${skill.name}</h3>
      <div class="skill-progress">
        <div class="skill-progress-header">
          <span class="skill-progress-label">Proficiency</span>
          <span class="skill-progress-value">${skill.level}%</span>
        </div>
        <div class="skill-progress-bar">
          <div class="skill-progress-fill" style="background: ${skill.gradient}" data-width="${skill.level}"></div>
        </div>
      </div>
    `;
    
    skillsGrid.appendChild(skillCard);
  });
}

// Generate projects section
function generateProjects() {
  const projectsGrid = document.getElementById('projects-grid');
  
  projectsData.forEach(project => {
    const projectCard = document.createElement('div');
    projectCard.className = 'project-card';
    projectCard.onclick = () => flipCard(project.id);
    
    projectCard.innerHTML = `
      <div class="project-card-inner" id="project-${project.id}">
        <div class="project-card-front">
          <div>
            <div class="project-icon" style="background: ${project.gradient}">
              <i class="${project.icon}"></i>
            </div>
            <h3 class="project-title">${project.title}</h3>
            <p class="project-description">${project.shortDesc}</p>
            <div class="project-tech">
              ${project.tech.slice(0, 3).map(tech => `<span class="tech-badge">${tech}</span>`).join('')}
              ${project.tech.length > 3 ? `<span class="tech-badge">+${project.tech.length - 3} more</span>` : ''}
            </div>
          </div>
          <div class="project-footer">
            <span class="flip-hint">Click to flip</span>
            <i class="fas fa-arrow-right"></i>
          </div>
        </div>
        <div class="project-card-back">
          <div>
            <h3 class="project-title">${project.title}</h3>
            <p class="project-description">${project.fullDesc}</p>
            <div class="project-features">
              <h4>Key Features:</h4>
              <ul class="feature-list">
                ${project.features.map(feature => `<li>${feature}</li>`).join('')}
              </ul>
            </div>
            <div class="project-tech">
              ${project.tech.map(tech => `<span class="tech-badge">${tech}</span>`).join('')}
            </div>
          </div>
          <div class="project-footer">
            <span class="flip-hint">Click to flip back</span>
            <i class="fas fa-arrow-left"></i>
          </div>
        </div>
      </div>
    `;
    
    projectsGrid.appendChild(projectCard);
  });
}

// Flip project card
function flipCard(projectId) {
  const card = document.querySelector('.project-card');
  const cardElement = card.querySelector(`#project-${projectId}`).parentElement;
  cardElement.classList.toggle('flipped');
}

// Generate education section
function generateEducation() {
  const educationTimeline = document.getElementById('education-timeline');
  
  // Create desktop timeline
  const desktopTimeline = document.createElement('div');
  desktopTimeline.className = 'timeline-desktop';
  
  const timelineLine = document.createElement('div');
  timelineLine.className = 'timeline-line';
  desktopTimeline.appendChild(timelineLine);
  
  const timelineItems = document.createElement('div');
  timelineItems.className = 'timeline-items';
  
  educationData.forEach((edu, index) => {
    const timelineItem = document.createElement('div');
    timelineItem.className = 'timeline-item reveal-on-scroll';
    
    timelineItem.innerHTML = `
      <div class="timeline-dot" style="background: ${edu.gradient}"></div>
      <div class="education-card">
        <div class="education-icon" style="background: ${edu.gradient}">
          <i class="${edu.icon}"></i>
        </div>
        <h3 class="education-institution">${edu.institution}</h3>
        <p class="education-degree">${edu.degree}</p>
        <p class="education-period">${edu.period}</p>
        <p class="education-score">${edu.score}</p>
        ${edu.status === 'current' ? '<span class="current-badge">Current</span>' : ''}
      </div>
    `;
    
    timelineItems.appendChild(timelineItem);
  });
  
  desktopTimeline.appendChild(timelineItems);
  educationTimeline.appendChild(desktopTimeline);
  
  // Create mobile timeline
  const mobileTimeline = document.createElement('div');
  mobileTimeline.className = 'timeline-mobile';
  
  educationData.forEach((edu, index) => {
    const timelineItem = document.createElement('div');
    timelineItem.className = 'timeline-item reveal-on-scroll';
    
    timelineItem.innerHTML = `
      <div class="timeline-dot" style="background: ${edu.gradient}"></div>
      <div class="education-card">
        <div class="education-icon" style="background: ${edu.gradient}">
          <i class="${edu.icon}"></i>
        </div>
        <h3 class="education-institution">${edu.institution}</h3>
        <p class="education-degree">${edu.degree}</p>
        <p class="education-period">${edu.period}</p>
        <p class="education-score">${edu.score}</p>
        ${edu.status === 'current' ? '<span class="current-badge">Current</span>' : ''}
      </div>
    `;
    
    mobileTimeline.appendChild(timelineItem);
  });
  
  educationTimeline.appendChild(mobileTimeline);
}

// Generate certifications section
function generateCertifications() {
  const certificationsGrid = document.getElementById('certifications-grid');
  
  certificationsData.forEach((cert, index) => {
    const certCard = document.createElement('div');
    certCard.className = 'certification-card reveal-on-scroll';
    certCard.style.animationDelay = `${index * 200}ms`;
    
    certCard.innerHTML = `
      <div class="cert-badge">
        <i class="fas fa-certificate"></i>
      </div>
      <div class="cert-icon" style="background: ${cert.gradient}">
        <i class="${cert.icon}"></i>
      </div>
      <h3 class="cert-name">${cert.name}</h3>
      <p class="cert-provider">${cert.provider}</p>
      <div class="cert-skills">
        <h4>Skills Covered:</h4>
        ${cert.skills.map(skill => `
          <div class="skill-item">
            <div class="skill-dot" style="background: ${cert.gradient}"></div>
            <span>${skill}</span>
          </div>
        `).join('')}
      </div>
      <div class="cert-verified">
        <i class="fas fa-check-circle"></i>
        <span>Verified</span>
      </div>
    `;
    
    certificationsGrid.appendChild(certCard);
  });
}

// Scroll animations
function setupScrollAnimations() {
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('revealed');
        
        // Animate skill progress bars
        if (entry.target.classList.contains('skill-card')) {
          const progressFill = entry.target.querySelector('.skill-progress-fill');
          if (progressFill) {
            const width = progressFill.getAttribute('data-width');
            setTimeout(() => {
              progressFill.style.width = width + '%';
            }, 200);
          }
        }
      }
    });
  }, observerOptions);

  // Observe all reveal elements
  const revealElements = document.querySelectorAll('.reveal-on-scroll');
  revealElements.forEach(element => {
    observer.observe(element);
  });
}

// Contact form functionality
function setupContactForm() {
  const contactForm = document.getElementById('contact-form');
  const submitBtn = document.getElementById('submit-btn');
  
  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    // Get form data
    const formData = new FormData(contactForm);
    const data = Object.fromEntries(formData);
    
    // Simulate form submission
    submitBtn.disabled = true;
    submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i><span>Sending...</span>';
    
    setTimeout(() => {
      alert('Thank you for your message! I\'ll get back to you soon.');
      contactForm.reset();
      submitBtn.disabled = false;
      submitBtn.innerHTML = '<i class="fas fa-paper-plane"></i><span>Send Message</span>';
    }, 2000);
  });
}

// Scroll to top functionality
function setupScrollToTop() {
  const scrollToTopBtn = document.getElementById('scroll-to-top');
  
  window.addEventListener('scroll', () => {
    if (window.scrollY > 500) {
      scrollToTopBtn.classList.add('visible');
    } else {
      scrollToTopBtn.classList.remove('visible');
    }
  });
  
  scrollToTopBtn.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });
}

// Utility functions
function debounce(func, wait) {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}

// Parallax effect for hero section
window.addEventListener('scroll', debounce(() => {
  const scrolled = window.pageYOffset;
  const hero = document.querySelector('.hero');
  if (hero) {
    hero.style.transform = `translateY(${scrolled * 0.5}px)`;
  }
}, 10));

// Smooth reveal animations for different elements
function addRevealAnimations() {
  const slideLeftElements = document.querySelectorAll('.slide-in-left');
  const slideRightElements = document.querySelectorAll('.slide-in-right');
  const scaleElements = document.querySelectorAll('.scale-in');
  
  const animationObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animated');
      }
    });
  }, { threshold: 0.1 });
  
  [...slideLeftElements, ...slideRightElements, ...scaleElements].forEach(el => {
    animationObserver.observe(el);
  });
}

// Initialize reveal animations when DOM is loaded
document.addEventListener('DOMContentLoaded', addRevealAnimations);

// Add loading animation for images
function handleImageLoading() {
  const images = document.querySelectorAll('img');
  images.forEach(img => {
    img.addEventListener('load', () => {
      img.classList.add('loaded');
    });
  });
}

// Performance optimization: Lazy loading for heavy animations
function optimizeAnimations() {
  // Reduce animations if user prefers reduced motion
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    document.documentElement.style.setProperty('--animation-duration', '0.01s');
  }
  
  // Pause animations when tab is not visible
  document.addEventListener('visibilitychange', () => {
    if (document.hidden) {
      document.body.style.animationPlayState = 'paused';
    } else {
      document.body.style.animationPlayState = 'running';
    }
  });
}

// Initialize performance optimizations
document.addEventListener('DOMContentLoaded', () => {
  handleImageLoading();
  optimizeAnimations();
});

// Export functions for potential external use
window.portfolioApp = {
  scrollToSection,
  flipCard,
  initializeApp
};
