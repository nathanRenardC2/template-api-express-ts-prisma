# READ ME

## Configuration 

* Step 1 : Add an .env file to the root of the project and copy content below

```
POSTGRES_USER= "postgres"
POSTGRES_PASSWORD= "postgres"
POSTGRES_DB= "db"
DATABASE_URL=postgresql://postgres:postgres@db:5432/db?schema=public
JWT_SECRET= "secret"
```
* Step 2 : Create a file named entrypoint.sh and copy content below

```
#!/bin/sh
npx prisma migrate dev
npx prisma migrate deploy
npx prisma generate
npm run dev
```

## Server container (Docker)

### Start docker container

#### First time or when you change dockerfile (build image docker)

```
docker compose up --build
```

#### After build image

```
docker compose up
```

### Enter inside server container

```
docker exec -it prisma-api sh
```

### Mockup 

```
npx prisma db seed
```

### Make migration (**this steps are automatically make when you start docker**)

* Step 1
```
npx prisma migrate dev
```

* Step 2
```
npx prisma migrate deploy
```

* Step 3
```
npx prisma generate
```

### Exit the container

```
exit
```

## Database container (**Docker**)

If you want to see data inside database, you need to enter into postgres container

### Enter inside postgres container

```
docker exec -it postgres psql -U postgres -d db
```

### Make your request (**example**)

```
SELECT * FROM "User";
```
