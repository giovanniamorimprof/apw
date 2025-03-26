import { UsuarioService } from "../../../services/UsuarioService.js";

// Carregar Header e Usuários Dinamicamente
document.addEventListener("DOMContentLoaded", async () => {
    await carregarUsuarios();
});

async function carregarUsuarios() {
    const tabela = document.querySelector("#tabela-usuarios");
    if (!tabela) {
        console.error("Elemento #tabela-usuarios não encontrado.");
        return;
    }

    tabela.innerHTML = "";

    try {
        const usuarios = await UsuarioService.getUsuarios(); // Agora esperamos os dados corretamente

        if (!Array.isArray(usuarios)) {
            console.error("Erro: dados recebidos não são um array.", usuarios);
            return;
        }

        usuarios.forEach(usuario => {
            const linha = document.createElement("tr");
            linha.innerHTML = `
                <td>${usuario.id}</td>
                <td>${usuario.nome}</td>
                <td>${usuario.email}</td>
                <td>${usuario.idade}</td>
                <td>
                    <button class="btn btn-warning btn-sm editar" data-id="${usuario.id}">Editar</button>
                    <button class="btn btn-danger btn-sm remover" data-id="${usuario.id}">Excluir</button>
                </td>
            `;
            tabela.appendChild(linha);
        });

        // Eventos de clique para editar e remover
        document.querySelectorAll(".editar").forEach(button => {
            button.addEventListener("click", (event) => {
                const id = event.target.getAttribute("data-id");
                editarUsuario(id);
            });
        });

        document.querySelectorAll(".remover").forEach(button => {
            button.addEventListener("click", async (event) => {
                const id = Number(event.target.getAttribute("data-id")); // Converte para número
                await removerUsuario(id);
            });
        });

    } catch (error) {
        console.error("Erro ao carregar usuários:", error);
    }
}

function editarUsuario(id) {
    window.location.href = `../usuario-form/usuarioForm.html?id=${id}`;
}

async function removerUsuario(id) {
    console.log("Excluindo usuário com ID:", id);

    try {
        await UsuarioService.excluirUsuario(id);
        await carregarUsuarios(); // Recarrega a lista após a exclusão
    } catch (error) {
        console.error("Erro ao excluir usuário:", error);
    }
}
