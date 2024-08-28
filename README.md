# Atividade da Aula - CRUD de Produtos em Memória

## Requisitos

Realize as seguintes operações de um CRUD de produtos (id [gerado], nome, categoria e preco) em memória (utilize array):

- inserir: insere um produto no array, gerando um id com a ideia de autoincremento.
- listar: retorna a lista de produtos
- buscar por id: com base no id, retorna o produto correspondente.
- atualizar: recebendo o id e em um produto, atualiza na lista o produto relacionado.
- deletar: remove o produto com o id recebido no parâmetro.
- pesquisar por categoria: retorna uma lista de produtos correspondente a determinada categoria.
- pesquisar por nome (like): retorna uma lista de produtos correspondente que contenha a palavra-chave.

Para testar, realize apenas chamadas de funções do próprio código (sem entrada de dados).
Após concluir as operações, refatore o código separando as funções em um outro arquivo (chamarei de produto_repository.js na pasta repository) como um módulo. O código principal (chamarei de main.js) deverá chamar esse arquivo.
Crie também um readme.md explicando a aplicação, assim como mostrando como executar.


## Getting started

### Requisitos

 - [Node.js](https://nodejs.org/en)


### Instalar ambiente

Após instalar os requisitos a cima, Na raiz do projeto, rode o comando 

```bash
$ npm i
```

Com o projeto ja instalado, rode o ambiente de desenvolvimento

```bash
$ npm run dev
```

Agora, se acessar o path `http://localhost:3333`, devera aparecer a seguinte mensagem:

```json
{ "ok": "server is on" }
```

## END Points 

### Listar produtos


Endpoint: `GET /product`

### Criar produtos

Endpoint: `POST /product`

Body:

```json
{
  "category:" "string",
  "name:" "string",
  "value:" 1
}
```

### Buscar pelo nome do produto

Endpoint: `GET /product?name=nome_do_produto`

### Buscar pela categoria do produto

Endpoint: `GET /product?category=nome_da_categoria`


### Deletar um produto 

Endpoint: `DELETE /product/id_do_produto`

### Atualizar o produto pelo id

Endpoint: `PUT /product/id_do_produto`

Body:

```json
{
  "category:" "string",
  "name:" "string",
  "value:" 1
}
```