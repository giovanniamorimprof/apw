const API_URL = "https://67c6f465c19eb8753e780d30.mockapi.io/api/v1/produtos";

export const ProdutoService = {
  async getProdutos() {
    try {
      const response = await fetch(API_URL);
      if (!response.ok) throw new Error("Erro ao buscar produtos");
      return await response.json();
    } catch (error) {
      console.error(error);
      return [];
    }
  },

  async getProduto(id) {
    try {
      const response = await fetch(`${API_URL}/${id}`);
      if (!response.ok) throw new Error("Erro ao buscar produto: " + id);
      return await response.json();
    } catch (error) {
      console.error(error);
      return null;
    }
  },

  async adicionarProduto(produto) {
    try {
      const response = await fetch(API_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(produto),
      });
      if (!response.ok) throw new Error("Erro ao adicionar produto");
      return await response.json();
    } catch (error) {
      console.error(error);
      return null;
    }
  },

  async atualizarProduto(produto) {
    try {
      const response = await fetch(`${API_URL}/${produto.id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(produto),
      });
      if (!response.ok) throw new Error("Erro ao atualizar produto");
      return await response.json();
    } catch (error) {
      console.error(error);
      return null;
    }
  },

  async excluirProduto(id) {
    try {
      const response = await fetch(`${API_URL}/${id}`, {
        method: "DELETE",
      });
      if (!response.ok) throw new Error("Erro ao excluir produto");
      return true;
    } catch (error) {
      console.error(error);
      return false;
    }
  },
};
