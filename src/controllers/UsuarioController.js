import { UsuarioService } from "../services/UsuarioService.js";

export const UsuarioController = {
    carregarUsuarios() {
        const tabela = document.querySelector("#tabela-usuarios");
        if (!tabela) return;

        tabela.innerHTML = "";
        const usuarios = UsuarioService.getUsuarios();

        usuarios.forEach(usuario => {
            const tr = document.createElement("tr");
            tr.innerHTML = `
                <td>${usuario.id}</td>
                <td>${usuario.nome}</td>
                <td>${usuario.email}</td>
                <td>${usuario.idade}</td>
                <td>
                    <button class="btn btn-warning btn-sm btn-editar" data-id="${usuario.id}">Editar</button>
                    <button class="btn btn-danger btn-sm btn-excluir" data-id="${usuario.id}">Excluir</button>
                </td>
            `;
            tabela.appendChild(tr);
        });

        // Adiciona eventos aos botões de excluir e editar
        document.querySelectorAll(".btn-excluir").forEach(botao => {
            botao.addEventListener("click", event => {
                const id = Number(event.target.dataset.id);
                UsuarioService.excluirUsuario(id);
                this.carregarUsuarios(); // Recarrega a tabela
            });
        });

        document.querySelectorAll(".btn-editar").forEach(botao => {
            botao.addEventListener("click", event => {
                const id = Number(event.target.dataset.id);
                window.location.href = `../usuario-form/usuarioForm.html?id=${id}`;
            });
        });
    }
};
