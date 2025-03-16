const STORAGE_KEY = "usuarios";

export const UsuarioService = {
    getUsuarios() {
        return JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];
    },

    salvarUsuarios(usuarios) {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(usuarios));
    },

    adicionarUsuario(usuario) {
        const usuarios = this.getUsuarios();
        usuario.id = usuarios.length ? usuarios[usuarios.length - 1].id + 1 : 1;
        usuarios.push(usuario);
        this.salvarUsuarios(usuarios);
    },

    atualizarUsuario(usuarioAtualizado) {
        let usuarios = this.getUsuarios();
        usuarios = usuarios.map(usuario => 
            usuario.id === usuarioAtualizado.id ? usuarioAtualizado : usuario
        );
        this.salvarUsuarios(usuarios);
    },

    excluirUsuario(id) {
        let usuarios = this.getUsuarios();
        usuarios = usuarios.filter(usuario => usuario.id !== id);
        this.salvarUsuarios(usuarios);
    }
};
