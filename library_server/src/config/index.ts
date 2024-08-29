import dotenv from 'dotenv';

dotenv.config();

const PORT:number = process.env.SERVER_PORT ? Number(process.env.SERVER_PORT) : 8000;

export const config = {
    mongo: {
        url: process.env.MONGO_URL
    },
    server: {
        port: PORT
    }
}