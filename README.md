# cpf-validator


*. Angular 9x - frontend.

1. Environments dev. <img src= "https://image.shutterstock.com/image-vector/green-check-mark-icon-tick-260nw-522874111.jpg" width="20"/>
2. Services. <img src= "https://image.shutterstock.com/image-vector/green-check-mark-icon-tick-260nw-522874111.jpg" width="20"/>
3. Components <img src= "https://image.shutterstock.com/image-vector/green-check-mark-icon-tick-260nw-522874111.jpg" width="20"/>
4. Interceptors <img src= "https://image.shutterstock.com/image-vector/green-check-mark-icon-tick-260nw-522874111.jpg" width="20"/>
4. Material Angular <img src= "https://image.shutterstock.com/image-vector/green-check-mark-icon-tick-260nw-522874111.jpg" width="20"/>
4. Ngx Mask <img src= "https://image.shutterstock.com/image-vector/green-check-mark-icon-tick-260nw-522874111.jpg" width="20"/>

*. Laravel PHP - API.

1. Request validator. <img src= "https://image.shutterstock.com/image-vector/green-check-mark-icon-tick-260nw-522874111.jpg" width="20"/>
2. Response Pattern. <img src= "https://image.shutterstock.com/image-vector/green-check-mark-icon-tick-260nw-522874111.jpg" width="20"/>
3. Service Pattern. <img src= "https://image.shutterstock.com/image-vector/green-check-mark-icon-tick-260nw-522874111.jpg" width="20"/>
4. Laravel JWT Token. <img src= "https://image.shutterstock.com/image-vector/green-check-mark-icon-tick-260nw-522874111.jpg" width="20"/>
5. DB Seeds. <img src= "https://image.shutterstock.com/image-vector/green-check-mark-icon-tick-260nw-522874111.jpg" width="20"/>
6. DB Migrations. <img src= "https://image.shutterstock.com/image-vector/green-check-mark-icon-tick-260nw-522874111.jpg" width="20"/>


## Prerequisites
- Modifique o arquivo .env e configure-o para o seu ambiente local.
- Crie um banco mysql de preferência e altere a variaveis no .env DB_DATABASE, DB_USERNAME, DB_PASSWORD
- Execute o comando composer para baixar as depêndencias do projeto.
 ```
 composer install
```
- Execute as migrations para criarmos as tabelas em nosso banco. 
```
php artisan migrate
```
- Execute o comando seeder para alimentar o banco com um usuário para autenticar ao sistema. 
```
php artisan db:seed
```

- Inicie o servidor backend. 
```
php artisan serve
```

- Na pasta frontend instale as dependências. 
```
npm i
```
- Execute o projeto com o comando. 
```
ng serve
```

- Com o seu ambiente pronto, acesse a porta padrão 4200 do angular e utilize este email e senha padrão abaixo.

```json
{
        "name": "matheus@gmail.com",
        "email": "password"
}
```
