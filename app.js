async function carregarProdutos() {
  try {
    const response = await fetch("produtos.json");
    const produtos = await response.json();

    const container = document.getElementById("produtos");
    container.innerHTML = "";

    produtos.forEach(prod => {
      const card = document.createElement("div");
      card.classList.add("card");

      // estrelas
      let estrelas = "★".repeat(prod.classificacao) + "☆".repeat(5 - prod.classificacao);

      // preço formatado BR
      let precoFormatado = prod.preco.toLocaleString("pt-BR", {
        style: "currency",
        currency: "BRL"
      });

      card.innerHTML = `
        <img src="./img/${prod.imagem}" alt="${prod.nome}">
        <h3>${prod.nome}</h3>
        <p>${prod.descricao}</p>
        <div class="stars">${estrelas}</div>
        <p class="preco">${precoFormatado}</p>
      `;

      container.appendChild(card);
    });
  } catch (error) {
    console.error("Erro ao carregar produtos:", error);
  }
}

carregarProdutos();
