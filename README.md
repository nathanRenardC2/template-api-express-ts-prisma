# READ ME

## Server container (Docker)

When we make a new model, we need to make migration on database, this is the step to follow

### Start docker container

```
docker compose up
```

### Enter inside server container

```
docker exec -it prisma-api sh
```

### Make migration

Step 1
```
npx prisma migrate dev
```

Step 2
```
npx prisma migrate deploy
```

Step 3
```
npx prisma generate
```

### Exit the container

```
exit
```

## Database container (Docker)

If you want to see data inside database, you need to enter into postgres container

### Enter inside postgres container

```
docker exec -it postgres psql -U postgres -d db
```

### Make your request (example)

```
SELECT * FROM artist;
```
