# CRUD de Usuários em JavaScript

Este é um projeto de CRUD de usuários utilizando JavaScript puro, armazenando os dados no `localStorage` e seguindo o padrão MVC. O front-end é separado em componentes e utiliza Bootstrap para estilização.

## ⚡ Estrutura do Projeto
```
/src
├── components
│   ├── usuario-list
│   │   ├── usuarioList.html
│   │   ├── usuarioList.js
│   ├── usuario-form
│   │   ├── usuarioForm.html
│   │   ├── usuarioForm.js
├── controllers
│   ├── UsuarioController.js
├── services
│   ├── UsuarioService.js
├── data
│   ├── usuarios.json
├── index.html
└── styles.css
```

## 🛠 Tecnologias Utilizadas
- JavaScript (ES6+)
- Bootstrap
- `localStorage` para armazenamento de dados
- HTML e CSS modularizados

## 🔧 Como Executar o Projeto
### 1. Clonar o repositório
```sh
git clone <repo-url>
cd <repo-name>
```

### 2. Instalar dependências
```sh
npm install
```

### 3. Executar um servidor local (Live Server)
```sh
npx live-server --port=8080 --mimeType "text/javascript"
```
> 📅 **Alternativamente**, use a extensão Live Server do VS Code para abrir `index.html`

## 🎨 Estrutura do CRUD
### **1. `UsuarioService.js` - Camada de Serviço**
- Manipula os dados armazenados no `localStorage`.
- Simula chamadas para um backend.
- Funções: `getUsuarios()`, `adicionarUsuario()`, `editarUsuario()`, `removerUsuario()`.

### **2. `UsuarioController.js` - Camada de Controle**
- Gerencia eventos da interface.
- Carrega dados na lista e manipula o form.
- Conecta a interface com `UsuarioService.js`.

### **3. Componentes HTML e JS**
- `usuarioList.html` e `usuarioList.js` para listagem.
- `usuarioForm.html` e `usuarioForm.js` para cadastro/edição.

## 🔎 Problemas Comuns e Soluções
### **Erro: MIME Type não permitido**
Se ao abrir no navegador houver um erro MIME ao carregar os scripts, rode um servidor local:
```sh
npx live-server --port=8080 --mimeType "text/javascript"
```

### **Erro: `document.querySelector(...) is null`**
- Confirme que os elementos existem no HTML antes de manipular no JS.
- O JS deve ser carregado após o HTML (`DOMContentLoaded`).

### **Erro: `The requested module doesn’t provide an export named`**
- Confirme que os arquivos estão usando `export` corretamente.
- Os imports devem usar caminhos relativos corretos.

---
Agora o projeto está pronto para desenvolvimento e testes! 🚀

