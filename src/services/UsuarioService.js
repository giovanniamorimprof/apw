const API_URL = "http://localhost:3000/usuarios";

export default class UsuarioService {
  // Buscar todos os usuários
  static async listarUsuarios() {
    const response = await fetch(API_URL);
    return response.json();
  }

  // Buscar um usuário pelo ID
  static async buscarUsuarioPorId(id) {
    const response = await fetch(`${API_URL}/${id}`);
    return response.json();
  }

  // Criar um novo usuário
  static async criarUsuario(usuario) {
    const response = await fetch(API_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(usuario),
    });
    return response.json();
  }

  // Atualizar um usuário existente
  static async atualizarUsuario(id, usuario) {
    const response = await fetch(`${API_URL}/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(usuario),
    });
    return response.json();
  }

  // Excluir um usuário
  static async excluirUsuario(id) {
    await fetch(`${API_URL}/${id}`, { method: "DELETE" });
  }
}
