# ts-koa-api

Proof of concept of a Node.js - Typescript - Koa -API

This project is made using the instructions in [How to build a basic API with TypeScript, Koa, and TypeORM](https://inviqa.com/blog/how-build-basic-api-typescript-koa-and-typeorm) as base.

### Yarn commands

`yarn run lint` --> Run linter

`yarn run build` --> Build typescript files

`yarn run serve` --> Run API (does not watch for changes)

`yarn run start` --> Run API with nodemon, will restart after changes

If you now run _yarn start_, Nodemon should start our server listening on localhost port 3000.

### Database - PostgreSQL

The database is set up using docker. The configurations in docker-compose.yml will make PostgreSQL available locally on port 5432, and the Adminer admin GUI available on http://127.0.0.1:8080, once the containers have been started, which we’ll do later.

Run `docker-compose up` to start database
