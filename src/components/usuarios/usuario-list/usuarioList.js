import { UsuarioService } from "../../../services/UsuarioService.js";

document.addEventListener("DOMContentLoaded", () => {
    carregarUsuarios();
});

function carregarUsuarios() {
    const tabela = document.querySelector("#tabela-usuarios");
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
                <button class="btn btn-warning btn-sm" onclick="editarUsuario(${usuario.id})">Editar</button>
                <button class="btn btn-danger btn-sm" onclick="removerUsuario(${usuario.id})">Excluir</button>
            </td>
        `;
        tabela.appendChild(linha);
    });
}

window.editarUsuario = (id) => {
    window.location.href = `../usuario-form/usuarioForm.html?id=${id}`;
};

window.removerUsuario = (id) => {
    UsuarioService.removerUsuario(id);
    carregarUsuarios();
};
