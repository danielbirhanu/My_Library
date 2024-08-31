import { Express, Request, Response } from "express";
import AuthRoute from "./AuthRoute";

export function registerRoute (app:Express){

    app.get("/health", (req: Request, res: Response) => {
      res.status(200).json({ message: "Server is running properly!" });
    });

    app.use('/auth', AuthRoute)
}