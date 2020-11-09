## Node.js + MySQL + TypeORM

Fork and clone the project and create .env file with these properties:

```
DB_HOST=
DB_USER=
DB_PASSWORD=
DB_DATABASE=
DB_PORT=

JWT_SECRET=
```
In frontend you need to store the token after signing in and include it to http header:
```
Authorization: Bearer <token>
```


### Used technologies:
- TypeScript
- Node.js
- Express
- MySQL
- TypeORM
