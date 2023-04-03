import { Prisma, PrismaClient } from "@prisma/client";
import { Router } from "express";

const router: Router = Router();
const prisma = new PrismaClient();

router.post(`/`, async (req, res) => {
    try {
      // On récupère les données du body
      const { name } = req.body;
  
      // On crée l'artiste
      const result = await prisma.artist.create({
        data: {
          name,
        },
      });

      // On retourne le résultat
      res.json("Artist created");
    } catch (error) {
      res.status(500).send('Error: ' + error);
    }
  });  

export const ArtistRouter: Router = router;