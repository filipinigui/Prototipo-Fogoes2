// ========================================
// PRODUTOS - CARREGAMENTO DINÂMICO - NOVO DESIGN
// ========================================

let currentFilter = 'all';

// Aguarda o DOM carregar
document.addEventListener('DOMContentLoaded', function() {
    carregarProdutosNovo();
    configurarFiltros();
    configurarAOS();
});

// Configura AOS (Animate On Scroll)
function configurarAOS() {
    if (typeof AOS !== 'undefined') {
        AOS.init({
            duration: 800,
            easing: 'ease-out',
            once: true,
            offset: 100
        });
    }
}

// Função principal para carregar produtos com novo design
function carregarProdutosNovo() {
    const grid = document.getElementById('productsGrid');
    if (!grid) return;
    
    grid.innerHTML = '';
    
    const allProducts = getAllProducts();
    let filteredProducts = allProducts;
    
    // Aplica filtro se não for 'all'
    if (currentFilter !== 'all') {
        filteredProducts = produtosData[currentFilter] || [];
    }
    
    // Exibe mensagem se não houver produtos
    const noResults = document.getElementById('noResults');
    if (filteredProducts.length === 0) {
        if (noResults) noResults.style.display = 'block';
        return;
    } else {
        if (noResults) noResults.style.display = 'none';
    }
    
    // Cria cards de produtos
    filteredProducts.forEach((produto, index) => {
        const card = criarProdutoCardNovo(produto, index);
        grid.insertAdjacentHTML('beforeend', card);
    });
}

// Cria HTML de um card de produto com novo design
function criarProdutoCardNovo(produto, index) {
    const categoryNames = {
        'Fogões Chapa Vitrocerâmica': 'Vitrocerâmica',
        'Fogões Chapa de Alumínio': 'Alumínio',
        'Fogões Chapa de Ferro': 'Ferro',
        'Acessórios e Peças': 'Acessórios',
        'Fogões Industriais Especiais': 'Industrial'
    };
    
    const categoryShort = categoryNames[produto.categoria] || produto.categoria;
    
    return `
        <div class="product-card-new" data-aos="fade-up" data-aos-delay="${index * 50}">
            <div class="product-image-new">
                <img src="${produto.imagem}">
            </div>
            <div class="product-content-new">
                <span class="product-category-badge">${categoryShort}</span>
                <h3 class="product-name-new">${produto.nome}</h3>
                <p class="product-description-new">${produto.descricao || 'Produto de alta qualidade'}</p>
                <div class="product-actions">
                    <button class="btn-view-product" onclick="viewProductNovo('${produto.id}')">
                        Ver Detalhes
                    </button>
                    <button class="btn-whatsapp-new" onclick="contactWhatsAppProductNovo('${produto.id}')">
                        <i class="bi bi-whatsapp"></i>
                    </button>
                </div>
            </div>
        </div>
    `;
}

// Configura os filtros
function configurarFiltros() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    const resetButton = document.getElementById('resetFilters');
    
    filterButtons.forEach(btn => {
        btn.addEventListener('click', function() {
            // Remove active de todos
            filterButtons.forEach(b => b.classList.remove('active'));
            
            // Adiciona active no clicado
            this.classList.add('active');
            
            // Pega a categoria
            currentFilter = this.getAttribute('data-category');
            
            // Recarrega produtos
            carregarProdutosNovo();
            
            // Reanima AOS
            if (typeof AOS !== 'undefined') {
                AOS.refresh();
            }
        });
    });
    
    if (resetButton) {
        resetButton.addEventListener('click', function() {
            currentFilter = 'all';
            filterButtons.forEach(b => b.classList.remove('active'));
            document.querySelector('[data-category="all"]').classList.add('active');
            carregarProdutosNovo();
            
            if (typeof AOS !== 'undefined') {
                AOS.refresh();
            }
        });
    }
    
    // Verifica se há filtro na URL
    const urlParams = new URLSearchParams(window.location.search);
    const filterParam = urlParams.get('filter');
    
    if (filterParam) {
        const filterBtn = document.querySelector(`[data-category="${filterParam}"]`);
        if (filterBtn) {
            filterBtn.click();
        }
    }
}

// Função para visualizar produto
window.viewProductNovo = function(produtoId) {
    window.location.href = `produto-detalhes.html?id=${produtoId}`;
};

// Função para contatar via WhatsApp
window.contactWhatsAppProductNovo = function(produtoId) {
    const produto = getProdutoById(produtoId);
    if (!produto) {
        alert('Produto não encontrado');
        return;
    }
    
    const numeroWhatsApp = '54999960180'; 
    const mensagem = produto.mensagemWhatsApp || `Olá! Gostaria de mais informações sobre ${produto.nome}.`;
    const url = `https://wa.me/${numeroWhatsApp}?text=${encodeURIComponent(mensagem)}`;
    window.open(url, '_blank');
};

// Mantém compatibilidade com código antigo
window.viewProduct = window.viewProductNovo;
window.contactWhatsAppProduct = window.contactWhatsAppProductNovo;