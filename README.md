# READ ME

When we make a new model, we need to make migration on database, this is the step to follow

## Start docker container

```
docker compose up
```

## Enter inside server container

```
docker exec -it prisma-api sh
```

## Make migration

```
npx prisma migrate dev
```

```
npx prisma migrate deploy
```

```
npx prisma generate
```

## Exit the container

```
exit
```
