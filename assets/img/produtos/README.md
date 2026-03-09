# 📁 Pasta de Imagens dos Produtos

Esta pasta foi criada para organizar as imagens dos produtos.

## 📂 Estrutura

```
produtos/
├── vitroceramica/    <- Imagens de fogões vitrocerâmicos
├── aluminio/         <- Imagens de fogões de alumínio
├── ferro/            <- Imagens de fogões de ferro
└── acessorios/       <- Imagens de acessórios
```

## 📸 Como Usar

1. Coloque as imagens do produto nas pastas correspondentes
2. Edite o arquivo `assets/js/produtos.js`
3. Adicione o caminho da imagem no campo `imagem`

## 📝 Exemplo

**Arquivo colocado em:**
```
assets/img/produtos/vitroceramica/fogao-premium.jpg
```

**Código em produtos.js:**
```javascript
{
    id: 'vitro-lorem1',
    nome: 'Fogão Premium Vitrocerâmico',
    imagem: 'assets/img/produtos/vitroceramica/fogao-premium.jpg',
    // ...resto do código
}
```

## ✅ Formatos Aceitos

- JPG / JPEG
- PNG
- WebP
- GIF

## 📐 Tamanho Recomendado

- **Dimensões:** 800x800 pixels (quadrado)
- **Tamanho:** Até 500KB
- **Formato:** JPG ou WebP

---

Veja o guia completo em: `COMO-ADICIONAR-IMAGENS.md`
