import UsuarioService from "../services/UsuarioService.js";

document.addEventListener("DOMContentLoaded", () => {
  carregarUsuarios();
});

// Função para carregar usuários na tabela
async function carregarUsuarios() {
  const usuarios = await UsuarioService.listarUsuarios();
  const tbody = document.querySelector("#tabela-usuarios tbody");
  tbody.innerHTML = "";

  usuarios.forEach((usuario) => {
    const tr = document.createElement("tr");
    tr.innerHTML = `
      <td>${usuario.id}</td>
      <td>${usuario.nome}</td>
      <td>${usuario.email}</td>
      <td>${usuario.idade}</td>
      <td>
        <button class="btn-editar" data-id="${usuario.id}">✏️</button>
        <button class="btn-excluir" data-id="${usuario.id}">🗑️</button>
      </td>
    `;
    tbody.appendChild(tr);
  });

  // Adicionar eventos aos botões
  document.querySelectorAll(".btn-editar").forEach((btn) =>
    btn.addEventListener("click", editarUsuario)
  );
  document.querySelectorAll(".btn-excluir").forEach((btn) =>
    btn.addEventListener("click", excluirUsuario)
  );
}

// Função para adicionar novo usuário
document.querySelector("#form-usuario").addEventListener("submit", async (e) => {
  e.preventDefault();
  
  const nome = document.querySelector("#nome").value;
  const email = document.querySelector("#email").value;
  const idade = document.querySelector("#idade").value;

  if (nome && email && idade) {
    await UsuarioService.criarUsuario({ nome, email, idade });
    carregarUsuarios();
    document.querySelector("#form-usuario").reset();
  }
});

// Função para editar um usuário
async function editarUsuario(event) {
  const id = event.target.dataset.id;
  const usuario = await UsuarioService.buscarUsuarioPorId(id);

  document.querySelector("#nome").value = usuario.nome;
  document.querySelector("#email").value = usuario.email;
  document.querySelector("#idade").value = usuario.idade;

  document.querySelector("#form-usuario").dataset.editingId = id;
}

// Função para excluir um usuário
async function excluirUsuario(event) {
  const id = event.target.dataset.id;
  if (confirm("Tem certeza que deseja excluir este usuário?")) {
    await UsuarioService.excluirUsuario(id);
    carregarUsuarios();
  }
}

// Função para salvar edição
document.querySelector("#form-usuario").addEventListener("submit", async (e) => {
  e.preventDefault();

  const id = document.querySelector("#form-usuario").dataset.editingId;
  const nome = document.querySelector("#nome").value;
  const email = document.querySelector("#email").value;
  const idade = document.querySelector("#idade").value;

  if (id) {
    await UsuarioService.atualizarUsuario(id, { nome, email, idade });
    delete document.querySelector("#form-usuario").dataset.editingId;
  } else {
    await UsuarioService.criarUsuario({ nome, email, idade });
  }

  carregarUsuarios();
  document.querySelector("#form-usuario").reset();
});
