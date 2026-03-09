// ========================================
// PRODUTO DETALHES - JAVASCRIPT
// ========================================

let currentSlide = 0;
const slides = document.querySelectorAll('.carousel-image');
const thumbnails = document.querySelectorAll('.carousel-thumbnail');
const totalSlides = slides.length;

// Inicializa o carousel
function initCarousel() {
    showSlide(0);
}

// Mostra um slide específico
function showSlide(index) {
    // Remove classe active de todos os slides
    slides.forEach(slide => slide.classList.remove('active'));
    thumbnails.forEach(thumb => thumb.classList.remove('active'));
    
    // Adiciona classe active ao slide e thumbnail atual
    slides[index].classList.add('active');
    thumbnails[index].classList.add('active');
    
    currentSlide = index;
}

// Vai para o slide anterior
function prevSlide() {
    currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
    showSlide(currentSlide);
}

// Vai para o próximo slide
function nextSlide() {
    currentSlide = (currentSlide + 1) % totalSlides;
    showSlide(currentSlide);
}

// Vai para um slide específico
function goToSlide(index) {
    showSlide(index);
}

// Inicializa o carousel quando a página carregar
document.addEventListener('DOMContentLoaded', function() {
    initCarousel();
    
    // Obtém o ID do produto da URL
    const urlParams = new URLSearchParams(window.location.search);
    const productId = urlParams.get('id');
    
    if (productId) {
        loadProductDetails(productId);
    }
});

// Carrega os detalhes do produto baseado no ID
function loadProductDetails(productId) {
    // Usa o array de produtos se disponível
    if (typeof getProdutoById === 'function') {
        const produto = getProdutoById(productId);
        
        if (produto) {
            // Atualiza título e categoria
            document.getElementById('productTitle').innerText = produto.nome;
            document.getElementById('productNameBreadcrumb').innerText = produto.nome;
            document.querySelector('.product-category').innerText = produto.categoria;
            document.getElementById('productCategory').innerText = produto.categoria;
            
            // Atualiza descrição se disponível
            const descElement = document.querySelector('.product-description');
            if (descElement && produto.descricao) {
                descElement.innerText = produto.descricao;
            }
            
            // Atualiza especificações se disponíveis
            if (produto.especificacoes) {
                atualizarEspecificacoes(produto.especificacoes);
            }
            
            // Atualiza botão WhatsApp
            const btnWhatsApp = document.querySelector('.btn-contact-whatsapp');
            if (btnWhatsApp && produto.mensagemWhatsApp) {
                btnWhatsApp.onclick = function() {
                    const numeroWhatsApp = '5511999999999'; // Altere para seu número
                    const url = `https://wa.me/${numeroWhatsApp}?text=${encodeURIComponent(produto.mensagemWhatsApp)}`;
                    window.open(url, '_blank');
                };
            }
            
            return;
        }
    }
    
    // Fallback - se produto não for encontrado, mostra mensagem padrão
    console.log('Produto não encontrado:', productId);
}

// Atualiza especificações do produto
function atualizarEspecificacoes(specs) {
    const specsGrid = document.querySelector('.specs-grid');
    if (!specsGrid || !specs) return;
    
    // Limpa especificações existentes
    specsGrid.innerHTML = '';
    
    // Adiciona novas especificações
    for (const [key, value] of Object.entries(specs)) {
        const label = key.charAt(0).toUpperCase() + key.slice(1).replace(/([A-Z])/g, ' $1');
        const specHTML = `
            <div class="spec-item">
                <span class="spec-label">${label}:</span>
                <span class="spec-value">${value}</span>
            </div>
        `;
        specsGrid.insertAdjacentHTML('beforeend', specHTML);
    }
}

// Navegação por teclado
document.addEventListener('keydown', function(e) {
    if (e.key === 'ArrowLeft') {
        prevSlide();
    } else if (e.key === 'ArrowRight') {
        nextSlide();
    }
});

// Auto-play (opcional)
let autoplayInterval;

function startAutoplay() {
    autoplayInterval = setInterval(nextSlide, 5000);
}

function stopAutoplay() {
    clearInterval(autoplayInterval);
}

// Para o autoplay quando o usuário interage
document.querySelector('.main-carousel').addEventListener('mouseenter', stopAutoplay);
document.querySelector('.main-carousel').addEventListener('mouseleave', startAutoplay);

// Inicia o autoplay
startAutoplay();