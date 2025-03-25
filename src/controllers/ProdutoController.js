import { ProdutoService } from "../services/ProdutoService.js";

export const ProdutoController = {
  async getProdutos() {
    return await ProdutoService.getProdutos();
  },
  async getProduto(id) {
    return await ProdutoService.getProduto(id);
  },
  async atualizarProduto(produto) {
    await ProdutoService.atualizarProduto(produto);
  },
  async adicionarProduto(produto) {
    await ProdutoService.adicionarProduto(produto);
  },
  async excluirProduto(id) {
    await ProdutoService.excluirProduto(id);
  }
};
