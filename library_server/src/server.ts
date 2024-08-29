import express, { Express, Request, Response } from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import { config } from './config/index';
import dotenv from 'dotenv';

dotenv.config();

const PORT: string | number = config.server.port; // Default port
//const MONGO_URL: string = config.mongo.url || 'mongodb://localhost:27017'; // Default MongoDB URL

const app: Express = express();

app.use(express.json());
app.use(cors());

(async function startUp() {
  try {
    await mongoose.connect(process.env.MONGO_URL!, {
      w: "majority",
      retryWrites: true,
      authMechanism: "DEFAULT",
    });
    console.log('Successfully connected to the database.');

    app.get("/health", (req: Request, res: Response) => {
      res.status(200).json({ message: "Server is running properly!" });
    });

    app.listen(PORT, () => {
      console.log(`Server listening on port ${PORT}`);
    });
  } catch (error) {
    console.error('Could not connect to the database:', error);
    process.exit(1);
  }
})();
