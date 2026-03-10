// ========================================
// TERRIBILE FOGÕES - PRODUTOS DATABASE
// Todos os produtos com múltiplas imagens
// ========================================

const produtosData = {
    // ====================================
    // CATEGORIA 1: FOGÕES VITROCERÂMICA
    // ====================================
    'fogoes-vitroceramica': [
        {
            id: 'vitro-lorem1',
            nome: 'Fogão Lorem 1 Vitrocerâmica',
            categoria: 'Fogões Chapa Vitrocerâmica',
            descricao: 'Fogão artesanal com chapa de vitrocerâmica temperada, resistente e elegante. Ideal para cozinhas residenciais que buscam durabilidade e beleza.',
            imagens: [
                'assets/img/produtos/vitroceramica/fogao1-frente.jpg',
                'assets/img/produtos/vitroceramica/fogao1-lateral.jpg',
                'assets/img/produtos/vitroceramica/fogao1-topo.jpg',
                'assets/img/produtos/vitroceramica/fogao1-detalhe.jpg'
            ],
            especificacoes: {
                material: 'Vitrocerâmica temperada',
                dimensoes: '60x60x90 cm',
                bocas: '4',
                peso: '45kg'
            },
            mensagemWhatsApp: 'Olá! Gostaria de mais informações sobre o Fogão Lorem nº1 vitrocerâmica sem gabinete.'
        },
        {
            id: 'vitro-lorem2',
            nome: 'Fogão Lorem 2 Vitrocerâmica',
            categoria: 'Fogões Chapa Vitrocerâmica',
            descricao: 'Fogão premium com chapa vitrocerâmica de alta resistência. Design moderno e funcionalidade superior para sua cozinha.',
            imagens: [
                'assets/img/produtos/vitroceramica/fogao2-frente.jpg',
                'assets/img/produtos/vitroceramica/fogao2-lateral.jpg',
                'assets/img/produtos/vitroceramica/fogao2-topo.jpg',
                'assets/img/produtos/vitroceramica/fogao2-detalhe.jpg'
            ],
            especificacoes: {
                material: 'Vitrocerâmica premium',
                dimensoes: '90x60x90 cm',
                bocas: '5',
                peso: '52kg'
            },
            mensagemWhatsApp: 'Olá! Gostaria de um orçamento para o Fogão Lorem 2 vitrocerâmica.'
        },
        {
            id: 'vitro-lorem00',
            nome: 'Fogão Lorem 00 Vitrocerâmica',
            categoria: 'Fogões Chapa Vitrocerâmica',
            descricao: 'Fogão industrial grande porte com 8 bocas e chapa vitrocerâmica. Perfeito para restaurantes e cozinhas comerciais.',
            imagens: [
                'assets/img/produtos/vitroceramica/fogao00-frente.jpg',
                'assets/img/produtos/vitroceramica/fogao00-lateral.jpg',
                'assets/img/produtos/vitroceramica/fogao00-topo.jpg',
                'assets/img/produtos/vitroceramica/fogao00-uso.jpg'
            ],
            especificacoes: {
                material: 'Vitrocerâmica industrial',
                dimensoes: '120x80x90 cm',
                bocas: '8',
                peso: '85kg'
            },
            mensagemWhatsApp: 'Preciso de informações sobre o Fogão Vitrocerâmico 8 bocas Industrial.'
        },
        {
            id: 'vitro-duplacombustao',
            nome: 'Fogão Dupla Combustão Vitrocerâmica',
            categoria: 'Fogões Chapa Vitrocerâmica',
            descricao: 'Fogão especial com sistema de dupla combustão e chapa vitrocerâmica. Eficiência energética superior.',
            imagens: [
                'assets/img/produtos/vitroceramica/dupla-frente.jpg',
                'assets/img/produtos/vitroceramica/dupla-lateral.jpg',
                'assets/img/produtos/vitroceramica/dupla-topo.jpg',
                'assets/img/produtos/vitroceramica/dupla-detalhe.jpg'
            ],
            especificacoes: {
                material: 'Vitrocerâmica especial',
                dimensoes: '70x70x95 cm',
                bocas: '4',
                peso: '58kg',
                sistema: 'Dupla combustão'
            },
            mensagemWhatsApp: 'Gostaria de saber mais sobre o Fogão Dupla Combustão Vitrocerâmico.'
        },
        {
            id: 'vitro-lorem1-gabinete',
            nome: 'Fogão Lorem 1 Vitrocerâmica com Gabinete',
            categoria: 'Fogões Chapa Vitrocerâmica',
            descricao: 'Fogão completo com chapa vitrocerâmica e gabinete integrado. Inclui forno e armazenamento.',
            imagens: [
                'assets/img/produtos/vitroceramica/gabinete1-frente.jpg',
                'assets/img/produtos/vitroceramica/gabinete1-lateral.jpg',
                'assets/img/produtos/vitroceramica/gabinete1-aberto.jpg',
                'assets/img/produtos/vitroceramica/gabinete1-detalhe.jpg'
            ],
            especificacoes: {
                material: 'Vitrocerâmica temperada',
                dimensoes: '60x60x140 cm',
                bocas: '4',
                peso: '75kg',
                forno: 'Incluso'
            },
            mensagemWhatsApp: 'Olá! Quero informações sobre o Fogão Vitrocerâmico com Gabinete.'
        },
        {
            id: 'vitro-lorem2-gabinete',
            nome: 'Fogão Lorem 2 Vitrocerâmica com Gabinete',
            categoria: 'Fogões Chapa Vitrocerâmica',
            descricao: 'Fogão premium com chapa vitrocerâmica e gabinete completo. Design elegante e alta funcionalidade.',
            imagens: [
                'assets/img/produtos/vitroceramica/gabinete2-frente.jpg',
                'assets/img/produtos/vitroceramica/gabinete2-lateral.jpg',
                'assets/img/produtos/vitroceramica/gabinete2-aberto.jpg',
                'assets/img/produtos/vitroceramica/gabinete2-uso.jpg'
            ],
            especificacoes: {
                material: 'Vitrocerâmica premium',
                dimensoes: '90x60x140 cm',
                bocas: '5',
                peso: '92kg',
                forno: 'Duplo'
            },
            mensagemWhatsApp: 'Preciso de um orçamento para o Fogão Vitrocerâmico Premium com Gabinete.'
        }
    ],

    // ====================================
    // CATEGORIA 2: FOGÕES ALUMÍNIO
    // ====================================
    'fogoes-aluminio': [
        {
            id: 'al-lorem1',
            nome: 'Fogão Alumínio 4 Bocas',
            categoria: 'Fogões Chapa de Alumínio',
            descricao: 'Fogão residencial com chapa de alumínio fundido de alta qualidade. Durabilidade excepcional e fácil manutenção.',
            imagens: [
                'assets/img/produtos/aluminio/fogao1-frente.jpg',
                'assets/img/produtos/aluminio/fogao1-lateral.jpg',
                'assets/img/produtos/aluminio/fogao1-topo.jpg',
                'assets/img/produtos/aluminio/fogao1-detalhe.jpg'
            ],
            especificacoes: {
                material: 'Alumínio fundido',
                dimensoes: '60x60x90 cm',
                bocas: '4',
                peso: '38kg'
            },
            mensagemWhatsApp: 'Olá! Gostaria de informações sobre o Fogão de Alumínio 4 bocas.'
        },
        {
            id: 'al-lorem2',
            nome: 'Fogão Alumínio 5 Bocas',
            categoria: 'Fogões Chapa de Alumínio',
            descricao: 'Fogão com chapa de alumínio anodizado e 5 queimadores de alta potência. Perfeito para famílias grandes.',
            imagens: [
                'assets/img/produtos/aluminio/fogao2-frente.jpg',
                'assets/img/produtos/aluminio/fogao2-lateral.jpg',
                'assets/img/produtos/aluminio/fogao2-topo.jpg',
                'assets/img/produtos/aluminio/fogao2-uso.jpg'
            ],
            especificacoes: {
                material: 'Alumínio anodizado',
                dimensoes: '90x60x90 cm',
                bocas: '5',
                peso: '44kg'
            },
            mensagemWhatsApp: 'Preciso de um orçamento para o Fogão de Alumínio 5 bocas.'
        },
        {
            id: 'al-lorem1-gabinete',
            nome: 'Fogão Alumínio Compacto com Gabinete',
            categoria: 'Fogões Chapa de Alumínio',
            descricao: 'Fogão compacto com chapa de alumínio e gabinete integrado. Ideal para apartamentos e espaços reduzidos.',
            imagens: [
                'assets/img/produtos/aluminio/compacto-frente.jpg',
                'assets/img/produtos/aluminio/compacto-lateral.jpg',
                'assets/img/produtos/aluminio/compacto-aberto.jpg',
                'assets/img/produtos/aluminio/compacto-detalhe.jpg'
            ],
            especificacoes: {
                material: 'Alumínio fundido',
                dimensoes: '50x55x120 cm',
                bocas: '4',
                peso: '55kg',
                forno: 'Incluso'
            },
            mensagemWhatsApp: 'Olá! Preciso de informações sobre o Fogão Alumínio Compacto.'
        },
        {
            id: 'al-lorem2-gabinete',
            nome: 'Cooktop Alumínio 4 Bocas',
            categoria: 'Fogões Chapa de Alumínio',
            descricao: 'Cooktop de embutir com chapa de alumínio polido. Design moderno e instalação facilitada.',
            imagens: [
                'assets/img/produtos/aluminio/cooktop-frente.jpg',
                'assets/img/produtos/aluminio/cooktop-topo.jpg',
                'assets/img/produtos/aluminio/cooktop-lateral.jpg',
                'assets/img/produtos/aluminio/cooktop-instalado.jpg'
            ],
            especificacoes: {
                material: 'Alumínio polido',
                dimensoes: '58x50x8 cm',
                bocas: '4',
                peso: '12kg',
                tipo: 'Embutir'
            },
            mensagemWhatsApp: 'Quero um orçamento para o Cooktop de Alumínio 4 bocas.'
        }
    ],

    // ====================================
    // CATEGORIA 3: FOGÕES FERRO
    // ====================================
    'fogoes-ferro': [
        {
            id: 'fe-lorem1',
            nome: 'Fogão Ferro Fundido 4 Bocas',
            categoria: 'Fogões Chapa de Ferro',
            descricao: 'Fogão tradicional com chapa de ferro fundido ultra resistente. Máxima durabilidade e distribuição uniforme de calor.',
            imagens: [
                'assets/img/produtos/ferro/fogao1-frente.jpg',
                'assets/img/produtos/ferro/fogao1-lateral.jpg',
                'assets/img/produtos/ferro/fogao1-topo.jpg',
                'assets/img/produtos/ferro/fogao1-detalhe.jpg'
            ],
            especificacoes: {
                material: 'Ferro fundido',
                dimensoes: '60x60x90 cm',
                bocas: '4',
                peso: '68kg'
            },
            mensagemWhatsApp: 'Olá! Gostaria de informações sobre o Fogão de Ferro Fundido 4 bocas.'
        },
        {
            id: 'fe-lorem2',
            nome: 'Fogão Ferro Fundido 6 Bocas',
            categoria: 'Fogões Chapa de Ferro',
            descricao: 'Fogão industrial com chapa de ferro fundido de alta durabilidade. Ideal para uso comercial intenso.',
            imagens: [
                'assets/img/produtos/ferro/fogao2-frente.jpg',
                'assets/img/produtos/ferro/fogao2-lateral.jpg',
                'assets/img/produtos/ferro/fogao2-topo.jpg',
                'assets/img/produtos/ferro/fogao2-uso.jpg'
            ],
            especificacoes: {
                material: 'Ferro fundido industrial',
                dimensoes: '90x80x90 cm',
                bocas: '6',
                peso: '95kg'
            },
            mensagemWhatsApp: 'Preciso de um orçamento para o Fogão de Ferro Fundido 6 bocas.'
        },
        {
            id: 'fe-lorem3',
            nome: 'Fogão Industrial Ferro 8 Bocas',
            categoria: 'Fogões Chapa de Ferro',
            descricao: 'Fogão industrial grande porte com chapa de ferro extra reforçada. Perfeito para grandes cozinhas comerciais.',
            imagens: [
                'assets/img/produtos/ferro/industrial-frente.jpg',
                'assets/img/produtos/ferro/industrial-lateral.jpg',
                'assets/img/produtos/ferro/industrial-topo.jpg',
                'assets/img/produtos/ferro/industrial-restaurante.jpg'
            ],
            especificacoes: {
                material: 'Ferro fundido extra reforçado',
                dimensoes: '120x90x95 cm',
                bocas: '8',
                peso: '135kg'
            },
            mensagemWhatsApp: 'Gostaria de saber sobre o Fogão Industrial de Ferro 8 bocas.'
        },
        {
            id: 'fe-lorem1-gabinete',
            nome: 'Fogão Ferro à Lenha',
            categoria: 'Fogões Chapa de Ferro',
            descricao: 'Fogão tradicional à lenha com chapa de ferro fundido. Resgata a tradição com eficiência moderna.',
            imagens: [
                'assets/img/produtos/ferro/lenha-frente.jpg',
                'assets/img/produtos/ferro/lenha-lateral.jpg',
                'assets/img/produtos/ferro/lenha-aberto.jpg',
                'assets/img/produtos/ferro/lenha-aceso.jpg'
            ],
            especificacoes: {
                material: 'Ferro fundido',
                dimensoes: '80x70x100 cm',
                bocas: '4',
                peso: '125kg',
                combustivel: 'Lenha'
            },
            mensagemWhatsApp: 'Olá! Quero informações sobre o Fogão de Ferro à Lenha.'
        },
        {
            id: 'fe-lorem2-gabinete',
            nome: 'Fogão Ferro Comercial',
            categoria: 'Fogões Chapa de Ferro',
            descricao: 'Fogão para uso comercial com chapa de ferro industrial. Resistência máxima para uso contínuo.',
            imagens: [
                'assets/img/produtos/ferro/comercial-frente.jpg',
                'assets/img/produtos/ferro/comercial-lateral.jpg',
                'assets/img/produtos/ferro/comercial-detalhe.jpg',
                'assets/img/produtos/ferro/comercial-cozinha.jpg'
            ],
            especificacoes: {
                material: 'Ferro industrial',
                dimensoes: '100x80x90 cm',
                bocas: '6',
                peso: '110kg',
                uso: 'Comercial'
            },
            mensagemWhatsApp: 'Preciso de detalhes sobre o Fogão de Ferro Comercial.'
        },
        {
            id: 'fe-lorem3-gabinete',
            nome: 'Fogão Ferro Para Restaurante',
            categoria: 'Fogões Chapa de Ferro',
            descricao: 'Fogão profissional para restaurantes com chapa de ferro de alta performance. Design robusto e funcional.',
            imagens: [
                'assets/img/produtos/ferro/restaurante-frente.jpg',
                'assets/img/produtos/ferro/restaurante-lateral.jpg',
                'assets/img/produtos/ferro/restaurante-topo.jpg',
                'assets/img/produtos/ferro/restaurante-uso.jpg'
            ],
            especificacoes: {
                material: 'Ferro fundido profissional',
                dimensoes: '150x100x95 cm',
                bocas: '10',
                peso: '180kg',
                uso: 'Profissional'
            },
            mensagemWhatsApp: 'Gostaria de um orçamento para o Fogão de Ferro Para Restaurante.'
        }
    ],

    // ====================================
    // CATEGORIA 4: FOGÕES ESPECIAIS
    // ====================================
    'fogoes-especiais': [
        {
            id: 'fogao-industrial-10bocas',
            nome: 'Fogão Industrial 10 Bocas',
            categoria: 'Fogões Industriais Especiais',
            descricao: 'Fogão industrial de grande capacidade com 10 queimadores de alta potência. Solução completa para grandes volumes.',
            imagens: [
                'assets/img/produtos/especiais/10bocas-frente.jpg',
                'assets/img/produtos/especiais/10bocas-lateral.jpg',
                'assets/img/produtos/especiais/10bocas-topo.jpg',
                'assets/img/produtos/especiais/10bocas-cozinha.jpg'
            ],
            especificacoes: {
                material: 'Aço industrial reforçado',
                dimensoes: '180x100x95 cm',
                bocas: '10',
                peso: '220kg',
                potencia: 'Alta'
            },
            mensagemWhatsApp: 'Olá! Preciso de informações sobre o Fogão Industrial 10 bocas.'
        }
    ],

    // ====================================
    // CATEGORIA 5: ACESSÓRIOS E PEÇAS
    // ====================================
    'acessorios': [
        {
            id: 'trempe-ferro-fundido',
            nome: 'Trempe Ferro Fundido',
            categoria: 'Acessórios e Peças',
            descricao: 'Trempe em ferro fundido maciço para apoio seguro de panelas. Alta resistência e durabilidade.',
            imagens: [
                'assets/img/produtos/acessorios/trempe-frente.jpg',
                'assets/img/produtos/acessorios/trempe-lateral.jpg',
                'assets/img/produtos/acessorios/trempe-detalhe.jpg',
                'assets/img/produtos/acessorios/trempe-uso.jpg'
            ],
            especificacoes: {
                material: 'Ferro fundido',
                dimensoes: '25x25x2 cm',
                peso: '2kg'
            },
            mensagemWhatsApp: 'Olá! Gostaria de informações sobre a Trempe de Ferro Fundido.'
        },
        {
            id: 'tampa-queimador',
            nome: 'Tampa para Queimador',
            categoria: 'Acessórios e Peças',
            descricao: 'Tampa protetora em alumínio para queimadores industriais. Facilita limpeza e manutenção.',
            imagens: [
                'assets/img/produtos/acessorios/tampa-frente.jpg',
                'assets/img/produtos/acessorios/tampa-lateral.jpg',
                'assets/img/produtos/acessorios/tampa-aberta.jpg',
                'assets/img/produtos/acessorios/tampa-fogao.jpg'
            ],
            especificacoes: {
                material: 'Alumínio',
                dimensoes: '12x12x3 cm',
                peso: '0.3kg'
            },
            mensagemWhatsApp: 'Preciso de um orçamento para Tampa de Queimador.'
        },
        {
            id: 'valvula-seguranca',
            nome: 'Válvula de Segurança',
            categoria: 'Acessórios e Peças',
            descricao: 'Válvula de segurança certificada para fogões a gás. Proteção contra vazamentos.',
            imagens: [
                'assets/img/produtos/acessorios/valvula-frente.jpg',
                'assets/img/produtos/acessorios/valvula-lateral.jpg',
                'assets/img/produtos/acessorios/valvula-detalhe.jpg',
                'assets/img/produtos/acessorios/valvula-instalada.jpg'
            ],
            especificacoes: {
                material: 'Latão cromado',
                tipo: 'Corte automático',
                pressao: 'Alta'
            },
            mensagemWhatsApp: 'Gostaria de saber sobre a Válvula de Segurança.'
        },
        {
            id: 'acendedor-automatico',
            nome: 'Acendedor Automático',
            categoria: 'Acessórios e Peças',
            descricao: 'Sistema de acendimento automático por centelha. Praticidade e segurança no dia a dia.',
            imagens: [
                'assets/img/produtos/acessorios/acendedor-frente.jpg',
                'assets/img/produtos/acessorios/acendedor-detalhe.jpg',
                'assets/img/produtos/acessorios/acendedor-instalado.jpg',
                'assets/img/produtos/acessorios/acendedor-uso.jpg'
            ],
            especificacoes: {
                tipo: 'Piezoelétrico',
                voltagem: '110/220V',
                garantia: '1 ano'
            },
            mensagemWhatsApp: 'Olá! Quero informações sobre o Acendedor Automático.'
        },
        {
            id: 'regulador-gas',
            nome: 'Regulador de Gás Industrial',
            categoria: 'Acessórios e Peças',
            descricao: 'Regulador de pressão de gás profissional. Controle preciso para instalações industriais.',
            imagens: [
                'assets/img/produtos/acessorios/regulador-frente.jpg',
                'assets/img/produtos/acessorios/regulador-lateral.jpg',
                'assets/img/produtos/acessorios/regulador-detalhe.jpg',
                'assets/img/produtos/acessorios/regulador-instalado.jpg'
            ],
            especificacoes: {
                material: 'Latão',
                pressao: '2,8 kPa',
                vazao: '10 kg/h'
            },
            mensagemWhatsApp: 'Preciso de detalhes sobre o Regulador de Gás.'
        },
        {
            id: 'mangueira-gas',
            nome: 'Mangueira de Gás Reforçada',
            categoria: 'Acessórios e Peças',
            descricao: 'Mangueira de gás com malha de aço inox. Segurança máxima e durabilidade superior.',
            imagens: [
                'assets/img/produtos/acessorios/mangueira-frente.jpg',
                'assets/img/produtos/acessorios/mangueira-detalhe.jpg',
                'assets/img/produtos/acessorios/mangueira-conexao.jpg',
                'assets/img/produtos/acessorios/mangueira-uso.jpg'
            ],
            especificacoes: {
                material: 'PVC + Malha Inox',
                comprimento: '1.5m',
                pressao: '100 PSI'
            },
            mensagemWhatsApp: 'Gostaria de um orçamento para Mangueira de Gás Reforçada.'
        },
        {
            id: 'botao-comando',
            nome: 'Botão de Comando',
            categoria: 'Acessórios e Peças',
            descricao: 'Botão de comando ergonômico para controle preciso de chamas. Material resistente ao calor.',
            imagens: [
                'assets/img/produtos/acessorios/botao-frente.jpg',
                'assets/img/produtos/acessorios/botao-lateral.jpg',
                'assets/img/produtos/acessorios/botao-detalhe.jpg',
                'assets/img/produtos/acessorios/botao-instalado.jpg'
            ],
            especificacoes: {
                material: 'Baquelite',
                temperatura: 'Até 200°C',
                acabamento: 'Cromado'
            },
            mensagemWhatsApp: 'Olá! Quero saber sobre o Botão de Comando.'
        },
        {
            id: 'puxador-forno',
            nome: 'Puxador de Forno',
            categoria: 'Acessórios e Peças',
            descricao: 'Puxador em aço inox resistente ao calor para portas de forno. Design ergonômico e elegante.',
            imagens: [
                'assets/img/produtos/acessorios/puxador-frente.jpg',
                'assets/img/produtos/acessorios/puxador-lateral.jpg',
                'assets/img/produtos/acessorios/puxador-detalhe.jpg',
                'assets/img/produtos/acessorios/puxador-porta.jpg'
            ],
            especificacoes: {
                material: 'Aço inox 304',
                comprimento: '30 cm',
                acabamento: 'Escovado'
            },
            mensagemWhatsApp: 'Preciso de informações sobre o Puxador de Forno.'
        },
        {
            id: 'termostato-forno',
            nome: 'Termostato para Forno',
            categoria: 'Acessórios e Peças',
            descricao: 'Termostato de precisão digital para controle exato de temperatura. Faixa de 50°C a 300°C.',
            imagens: [
                'assets/img/produtos/acessorios/termostato-frente.jpg',
                'assets/img/produtos/acessorios/termostato-display.jpg',
                'assets/img/produtos/acessorios/termostato-instalado.jpg',
                'assets/img/produtos/acessorios/termostato-uso.jpg'
            ],
            especificacoes: {
                tipo: 'Digital',
                temperatura: '50-300°C',
                precisao: '±2°C'
            },
            mensagemWhatsApp: 'Gostaria de saber sobre o Termostato para Forno.'
        },
        {
            id: 'vidro-porta-forno',
            nome: 'Vidro Porta de Forno',
            categoria: 'Acessórios e Peças',
            descricao: 'Vidro temperado de alta resistência para porta de forno. Suporta até 400°C sem deformação.',
            imagens: [
                'assets/img/produtos/acessorios/vidro-frente.jpg',
                'assets/img/produtos/acessorios/vidro-detalhe.jpg',
                'assets/img/produtos/acessorios/vidro-instalado.jpg',
                'assets/img/produtos/acessorios/vidro-uso.jpg'
            ],
            especificacoes: {
                material: 'Vidro temperado',
                dimensoes: '40x50 cm',
                temperatura: 'Até 400°C'
            },
            mensagemWhatsApp: 'Olá! Quero informações sobre o Vidro Porta de Forno.'
        },
        {
            id: 'luz-interna-forno',
            nome: 'Luz Interna para Forno',
            categoria: 'Acessórios e Peças',
            descricao: 'Lâmpada especial resistente ao calor para fornos. Iluminação eficiente e durável.',
            imagens: [
                'assets/img/produtos/acessorios/luz-frente.jpg',
                'assets/img/produtos/acessorios/luz-detalhe.jpg',
                'assets/img/produtos/acessorios/luz-instalada.jpg',
                'assets/img/produtos/acessorios/luz-acesa.jpg'
            ],
            especificacoes: {
                potencia: '40W',
                voltagem: '110/220V',
                temperatura: 'Até 300°C'
            },
            mensagemWhatsApp: 'Preciso de detalhes sobre a Luz Interna para Forno.'
        },
        {
            id: 'kit-manutencao',
            nome: 'Kit Manutenção Completo',
            categoria: 'Acessórios e Peças',
            descricao: 'Kit completo de peças para manutenção preventiva de fogões. Inclui trempe, válvulas, mangueira e mais.',
            imagens: [
                'assets/img/produtos/acessorios/kit-completo.jpg',
                'assets/img/produtos/acessorios/kit-pecas.jpg',
                'assets/img/produtos/acessorios/kit-aberto.jpg',
                'assets/img/produtos/acessorios/kit-uso.jpg'
            ],
            especificacoes: {
                itens: '15 peças',
                garantia: '6 meses',
                uso: 'Manutenção completa'
            },
            mensagemWhatsApp: 'Gostaria de um orçamento para o Kit Manutenção Completo.'
        }
    ]
};

// ========================================
// FUNÇÕES AUXILIARES
// ========================================

/**
 * Obter todos os produtos de todas as categorias
 */
function getAllProducts() {
    const allProducts = [];
    for (const categoria in produtosData) {
        allProducts.push(...produtosData[categoria]);
    }
    return allProducts;
}

/**
 * Buscar produto por ID
 */
function getProdutoById(id) {
    for (const categoria in produtosData) {
        const produto = produtosData[categoria].find(p => p.id === id);
        if (produto) return produto;
    }
    return null;
}

/**
 * Buscar produtos por categoria
 */
function getProdutosByCategoria(categoriaKey) {
    return produtosData[categoriaKey] || [];
}

/**
 * Buscar produtos por nome (search)
 */
function searchProdutos(query) {
    const allProducts = getAllProducts();
    const lowerQuery = query.toLowerCase();
    return allProducts.filter(produto => 
        produto.nome.toLowerCase().includes(lowerQuery) ||
        produto.descricao.toLowerCase().includes(lowerQuery) ||
        produto.categoria.toLowerCase().includes(lowerQuery)
    );
}