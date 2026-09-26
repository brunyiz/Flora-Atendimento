# Flora Atendimento

Uma aplicação web ágil e personalizável projetada para otimizar fluxos de atendimento ao cliente e suporte. O sistema permite a criação, organização e utilização rápida de respostas padronizadas (macros), aumentando a produtividade das equipes de atendimento.

## Funcionalidades Principais

* **Gerenciamento de Respostas (CRUD):** Crie, edite, exclua e organize suas mensagens de atendimento de forma intuitiva.
* **Cópia Rápida (One-Click Copy):** Copie textos e respostas padronizadas para a área de transferência com apenas um clique, agilizando o envio aos clientes.
* **Organização por Categorias:** Agrupe mensagens por contexto ou departamento para facilitar a busca durante os atendimentos.
* **Interface Arrastável (Drag-and-Drop):** Reorganize elementos na tela de forma fluida para adaptar o layout ao seu fluxo de trabalho.
* **Persistência de Dados (Local Storage):** Suas configurações, categorias e mensagens são salvas localmente no navegador, garantindo velocidade e privacidade sem a necessidade de um backend complexo.
* **Sistema de Temas Completo:** Personalize a interface com diversas opções de cores pré-configuradas (Azul, Amarelo, Laranja, Marrom, Rosa, Roxo, Verde, Vermelho e Preto/Branco).

## Tecnologias Utilizadas

O projeto foi desenvolvido com foco em performance e leveza, utilizando tecnologias web padrão e arquitetura modular:

* **HTML5** para estruturação semântica.
* **CSS3** para estilização responsiva.
* **JavaScript (Vanilla)** utilizando módulos ES6 (`import`/`export`) para separação lógica de responsabilidades.

## Estrutura do Projeto

A aplicação está dividida em módulos para facilitar a manutenção e escalabilidade do código:

```text
Flora-Atendimento-main/
├── index.html                 # Ponto de entrada da aplicação
├── css/
│   └── style.css              # Estilos globais
└── js/
    ├── main.js                # Inicialização principal
    ├── config.js              # Configurações globais
    ├── storage.js             # Gerenciamento do Local Storage
    ├── theme.js               # Gerenciador principal de temas
    ├── ui.js                  # Controle de interface do usuário
    ├── utils.js               # Funções utilitárias genéricas
    ├── scripts/               # Lógica de negócio e interações
    │   ├── buttons.js         # Comportamento dos botões
    │   ├── categories.js      # Gerenciamento de categorias
    │   ├── copy.js            # Lógica de cópia para área de transferência
    │   ├── crud.js            # Operações de criação, leitura, atualização e exclusão
    │   ├── render.js          # Renderização dinâmica no DOM
    │   ├── scriptDrag.js      # Lógica de arrastar e soltar (Drag-and-Drop)
    │   └── state.js           # Gerenciamento de estado da aplicação
    └── themes/                # Definições de cores e estilos dinâmicos
        ├── amarelo.js, azul.js, verde.js... # Arquivos individuais de temas
        └── common.js          # Propriedades visuais compartilhadas
```

## Como Executar o Projeto

Devido ao uso de Módulos JavaScript (ES6 Modules), a aplicação não funcionará corretamente se o arquivo `index.html` for aberto diretamente no navegador (via protocolo `file://`). É necessário um servidor web local.

1. Clone o repositório ou faça o download dos arquivos.
2. Extraia o conteúdo para uma pasta no seu computador.
3. Inicie um servidor local na raiz do projeto. Recomendamos a utilização da extensão **Live Server** para o Visual Studio Code, ou o pacote `http-server` do Node.js.
4. Acesse o endereço gerado pelo servidor (ex: `http://localhost:5500`) no seu navegador.

## Como Contribuir

1. Faça um Fork do projeto.
2. Crie uma branch para sua modificação (`git checkout -b feature/minha-melhoria`).
3. Faça o commit das suas alterações (`git commit -m 'Adiciona nova funcionalidade X'`).
4. Faça o push para a branch (`git push origin feature/minha-melhoria`).
5. Abra um Pull Request.
