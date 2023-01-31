<h1> TrybeSmith </h1>

Uma loja de itens medievais, no formato de uma API, utilizando Typescript.


<h2>Documentação </h2>

### Produtos
<details>
 <summary>POST /products</summary>
 
- Cadastrar um produto
- O corpo da requisição deverá seguir o formato abaixo:
 
```JSON
   {
    "id": 1,
    "name": "Poção de cura",
    "amount": "20 gold",
  }
 
```

</details>

<!-- ------------------------------------------------------------------- -->

<details>
 <summary>GET /products</summary>
 
- Lista todos os produtos

</details>

<br>

<!-- ------------------------------------------------------------------- -->

<!-- ------------------------------------------------------------------- -->

### Usuário

<details>
 <summary>POST /users</summary>
 
- Cadastrar usuário
- O endpoint deve receber a seguinte estrutura:

```JSON
{ 
  "username": "MAX",
  "classe": "swordsman",
  "level": 10,
  "password": "SavingPeople"
}
 
```

</details>

<br>

<!-- ------------------------------------------------------------------- -->

<!-- ------------------------------------------------------------------- -->


### Pedidos

<details>
 <summary>GET /orders</summary>
 
- Listar todos os pedidos 

</details>

<!-- ------------------------------------------------------------------- -->

- Deve estar logado com um token ativo: (exemplo de token)
 
 ```JSON
  {
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJwYXlsb2FkIjp7ImlkIjo1LCJkaXNwbGF5TmFtZSI6InVzdWFyaW8gZGUgdGVzdGUiLCJlbWFpbCI6InRlc3RlQGVtYWlsLmNvbSIsImltYWdlIjoibnVsbCJ9LCJpYXQiOjE2MjAyNDQxODcsImV4cCI6MTYyMDY3NjE4N30.Roc4byj6mYakYqd9LTCozU1hd9k_Vw5IWKGL4hcCVG8"
  }
 
``` 

</details>

<br>

<!-- ------------------------------------------------------------------- -->

<!-- ------------------------------------------------------------------- -->

### Login

<details>
 <summary>POST /login</summary>
 
- Fazer login
- O endpoint deve receber a seguinte estrutura:
 
```JSON
{
   "username": "string",
   "password": "string"
}
 
```

</details>


## Autor 
- [Tomas Avelino](https://www.linkedin.com/in/tomas-avelino-6b1547238/)
