import { ProdutoService } from "../../../services/ProdutoService.js";

// Carregar Header e Produtos Dinamicamente
document.addEventListener("DOMContentLoaded", async () => {
    await carregarProdutos();
});

async function carregarProdutos() {
    const tabela = document.querySelector("#tabela-produtos");
    if (!tabela) {
        console.error("Elemento #tabela-produtos não encontrado.");
        return;
    }

    tabela.innerHTML = "";

    try {
        const produtos = await ProdutoService.getProdutos(); // Agora esperamos os dados corretamente

        if (!Array.isArray(produtos)) {
            console.error("Erro: dados recebidos não são um array.", produtos);
            return;
        }

        produtos.forEach(produto => {
            const linha = document.createElement("tr");
            linha.innerHTML = `
                <td>${produto.id}</td>
                <td>${produto.nome}</td>
                <td>${produto.preco}</td>
                <td>${produto.quantidade}</td>
                <td>
                    <button class="btn btn-warning btn-sm editar" data-id="${produto.id}">Editar</button>
                    <button class="btn btn-danger btn-sm remover" data-id="${produto.id}">Excluir</button>
                </td>
            `;
            tabela.appendChild(linha);
        });

        // Eventos de clique para editar e remover
        document.querySelectorAll(".editar").forEach(button => {
            button.addEventListener("click", (event) => {
                const id = event.target.getAttribute("data-id");
                editarProduto(id);
            });
        });

        document.querySelectorAll(".remover").forEach(button => {
            button.addEventListener("click", async (event) => {
                const id = Number(event.target.getAttribute("data-id")); // Converte para número
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
        await ProdutoService.excluirProduto(id);
        await carregarProdutos(); // Recarrega a lista após a exclusão
    } catch (error) {
        console.error("Erro ao excluir produto:", error);
    }
}
