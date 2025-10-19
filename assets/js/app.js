// Configurações
const CONFIG = {
  scroll: {
    threshold: 100,
    behavior: 'smooth',
    block: 'start'
  },
  animation: {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px',
    duration: '0.6s',
    initialOffset: '30px'
  },
  header: {
    scrolled: {
      background: 'rgba(255, 255, 255, 0.95)',
      backdropFilter: 'blur(20px)',
      textColor: '#333'
    },
    top: {
      background: 'rgba(255, 255, 255, 0.1)',
      backdropFilter: 'blur(10px)',
      textColor: 'white'
    }
  }
};

// Utilitários
function applyStyles(element, styles) {
  if (!element) return;
  Object.assign(element.style, styles);
}

function applyStylesToAll(elements, styles) {
  elements.forEach(el => applyStyles(el, styles));
}

// Renderização de componentes
function initializeComponents() {
  renderProjects(projects, "projects-container");
  renderSkillSection(skillsData, "skills-container"); 
}

// Smooth Scroll
function initializeSmoothScroll() {
  const anchorLinks = document.querySelectorAll('a[href^="#"]');

  anchorLinks.forEach(link => {
    link.addEventListener('click', handleAnchorClick);
  });
}

function handleAnchorClick(event) {
  event.preventDefault();

  const targetId = this.getAttribute('href');
  const targetElement = document.querySelector(targetId);

  if (targetElement) {
    targetElement.scrollIntoView({
      behavior: CONFIG.scroll.bahavior,
      block: CONFIG.scroll.block
    });
  }
}

// Header scroll effect
function initializeHeaderScroll() {
  let lastScrollPosition = 0;
  let ticking = false;

  window.addEventListener('scroll', () => {
    lastScrollPosition = window.scrollY;

    if (!ticking) {
      window.requestAnimationFrame(() => {
        updateHeader(lastScrollPosition);
        ticking = false;
      });
      ticking = true;
    }
  });
}

function updateHeader(scrollPosition) {
  const header = document.querySelector('header');
  const logo = document.querySelector('.logo');
  const links = document.querySelectorAll('.nav-links a');

  if (!header) return;

  const isScrolled = scrollPosition > CONFIG.scroll.threshold;
  const styles = isScrolled ? CONFIG.header.scrolled : CONFIG.header.top;

  applyStyles(header, {
    background: styles.background,
    backdropFilter: styles.backdropFilter
  });

  applyStyles(logo, { color: styles.textColor });
  applyStylesToAll(links, { color: styles.textColor });
}

// Form handler
function initializeFormHandler() {
  const form = document.querySelector('.contact-form');

  if (!form) {
    console.warn('Formulátio de contato não encontrado');
    return;
  }

  form.addEventListener('submit', handleFormSubmit);
}

function handleFormSubmit(event) {
  event.preventDefault();

  const formData = new FormData(this);
  const data = Object.fromEntries(formData.entries());

  this.reset();
}

// Scroll animations
function initializeScrollAnimations() {
  const elements = document.querySelectorAll('.project-card, .skill-category');

  if (elements.length === 0) {
    console.warn('Nenhum elemento para animar encontrado');
    return;
  }

  const observer = createIntersectionObserver();

  elements.forEach(element => {
    prepareElementForAnimation(element);
    observer.observe(element);
  });
}

function createIntersectionObserver() {
  const options = {
    threshold: CONFIG.animation.threshold,
    rootMargin: CONFIG.animation.rootMargin
  };

  return new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        animateElement(entry.target);
        observer.unobserve(entry.target);
      }
    });
  }, options);
}

function prepareElementForAnimation(element) {
  applyStyles(element, {
    opacity: '0',
    transform: 'translateY(${CONFIG.animation.initialOffset})',
    transition: 'all ${CONFIG.animation.duration} ease'
  });
}

function animateElement(element) {
  applyStyles(element, {
    opacity: '1',
    transform: 'translateY(0)'
  });
}

// Inicialização principal
function initializeApp() {
  initializeComponents();
  initializeSmoothScroll();
  initializeHeaderScroll();
  initializeFormHandler();
  initializeScrollAnimations();
}

// Aguarda o DOM estar completamente carregado
document.addEventListener('DOMContentLoaded', initializeApp);

