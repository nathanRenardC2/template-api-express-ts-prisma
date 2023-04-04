#!/bin/sh
npx prisma migrate dev
npx prisma migrate deploy
npx prisma generate
npm run dev
