const API_URL = "https://67c6f465c19eb8753e780d30.mockapi.io/api/v1/users";

export const UsuarioService = {
    async getUsuarios() {
        try {
            const response = await fetch(API_URL);
            if (!response.ok) throw new Error("Erro ao buscar usuários");
            return await response.json();
        } catch (error) {
            console.error(error);
            return [];
        }
    },

    async adicionarUsuario(usuario) {
        try {
            const response = await fetch(API_URL, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(usuario),
            });
            if (!response.ok) throw new Error("Erro ao adicionar usuário");
            return await response.json();
        } catch (error) {
            console.error(error);
            return null;
        }
    },

    async atualizarUsuario(usuario) {
        try {
            const response = await fetch(`${API_URL}/${usuario.id}`, {
                method: "PUT",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(usuario),
            });
            if (!response.ok) throw new Error("Erro ao atualizar usuário");
            return await response.json();
        } catch (error) {
            console.error(error);
            return null;
        }
    },

    async excluirUsuario(id) {
        try {
            const response = await fetch(`${API_URL}/${id}`, {
                method: "DELETE",
            });
            if (!response.ok) throw new Error("Erro ao excluir usuário");
            return true;
        } catch (error) {
            console.error(error);
            return false;
        }
    }
};
