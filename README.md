# READ ME

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
