# CRUD de Usuários - JavaScript (Mock com JSON Local)

Este é um projeto de CRUD de usuários utilizando JavaScript puro, com separação de responsabilidades em **Componentes, Controllers e Services**. Os dados são armazenados localmente em um arquivo **JSON** e manipulados por meio de um serviço.

## 📂 Estrutura do Projeto
```
/crud-usuarios/
│── /src/                              # Código-fonte principal
│   │── /components/                    # Componentes da aplicação
│   │   │── /usuarios/                  # Componentes relacionados ao CRUD de usuários
│   │   │   │── /usuario-list/          # Componentes da lista de usuários
│   │   │   │   ├── usuarioList.html    # Interface da lista de usuários
│   │   │   │   ├── usuarioList.js      # Lógica para exibir a lista
│   │   │   │   ├── usuarioList.css     # Estilos da lista de usuários
│   │   │   │
│   │   │   │── /usuario-form/          # Componentes do formulário de usuários
│   │   │   │   ├── usuarioForm.html    # Formulário para adicionar/editar usuários
│   │   │   │   ├── usuarioForm.js      # Lógica do formulário
│   │   │   │   ├── usuarioForm.css     # Estilos do formulário
│   │
│   │── /controllers/                    # Controladores (conectam a interface com os serviços)
│   │   ├── UsuarioController.js         # Gerencia eventos e atualizações do CRUD de usuários
│   │
│   │── /services/                        # Serviços para manipulação dos dados
│   │   ├── UsuarioService.js            # Lida com operações CRUD no mock
│   │
│   │── /data/                            # Mock de dados
│   │   ├── usuarios.json                 # Arquivo JSON com usuários mockados
│   │
│   │── app.js                            # Arquivo principal que inicializa a aplicação
│
│── package.json                          # Gerenciador de pacotes do Node.js
│── README.md                             # Documentação do projeto
```

## 🚀 Configuração do Projeto
### 1️⃣ Criar o `package.json`
Execute o seguinte comando no terminal:
```sh
npm init -y
```

### 2️⃣ Instalar o `json-server` (para mock de API)
```sh
npm install json-server
```

### 3️⃣ Iniciar o servidor fake
Para rodar o `json-server` e simular a API local, execute:
```sh
npx json-server --watch src/data/usuarios.json --port 3000
```

Isso criará uma API REST fake acessível em: `http://localhost:3000/usuarios`

## ✨ Funcionalidades
- 📌 **Listagem de usuários**
- ✏️ **Edição de usuários**
- ➕ **Adicionando novos usuários**
- 🗑️ **Exclusão de usuários**

## 📌 Próximos Passos
1️⃣ Criar o mock de dados (`usuarios.json`)
2️⃣ Implementar o `UsuarioService.js`
3️⃣ Criar os componentes (`usuario-list` e `usuario-form`)
4️⃣ Desenvolver o `UsuarioController.js`

---

💡 *Este projeto segue boas práticas de separação de responsabilidades para facilitar manutenção e expansão.*

