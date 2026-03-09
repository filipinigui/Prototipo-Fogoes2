// ========================================
// TERRIBILE FOGÕES - JAVASCRIPT SIMPLIFICADO
// Modern & Clean Implementation
// ========================================

class TerribileWebsite {
  constructor() {
    this.init();
  }

  init() {
    this.setupNavbar();
    this.setupSmoothScroll();
    this.setupAnimations();
    this.setupForms();
  }

  // Navbar com scroll effect
  setupNavbar() {
    const navbar = document.querySelector('.navbar-terribile');
    const navbarToggle = document.querySelector('.navbar-toggle');
    const navbarMenu = document.querySelector('.navbar-menu');
    
    // Scroll effect
    window.addEventListener('scroll', () => {
      if (window.scrollY > 50) {
        navbar?.classList.add('scrolled');
      } else {
        navbar?.classList.remove('scrolled');
      }
    });

    // Mobile menu toggle
    navbarToggle?.addEventListener('click', () => {
      navbarMenu?.classList.toggle('active');
      navbarToggle.classList.toggle('active');
    });

    // Close menu on link click
    document.querySelectorAll('.navbar-link').forEach(link => {
      link.addEventListener('click', () => {
        navbarMenu?.classList.remove('active');
        navbarToggle?.classList.remove('active');
      });
    });

    // Active link on scroll
    this.updateActiveLink();
    window.addEventListener('scroll', () => this.updateActiveLink());
  }

  updateActiveLink() {
    const sections = document.querySelectorAll('section[id]');
    const scrollY = window.pageYOffset;

    sections.forEach(section => {
      const sectionHeight = section.offsetHeight;
      const sectionTop = section.offsetTop - 100;
      const sectionId = section.getAttribute('id');
      const navLink = document.querySelector(`.navbar-link[href="#${sectionId}"]`);

      if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
        navLink?.classList.add('active');
      } else {
        navLink?.classList.remove('active');
      }
    });
  }

  // Smooth scroll
  setupSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', (e) => {
        const href = anchor.getAttribute('href');
        if (href === '#') return;

        e.preventDefault();
        const target = document.querySelector(href);
        
        if (target) {
          const offsetTop = target.offsetTop - 80;
          window.scrollTo({
            top: offsetTop,
            behavior: 'smooth'
          });
        }
      });
    });
  }

  // Animações ao scroll (Intersection Observer)
  setupAnimations() {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -100px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-in');
          
          // Anima elementos filhos com delay
          const children = entry.target.querySelectorAll('.animate-child');
          children.forEach((child, index) => {
            setTimeout(() => {
              child.classList.add('animate-in');
            }, index * 100);
          });
        }
      });
    }, observerOptions);

    document.querySelectorAll('[data-animate]').forEach(el => {
      observer.observe(el);
    });
  }

  // Formulários e validação
  setupForms() {
    const forms = document.querySelectorAll('form[data-validate]');
    
    forms.forEach(form => {
      form.addEventListener('submit', (e) => {
        e.preventDefault();
        
        if (this.validateForm(form)) {
          this.submitForm(form);
        }
      });
    });
  }

  validateForm(form) {
    let isValid = true;
    const inputs = form.querySelectorAll('input[required], textarea[required]');

    inputs.forEach(input => {
      if (!input.value.trim()) {
        this.showError(input, 'Este campo é obrigatório');
        isValid = false;
      } else {
        this.clearError(input);
      }

      // Email validation
      if (input.type === 'email' && input.value.trim()) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(input.value)) {
          this.showError(input, 'Email inválido');
          isValid = false;
        }
      }

      // Phone validation
      if (input.type === 'tel' && input.value.trim()) {
        const phoneRegex = /^\(\d{2}\)\s?\d{4,5}-?\d{4}$/;
        if (!phoneRegex.test(input.value)) {
          this.showError(input, 'Telefone inválido');
          isValid = false;
        }
      }
    });

    return isValid;
  }

  showError(input, message) {
    const parent = input.parentElement;
    let error = parent.querySelector('.error-message');
    
    if (!error) {
      error = document.createElement('span');
      error.className = 'error-message';
      parent.appendChild(error);
    }
    
    error.textContent = message;
    input.classList.add('error');
  }

  clearError(input) {
    const parent = input.parentElement;
    const error = parent.querySelector('.error-message');
    
    if (error) {
      error.remove();
    }
    
    input.classList.remove('error');
  }

  submitForm(form) {
    const formData = new FormData(form);
    const data = Object.fromEntries(formData);
    
    console.log('Form data:', data);
    
    // Aqui você pode adicionar a lógica de envio real
    this.showSuccess('Mensagem enviada com sucesso!');
    form.reset();
  }

  showSuccess(message) {
    const toast = document.createElement('div');
    toast.className = 'toast-success';
    toast.textContent = message;
    document.body.appendChild(toast);

    setTimeout(() => {
      toast.classList.add('show');
    }, 10);

    setTimeout(() => {
      toast.classList.remove('show');
      setTimeout(() => toast.remove(), 300);
    }, 3000);
  }
}

// Carousel simplificado
class SimpleCarousel {
  constructor(element) {
    this.carousel = element;
    this.items = element.querySelectorAll('.carousel-item');
    this.currentIndex = 0;
    this.autoplayInterval = null;
    
    this.init();
  }

  init() {
    this.showItem(0);
    this.setupControls();
    this.startAutoplay();
  }

  setupControls() {
    const prevBtn = this.carousel.querySelector('.carousel-prev');
    const nextBtn = this.carousel.querySelector('.carousel-next');
    
    prevBtn?.addEventListener('click', () => this.prev());
    nextBtn?.addEventListener('click', () => this.next());

    // Keyboard navigation
    document.addEventListener('keydown', (e) => {
      if (e.key === 'ArrowLeft') this.prev();
      if (e.key === 'ArrowRight') this.next();
    });

    // Touch/swipe support
    let startX = 0;
    this.carousel.addEventListener('touchstart', (e) => {
      startX = e.touches[0].clientX;
    });

    this.carousel.addEventListener('touchend', (e) => {
      const endX = e.changedTouches[0].clientX;
      const diff = startX - endX;
      
      if (Math.abs(diff) > 50) {
        diff > 0 ? this.next() : this.prev();
      }
    });

    // Pause on hover
    this.carousel.addEventListener('mouseenter', () => this.stopAutoplay());
    this.carousel.addEventListener('mouseleave', () => this.startAutoplay());
  }

  showItem(index) {
    this.items.forEach((item, i) => {
      item.classList.toggle('active', i === index);
    });
    this.currentIndex = index;
  }

  next() {
    const nextIndex = (this.currentIndex + 1) % this.items.length;
    this.showItem(nextIndex);
  }

  prev() {
    const prevIndex = (this.currentIndex - 1 + this.items.length) % this.items.length;
    this.showItem(prevIndex);
  }

  startAutoplay(interval = 5000) {
    this.stopAutoplay();
    this.autoplayInterval = setInterval(() => this.next(), interval);
  }

  stopAutoplay() {
    if (this.autoplayInterval) {
      clearInterval(this.autoplayInterval);
      this.autoplayInterval = null;
    }
  }
}

// Produtos - Navegação e filtros simplificados
class ProductsManager {
  constructor() {
    this.products = [];
    this.currentFilter = 'all';
    this.init();
  }

  init() {
    this.loadProducts();
    this.setupFilters();
  }

  loadProducts() {
    // Produtos serão carregados do produtos.js existente
    if (typeof produtosData !== 'undefined') {
      this.products = this.flattenProducts(produtosData);
      this.renderProducts();
    }
  }

  flattenProducts(data) {
    const products = [];
    Object.values(data).forEach(category => {
      products.push(...category);
    });
    return products;
  }

  setupFilters() {
    const filterButtons = document.querySelectorAll('[data-filter]');
    
    filterButtons.forEach(btn => {
      btn.addEventListener('click', () => {
        this.currentFilter = btn.dataset.filter;
        filterButtons.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        this.renderProducts();
      });
    });
  }

  renderProducts() {
    const container = document.querySelector('#products-grid');
    if (!container) return;

    const filtered = this.currentFilter === 'all' 
      ? this.products 
      : this.products.filter(p => p.categoria.includes(this.currentFilter));

    container.innerHTML = filtered.map(product => this.createProductCard(product)).join('');
  }

  createProductCard(product) {
    return `
      <div class="product-card" data-animate>
        <div class="product-image">
          ${product.imagem ? 
            `<img src="${product.imagem}" alt="${product.nome}">` : 
            `<div class="product-placeholder"></div>`
          }
        </div>
        <div class="product-info">
          <h3>${product.nome}</h3>
          <p>${product.descricao || ''}</p>
          <div class="product-actions">
            <button class="btn-view" onclick="viewProduct('${product.id}')">
              Ver Detalhes
            </button>
            <a href="https://wa.me/54999960180?text=${encodeURIComponent(product.mensagemWhatsApp || 'Olá!')}" 
               class="btn-whatsapp" target="_blank">
              WhatsApp
            </a>
          </div>
        </div>
      </div>
    `;
  }
}

// Funções utilitárias globais
function viewProduct(id) {
  window.location.href = `produto-detalhes.html?id=${id}`;
}

function contactWhatsApp(message = 'Olá! Gostaria de mais informações.') {
  const phone = '54999960180';
  window.open(`https://wa.me/${phone}?text=${encodeURIComponent(message)}`, '_blank');
}

// Inicialização
document.addEventListener('DOMContentLoaded', () => {
  // Inicializa website principal
  new TerribileWebsite();

  // Inicializa carousels
  document.querySelectorAll('.carousel').forEach(carousel => {
    new SimpleCarousel(carousel);
  });

  // Inicializa produtos (se estiver na página de produtos)
  if (document.querySelector('#products-grid')) {
    new ProductsManager();
  }

  // Loading fade-out
  setTimeout(() => {
    document.body.classList.add('loaded');
  }, 100);
});

// Export para uso global
window.TerribileWebsite = TerribileWebsite;
window.SimpleCarousel = SimpleCarousel;
window.ProductsManager = ProductsManager;
