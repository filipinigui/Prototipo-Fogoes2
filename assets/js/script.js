// ========================================
// TERRIBILE FOGÕES - JAVASCRIPT PRINCIPAL
// ========================================

$(document).ready(function() {
    
    // ========================================
    // NAVBAR SCROLL
    // ========================================
    $(window).scroll(function() {
        if ($(this).scrollTop() > 50) {
            $('#mainNavbar').addClass('scrolled');
        } else {
            $('#mainNavbar').removeClass('scrolled');
        }
    });

    // ========================================
    // SMOOTH SCROLL
    // ========================================
    $('a[href^="#"]').on('click', function(e) {
        const target = $(this.hash);
        if (target.length) {
            e.preventDefault();
            $('html, body').animate({
                scrollTop: target.offset().top - 80
            }, 800);
        }
    });

    // ========================================
    // BUSCA DE PRODUTOS
    // ========================================
    
    // Busca ao clicar no botão
    $('#searchBtn').on('click', function() {
        realizarBusca();
    });

    // Busca ao pressionar Enter
    $('#searchInput').on('keypress', function(e) {
        if (e.which === 13) {
            e.preventDefault();
            realizarBusca();
        }
    });

    function realizarBusca() {
        const termo = $('#searchInput').val().toLowerCase().trim();
        
        if (termo === '') {
            alert('Por favor, digite algo para buscar.');
            return;
        }

        // Usa o array de produtos se disponível
        if (typeof getAllProducts === 'function') {
            const todosProdutos = getAllProducts();
            const resultados = todosProdutos.filter(p => 
                p.nome.toLowerCase().includes(termo) || 
                p.categoria.toLowerCase().includes(termo)
            );

            if (resultados.length > 0) {
                window.location.href = `produtos.html?busca=${encodeURIComponent(termo)}`;
            } else {
                alert('Nenhum produto encontrado. Tente outros termos de busca.');
            }
        } else {
            // Fallback se o array não estiver disponível
            window.location.href = `produtos.html?busca=${encodeURIComponent(termo)}`;
        }
    }

    // ========================================
    // INICIALIZAÇÃO AOS (ANIMATE ON SCROLL)
    // ========================================
    if (typeof AOS !== 'undefined') {
        AOS.init({
            duration: 800,
            easing: 'ease-in-out',
            once: true,
            offset: 100
        });
    }

    // ========================================
    // PRODUTOS - FILTRO E BUSCA
    // ========================================
    if ($('#produtosBusca').length) {
        // Busca na página de produtos
        $('#produtosBusca').on('keyup', function() {
            const termo = $(this).val().toLowerCase();
            
            $('.product-grid-item').each(function() {
                const nomeProduto = $(this).find('.product-grid-name').text().toLowerCase();
                if (nomeProduto.includes(termo)) {
                    $(this).fadeIn(300);
                } else {
                    $(this).fadeOut(300);
                }
            });
        });

        // Verifica se há termo de busca na URL
        const urlParams = new URLSearchParams(window.location.search);
        const buscaTermo = urlParams.get('busca');
        
        if (buscaTermo) {
            $('#produtosBusca').val(buscaTermo);
            $('#produtosBusca').trigger('keyup');
            
            // Rola para a seção de produtos
            $('html, body').animate({
                scrollTop: $('.products-catalog').offset().top - 100
            }, 500);
        }
    }

});

// ========================================
// VISUALIZAR PRODUTO
// ========================================
function viewProduct(produtoId) {
    window.location.href = `produto-detalhes.html?id=${produtoId}`;
}

// ========================================
// INTEGRAÇÃO WHATSAPP
// ========================================
function contactWhatsApp(produtoNome = null) {
    const numeroWhatsApp = '54999960180'; 
    
    let mensagem = 'Olá! Gostaria de mais informações';
    if (produtoNome) {
        mensagem += ` sobre o produto: ${produtoNome}`;
    }
    mensagem += '.';
    
    const url = `https://wa.me/${numeroWhatsApp}?text=${encodeURIComponent(mensagem)}`;
    window.open(url, '_blank');
}

// ========================================
// ACCORDION CATEGORIAS (PÁGINA PRODUTOS)
// ========================================
function toggleCategory(categoryId) {
    const category = $(`#${categoryId}`);
    const icon = category.prev().find('.toggle-icon');
    
    if (category.hasClass('show')) {
        category.removeClass('show');
        icon.html('<i class="bi bi-plus-lg"></i>');
    } else {
        // Fecha outras categorias
        $('.category-content.show').removeClass('show');
        $('.toggle-icon').html('<i class="bi bi-plus-lg"></i>');
        
        // Abre a categoria clicada
        category.addClass('show');
        icon.html('<i class="bi bi-dash-lg"></i>');
    }
}

// ========================================
// CAROUSEL PRODUTO DETALHES
// ========================================
if ($('.product-detail-carousel').length) {
    let currentSlide = 0;
    const slides = $('.carousel-image');
    const totalSlides = slides.length;

    function showSlide(index) {
        slides.removeClass('active');
        $(slides[index]).addClass('active');
        
        // Atualiza thumbnails
        $('.carousel-thumbnail').removeClass('active');
        $(`.carousel-thumbnail[data-index="${index}"]`).addClass('active');
    }

    $('.carousel-thumbnail').on('click', function() {
        currentSlide = $(this).data('index');
        showSlide(currentSlide);
    });

    $('.carousel-prev').on('click', function() {
        currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
        showSlide(currentSlide);
    });

    $('.carousel-next').on('click', function() {
        currentSlide = (currentSlide + 1) % totalSlides;
        showSlide(currentSlide);
    });
}

// ========================================
// LOADING ANIMATION
// ========================================
$(window).on('load', function() {
    $('body').addClass('loaded');
});

// ========================================
// CAROUSEL INITIALIZATION
// ========================================
$(document).ready(function() {
    // Inicializa todos os carousels do Bootstrap
    const carousels = document.querySelectorAll('.carousel');
    carousels.forEach(function(carouselElement) {
        // Cria instância do Bootstrap Carousel se ainda não existe
        if (!bootstrap.Carousel.getInstance(carouselElement)) {
            new bootstrap.Carousel(carouselElement, {
                interval: 4000, // 4 segundos
                wrap: true,     // Loop infinito
                keyboard: true, // Navegação por teclado
                pause: 'hover'  // Pausa ao passar o mouse
            });
        }
    });
    
    // Adiciona eventos de clique aos botões de controle
    document.querySelectorAll('.carousel-control-prev, .carousel-control-next').forEach(function(btn) {
        btn.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation();
            
            const target = this.getAttribute('data-bs-target');
            const direction = this.classList.contains('carousel-control-prev') ? 'prev' : 'next';
            
            if (target) {
                const carouselEl = document.querySelector(target);
                if (carouselEl) {
                    const carousel = bootstrap.Carousel.getInstance(carouselEl) || new bootstrap.Carousel(carouselEl);
                    if (direction === 'prev') {
                        carousel.prev();
                    } else {
                        carousel.next();
                    }
                }
            }
        });
    });
    
    // Debug: Log quando carousel muda
    carousels.forEach(function(carouselElement) {
        carouselElement.addEventListener('slide.bs.carousel', function (e) {
            console.log('Carousel mudando:', carouselElement.id, 'para slide:', e.to);
        });
    });
});