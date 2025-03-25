import { ProdutoController } from "../../../controllers/ProdutoController.js";

// Carregar Header e Usuários Dinamicamente
document.addEventListener("DOMContentLoaded", async () => {
    await carregarProdutos();
});

async function carregarProdutos() {
    const tabela = document.querySelector("#tabela-produtos");
    if (!tabela) {
        console.error("Elemento #tabela-usuarios não encontrado.");
        return;
    }

    tabela.innerHTML = "";

    try {
        const produtos = await ProdutoController.getProdutos();

        if (!Array.isArray(produtos)) {
            console.error("Erro: dados recebidos não são um array.", produtos);
            return;
        }

        produtos.forEach(produto => {
            const linha = document.createElement("tr");
            linha.innerHTML = `
                <td>${produto.id}</td>
                <td>${produto.nome}</td>
                <td>${produto.descricao}</td>
                <td>${produto.preco}</td>
                <td>${produto.estoque}</td>
                <td>${produto.categoria}</td>
                <td>${produto.imagem}</td>
                <td>
                    <button class="btn btn-warning btn-sm editar" data-id="${produto.id}">Editar</button>
                    <button class="btn btn-danger btn-sm remover" data-id="${produto.id}">Excluir</button>
                </td>
            `;
            tabela.appendChild(linha);
        });

        document.querySelectorAll(".editar").forEach(button => {
            button.addEventListener("click", (event) => {
                const id = event.target.getAttribute("data-id");
                editarProduto(id);
            });
        });

        document.querySelectorAll(".remover").forEach(button => {
            button.addEventListener("click", async (event) => {
                const id = Number(event.target.getAttribute("data-id"));
                await removerProduto(id);
            });
        });

    } catch (error) {
        console.error("Erro ao carregar produtos:", error);
    }
}

function editarProduto(id) {
    window.location.href = `../produto-form/produtoForm.html?id=${id}`;
}

async function removerProduto(id) {
    console.log("Excluindo produto com ID:", id);

    try {
        await ProdutoController.excluirProduto(id);
        await carregarProdutos();
    } catch (error) {
        console.error("Erro ao excluir produto:", error);
    }
}
