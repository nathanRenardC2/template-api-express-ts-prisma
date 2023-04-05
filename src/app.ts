import express, { Application } from "express";
import { MainRouter } from "./routes";
import helmet from "helmet";
import bodyParser from "body-parser";
import cors from "cors";

const app: Application = express();

// Helmet to secure Express with various HTTP headers
app.use(helmet());
// bodyParser to parse JSON bodies into JS objects
app.use(bodyParser.json());
// CORS to allow cross-origin requests
app.use(cors())
// add routes
app.use('/api', MainRouter);

export default app;