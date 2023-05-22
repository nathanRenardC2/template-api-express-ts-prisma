# READ ME

## Server container (Docker)

### Start docker container

#### Create .env file if it's doesn't exist and past this (skip this step if you have .env)

```
POSTGRES_USER= "postgres"
POSTGRES_PASSWORD= "postgres"
POSTGRES_DB= "db"
DATABASE_URL=postgresql://postgres:postgres@pgbouncer:6432/db?schema=public
JWT_SECRET= "secret"

PGBOUNCER_LISTEN_ADDR=*
PGBOUNCER_LISTEN_PORT=6432
PGBOUNCER_POOL_MODE=transaction
PGBOUNCER_AUTH_TYPE=md5
PGBOUNCER_AUTH_FILE=/etc/pgbouncer/userlist.txt
PGBOUNCER_MAX_CLIENT_CONN=1000
PGBOUNCER_DEFAULT_POOL_SIZE=20
PGBOUNCER_RESERVE_POOL_SIZE=5
PGBOUNCER_RESERVE_POOL_TIMEOUT=5
PGBOUNCER_SERVER_IDLE_TIMEOUT=30
```

The configuration in this .env file allows you to define the connection parameters for a PostgreSQL database and configure the behavior of the PgBouncer connection pool proxy. The variables POSTGRES_USER, POSTGRES_PASSWORD, and POSTGRES_DB specify the credentials and database name. DATABASE_URL sets the connection URL to the database using the public schema. JWT_SECRET is a secret key used for signing JSON Web Tokens.

The other variables define the PgBouncer configuration. PGBOUNCER_LISTEN_ADDR specifies the IP address to listen on, "\*" means all interfaces. PGBOUNCER_LISTEN_PORT specifies the port on which PgBouncer listens. PGBOUNCER_POOL_MODE determines the connection pool mode, here "transaction" is used. PGBOUNCER_AUTH_TYPE indicates the authentication type used, here "md5" is used with an authentication file specified by PGBOUNCER_AUTH_FILE. The remaining variables control the connection pool sizes, timeout values, and server idle timeout.

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

### Make migration (**this steps are automatically make when you start docker**) -> **only if you want to make migration manually because it's doesn't work for example**

- Step 1

```
npx prisma migrate dev
```

- Step 2

```
npx prisma migrate deploy
```

- Step 3

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
SELECT * FROM "**YOUR_TABLE**";
```
