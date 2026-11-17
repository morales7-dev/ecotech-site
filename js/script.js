const produtos = [
  { id: 1, nome: "Muda de Árvore", preco: 15.00, img: "https://via.placeholder.com/100" },
  { id: 2, nome: "Ecobag", preco: 25.00, img: "https://via.placeholder.com/100" },
  { id: 3, nome: "Canudo Inox", preco: 20.00, img: "https://via.placeholder.com/100" },
  { id: 4, nome: "Composteira", preco: 120.00, img: "https://via.placeholder.com/100" },
  { id: 5, nome: "Escova Bambu", preco: 22.00, img: "https://via.placeholder.com/100" }
];

function criarCartoes() {
  const divCatalogo = document.getElementById('catalogo');
  produtos.forEach(produto => {
    divCatalogo.innerHTML += `
      <div style="border: 1px solid #000; padding: 10px;">
        <img src="${produto.img}">
        <h3>${produto.nome}</h3>
        <p>R$ ${produto.preco}</p>
        <button onclick="adicionar(${produto.id}, ${produto.preco})">Adicionar</button>
      </div>
    `;
  });
}

criarCartoes();

let subtotal = 0;
function adicionar(id, preco) {
  subtotal += preco;
  let total = subtotal;
  if (subtotal > 50) total = subtotal * 0.90; 

  document.getElementById('pedido').innerHTML = `
    <p>Subtotal: R$ ${subtotal.toFixed(2)}</p>
    <p><strong>Total a pagar: R$ ${total.toFixed(2)}</strong></p>
  `;
  console.log("Subtotal:", subtotal, "| Total com desconto:", total);
}