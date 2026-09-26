# Flora Atendimento

Uma aplicação web ágil e personalizável projetada para otimizar fluxos de atendimento ao cliente. O Flora Atendimento permite gerenciar, categorizar e copiar rapidamente respostas padrão e textos frequentes, aumentando a produtividade da equipe de suporte.

## Funcionalidades

* **Respostas Rápidas (Copy & Paste):** Copie mensagens pré-definidas para a área de transferência com apenas um clique.
* **Organização por Categorias:** Mantenha seus textos de atendimento organizados por contexto ou setor.
* **Gerenciamento Completo (CRUD):** Crie, edite, visualize e exclua novas respostas dinamicamente direto na interface.
* **Armazenamento Local:** Os dados são salvos no navegador (Local Storage), sem a necessidade de um banco de dados complexo.
* **Personalização de Temas:** Interface adaptável com múltiplos temas de cores integrados (Azul, Amarelo, Laranja, Rosa, Roxo, Verde, Vermelho, Marrom e Preto/Branco).
* **Interface Interativa:** Suporte a "Drag and Drop" (arrastar e soltar) para facilitar a organização visual das informações.

## Tecnologias Utilizadas

Este projeto foi construído utilizando tecnologias web padrão (Vanilla), sem dependência de frameworks externos:

* **HTML5:** Estrutura semântica.
* **CSS3:** Estilização base (style.css).
* **JavaScript (ES6+):** Lógica da aplicação dividida de forma modular (organizada nas pastas js/scripts e js/themes).

## Estrutura do Projeto

A arquitetura do projeto foi desenvolvida de forma modular para facilitar a manutenção e escalabilidade:

```text
Flora-Atendimento/
├── index.html            # Arquivo principal da interface
├── css/
│   └── style.css         # Folha de estilos base
└── js/
    ├── main.js           # Ponto de entrada principal do JavaScript
    ├── config.js         # Configurações globais da aplicação
    ├── storage.js        # Lógica de persistência (Local Storage)
    ├── theme.js          # Gerenciador principal de temas
    ├── ui.js             # Manipulação geral da interface do usuário (DOM)
    ├── utils.js          # Funções utilitárias
    ├── scripts/          # Módulos de funcionalidades específicas
    │   ├── buttons.js    # Lógica de botões
    │   ├── categories.js # Renderização e gestão de categorias
    │   ├── copy.js       # Função de cópia para área de transferência
    │   ├── crud.js       # Lógica de criação, edição e exclusão
    │   ├── render.js     # Renderização de elementos na tela
    │   ├── scriptDrag.js # Funcionalidade de arrastar e soltar
    │   └── state.js      # Gerenciamento de estado da aplicação
    └── themes/           # Módulos de paletas de cores
        ├── amarelo.js, azul.js, laranja.js, marrom.js, rosa.js...
```

## Como Executar o Projeto

Trata-se de uma aplicação estática (client-side), portanto, a execução é direta:

1. Faça o clone deste repositório ou baixe o arquivo .zip.
2. Extraia os arquivos em um diretório de sua preferência.
3. Abra o arquivo `index.html` diretamente em qualquer navegador web atual (Chrome, Firefox, Edge, etc.).

*(Opcional)* Para fins de desenvolvimento, recomenda-se a utilização de uma extensão como o Live Server (VS Code) para executar o projeto em um servidor local.

## Como Contribuir

Contribuições para a melhoria do código, adição de novos temas ou novas funcionalidades são bem-vindas:

1. Faça um Fork do projeto.
2. Crie uma branch para sua modificação (`git checkout -b feature/NovaFuncionalidade`).
3. Realize o commit de suas alterações (`git commit -m 'Adiciona nova funcionalidade'`).
4. Envie o push para a branch (`git push origin feature/NovaFuncionalidade`).
5. Abra um Pull Request detalhando as alterações realizadas.

---
Desenvolvido para facilitar e otimizar rotinas de atendimento diário.