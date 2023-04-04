import { PrismaClient } from "@prisma/client";
import { Request, Response, Router } from "express";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";

const router: Router = Router();
const prisma : PrismaClient = new PrismaClient();

/**
 * Register a user
 * @param none
 * @body email, password
 */
router.post(`/register`, async (req: Request, res: Response) => {
    try{
      const { email, password } = req.body;

      const salt = await bcrypt.genSalt(10);
      const hashedPassword = await bcrypt.hash(password, salt);
    
      const user = await prisma.User.create({
        data: { email, password: hashedPassword },
      });
    
      res.status(201).json({ message: "User registered", user });
    } catch (error) {
      res.status(500).json({ message: "Something went wrong", error });
    }
});

/**
 * Login a user
 * @param none
 * @body email, password
 */
router.post(`/login`, async (req: Request, res: Response) => {
    try {
        const { email, password } = req.body;

        const user = await prisma.User.findUnique({
            where: { email },
        });

        if (!user) {
            return res.status(400).json({ message: "User not found" });
        }

        const validPassword = await bcrypt.compare(password, user.password);

        if (!validPassword) {
            return res.status(400).json({ message: "Invalid password" });
        }

        const jwtSecret = process.env.JWT_SECRET;

        if (!jwtSecret) {
            throw new Error("JWT_SECRET is not defined in the environment");
        }

        const accessToken = jwt.sign({ id: user.id }, jwtSecret, {
            expiresIn: "1h",
        });

        const refreshToken = jwt.sign({ id: user.id }, jwtSecret, {
            expiresIn: "7d",
        });

        let response_data = {
            "access": accessToken,
            "refresh": refreshToken
        }

        res.status(200).json(response_data);

    } catch (error) {
        res.status(500).json({ message: "Something went wrong", error: error});
    }
});



export const AuthRouter: Router = router;