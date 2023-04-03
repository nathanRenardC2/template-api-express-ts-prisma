import express, { Application } from "express";
import { MainRouter } from "./routes";
import helmet from "helmet";
import bodyParser from "body-parser";
import cors from "cors";
import swagger from "./swagger";

const app: Application = express();

// Helmet pour sécuriser les headers
app.use(helmet());
// bodyParser pour parser les requêtes
app.use(bodyParser.json());
// CORS pour autoriser les requêtes depuis un autre domaine
app.use(cors())
// Ajout de la route principale
app.use('/api', MainRouter);
// Documentation Swagger
swagger(app);

export default app;