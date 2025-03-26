import { ProdutoService } from "../services/ProdutoService.js";

export const ProdutoController = {
    async carregarProdutos() {
        const tabela = document.querySelector("#tabela-produtos");
        if (!tabela) return;

        tabela.innerHTML = "";

        try {
            const produtos = await ProdutoService.getProdutos();

            produtos.forEach(produto => {
                const tr = document.createElement("tr");
                tr.innerHTML = `
                    <td>${produto.id}</td>
                    <td>${produto.nome}</td>
                    <td>R$ ${produto.preco.toFixed(2)}</td>
                    <td>${produto.descricao}</td>
                    <td>
                        <button class="btn btn-warning btn-sm btn-editar" data-id="${produto.id}">Editar</button>
                        <button class="btn btn-danger btn-sm btn-excluir" data-id="${produto.id}">Excluir</button>
                    </td>
                `;
                tabela.appendChild(tr);
            });

            // Adiciona eventos aos botões de excluir e editar
            document.querySelectorAll(".btn-excluir").forEach(botao => {
                botao.addEventListener("click", async event => {
                    const id = event.target.dataset.id;
                    const sucesso = await ProdutoService.excluirProduto(id);
                    if (sucesso) this.carregarProdutos(); // Recarrega a tabela após exclusão
                });
            });

            document.querySelectorAll(".btn-editar").forEach(botao => {
                botao.addEventListener("click", event => {
                    const id = event.target.dataset.id;
                    window.location.href = `../produto-form/produtoForm.html?id=${id}`;
                });
            });
        } catch (error) {
            console.error("Erro ao carregar produtos:", error);
        }
    }
};
