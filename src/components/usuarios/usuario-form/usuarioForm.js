import { UsuarioService } from "../../../services/UsuarioService.js";

document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector("#form-usuario");
    const idInput = document.querySelector("#usuario-id");
    const nomeInput = document.querySelector("#nome");
    const emailInput = document.querySelector("#email");
    const idadeInput = document.querySelector("#idade");

    // Verifica se estamos editando um usuário
    const params = new URLSearchParams(window.location.search);
    const id = params.get("id");

    if (id) {
        const usuario = UsuarioService.getUsuarios().find(u => u.id == id);
        if (usuario) {
            idInput.value = usuario.id;
            nomeInput.value = usuario.nome;
            emailInput.value = usuario.email;
            idadeInput.value = usuario.idade;
        }
    }

    // Evento de envio do formulário
    form.addEventListener("submit", event => {
        event.preventDefault();

        const usuario = {
            id: idInput.value ? Number(idInput.value) : null,
            nome: nomeInput.value,
            email: emailInput.value,
            idade: Number(idadeInput.value)
        };

        if (usuario.id) {
            UsuarioService.atualizarUsuario(usuario);
        } else {
            UsuarioService.adicionarUsuario(usuario);
        }

        window.location.href = "../usuario-list/usuarioList.html";
    });
});
