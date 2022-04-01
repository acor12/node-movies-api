import { Request, Response } from "express";
import { createMovie, getMovies } from "../service/movie.service";

export async function createMovieHandler(req: Request, res: Response) {
  try {
    const user = await createMovie(req.body);
    return res.status(201).send(user);
  } catch (error) {
    console.log(`createMovieHandler: ${error}`);
    return res.status(500).send(error);
  }
}

export async function getMovieHandler(req: Request, res: Response) {
  try {
    const movies = await getMovies();
    console.log("querying movies");
    return res.status(200).send(movies);
  } catch (error) {
    console.log(`createMovieHandler: ${error}`);
    return res.status(500).send(error);
  }
}
