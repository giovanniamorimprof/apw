import { UsuarioService } from "../../../services/UsuarioService.js";

document.addEventListener("DOMContentLoaded", async () => {
    const form = document.querySelector("#form-usuario");
    const idInput = document.querySelector("#usuario-id");
    const nomeInput = document.querySelector("#nome");
    const emailInput = document.querySelector("#email");
    const idadeInput = document.querySelector("#idade");

    // Obtém o ID da URL
    const params = new URLSearchParams(window.location.search);
    const id = params.get("id") ? Number(params.get("id")) : null;

    if (id) {
        try {
            const usuarios = await UsuarioService.getUsuarios();

            if (!Array.isArray(usuarios)) {
                console.error("Erro: a resposta da API não é um array.", usuarios);
                return;
            }

            // Converte o ID para número antes de comparar
            const usuario = usuarios.find(u => Number(u.id) === id);

            if (usuario) {
                idInput.value = usuario.id;
                nomeInput.value = usuario.nome;
                emailInput.value = usuario.email;
                idadeInput.value = usuario.idade;
            } else {
                console.warn(`Usuário com ID ${id} não encontrado.`);
            }
        } catch (error) {
            console.error("Erro ao carregar usuário:", error);
        }
    }

    // Evento de envio do formulário
    form.addEventListener("submit", async (event) => {
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

        try {
            if (usuario.id) {
                await UsuarioService.atualizarUsuario(usuario);
            } else {
                await UsuarioService.adicionarUsuario(usuario);
            }

            window.location.href = "/src/components/usuarios/usuario-list/usuarioList.html";
        } catch (error) {
            console.error("Erro ao salvar usuário:", error);
        }
    });
});
