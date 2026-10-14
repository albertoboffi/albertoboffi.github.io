# Alberto Boffi — Personal Portfolio & Engineering Showcase

[![Angular](https://img.shields.io/badge/Angular-21.0-DD0031?style=for-the-badge&logo=angular&logoColor=white)](https://angular.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.9-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-v4-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)
[![Google AI Studio](https://img.shields.io/badge/Engineered_with-Google_AI_Studio-8E75B2?style=for-the-badge&logo=googlegemini&logoColor=white)](https://aistudio.google.com/)
[![SSR](https://img.shields.io/badge/SSR-Angular_Universal_%2B_Express-000000?style=for-the-badge&logo=express&logoColor=white)](https://angular.dev/guide/ssr)

A modern, high-performance personal portfolio and engineering showcase designed to present professional experience, academic background, technical publications, interactive simulations, and open-source systems.

Built with **Angular 21** and **Tailwind CSS v4**, the application leverages **Server-Side Rendering (SSR)**, reactive state architecture powered by **Angular Signals**, and an enterprise-grade component design pattern.

---

## 🚀 Engineering Methodology: Supervised AI-Augmented Development

This project was engineered leveraging **[Google AI Studio](https://aistudio.google.com/)** as an AI-assisted development workbench, demonstrating how modern generative AI platforms can be harnessed within a disciplined software engineering lifecycle.

Rather than relying on unmonitored code synthesis, the project adopted a **human-governed, AI-augmented engineering paradigm**:

- **Architectural Governance**: All architectural abstractions—from state reactivity using Angular Signals to SSR hydration boundaries—were designed and structured with strict engineering oversight.
- **Strict Typing & Contracts**: Full TypeScript compliance (`~5.9`) with strongly typed data structures (`Experience`, `Education`, `Project`, `SkillCategory`), ensuring compile-time safety and maintainability.
- **Performance & Reactivity Standards**: Enforced `ChangeDetectionStrategy.OnPush` across components, fine-grained reactive primitives (`signal`, `computed`), and SSR-safe execution guards (`isPlatformBrowser`).
- **Design System Consistency**: Iterative UI scaffolding in Google AI Studio guided by Tailwind CSS v4 design tokens, semantic typography (`Inter` & `JetBrains Mono`), and accessible interaction models.
- **Code Review & Quality Assurance**: Generated patterns were continuously inspected, refactored, and audited against modern Angular style guides, ESLint rules, and production bundle budgets.

The result is a production-grade web application that bridges high-velocity AI exploration with enterprise software rigor.

---

## 🛠️ Tech Stack & Key Technologies

| Domain | Technology / Library | Description |
| :--- | :--- | :--- |
| **Framework** | [Angular 21](https://angular.dev/) | Standalone components, zoneless-ready primitives, fine-grained reactivity |
| **Language** | [TypeScript 5.9](https://www.typescriptlang.org/) | Strict static typing, interfaces, and compile-time verification |
| **Rendering** | [@angular/ssr](https://angular.dev/guide/ssr) + Express 5 | Hybrid Server-Side Rendering (SSR) for fast TTFB and SEO |
| **Styling** | [Tailwind CSS v4](https://tailwindcss.com/) | Modern CSS layer architecture, dynamic theme tokens, responsive layouts |
| **Motion** | [Motion](https://motion.dev/) | Subtle micro-interactions, spring dynamics, and smooth transitions |
| **AI Platform** | [Google AI Studio](https://aistudio.google.com/) | AI-assisted development and system scaffolding workbench |
| **Linting & Quality** | [ESLint 9](https://eslint.org/) + [angular-eslint](https://github.com/angular-eslint/angular-eslint) | Automated linting, code style enforcement, and static analysis |
| **Testing** | [Vitest](https://vitest.dev/) | Fast unit and integration test runner |

---

## ✨ Features & Architecture Highlights

- **Reactive State via Angular Signals**: Zero-boilerplate local state management using `signal` and `computed` for dynamic section tracking, category filtering, and UI toggles.
- **Server-Side Rendering (SSR) & SEO Parity**: Server-rendered HTML powered by Express 5 to ensure fast First Contentful Paint (FCP) and rich metadata discovery.
- **Adaptive Viewport & ScrollSpy**: Real-time scroll detection and viewport tracking to automatically synchronize navigation state with page progress.
- **Interactive Tech Stack Taxonomy**: Categorized, filterable skill matrices spanning Frontend, Backend, AI/ML, Data Engineering, DevOps, Hardware, and Theoretical Computer Science.
- **Portfolio & MVP Project Showcase**: Dynamic project grid highlighting released products, research papers (e.g., *VirtualRelativity*, *HRI Simulation*), and active MVPs with inline media state handling.
- **Optimized Media Delivery**: Asynchronous video loading states, progressive image fallbacks, and responsive layout constraints.

---

## 📁 Repository Structure

```text
albertoboffi.github.io/
├── public/                 # Static public assets, CVs, papers, and media
│   └── assets/             # Images, icons, videos, and PDF documents
├── src/
│   ├── app/
│   │   ├── app.config.server.ts # Server-side app configuration
│   │   ├── app.config.ts        # Client-side dependency injection and routing
│   │   ├── app.routes.server.ts # Server routing & prerender configurations
│   │   ├── app.routes.ts        # Client application routes
│   │   ├── app.html             # Main portfolio layout template
│   │   ├── app.css              # Component-level styles
│   │   ├── app.ts               # Core App component, state signals, and data model
│   │   └── app.spec.ts          # Unit tests
│   ├── index.html          # Base HTML document shell
│   ├── main.server.ts      # Server-side bootstrap entry point
│   ├── main.ts             # Browser bootstrap entry point
│   ├── server.ts           # Express SSR server definition
│   └── styles.css          # Global Tailwind CSS imports and theme configuration
├── angular.json            # Angular CLI workspace and build targets
├── eslint.config.js        # ESLint flat configuration
├── package.json            # Project dependencies and script declarations
├── tsconfig.json           # Root TypeScript configuration
└── README.md               # Project documentation
```

---

## 🚦 Getting Started

### Prerequisites

- **Node.js**: `v20.x` or higher
- **npm**: `v10.x` or higher

### Installation

Clone the repository and install dependencies:

```bash
git clone https://github.com/albertoboffi/albertoboffi.github.io.git
cd albertoboffi.github.io
npm install
```

---

## 💻 Available Scripts

| Command | Description |
| :--- | :--- |
| `npm run dev` | Starts the local dev server on `http://localhost:3000` with host binding |
| `npm start` | Default Angular CLI dev server (`ng serve` on `http://localhost:4200`) |
| `npm run build` | Compiles client and server bundles into `dist/` with production optimization |
| `npm run serve:ssr:app` | Launches the compiled production Node/Express SSR server |
| `npm run lint` | Runs ESLint across TypeScript and template files |
| `npm test` | Runs unit tests via Vitest |

---

## 🏗️ Production Build & Deployment

To generate an optimized production bundle:

```bash
npm run build
```

This compiles:
1. **Client assets** into `dist/app/browser` with asset hashing and performance budgets.
2. **Server bundle** into `dist/app/server` with Express SSR integration.

To preview the production SSR build locally:

```bash
npm run serve:ssr:app
```

---

## 👤 Author

**Alberto Boffi** — *Computer Science Engineer & Tech Lead*

- **Website**: [albertoboffi.github.io](https://albertoboffi.github.io)
- **LinkedIn**: [@alberto-boffi](https://www.linkedin.com/in/alberto-boffi/)
- **GitHub**: [@albertoboffi](https://github.com/albertoboffi/)
