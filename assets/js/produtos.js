// ========================================
// FORGE INDUSTRIES - PRODUTOS DATABASE
// Array completo de produtos
// ========================================

const produtosData = {
    // Categoria 1: Fogões Industriais Vitrocerâmica
    'fogoes-vitroceramica': [
        {
            id: 'vitro-lorem1',
            nome: 'Fogão lorem 1 vitrocerâmica',
            categoria: 'Fogões Chapa Vitrocerâmica',
            descricao: 'Fogão com chapa de vitrocerâmica, resistente e bonito',
            imagem: 'assets/img/produtos/vitroceramica/fogao1.jpg',
            especificacoes: {
                material: 'Vitrocerâmica temperada',
                dimensoes: '60x60x90 cm'
            },
            mensagemWhatsApp: 'Olá! Gostaria de mais informações sobre o Fogão Lorem nº1 vitrocerâmica sem gabinete .'
        },
        {
            id: 'vitro-lorem2',
            nome: 'Fogão lorem 2 vitrocerâmica',
            categoria: 'Fogões Chapa Vitrocerâmica',
            descricao: 'Fogão com chapa vitrocerâmica ',
            imagem: 'assets/img/produtos/vitroceramica/fogao1.jpg',
            especificacoes: {
                material: 'Vitrocerâmica premium',
                dimensoes: '90x60x90 cm'
            },
            mensagemWhatsApp: 'Olá! Gostaria de um orçamento para o Fogão Lorem 2 vitrocerâmica .'
        },
        {
            id: 'vitro-lorem00',
            nome: 'Fogão lorem 00 vitrocerâmica',
            categoria: 'Fogões Chapa Vitrocerâmica',
            descricao: 'Fogão industrial grande porte com 8  e chapa vitrocerâmica',
            imagem: 'assets/img/produtos/vitroceramica/fogao1.jpg',
            mensagemWhatsApp: 'Preciso de informações sobre o Fogão Vitrocerâmico 8  Industrial.'
        },
        {
            id: 'vitro-duplacombustao',
            nome: 'Fogão dupla-combustão chapa numero 1 vitrocerâmica',
            categoria: 'Fogões Chapa Vitrocerâmica',
            descricao: 'Cooktop de embutir com 4 zonas de cocção em vitrocerâmica',
            imagem: 'assets/img/produtos/vitroceramica/fogao1.jpg',
            mensagemWhatsApp: 'Gostaria de saber mais sobre o Cooktop Vitrocerâmico 4 Zonas.'
        },
        {
            id: 'vitro-lorem1-gabinete',
            nome: 'Fogão lorem 1 vitrocerâmica com gabinete',
            categoria: 'Fogões Chapa Vitrocerâmica',
            descricao: 'Fogão completo com chapa vitrocerâmica e dois fornos independentes',
            imagem: 'assets/img/produtos/vitroceramica/fogao1.jpg',
            mensagemWhatsApp: 'Olá! Quero informações sobre o Fogão Vitrocerâmico com Duplo Forno.'
        },
        {
            id: 'vitro-lorem2-gabinete',
            nome: 'Fogão lorem 2 vitrocerâmica com gabinete',
            categoria: 'Fogões Chapa Vitrocerâmica',
            descricao: 'Fogão compacto de mesa com chapa vitrocerâmica para espaços reduzidos',
            imagem: 'assets/img/produtos/vitroceramica/fogao1.jpg',
            mensagemWhatsApp: 'Preciso de um orçamento para o Fogão de Mesa Vitrocerâmico.'
        }
    ],

    // Categoria 2: Fogões Chapa de Alumínio
    'fogoes-aluminio': [
        {
            id: 'al-lorem1',
            nome: 'Fogão Alumínio 4 ',
            categoria: 'Fogões Chapa de Alumínio',
            descricao: 'Fogão residencial com chapa de alumínio fundido, 4 ',
            imagem: 'assets/img/produtos/vitroceramica/fogao1.jpg',
            mensagemWhatsApp: 'Olá! Gostaria de informações sobre o Fogão de Alumínio 4 .'
        },
        {
            id: 'al-lorem2',
            nome: 'Fogão Alumínio 5 ',
            categoria: 'Fogões Chapa de Alumínio',
            descricao: 'Fogão com chapa de alumínio anodizado e 5 queimadores',
            imagem: 'assets/img/produtos/vitroceramica/fogao1.jpg',
            mensagemWhatsApp: 'Preciso de um orçamento para o Fogão de Alumínio 5 .'
        },
        {
            id: 'al-lorem1-gabinete',
            nome: 'Fogão Alumínio Compacto',
            categoria: 'Fogões Chapa de Alumínio',
            descricao: 'Fogão compacto com chapa de alumínio para ambientes pequenos',
            imagem: 'assets/img/produtos/vitroceramica/fogao1.jpg',
            mensagemWhatsApp: 'Olá! Preciso de informações sobre o Fogão Alumínio Compacto.'
        },
        {
            id: 'al-lorem2-gabinete',
            nome: 'Cooktop Alumínio 4 ',
            categoria: 'Fogões Chapa de Alumínio',
            descricao: 'Cooktop de embutir com chapa de alumínio polido',
            imagem: 'assets/img/produtos/vitroceramica/fogao1.jpg',
            mensagemWhatsApp: 'Quero um orçamento para o Cooktop de Alumínio 4 .'
        }
    ],

    // Categoria 3: Fogões Chapa de Ferro
    'fogoes-ferro': [
        {
            id: 'fe-lorem1',
            nome: 'Fogão Ferro Fundido 4 ',
            categoria: 'Fogões Chapa de Ferro',
            descricao: 'Fogão tradicional com chapa de ferro fundido ultra resistente',
            imagem: 'assets/img/produtos/vitroceramica/fogao1.jpg',
            mensagemWhatsApp: 'Olá! Gostaria de informações sobre o Fogão de Ferro Fundido 4 .'
        },
        {
            id: 'fe-lorem2',
            nome: 'Fogão Ferro Fundido 6 ',
            categoria: 'Fogões Chapa de Ferro',
            descricao: 'Fogão industrial com chapa de ferro fundido de alta durabilidade',
            imagem: 'assets/img/produtos/vitroceramica/fogao1.jpg',
            mensagemWhatsApp: 'Preciso de um orçamento para o Fogão de Ferro Fundido 6 .'
        },
        {
            id: 'fe-lorem3',
            nome: 'Fogão Industrial Ferro 8 ',
            categoria: 'Fogões Chapa de Ferro',
            descricao: 'Fogão industrial grande porte com chapa de ferro extra reforçada',
            imagem: 'assets/img/produtos/vitroceramica/fogao1.jpg',
            mensagemWhatsApp: 'Gostaria de saber sobre o Fogão Industrial de Ferro 8 .'
        },
        {
            id: 'fe-lorem1-gabinete',
            nome: 'Fogão Ferro à Lenha',
            categoria: 'Fogões Chapa de Ferro',
            descricao: 'Fogão tradicional à lenha com chapa de ferro fundido',
            imagem: 'assets/img/produtos/vitroceramica/fogao1.jpg',
            mensagemWhatsApp: 'Olá! Quero informações sobre o Fogão de Ferro à Lenha.'
        },
        {
            id: 'fe-lorem2-gabinete',
            nome: 'Fogão Ferro Comercial',
            categoria: 'Fogões Chapa de Ferro',
            descricao: 'Fogão para uso comercial com chapa de ferro industrial',
            imagem: 'assets/img/produtos/vitroceramica/fogao1.jpg',
            mensagemWhatsApp: 'Preciso de detalhes sobre o Fogão de Ferro Comercial.'
        },
        {
            id: 'fe-lorem3-gabinete',
            nome: 'Fogão Ferro Para Restaurante',
            categoria: 'Fogões Chapa de Ferro',
            descricao: 'Fogão profissional para restaurantes com chapa de ferro',
            imagem: 'assets/img/produtos/vitroceramica/fogao1.jpg',
            mensagemWhatsApp: 'Gostaria de um orçamento para o Fogão de Ferro Para Restaurante.'
        }
    ],

    // Categoria 4: Fogões Industriais Especiais
    'fogoes-especiais': [
        {
            id: 'fogao-industrial-10bocas',
            nome: 'Fogão Industrial 10 ',
            categoria: 'Fogões Industriais Especiais',
            descricao: 'Fogão industrial de grande capacidade com 10 queimadores',
            imagem: 'assets/img/produtos/vitroceramica/fogao1.jpg',
            mensagemWhatsApp: 'Olá! Preciso de informações sobre o Fogão Industrial 10 .'
        }
    ],

    // Categoria 8: Acessórios e Peças
    'acessorios': [
        {
            id: 'trempe-ferro-fundido',
            nome: 'Trempe Ferro Fundido',
            categoria: 'Acessórios e Peças',
            descricao: 'Trempe em ferro fundido para apoio de panelas',
            imagem: 'assets/img/produtos/vitroceramica/fogao1.jpg',
            mensagemWhatsApp: 'Olá! Gostaria de informações sobre a Trempe de Ferro Fundido.'
        },
        {
            id: 'tampa-queimador',
            nome: 'Tampa para Queimador',
            categoria: 'Acessórios e Peças',
            descricao: 'Tampa protetora para queimadores industriais',
            imagem: 'assets/img/produtos/vitroceramica/fogao1.jpg',
            mensagemWhatsApp: 'Preciso de um orçamento para Tampa de Queimador.'
        },
        {
            id: 'valvula-seguranca',
            nome: 'Válvula de Segurança',
            categoria: 'Acessórios e Peças',
            descricao: 'Válvula de segurança para fogões a gás',
            imagem: 'assets/img/produtos/vitroceramica/fogao1.jpg',
            mensagemWhatsApp: 'Gostaria de saber sobre a Válvula de Segurança.'
        },
        {
            id: 'acendedor-automatico',
            nome: 'Acendedor Automático',
            categoria: 'Acessórios e Peças',
            descricao: 'Sistema de acendimento automático para fogões',
            imagem: 'assets/img/produtos/vitroceramica/fogao1.jpg',
            mensagemWhatsApp: 'Olá! Quero informações sobre o Acendedor Automático.'
        },
        {
            id: 'regulador-gas',
            nome: 'Regulador de Gás',
            categoria: 'Acessórios e Peças',
            descricao: 'Regulador de pressão de gás industrial',
            imagem: 'assets/img/produtos/vitroceramica/fogao1.jpg',
            mensagemWhatsApp: 'Preciso de detalhes sobre o Regulador de Gás.'
        },
        {
            id: 'mangueira-gas',
            nome: 'Mangueira de Gás Reforçada',
            categoria: 'Acessórios e Peças',
            descricao: 'Mangueira de gás com malha de aço inox',
            imagem: 'assets/img/produtos/vitroceramica/fogao1.jpg',
            mensagemWhatsApp: 'Gostaria de um orçamento para Mangueira de Gás Reforçada.'
        },
        {
            id: 'botao-comando',
            nome: 'Botão de Comando',
            categoria: 'Acessórios e Peças',
            descricao: 'Botão de comando para controle de chamas',
            imagem: 'assets/img/produtos/vitroceramica/fogao1.jpg',
            mensagemWhatsApp: 'Olá! Quero saber sobre o Botão de Comando.'
        },
        {
            id: 'puxador-forno',
            nome: 'Puxador de Forno',
            categoria: 'Acessórios e Peças',
            descricao: 'Puxador resistente ao calor para portas de forno',
            imagem: 'assets/img/produtos/vitroceramica/fogao1.jpg',
            mensagemWhatsApp: 'Preciso de informações sobre o Puxador de Forno.'
        },
        {
            id: 'termostato-forno',
            nome: 'Termostato para Forno',
            categoria: 'Acessórios e Peças',
            descricao: 'Termostato de precisão para controle de temperatura',
            imagem: 'assets/img/produtos/vitroceramica/fogao1.jpg',
            mensagemWhatsApp: 'Gostaria de saber sobre o Termostato para Forno.'
        },
        {
            id: 'vidro-porta-forno',
            nome: 'Vidro Porta de Forno',
            categoria: 'Acessórios e Peças',
            descricao: 'Vidro temperado para porta de forno resistente',
            imagem: 'assets/img/produtos/vitroceramica/fogao1.jpg',
            mensagemWhatsApp: 'Olá! Quero informações sobre o Vidro Porta de Forno.'
        },
        {
            id: 'luz-interna-forno',
            nome: 'Luz Interna para Forno',
            categoria: 'Acessórios e Peças',
            descricao: 'Lâmpada especial resistente ao calor para fornos',
            imagem: 'assets/img/produtos/vitroceramica/fogao1.jpg',
            mensagemWhatsApp: 'Preciso de detalhes sobre a Luz Interna para Forno.'
        },
        {
            id: 'kit-manutencao',
            nome: 'Kit Manutenção Completo',
            categoria: 'Acessórios e Peças',
            descricao: 'Kit completo de peças para manutenção de fogões',
            imagem: 'assets/img/produtos/vitroceramica/fogao1.jpg',
            mensagemWhatsApp: 'Gostaria de um orçamento para o Kit Manutenção Completo.'
        }
    ],

}

// Função para obter todos os produtos de todas as categorias
function getAllProducts() {
    const allProducts = [];
    for (const categoria in produtosData) {
        allProducts.push(...produtosData[categoria]);
    }
    return allProducts;
}

// Função para buscar produto por ID
function getProdutoById(id) {
    for (const categoria in produtosData) {
        const produto = produtosData[categoria].find(p => p.id === id);
        if (produto) return produto;
    }
    return null;
}

// Função para buscar produtos por categoria
function getProdutosByCategoria(categoriaKey) {
    return produtosData[categoriaKey] || [];
}