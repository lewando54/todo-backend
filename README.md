# Welcome to backend of todo-frontend app

This backend was made in [Nest](https://github.com/nestjs/nest) and [Prisma](https://www.prisma.io/), with [PostgreSQL](https://www.postgresql.org.pl/) as DB.

## Project setup

1. Install dependencies

```bash
$ npm install
```

2. Change password in docker-compose.yml

```yml
        environment:
            - POSTGRES_PASSWORD=CHANGE_PASSWORD
```

3.  Spin up the docker container

```bash
$ docker compose up
```

4. Create .env file with DB connection string

```.env
DATABASE_URL="postgresql://postgres:CHANGE_PASSWORD@localhost:5432/mydb?schema=public"
```

## Compile and run the project

```bash
# watch mode
$ npm run start:dev
```
