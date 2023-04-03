#!/bin/sh
cp .env ./prisma/.env
npx prisma db pull
npx prisma migrate dev
npx prisma db push
npm run start
