import { UsuarioService } from "../services/UsuarioService.js";

export const UsuarioController = {
    async carregarUsuarios() {
        const tabela = document.querySelector("#tabela-usuarios");
        if (!tabela) return;

        tabela.innerHTML = "";

        try {
            const usuarios = await UsuarioService.getUsuarios();

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
                botao.addEventListener("click", async event => {
                    const id = event.target.dataset.id;
                    const sucesso = await UsuarioService.excluirUsuario(id);
                    if (sucesso) this.carregarUsuarios(); // Recarrega a tabela após exclusão
                });
            });

            document.querySelectorAll(".btn-editar").forEach(botao => {
                botao.addEventListener("click", event => {
                    const id = event.target.dataset.id;
                    window.location.href = `../usuario-form/usuarioForm.html?id=${id}`;
                });
            });
        } catch (error) {
            console.error("Erro ao carregar usuários:", error);
        }
    }
};
