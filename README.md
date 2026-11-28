# EcoTech Solutions — Cadastro de Produtos e Consulta de CEP

Projeto desenvolvido em equipe no **SENAI**, consistindo em uma aplicação web para a **EcoTech Solutions** com formulário de cadastro de produtos da cantina e integração com API externa para consulta automática de endereço via CEP.

---

## Funcionalidades

- **Cadastro de Produtos:** Formulário com validação de campos obrigatórios (nome, categoria, quantidade, unidade de medida, perecibilidade e observações) e listagem dinâmica na própria página.
- **Consulta de CEP (`ViaCEP`):** Busca automática de endereço de origem/fornecedor a partir de um CEP de 8 dígitos, preenchendo automaticamente os campos somente leitura (`Logradouro`, `Bairro`, `Cidade` e `UF`)[cite: 2].
- **Tratamento de Erros:** Exibição de mensagens claras na tela para três cenários[cite: 2]:
  1. CEP incompleto (menos de 8 dígitos);
  2. CEP inexistente na base do ViaCEP;
  3. Falha de rede ou ausência de conexão com a internet.

---

## Estrutura de Arquivos

```text
ecotech-site/
├── css/
│   └── style.css
├── img/               # (opcional) prints dos testes do Thunder Client
├── index.html
├── sobre.html
├── cadastro.html
<<<<<<< HEAD
└── README.md
=======
└── README.md
>>>>>>> 49a295203d0e3643532ba378bef8ffa075a56fb3
