const API_URL = "CRIE UMA API PARA PRODUTOS AQUI UTILIZANDO O MOCKAPI.IO";

export const ProdutoService = {
    async getProdutos() {
        try {
            const response = await fetch(API_URL);
            return response.json();
        } catch (error) {
            console.error("Erro ao buscar produtos:", error);
            return [];
        }
    },

    async getProdutoById(id) {
        try {
            const response = await fetch(`${API_URL}/${id}`);
            return response.json();
        } catch (error) {
            console.error("Erro ao buscar produto:", error);
            return null;
        }
    },

    async salvarProduto(produto) {
        try {
            const response = await fetch(API_URL, {
                method: produto.id ? "PUT" : "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(produto)
            });
            return response.json();
        } catch (error) {
            console.error("Erro ao salvar produto:", error);
            return null;
        }
    },

    async excluirProduto(id) {
        try {
            const response = await fetch(`${API_URL}/${id}`, { method: "DELETE" });
            return response.ok;
        } catch (error) {
            console.error("Erro ao excluir produto:", error);
            return false;
        }
    }
};
