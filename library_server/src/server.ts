import express, { Express, Request, Response } from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import { config } from './config/config';
import { registerRoute } from './routes';
import dotenv from 'dotenv';

dotenv.config();

const PORT: string | number = config.server.port; 

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

    registerRoute(app)

    app.listen(PORT, () => {
      console.log(`Server listening on port ${PORT}`);
    });
  } catch (error) {
    console.error('Could not connect to the database:', error);
    process.exit(1);
  }
})();
