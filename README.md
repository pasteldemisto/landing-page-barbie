# Barbie (2023) — Landing Page | Playcube

Página de detalhes do filme **Barbie (2023)** desenvolvida como parte da plataforma fictícia **Playcube**. O projeto apresenta informações do filme, carrossel de elenco e resenhas de usuários, com foco em semântica, acessibilidade e organização modular do CSS.

---

## Preview

## Desktop
<img width="1856" height="960" alt="image" src="https://github.com/user-attachments/assets/5ca58789-0dcb-4c1f-80e0-b0afe4409b31" />
<img width="1857" height="955" alt="image" src="https://github.com/user-attachments/assets/14a8fed8-0b05-42b3-8fb1-315959ffd939" />
<img width="1858" height="955" alt="image" src="https://github.com/user-attachments/assets/f43e44e3-0b8c-4b3d-b3ca-5b11e844cc14" />

---

## Tecnologias

- **HTML5** — estrutura semântica e acessível
- **CSS3** — organização modular com variáveis, reset, layout e componentes
- **JavaScript (ES Modules)** — lógica de carrossel e menu hambúrguer
- **[Vite](https://vitejs.dev/)** — bundler e servidor de desenvolvimento
- **[Swiper.js](https://swiperjs.com/)** — carrossel do elenco

---

## Estrutura do Projeto

```
landing-page-barbie/
├── public/
│   ├── images/          # Imagens do elenco e capa do filme
│   └── icons.svg        # Ícones SVG
├── src/
│   ├── scripts/
│   │   ├── carousel.js  # Inicialização do Swiper
│   │   └── menu.js      # Menu hambúrguer (mobile)
│   ├── styles/
│   │   ├── base/
│   │   │   ├── _variables.css   # Design tokens (cores, tipografia, espaçamentos)
│   │   │   └── _reset.css       # Reset de estilos
│   │   ├── layout/
│   │   │   ├── _header.css
│   │   │   ├── _hero.css
│   │   │   ├── _breakpoints.css
│   │   │   └── footer.css
│   │   ├── components/
│   │   │   ├── _cast.css
│   │   │   ├── _reviews.css
│   │   │   └── _buttons.css
│   │   └── main.css     # Ponto de entrada dos estilos
│   └── main.js          # Ponto de entrada do JavaScript
├── index.html
├── package.json
└── .gitignore
```

---

## Como rodar o projeto

### Pré-requisitos

- [Node.js](https://nodejs.org/) (versão 18 ou superior)
- npm

### Instalação

```bash
# Clone o repositório
git clone https://github.com/pasteldemisto/landing-page-barbie.git

# Acesse a pasta
cd landing-page-barbie

# Instale as dependências
npm install
```

### Desenvolvimento

```bash
npm run dev
```

Acesse em: `http://localhost:5173`

### Build para produção

```bash
npm run build
```

### Pré-visualizar o build

```bash
npm run preview
```

---

## Funcionalidades

- [x] Header com navegação e menu hambúrguer responsivo
- [x] Seção hero com pôster e detalhes do filme
- [x] Carrossel do elenco com Swiper.js
- [x] Seção de resenhas de usuários
- [x] Footer com links de navegação
- [x] Design responsivo (mobile-first)
- [x] Acessibilidade com atributos ARIA

---

## Design System

As cores e tokens de design são definidos via variáveis CSS em `_variables.css`:

| Token | Valor | Uso |
|---|---|---|
| `--color-bg-main` | `#F2EAD3` | Fundo principal |
| `--color-bg-secondary` | `#DFD7BF` | Fundo secundário |
| `--color-bg-dark` | `#3F2305` | Fundo escuro / texto |
| `--color-neutral` | `#A4907C` | Elementos neutros |
| `--font-family-primary` | `League Spartan` | Fonte principal |

---

## Licença

Este projeto foi desenvolvido para fins de estudo e portfólio.

---
