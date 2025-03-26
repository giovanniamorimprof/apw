document.addEventListener("DOMContentLoaded", () => {
    const formProduto = document.getElementById("form-produto");

    formProduto.addEventListener("submit", (event) => {
        event.preventDefault();

        const produto = {
            id: document.getElementById("produto-id").value || null,
            nome: document.getElementById("nome").value,
            preco: parseFloat(document.getElementById("preco").value),
            descricao: document.getElementById("descricao").value
        };

        salvarProduto(produto);
    });

    function salvarProduto(produto) {
        if (produto.id) {
            console.log("Produto atualizado:", produto);
        } else {
            console.log("Novo produto cadastrado:", produto);
        }
    }
});
