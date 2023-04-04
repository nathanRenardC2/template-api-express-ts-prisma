import { PrismaClient } from "@prisma/client";
import { Request, Response, Router } from "express";

const router: Router = Router();
const prisma : PrismaClient = new PrismaClient();


export const UserRouter: Router = router;