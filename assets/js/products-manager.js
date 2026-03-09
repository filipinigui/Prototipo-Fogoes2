/**
 * TERRIBILE FOGÕES - PRODUCTS MANAGER
 * Product filtering and rendering
 */

(function() {
  'use strict';

  // Check if we're on the products page
  const productsGrid = document.getElementById('products-grid');
  if (!productsGrid || typeof produtosData === 'undefined') {
    return;
  }

  /**
   * Get all products as flat array
   */
  function getAllProducts() {
    const products = [];
    Object.values(produtosData).forEach(function(category) {
      products.push(...category);
    });
    return products;
  }

  /**
   * Get category name from filter key
   */
  function getCategoryName(key) {
    const map = {
      'fogoes-vitroceramica': 'Vitrocerâmica',
      'fogoes-aluminio': 'Alumínio',
      'fogoes-ferro': 'Ferro',
      'acessorios': 'Acessórios'
    };
    return map[key] || 'all';
  }

  /**
   * Create product card HTML
   */
  function createProductCard(product) {
    const categoryShort = product.categoria
      .replace('Fogões Chapa ', '')
      .replace('Acessórios e Peças', 'Acessórios');
    
    const imageHtml = product.imagem && product.imagem.trim() !== ''
      ? '<img src="' + product.imagem + '" alt="' + product.nome + '" onerror="this.parentElement.innerHTML=\'<div class=&quot;product-card__placeholder&quot;>🔥</div>\'">'
      : '<div class="product-card__placeholder">🔥</div>';
    
    return [
      '<div class="product-card">',
        '<div class="product-card__image">',
          imageHtml,
        '</div>',
        '<div class="product-card__info">',
          '<div class="product-card__category">' + categoryShort + '</div>',
          '<h3 class="product-card__title">' + product.nome + '</h3>',
          '<p class="product-card__description">' + (product.descricao || 'Fogão artesanal de alta qualidade.') + '</p>',
          '<div class="product-card__actions">',
            '<button class="btn btn--view" onclick="viewProduct(\'' + product.id + '\')">Ver Detalhes</button>',
            '<a href="https://wa.me/54999960180?text=' + encodeURIComponent(product.mensagemWhatsApp || 'Olá! Gostaria de mais informações.') + '" class="btn btn--whatsapp" target="_blank">WhatsApp</a>',
          '</div>',
        '</div>',
      '</div>'
    ].join('');
  }

  /**
   * Render products to grid
   */
  function renderProducts(products) {
    const noResults = document.getElementById('no-results');
    
    if (products.length === 0) {
      productsGrid.style.display = 'none';
      if (noResults) {
        noResults.style.display = 'block';
      }
      return;
    }

    productsGrid.style.display = 'grid';
    if (noResults) {
      noResults.style.display = 'none';
    }

    const html = products.map(createProductCard).join('');
    productsGrid.innerHTML = html;
  }

  /**
   * Filter products by category
   */
  function filterProducts(filter) {
    const allProducts = getAllProducts();
    
    if (filter === 'all') {
      renderProducts(allProducts);
      return;
    }

    const filtered = allProducts.filter(function(product) {
      return product.categoria.includes(filter);
    });

    renderProducts(filtered);
  }

  /**
   * Initialize product filtering
   */
  function initFilters() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    
    filterButtons.forEach(function(btn) {
      btn.addEventListener('click', function() {
        // Update active state
        filterButtons.forEach(function(b) {
          b.classList.remove('active');
        });
        this.classList.add('active');
        
        // Filter products
        const filter = this.getAttribute('data-filter');
        filterProducts(filter);
      });
    });
  }

  /**
   * Initialize from URL parameters
   */
  function initFromUrl() {
    const urlParams = new URLSearchParams(window.location.search);
    const filterParam = urlParams.get('filter');
    
    if (filterParam) {
      const categoryName = getCategoryName(filterParam);
      const filterBtn = document.querySelector('[data-filter="' + categoryName + '"]');
      
      if (filterBtn) {
        filterBtn.click();
      }
    }
  }

  /**
   * Initialize products page
   */
  function init() {
    renderProducts(getAllProducts());
    initFilters();
    initFromUrl();
  }

  // Initialize when DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

})();
