# Desafio Software Engineer - Backend - Konsi 🚀
## Como instalar a API?

Clone o Projeto:
```
git clone https://github.com/Arthur-Diesel/DSE-Backend-Konsi.git
```
Entre na pasta do projeto:
```
cd dse-backend-konsi
```
Instale as depêndencias:
```
npm install
```
E pronto, para rodar é só digitar:
```
npm start
```

## Como utilizá-la?

### Requisição
Envie uma requisição <b>HTTP</b> com o método <b>POST</b> através do endpoint <b>'/benefits'</b>, com os seguintes campos no corpo:

* user
* password
* cpf

### Validações
* <b>user</b> precisa ser enviado e precisa ser válido no Portal Extratoclube
* <b>password</b> precisa ser enviado e precisa ser válido no Portal Extratoclube
* <b>cpf</b> precisa ser enviado e precisa ser um cpf válido no Portal para receber o retorno esperado