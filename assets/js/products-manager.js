/**
 * TERRIBILE FOGÕES - PRODUCTS MANAGER
 * Filtragem e renderização de produtos na página de produtos.
 */

(function () {
  "use strict";

  const productsGrid = document.getElementById("products-grid");
  if (!productsGrid || typeof produtosData === "undefined") return;

  /**
   * Retorna todos os produtos de todas as categorias como array plano.
   */
  function getAllProductsFlat() {
    const products = [];
    Object.values(produtosData).forEach(function (category) {
      products.push(...category);
    });
    return products;
  }

  /**
   * Mapeia a chave da URL (?filter=fogoes-vitroceramica) para o valor
   * usado no atributo data-filter dos botões de filtro.
   */
  function getFilterValueFromUrl(urlKey) {
    const map = {
      "fogoes-vitroceramica": "Vitrocerâmica",
      "fogoes-aluminio": "Alumínio",
      "fogoes-ferro": "Ferro",
      acessorios: "Acessórios",
    };
    return map[urlKey] || null;
  }

  /**
   * Obtém a primeira imagem de um produto.
   * Suporta tanto o campo "imagens" (array) quanto "imagem" (string legada).
   */
  function getProductImage(product) {
    if (product.imagens && product.imagens.length > 0) {
      return product.imagens[0];
    }
    return product.imagem || "";
  }

  /**
   * Cria o HTML de um card de produto.
   */
  function createProductCard(product) {
    const categoryShort = product.categoria
      .replace("Fogões Chapa ", "")
      .replace("Acessórios e Peças", "Acessórios");

    const imageSrc = getProductImage(product);
    const imageHtml =
      imageSrc.trim() !== ""
        ? '<img src="' +
          imageSrc +
          '" alt="' +
          product.nome +
          '" onerror="this.parentElement.innerHTML=\'<div class=&quot;product-card__placeholder&quot;>🔥</div>\'">'
        : '<div class="product-card__placeholder">🔥</div>';

    return [
      '<div class="product-card">',
      '  <div class="product-card__image">',
      "    " + imageHtml,
      "  </div>",
      '  <div class="product-card__info">',
      '    <div class="product-card__category">' + categoryShort + "</div>",
      '    <h3 class="product-card__title">' + product.nome + "</h3>",
      '    <p class="product-card__description">' +
        (product.descricao || "Fogão artesanal de alta qualidade.") +
        "</p>",
      '    <div class="product-card__actions">',
      '      <button class="btn btn--view" onclick="viewProduct(\'' +
        product.id +
        '\')">Ver Detalhes</button>',
      '      <a href="https://wa.me/54999960180?text=' +
        encodeURIComponent(
          product.mensagemWhatsApp || "Olá! Gostaria de mais informações."
        ) +
        '" class="btn btn--whatsapp" target="_blank">WhatsApp</a>',
      "    </div>",
      "  </div>",
      "</div>",
    ].join("\n");
  }

  /**
   * Renderiza produtos no grid. Exibe mensagem "sem resultados" se vazio.
   */
  function renderProducts(products) {
    const noResults = document.getElementById("no-results");

    if (products.length === 0) {
      productsGrid.style.display = "none";
      if (noResults) noResults.style.display = "block";
      return;
    }

    productsGrid.style.display = "grid";
    if (noResults) noResults.style.display = "none";

    productsGrid.innerHTML = products.map(createProductCard).join("");
  }

  /**
   * Filtra produtos pelo valor do botão (ex: "Vitrocerâmica").
   * Usa includes() para ser tolerante a categoria longa (ex: "Fogões Chapa Vitrocerâmica").
   */
  function filterProducts(filter) {
    const all = getAllProductsFlat();
    if (filter === "all") {
      renderProducts(all);
      return;
    }
    renderProducts(
      all.filter(function (p) {
        return p.categoria.includes(filter);
      })
    );
  }

  /**
   * Configura os botões de filtro com estado ativo e callback de filtragem.
   */
  function initFilters() {
    const filterButtons = document.querySelectorAll(".filter-btn");

    filterButtons.forEach(function (btn) {
      btn.addEventListener("click", function () {
        filterButtons.forEach(function (b) {
          b.classList.remove("active");
        });
        this.classList.add("active");
        filterProducts(this.getAttribute("data-filter"));
      });
    });
  }

  /**
   * Aplica filtro inicial baseado no parâmetro ?filter= da URL.
   */
  function initFromUrl() {
    const urlParams = new URLSearchParams(window.location.search);
    const filterParam = urlParams.get("filter");
    if (!filterParam) return;

    const filterValue = getFilterValueFromUrl(filterParam);
    if (!filterValue) return;

    const btn = document.querySelector('[data-filter="' + filterValue + '"]');
    if (btn) btn.click();
  }

  function init() {
    renderProducts(getAllProductsFlat());
    initFilters();
    initFromUrl();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
