# 🎓 EduAlerta - Landing Page sobre Evasão Escolar

Análise de dados e desenvolvimento focado em políticas públicas educacionais.

![GitHub](https://img.shields.io/badge/Academic_Project-IFMA-blue)
![Bootstrap](https://img.shields.io/badge/Bootstrap-5.3-purple?logo=bootstrap)
![TypeScript](https://img.shields.io/badge/TypeScript-Strict_Mode-blue?logo=typescript)
![Status](https://img.shields.io/badge/Status-Conclu%C3%ADdo-brightgreen)

---

## 📝 Sobre o Projeto

Este projeto consiste em uma **Landing Page responsiva** focada no tema **Evasão Escolar no Ensino Básico**. O objetivo principal da página é apresentar o escopo conceitual e tecnológico de uma plataforma analítica preditiva (denominada **EduAlerta**), desenvolvida para auxiliar gestores públicos a identificar de forma precoce estudantes em situação de vulnerabilidade ou risco de abandono das salas de aula.

A aplicação foi estruturada de forma nativa e sem o uso de frameworks SPA (como React ou Angular), priorizando a aplicação prática de componentes e sistemas de grid do **Bootstrap 5** em conjunto com a lógica de tipagem estrita do **TypeScript**.

---

## ⚙️ Funcionalidades Desenvolvidas

Para trazer interatividade e dinamismo à página, foram implementadas duas rotinas lógicas em **TypeScript**:

* **🌓 Alternador de Tema (Modo Claro/Escuro):** Uma funcionalidade que manipula dinamicamente o atributo nativo `data-bs-theme` do Bootstrap na raiz do DOM. O script escuta o clique do usuário, altera as paletas de cores do site e atualiza em tempo real o texto e o ícone do botão.
* **📅 Injeção de Data Automatizada:** Um script disparado no ciclo de vida de carregamento da página (`DOMContentLoaded`). Ele captura o horário do sistema do usuário, traduz para o formato extenso em português brasileiro usando a API `Intl.DateTimeFormatOptions` e manipula a string resultante para exibição formal no rodapé.

---

## 📐 Decisões de Projeto e Arquitetura

### 🔹 Layout e Design (Bootstrap)
* **Sistema de Grid Responsivo:** Utilização de `.row` e divisões de colunas combinadas (`.col-lg-7` e `.col-lg-5`) na seção de apresentação. Isso garante uma visualização imersiva lado a lado em computadores e o empilhamento vertical automático em smartphones.
* **Simetria de Cards:** Configuração de distribuição direto na linha pai (`.row-cols-1 .row-cols-md-3`) combinada com a classe `.h-100`. Isso força todos os cards de diretrizes a manterem a mesma altura visual, independente do volume do texto.
* **Navbar Fixa (`.sticky-top`):** Garante usabilidade ao manter os links de ancoragem e o botão de troca de tema sempre acessíveis durante a rolagem.

### 🔸 Lógica e Segurança (TypeScript)
* **Tipagem Estrita de Elementos:** Todos os nós capturados do HTML foram explicitamente tipados (como `HTMLHtmlElement | null`). Essa abordagem blinda o código contra falhas de execução comuns em JavaScript tradicional.
* **Validação de Nulidade:** Inclusão de cláusulas de guarda (`if (!element) return;`) para garantir que o script nunca tente alterar um elemento inexistente ou não renderizado.

---

## 📂 Estrutura de Arquivos

O projeto adota uma estrutura simplificada na raiz para execução local ágil:

```text
Landing page/
│
├── index.html        # Estrutura HTML5 da página com componentes Bootstrap
├── app.ts            # Código fonte com a lógica em TypeScript
├── app.js            # Arquivo traduzido/compilado (gerado pelo TSC)
└── tsconfig.json     # Arquivo de diretrizes do compilador TypeScript
