import Movie, { MovieDocument } from "../models/movie.model";
import { DocumentDefinition } from "mongoose";

export async function createMovie(data: DocumentDefinition<MovieDocument>) {
  try {
    return await Movie.create(data);
  } catch (error) {
    throw new Error(`createMovie Error: ${error}`);
  }
}

export async function getMovies() {
  try {
    return await Movie.find();
  } catch (error) {
    throw new Error(`createMovie Error: ${error}`);
  }
}
//function findMovie(){}

//function findMovieById(){}

//function updateMovie(){}

//function deleteMovie(){}
