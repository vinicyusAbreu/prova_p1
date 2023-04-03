# API de Produtos

Esta é uma API de produtos criada para a prova de Laboratório de Desenvolvimento de Aplicativos Nativos. Ela foi desenvolvida utilizando as tecnologias Node e MongoDB. Através dessa API, os usuários têm a possibilidade de visualizar, adicionar, atualizar e excluir produtos de maneira simples e eficiente.

## Instalação

Para utilizar esta API, siga os seguintes passos:

<ol>
    <li>Clone este repositório em seu computador: git clone https://github.com/seu-usuario/prova_p1.git</li>
    <li>Entre na pasta do projeto: cd prova_p1</li>
    <li>Instale as dependências: npm install</li>
    <li>Execute o projeto: npm run dev</li>
</ol>

## Endpoints

A API possui os seguintes endpoints:

### GET /produtos

Retorna uma lista de todos os produtos cadastrados na API.

### GET /produtos/:id

Retorna um produto específico, com base no seu ID.


### POST /produtos

Cria um novo produto na API. O corpo da requisição deve incluir as informações do produto a ser criado.

### PUT /produtos/:id

Atualiza um produto existente na API. O corpo da requisição deve incluir as informações atualizadas do produto.

### DELETE /produtos/:id

Exclui um produto da API, com base no seu ID.

## Exemplo de Uso

### GET /produtos

Retorna todos os produtos cadastrados na API:

```bash
GET http://localhost:3000/produtos
```

### GET /produtos/:id

Retorna um produto específico, com base no seu ID:

```bash
GET http://localhost:3000/produtos/1
```


### POST /produtos

Cria um novo produto na API:

```bash
POST http://localhost:3000/produtos
```

```json
{
		"name": "Serra Angel",
		"price": "15,00",
		"category_id":"4d216ce9-8e66-4069-9d7a-d245e4ce775e",
		"subcategory": "card"
	}
```

### PUT /produtos/:id

Atualiza um produto existente na API:

```bash
    PUT http://localhost:3000/produtos/1
```

```json
{
  "name": "Camiseta"
}
```

### DELETE /produtos/:id

Exclui um produto da API:

```bash
DELETE http://localhost:3000/produtos/1
```

## Autor

- **Vinicius de Abreu Massena** - [vinicyusAbreu](https://github.com/vinicyusAbreu)
