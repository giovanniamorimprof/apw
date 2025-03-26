# CRUD de Usuários e Produtos em JavaScript

Este é um projeto de CRUD de usuários e produtos utilizando JavaScript puro, consumindo uma **API mock** e seguindo o padrão MVC. O front-end é separado em componentes e utiliza Bootstrap para estilização.

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
│   ├── produto-list
│   │   ├── produtoList.html
│   │   ├── produtoList.js
│   ├── produto-form
│   │   ├── produtoForm.html
│   │   ├── produtoForm.js
├── controllers
│   ├── UsuarioController.js
│   ├── ProdutoController.js
├── services
│   ├── UsuarioService.js
│   ├── ProdutoService.js
├── assets
│   ├── styles.css
├── header.html
├── index.html
└── server.js (opcional, para rodar um servidor local)
```

## 🛠 Tecnologias Utilizadas
- JavaScript (ES6+)
- Bootstrap
- API Mock para armazenamento de dados (`https://67c6f465c19eb8753e780d30.mockapi.io/api/v1/`)
- HTML e CSS modularizados

---

## 🔧 Como Executar o Projeto

### 1️⃣ Clonar o repositório  
```sh
git clone <repo-url>
cd <repo-name>
```

### 2️⃣ Executar um servidor local  
O projeto utiliza **módulos ES6**, então **não pode ser aberto diretamente no navegador**.  

#### 📌 **Opção 1: Usando Live Server do VS Code**  
- Instale a extensão **Live Server** no VS Code.  
- Clique com o botão direito no `index.html` e selecione **"Open with Live Server"**.

#### 📌 **Opção 2: Usando um servidor HTTP (Python)**  
Se tiver **Python instalado**, rode um servidor embutido:  

- **Windows**  
  ```sh
  python -m http.server 8000
  ```
- **Mac/Linux**  
  ```sh
  python3 -m http.server 8000
  ```

Acesse no navegador:  
```
http://localhost:8000/src/components/produto-list/produtoList.html
```

#### 📌 **Opção 3: Usando Node.js (Express)**
Se preferir usar um servidor Node.js:

1. Instale o Express:  
   ```sh
   npm install express
   ```
2. Crie o arquivo `server.js` e adicione:
   ```js
   const express = require("express");
   const app = express();

   app.use(express.static(__dirname));

   app.listen(3000, () => {
       console.log("Servidor rodando em http://localhost:3000");
   });
   ```
3. Execute o servidor:
   ```sh
   node server.js
   ```
4. Acesse:  
   ```
   http://localhost:3000/src/components/produto-list/produtoList.html
   ```

---

## 🎨 Estrutura do CRUD

### **1️⃣ `UsuarioService.js` e `ProdutoService.js` - Camada de Serviço**
- Responsáveis por **fazer requisições** à API Mock.
- Funções:
  - `getUsuarios()`, `adicionarUsuario()`, `editarUsuario()`, `removerUsuario()`
  - `getProdutos()`, `adicionarProduto()`, `editarProduto()`, `removerProduto()`

### **2️⃣ `UsuarioController.js` e `ProdutoController.js` - Camada de Controle**
- Gerenciam eventos da interface.
- Carregam dados na lista e manipulam formulários.
- Conectam a interface com os Services.

### **3️⃣ Componentes HTML e JS**
- `usuarioList.html` e `produtoList.html` para listagem.
- `usuarioForm.html` e `produtoForm.html` para cadastro/edição.

---

## 🔎 Problemas Comuns e Soluções

### **❌ Erro: MIME Type não permitido**
Se ao abrir no navegador houver erro MIME ao carregar os scripts, rode um servidor local:
```sh
npx live-server --port=8080
```

### **❌ `document.querySelector(...) is null`**
- Confirme que os elementos existem no HTML antes de manipular no JS.
- O JS deve ser carregado **após** o HTML (`DOMContentLoaded`).

### **❌ `The requested module doesn’t provide an export named ...`**
- Confirme que os arquivos estão usando `export` corretamente.
- Os imports devem ter caminhos relativos corretos.

---

## 🚀 **Pronto! Agora seu CRUD de Usuários e Produtos está funcionando!**