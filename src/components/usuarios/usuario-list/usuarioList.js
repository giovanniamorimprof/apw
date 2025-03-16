import { UsuarioService } from "../../../services/UsuarioService.js";

// Carregar Header e Usuários Dinamicamente
document.addEventListener("DOMContentLoaded", () => {
    carregarUsuarios();
});


function carregarUsuarios() {
    const tabela = document.querySelector("#tabela-usuarios");
    if (!tabela) {
        console.error("Elemento #tabela-usuarios não encontrado.");
        return;
    }

    tabela.innerHTML = "";

    const usuarios = UsuarioService.getUsuarios();

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
        button.addEventListener("click", (event) => {
            const id = Number(event.target.getAttribute("data-id")); // Converte para número
            removerUsuario(id);
        });
    });
}

function editarUsuario(id) {
    window.location.href = `../usuario-form/usuarioForm.html?id=${id}`;
}

function removerUsuario(id) {
    console.log("Excluindo usuário com ID:", id);

    UsuarioService.excluirUsuario(id);

    // Espera um pouco para garantir que os dados sejam atualizados antes de recarregar a tabela
    setTimeout(carregarUsuarios, 100);
}
