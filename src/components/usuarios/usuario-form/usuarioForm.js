import { UsuarioService } from "../../../services/UsuarioService.js";

document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector("#form-usuario");
    const idInput = document.querySelector("#usuario-id");
    const nomeInput = document.querySelector("#nome");
    const emailInput = document.querySelector("#email");
    const idadeInput = document.querySelector("#idade");

    // Verifica se estamos editando um usuário
    const params = new URLSearchParams(window.location.search);
    const id = params.get("id") ? Number(params.get("id")) : null;

    if (id) {
        const usuario = UsuarioService.getUsuarios().find(u => u.id === id);
        if (usuario) {
            idInput.value = usuario.id;
            nomeInput.value = usuario.nome;
            emailInput.value = usuario.email;
            idadeInput.value = usuario.idade;
        } else {
            console.warn("Usuário não encontrado.");
        }
    }

    // Evento de envio do formulário
    form.addEventListener("submit", event => {
        event.preventDefault();

        const usuario = {
            id: idInput.value ? Number(idInput.value) : null,
            nome: nomeInput.value.trim(),
            email: emailInput.value.trim(),
            idade: Number(idadeInput.value)
        };

        if (!usuario.nome || !usuario.email || isNaN(usuario.idade)) {
            alert("Por favor, preencha todos os campos corretamente.");
            return;
        }

        if (usuario.id) {
            UsuarioService.atualizarUsuario(usuario);
        } else {
            UsuarioService.adicionarUsuario(usuario);
        }

        // Caminho absoluto para evitar problemas com navegação
        window.location.href = "/src/components/usuarios/usuario-list/usuarioList.html";
    });
});
