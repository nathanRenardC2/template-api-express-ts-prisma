import express, { Application } from "express";
import { MainRouter } from "./routes";
import helmet from "helmet";
import bodyParser from "body-parser";

const app: Application = express();

app.use(helmet());
app.use(bodyParser.json());
app.use('/api', MainRouter);

export default app;