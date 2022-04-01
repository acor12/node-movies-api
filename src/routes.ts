import { Express, Request, Response } from "express";
import {
  createMovieHandler,
  getMovieHandler
} from "./controllers/movie.controller";

export default function Routes(app: Express) {
  app.get("/", (req: Request, res: Response) => res.sendStatus(200));

  //POST /api/movie
  app.post("/api/movie", createMovieHandler);
  app.get("/movies", getMovieHandler);
  //GET /api/movie
  //GET /api/movie/id
  //PUT /api/movie/id
  //DELETE /api/movie/id

  //POST /api/movie/id/review
}
