/**
 * TERRIBILE FOGÕES - PRODUCT DETAILS
 * Product detail page functionality
 */

(function () {
  "use strict";

  /**
   * Product Gallery Management
   */
  class ProductGallery {
    constructor(galleryElement) {
      this.gallery = galleryElement;
      this.images = galleryElement.querySelectorAll(".product-gallery__image");
      this.thumbnails = galleryElement.querySelectorAll(
        ".product-gallery__thumbnail",
      );
      this.currentIndex = 0;
      this.init();
    }

    init() {
      this.setupThumbnails();
      this.setupNavigation();
      this.setupKeyboard();
    }

    setupThumbnails() {
      this.thumbnails.forEach((thumb, index) => {
        thumb.addEventListener("click", () => this.goToSlide(index));
      });
    }

    setupNavigation() {
      const prevBtn = this.gallery.querySelector(
        ".product-gallery__nav-btn--prev",
      );
      const nextBtn = this.gallery.querySelector(
        ".product-gallery__nav-btn--next",
      );

      if (prevBtn) {
        prevBtn.addEventListener("click", () => this.previousSlide());
      }

      if (nextBtn) {
        nextBtn.addEventListener("click", () => this.nextSlide());
      }
    }

    setupKeyboard() {
      document.addEventListener("keydown", (e) => {
        if (e.key === "ArrowLeft") {
          this.previousSlide();
        } else if (e.key === "ArrowRight") {
          this.nextSlide();
        }
      });
    }

    goToSlide(index) {
      // Remove active from all
      this.images.forEach((img) => img.classList.remove("active"));
      this.thumbnails.forEach((thumb) => thumb.classList.remove("active"));

      // Add active to current
      if (this.images[index]) {
        this.images[index].classList.add("active");
      }
      if (this.thumbnails[index]) {
        this.thumbnails[index].classList.add("active");
      }

      this.currentIndex = index;
    }

    nextSlide() {
      const nextIndex = (this.currentIndex + 1) % this.images.length;
      this.goToSlide(nextIndex);
    }

    previousSlide() {
      const prevIndex =
        (this.currentIndex - 1 + this.images.length) % this.images.length;
      this.goToSlide(prevIndex);
    }
  }

  /**
   * Product Tabs Management
   */
  class ProductTabs {
    constructor(tabsElement) {
      this.tabsElement = tabsElement;
      this.buttons = tabsElement.querySelectorAll(".product-tabs__btn");
      this.contents = tabsElement.querySelectorAll(".product-tabs__content");
      this.init();
    }

    init() {
      this.buttons.forEach((button, index) => {
        button.addEventListener("click", () => this.switchTab(index));
      });
    }

    switchTab(index) {
      // Remove active from all
      this.buttons.forEach((btn) => btn.classList.remove("active"));
      this.contents.forEach((content) => content.classList.remove("active"));

      // Add active to selected
      if (this.buttons[index]) {
        this.buttons[index].classList.add("active");
      }
      if (this.contents[index]) {
        this.contents[index].classList.add("active");
      }
    }
  }

  /**
   * Load product data from URL
   */
  function loadProductData() {
    const urlParams = new URLSearchParams(window.location.search);
    const productId = urlParams.get("id");

    if (!productId || typeof produtosData === "undefined") {
      console.warn("Product ID not found or product data not loaded");
      return;
    }

    // Find product in data
    let product = null;
    Object.values(produtosData).forEach((category) => {
      const found = category.find((p) => p.id === productId);
      if (found) {
        product = found;
      }
    });

    if (!product) {
      console.warn("Product not found:", productId);
      return;
    }

    // Update page with product data
    updateProductInfo(product);
  }

  /**
   * Update page with product information
   */
  function updateProductInfo(product) {
    // Update title
    const titleElement = document.querySelector(".product-info__title");
    if (titleElement) {
      titleElement.textContent = product.nome;
    }

    // Update breadcrumb
    const breadcrumbProduct = document.querySelector(".breadcrumb-item.active");
    if (breadcrumbProduct) {
      breadcrumbProduct.textContent = product.nome;
    }

    // Update category
    const categoryElement = document.querySelector(".product-info__category");
    if (categoryElement) {
      categoryElement.textContent = product.categoria;
    }

    // Update description
    const descriptionElement = document.querySelector(
      ".product-info__description",
    );
    if (descriptionElement && product.descricao) {
      descriptionElement.textContent = product.descricao;
    }

    // Update specs if available
    if (product.especificacoes) {
      updateSpecs(product.especificacoes);
    }

    // Update gallery if images available
    if (product.imagens && product.imagens.length > 0) {
      updateGallery(product.imagens);
    } else if (product.imagem) {
      // Backward compatibility: se tiver só 'imagem' (singular), converte para array
      updateGallery([product.imagem]);
    }
  }

  /**
   * Update specifications
   */
  function updateSpecs(specs) {
    const specsGrid = document.querySelector(".product-specs__grid");
    if (!specsGrid || !specs) return;

    // Clear existing specs
    specsGrid.innerHTML = "";

    // Add new specs
    Object.entries(specs).forEach(([key, value]) => {
      const specItem = document.createElement("div");
      specItem.className = "product-specs__item";
      specItem.innerHTML = `
        <span class="product-specs__label">${key}:</span>
        <span class="product-specs__value">${value}</span>
      `;
      specsGrid.appendChild(specItem);
    });
  }

  /**
   * Update gallery with product images
   */
  function updateGallery(images) {
    const mainContainer = document.querySelector(".product-gallery__main");
    const thumbnailsContainer = document.querySelector(
      ".product-gallery__thumbnails",
    );
    const placeholder = document.querySelector(".product-gallery__placeholder");

    if (!mainContainer || !thumbnailsContainer) return;

    // Se não tem imagens, mantém placeholder
    if (!images || images.length === 0) {
      if (placeholder) {
        placeholder.style.display = "flex";
      }
      return;
    }

    // Esconde placeholder
    if (placeholder) {
      placeholder.style.display = "none";
    }

    // Limpa container principal
    const existingImages = mainContainer.querySelectorAll(
      ".product-gallery__image",
    );
    existingImages.forEach((img) => img.remove());

    // Limpa thumbnails
    thumbnailsContainer.innerHTML = "";

    // Adiciona cada imagem
    images.forEach((imageUrl, index) => {
      // Adiciona imagem principal
      const img = document.createElement("img");
      img.src = imageUrl;
      img.alt = `Produto - Imagem ${index + 1}`;
      img.className = "product-gallery__image";
      if (index === 0) {
        img.classList.add("active");
      }
      mainContainer.insertBefore(
        img,
        mainContainer.querySelector(".product-gallery__nav"),
      );

      // Adiciona thumbnail
      const thumb = document.createElement("div");
      thumb.className = "product-gallery__thumbnail";
      if (index === 0) {
        thumb.classList.add("active");
      }

      const thumbImg = document.createElement("img");
      thumbImg.src = imageUrl;
      thumbImg.alt = `Thumbnail ${index + 1}`;
      thumb.appendChild(thumbImg);

      thumbnailsContainer.appendChild(thumb);
    });

    // Reinicializa galeria se necessário
    const gallery = document.querySelector(".product-gallery");
    if (gallery && window.ProductGallery) {
      new window.ProductGallery(gallery);
    }
  }

  /**
   * Initialize page
   */
  function init() {
    // Initialize gallery
    const gallery = document.querySelector(".product-gallery");
    if (gallery) {
      new ProductGallery(gallery);
    }

    // Initialize tabs
    const tabs = document.querySelector(".product-tabs");
    if (tabs) {
      new ProductTabs(tabs);
    }

    // Load product data
    loadProductData();
  }

  // Initialize when DOM is ready
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }

  // Expose functions globally if needed
  window.ProductGallery = ProductGallery;
  window.ProductTabs = ProductTabs;
})();
