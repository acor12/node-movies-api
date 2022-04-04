import { Request, Response } from "express";
import {
  createMovie,
  getMovies,
  getMovieById,
  updateMovie,
  removeMovie,
  cloneMovie,
} from "../service/movie.service";

export async function createMovieHandler(req: Request, res: Response) {
  try {
    const movie = await createMovie(req.body);
    return res.status(201).json(movie);
  } catch (error) {
    return res.status(500).json(error);
  }
}

export async function getMovieHandler(req: Request, res: Response) {
  try {
    const movies = await getMovies();
    return res.status(200).json(movies);
  } catch (error) {
    return res.status(500).json(error);
  }
}

export async function getMovieByIdHandler(req: Request, res: Response) {
  try {
    const movie = await getMovieById(req.params.id as string);
    if (movie) {
      return res.status(200).json(movie);
    }
    return res
      .status(404)
      .json({ message: "Cant find movie, please try again" });
  } catch (error) {
    return res.status(500).json(error);
  }
}

export async function updateMovieHandler(req: Request, res: Response) {
  try {
    const movie = await updateMovie(req.params.id, req.body);

    return res.status(200).json(movie);
  } catch (error) {
    return res.status(500).json(error);
  }
}

export async function cloneMovieBySlugHandler(req: Request, res: Response) {
  try {
    const movie = await cloneMovie(req.params.slug as string);
    if (movie) {
      return res.status(200).json(movie);
    }
    return res
      .status(404)
      .json({ message: "Cant find movie, please try again" });
  } catch (error) {
    return res.status(500).json(error);
  }
}

export async function removeMovieHandler(req: Request, res: Response) {
  try {
    const movie = await removeMovie(req.params.id);

    return res.status(200).json(movie);
  } catch (error) {
    return res.status(500).json(error);
  }
}
