import { ProdutoController } from "../../../controllers/ProdutoController.js";

document.addEventListener("DOMContentLoaded", async () => {
    const form = document.querySelector("#form-produto");
    const idInput = document.querySelector("#produto-id");
    const nomeInput = document.querySelector("#nome");
    const descricaoInput = document.querySelector("#descricao");
    const precoInput = document.querySelector("#preco");
    const estoqueInput = document.querySelector("#estoque");
    const categoriaInput = document.querySelector("#categoria");
    const imagemInput = document.querySelector("#imagem");

    const params = new URLSearchParams(window.location.search);
    const id = params.get("id") ? Number(params.get("id")) : null;

    if(id != null) {
        let produto = await ProdutoController.getProduto(id);

        idInput.value = id;
        nomeInput.value = produto.nome;
        descricaoInput.value = produto.descricao;
        precoInput.value = produto.preco;
        estoqueInput.value = Number(produto.estoque);
        categoriaInput.value = produto.categoria;
        imagemInput.value = produto.imagem;
    }

    form.addEventListener("submit", async (event) => {
        event.preventDefault();

        const produto = {
            id: idInput.value ? Number(idInput.value) : null,
            nome: nomeInput.value.trim(),
            descricao: descricaoInput.value.trim(),
            preco: precoInput.value.trim(),
            estoque: Number(estoqueInput.value),
            categoria: categoriaInput.value,
            imagem: imagemInput.value
        };

        if (!produto.nome || !produto.descricao || !produto.preco || isNaN(produto.estoque) || !produto.categoria || !produto.imagem) {
            alert("Por favor, preencha todos os campos corretamente.");
            return;
        }

        try {
            if (produto.id) {
                await ProdutoController.atualizarProduto(produto);
            } else {
                await ProdutoController.adicionarProduto(produto);
            }

            window.location.href = "/src/components/produtos/produto-list/produtoList.html";
        } catch (error) {
            console.error("Erro ao salvar usuário:", error);
        }
    });
});
