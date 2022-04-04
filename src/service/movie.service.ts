import { DocumentDefinition } from "mongoose";
import Movie, { MovieDocument } from "../models/movie.model";
import Review from "../models/review.model";

export async function createMovie(data: DocumentDefinition<MovieDocument>) {
  try {
    const newMovie = await Movie.create({
      ...data,
      score: 0,
    });
    newMovie.slug = `${newMovie.title.toLowerCase().replace(" ", "-")}-${
      newMovie.id
    }`;
    newMovie.save();
    return newMovie;
  } catch (error) {
    return error;
  }
}

export async function getMovies() {
  try {
    const options = {
      page: 1,
      limit: 5,
    };
    return await Movie.paginate({}, options);
  } catch (error) {
    return error;
  }
}

export async function getMovieById(id: string) {
  try {
    const movie = await Movie.findById(id);
    const reviewsQuery = await Review.find({ movie: id })
      .sort({
        platform: -1,
      })
      .populate("platform");

    return { movie, reviewsQuery };
  } catch (error) {
    return error;
  }
}

export async function updateMovie(
  id: string,
  data: DocumentDefinition<MovieDocument>,
) {
  try {
    const movie = await Movie.findByIdAndUpdate(
      id,
      { ...data },
      { useFindAndModify: true, new: true },
    );

    if (movie) {
      return { message: "Successfully updated this movie" };
    }
    return { message: "Cant find movie, please try again" };
  } catch (error) {
    return error;
  }
}

export async function cloneMovie(slug: string) {
  try {
    const movie = await Movie.findOne({ slug }).exec();

    if (movie) {
      const clonedMovie = await Movie.create({
        title: movie.title,
        image: movie.image,
        director: movie.director,
        platforms: movie.platforms,
        score: 0,
      });
      clonedMovie.slug = `${clonedMovie.title
        .toLowerCase()
        .replace(" ", "-")}-${clonedMovie.id}`;
      clonedMovie.save();

      return clonedMovie;
    }
    return { message: "Cant find movie, please try again" };
  } catch (error) {
    return error;
  }
}

export async function removeMovie(id: string) {
  try {
    const removedMovie = await Movie.findByIdAndDelete(id);

    if (removedMovie) {
      Movie.remove();
      return { message: "Successfully removed this movie" };
    }
    return { message: "Cant find movie, please try again" };
  } catch (error) {
    return error;
  }
}
