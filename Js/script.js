// 1. Catálogo com 5 produtos usando a imagem que você já tem na pasta img
const catalogo = [
  { nome: "Carregador Solar Portátil", preco: 120.00, imagem: "img/logo.png" },
  { nome: "Garrafa Térmica Ecológica", preco: 65.50, imagem: "img/logo.png" },
  { nome: "Fone Bluetooth de Bambu", preco: 149.90, imagem: "img/logo.png" },
  { nome: "Luminária LED Solar", preco: 85.00, imagem: "img/logo.png" },
  { nome: "Mochila Tecido Reciclado", preco: 180.00, imagem: "img/logo.png" }
];

// Variáveis que guardam o estado do pedido
let quantidadePedido = 0;
let subtotalPedido = 0;

// Seleção dos elementos do HTML
const containerCatalogo = document.querySelector("#catalogo");
const elementoQtd = document.querySelector("#qtd-itens");
const elementoTotal = document.querySelector("#total-pedido");
const elementoDesconto = document.querySelector("#info-desconto");

// Formata número para Real (ex: R$ 120,00)
function formatarMoeda(valor) {
  return `R$ ${valor.toFixed(2).replace(".", ",")}`;
}

// 3. Atualiza quantidade, aplica 10% de desconto a partir de 3 itens e mostra o total
function atualizarResumoPedido() {
  let totalFinal = subtotalPedido;

  if (quantidadePedido >= 3) {
    totalFinal = subtotalPedido * 0.9;
    elementoDesconto.style.display = "block";
  } else {
    elementoDesconto.style.display = "none";
  }

  elementoQtd.textContent = quantidadePedido;
  elementoTotal.textContent = formatarMoeda(totalFinal);
}

// 2. Monta os 5 cartões dinamicamente e configura o clique do botão Adicionar
function renderizarCatalogo() {
  catalogo.forEach((item) => {
    const cartao = document.createElement("article");
    cartao.classList.add("card");

    const img = document.createElement("img");
    img.src = item.imagem;
    img.alt = item.nome;

    const titulo = document.createElement("h3");
    titulo.textContent = item.nome;

    const preco = document.createElement("p");
    preco.classList.add("preco");
    preco.textContent = formatarMoeda(item.preco);

    const botao = document.createElement("button");
    botao.classList.add("btn-adicionar");
    botao.textContent = "Adicionar";

    botao.addEventListener("click", () => {
      quantidadePedido += 1;
      subtotalPedido += item.preco;
      atualizarResumoPedido();
    });

    cartao.appendChild(img);
    cartao.appendChild(titulo);
    cartao.appendChild(preco);
    cartao.appendChild(botao);

    containerCatalogo.appendChild(cartao);
  });
}

renderizarCatalogo();