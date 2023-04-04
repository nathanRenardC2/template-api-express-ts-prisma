import { Prisma, PrismaClient } from "@prisma/client";
import { Request, Response, Router } from "express";

const router: Router = Router();
const prisma = new PrismaClient();

/**
 * Creation of an artist
 * @param none
 * @body name
 */
router.post(`/`, async (req: Request, res: Response) => {
    try {
      // On récupère les données du body
      const { name } = req.body;

      // On vérifie que le nom de l'artiste est fourni
      if (!name || name.trim() === '') {
        return res.status(400).send('Something went wrong : Artist name is mandatory.');
      }

      // On crée l'artiste
      const result = await prisma.artist.create({
        data: {
          name,
        },
      });

      // On retourne le résultat
      res.json("Artist created");
    } catch (error) {
      res.status(500).send({ message: "Something went wrong", error: error});
    }
});  

/**
 * Recovery of all artists
 * @param none
 * @body none
 */
router.get(`/`, async (req, res) => {
    try {
      // On récupère tous les artistes
      const result = await prisma.artist.findMany();

      // On retourne le résultat
      res.json(result);
    } catch (error) {
      res.status(500).send({ message: "Something went wrong", error: error});
    }
});


export const ArtistRouter: Router = router;