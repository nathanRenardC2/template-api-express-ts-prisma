import { Request, Response, NextFunction } from 'express'
import jwt from 'jsonwebtoken'

declare global {
  namespace Express {
    interface Request {
      user?: {
        id: string
      }
    }
  }
}

const jwtSecret = process.env.JWT_SECRET

if (!jwtSecret) {
  throw new Error('JWT_SECRET is not defined in the environment')
}

export const authMiddleware = (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const token = req.headers.authorization?.split(' ')[1]

    if (!token) {
      return res.status(401).json({ message: 'Unauthorized' })
    }

    const decoded = jwt.verify(token, jwtSecret) as { id: string }

    // Ajouter l'objet decoded à la requête pour une utilisation ultérieure
    req.user = decoded

    next()
  } catch (error) {
    res.status(401).json({ message: 'Invalid token' })
  }
}
