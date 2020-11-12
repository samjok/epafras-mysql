## Book database app (Node.js backend)

Latest update 2020-Nov-12

Fork and clone the project and create .env file with these properties:

```
DB_HOST=
DB_USER=
DB_PASSWORD=
DB_DATABASE=
DB_PORT=

JWT_SECRET=
```
There is already env-template on project directory which you can use to create .env file.
Add your MySQL database properties there.

You can start app with command
```
npm start
```

Or with nodemon:
```
npm run watch
```

In frontend you need to store the token after signing in and include it to http header:
```
Authorization: bearer <token>
```

At the moment there is only one route which needs authorization token (for adding new books to database).