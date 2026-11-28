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
└── README.md

## Testes da API ViaCEP (Thunder Client)

Antes da integração no código JavaScript, foram realizados testes de requisição `GET` no **Thunder Client** utilizando o endpoint `https://viacep.com.br/ws/{CEP}/json/` para validar o comportamento da API em diferentes cenários:

| Cenário | URL Testada | Status HTTP | Resposta Obtida |
| :--- | :--- | :---: | :--- |
| **CEP Válido** | `https://viacep.com.br/ws/01001000/json/` | `200 OK` | Retorna o JSON completo com os dados do endereço (Bairro: Sé, Localidade: São Paulo, UF: SP, DDD: 11). |
| **CEP Inexistente** | `https://viacep.com.br/ws/99999999/json/` | `200 OK` | A requisição é processada, mas retorna o objeto `{"erro": true}`, indicando que o CEP não existe na base. |
| **CEP Incompleto** | `https://viacep.com.br/ws/0100100/json/` | `400 Bad Request` | A API rejeita a consulta e retorna erro HTTP 400 por o CEP não possuir exatamente 8 dígitos. |

### Evidências dos Testes

1. **Teste 1 — CEP Válido (`200 OK`)**
   ![Teste CEP Válido](img/print-cep-valido.png)

2. **Teste 2 — CEP Inexistente (`200 OK` com `erro: true`)**
   ![Teste CEP Inexistente](img/print-cep-inexistente.png)

3. **Teste 3 — CEP Incompleto (`400 Bad Request`)**
   ![Teste CEP Incompleto](img/print-cep-incompleto.png)
