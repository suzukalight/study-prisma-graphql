# study-prisma-graphql

An example of GraphQL server using prisma and graphql-yoga.

# How to use
## Setup

```
docker-compose up -d
yarn

npm i -g prisma
prisma deploy
```

## Run server

```
yarn start
```

Server is running on http://localhost:3030//graphql

Here is a sample of a frontend that works with this backend;  
https://github.com/suzukalight/apollo-client-graphql-blog

## Reset Database

```
docker-compose down -v
docker-compose up -d
prisma deploy
```

# Note

### How to create graphql server using prisma

https://www.prisma.io/docs/1.15/get-started/01-setting-up-prisma-new-database-a002/
