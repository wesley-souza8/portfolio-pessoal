# Portfólio Pessoal - Wesley Souza

![Status](https://img.shields.io/badge/Status-Em_Produ%C3%A7%C3%A3o-success)
![Next.js](https://img.shields.io/badge/Next.js-15-black?logo=next.js)
![React](https://img.shields.io/badge/React-19-blue?logo=react)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4.0-cyan?logo=tailwind-css)
![Framer Motion](https://img.shields.io/badge/Framer_Motion-Animado-purple?logo=framer)

Repositório contendo o código-fonte do meu portfólio pessoal e vitrine de projetos, com foco em performance, acessibilidade e design minimalista. 

## 🚀 Arquitetura e Tecnologias

A aplicação utiliza o estado da arte do ecossistema front-end para garantir carregamento instantâneo, excelente SEO e uma experiência de usuário (UX) fluida:

- **Motor**: Next.js 15 (App Router)
- **Estilização**: Tailwind CSS v4
- **Interface e Acessibilidade**: Shadcn UI
- **Animações e Microinterações**: Framer Motion
- **Gerenciamento de Conteúdo**: MDX (Markdown com React) nativo
- **Tema**: Modo Escuro / Claro nativo (com `next-themes`)

## 📂 Como Adicionar Novos Projetos

A arquitetura do portfólio foi desenhada para facilitar a manutenção. Os projetos não são criados de forma *hardcoded* no HTML. Para adicionar um novo projeto à vitrine, basta adicionar um arquivo `.mdx` na pasta `src/content/projects/`:

```mdx
---
title: "Nome do Meu Projeto"
description: "Descrição rápida que vai aparecer no card."
technologies: ["React", "AWS", "Python"]
repoUrl: "https://github.com/..." # Deixe em branco se for repositório privado
liveUrl: "https://..."
---
Aqui você digita o conteúdo e os detalhes adicionais da solução.
```

## 🛠️ Rodando Localmente

Para iniciar o servidor de desenvolvimento, certifique-se de ter o Node.js instalado e rode:

```bash
# Instale as dependências
npm install

# Inicie o servidor
npm run dev
```

Abra [http://localhost:3000](http://localhost:3000) no seu navegador para ver o resultado.

---
© 2026 Wesley Souza de Oliveira. Todos os direitos reservados.
