# Santhiago Portfolio 🚀

**Santhiago Portfolio** é meu espaço pessoal na web, desenvolvido para apresentar minha trajetória como Desenvolvedor Full Stack, reunindo meus principais projetos, certificações, especialidades e currículo de forma interativa e imersiva. 

O design minimalista, o uso da tipografia e a experiência de navegação fluida deste projeto foram fortemente inspirados no incrível trabalho do saudoso desenvolvedor criativo **Keita Yamada**.

<div align="center">
  <img src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" alt="React">
  <img src="https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white" alt="TypeScript">
  <img src="https://img.shields.io/badge/Vite-B73BFE?style=for-the-badge&logo=vite&logoColor=FFD62E" alt="Vite">
  <img src="https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white" alt="Tailwind CSS">
  <img src="https://img.shields.io/badge/Framer_Motion-0055FF?style=for-the-badge&logo=framer&logoColor=white" alt="Framer Motion">
</div>

---

## ✨ Sobre o Projeto

Este portfólio foi construído como uma Single Page Application (SPA) focada em alta performance e excelência em UX/UI. Ele foge do padrão tradicional de scroll infinito, adotando uma navegação baseada em transições de componentes, controlável por cliques, teclado ou scroll do mouse, criando uma experiência que se assemelha a uma apresentação interativa.

---

## 🌟 Funcionalidades

### 🔹 Navegação e UX
- **Controle Multimodal:** Navegação fluida entre seções utilizando as setas do teclado (`ArrowUp`, `ArrowDown`, `ArrowLeft`, `ArrowRight`), a roda do mouse (`wheel`) ou cliques convencionais.
- **Transições Suaves:** Animações de entrada e saída de tela orquestradas pelo Framer Motion.
- **Theming:** Suporte nativo e totalmente customizado para os modos Claro (Light) e Escuro (Dark).
- **DotGrid Dinâmico:** Fundo animado que reage ao tema escolhido.

### 🔹 Seções Dinâmicas
- **Home:** Apresentação pessoal com cálculo de idade automatizado.
- **Projetos:** Lista de projetos no estilo carrossel vertical com links diretos para o GitHub.
- **Certificações e Currículo:** Links para credenciais e downloads diretos de PDF do CV.

---

## 🧱 Estrutura do Projeto

```text
santhiago-portfolio/
├── public/                 # PDFs de currículos, certificados e favicon
├── src/
│   ├── assets/             # Imagens e tipografia estática
│   ├── components/
│   │   ├── sections/       # Componentes independentes para cada aba (Home, Projects, etc.)
│   │   └── NavMenu.tsx     # Menu de navegação lateral inteligente
│   ├── hooks/
│   │   ├── useThemeColors.ts     # Design System centralizado para o modo dark/light
│   │   └── useMenuNavigation.ts  # Lógica extraída de navegação
│   ├── lib/                # Configurações de bibliotecas externas
│   ├── types/              # Definições de tipagem global (TypeScript)
│   ├── ui/                 # Componentes visuais genéricos (DotGrid, SplashScreen)
│   ├── utils/              # Funções auxiliares (getAge, getCurrentYear)
│   ├── App.tsx             # Entry point e gerenciador do estado principal da aplicação
│   └── main.tsx            # Ponto de montagem no DOM
│
├── tailwind.config.js      # Configuração de temas e classes utilitárias
├── vite.config.ts          # Configuração do bundler e plugins
└── README.md
```

---

## 🛠️ Tech Stack

| Tecnologia | Uso |
|---|---|
| **React** | Biblioteca principal para construção das interfaces e componentização. |
| **TypeScript** | Superset do JavaScript que adiciona tipagem estática, garantindo segurança. |
| **Vite** | Ferramenta de build e servidor de desenvolvimento super rápido. |
| **Tailwind CSS** | Estilização ágil focada em classes utilitárias e controle dinâmico de opacidade. |
| **Framer Motion** | Biblioteca para animações declarativas e transições de montagem/desmontagem de componentes (`AnimatePresence`). |

---

## 🚀 Como Executar Localmente

### Pré-requisitos
- Node.js v18 ou superior

### Passo a passo

**1. Clone o repositório:**
```bash
git clone https://github.com/DevSanthiago/santhiago-portfolio.git
cd santhiago-portfolio
```

**2. Instale as dependências:**
```bash
npm install
```

**3. Inicie o servidor de desenvolvimento:**
```bash
npm run dev
```

> A aplicação estará disponível no endereço local fornecido pelo Vite (geralmente `http://localhost:5173`).

---

## 📁 Decisões de Arquitetura

O projeto foi organizado visando a escalabilidade, manutenção e o princípio DRY (*Don't Repeat Yourself*):

- **Custom Hooks como Design System:** A criação do hook `useThemeColors` centraliza todos os tokens de cor da aplicação. Isso elimina condicionais ternárias repetitivas espalhadas pelo código e permite mudar a paleta inteira alterando um único arquivo.
- **Componentização por Seções:** A pasta `sections` divide o portfólio em blocos lógicos. O componente pai (`App.tsx`) atua apenas como um orquestrador que renderiza a seção ativa, mantendo o código limpo.
- **Acessibilidade de Navegação:** Implementação de `Event Listeners` globais cuidadosamente limpos (`removeEventListener`) para evitar *memory leaks* ao navegar com o teclado.
- **Animações Desacopladas:** O Framer Motion é aplicado no container pai, o que significa que as seções filhas não precisam conhecer a lógica de animação para entrarem ou saírem da tela suavemente.

---

## ✉️ Contato

- **Desenvolvedor:** Johnatan dos Santos Reis
- **GitHub:** [DevSanthiago](https://github.com/DevSanthiago)
- **LinkedIn:** [Santhiago](https://www.linkedin.com/in/johnatan-dos-santos-reis-945092b7/)
- **E-mail:** johnatan.reiiss@icloud.com

---

_Desenvolvido com dedicação sob a **Licença MIT**._