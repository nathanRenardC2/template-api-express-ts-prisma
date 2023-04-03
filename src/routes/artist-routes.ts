import { Prisma, PrismaClient } from "@prisma/client";
import { Router } from "express";

const router: Router = Router();
const prisma = new PrismaClient();

router.post(`/`, async (req, res) => {
    try {
      // On récupère les données du body
      const { name } = req.body;

      // On vérifie que le nom de l'artiste est fourni
      if (!name || name.trim() === '') {
        return res.status(400).send('Error : Le nom de l\'artiste est obligatoire.' + name);
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
      res.status(500).send('Error: ' + error);
    }
});  

router.get(`/`, async (req, res) => {
    try {
      // On récupère tous les artistes
      const result = await prisma.artist.findMany();

      // On retourne le résultat
      res.json(result);
    } catch (error) {
      res.status(500).send('Error: ' + error);
    }
});


export const ArtistRouter: Router = router;