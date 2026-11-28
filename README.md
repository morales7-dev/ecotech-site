# EcoTech Solutions — Cadastro de Produtos e Integração com APIs

Projeto desenvolvido em equipe no **SENAI**, consistindo em uma aplicação web para a **EcoTech Solutions** com formulário de cadastro de produtos da cantina e integração com APIs públicas (`ViaCEP` e `BrasilAPI`)[cite: 1, 2].

---

## Funcionalidades

- **Cadastro de Produtos (`cadastro.html`):** Formulário com validação de campos obrigatórios (nome, categoria, quantidade, unidade de medida, perecibilidade e observações) e listagem dinâmica na própria página.
- **Atividade 1 — Consulta de CEP (`ViaCEP`):** Busca automática de endereço de origem/fornecedor a partir de um CEP de 8 dígitos, preenchendo os campos somente leitura (`Logradouro`, `Bairro`, `Cidade` e `UF`) e tratando os cenários de CEP incompleto, CEP inexistente e falha de conexão[cite: 2].
- **Atividade 2 — Lista de Feriados Nacionais (`BrasilAPI`):** Página dedicada (`feriados.html`) que consome os feriados nacionais de 2026 sem necessidade de chave de acesso, renderizando mais de 5 itens dinamicamente com `forEach` e `createElement`, além de exibir mensagens claras de carregamento e erro[cite: 1].

---

## Estrutura de Arquivos

```text
ecotech-site/
├── css/
│   └── style.css
├── img/
│   ├── print-cep-valido.png
│   ├── print-cep-inexistente.png
│   ├── print-cep-incompleto.png
│   └── print-brasilapi-feriados.png
├── index.html
├── sobre.html
├── cadastro.html
├── feriados.html
└── README.md