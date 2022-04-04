import { DocumentDefinition } from "mongoose";
import Review, { ReviewDocument } from "../models/review.model";
import Movie from "../models/movie.model";
import Platform from "../models/platform.model";

export async function createReview(data: DocumentDefinition<ReviewDocument>) {
  try {
    const platform = await Platform.findById(data.platform);
    const movieFound = await Movie.findById(data.movie);
    if (platform) {
      if (movieFound) {
        let sumOfScores: number = data.score;
        const reviewCounter: number = await Review.countDocuments({
          movie: movieFound.id,
        });

        (await Review.find({ movie: movieFound.id })).forEach((review) => {
          sumOfScores += review.score;
        });

        movieFound.score = parseFloat(
          (sumOfScores / reviewCounter + 1).toFixed(2)
        );
        movieFound.save();
        console.log(data.author);
        if (data.author === undefined) {
          const review = Review.create({
            ...data,
            author: "anonymous",
          });

          return review;
        }
        return await Review.create(data);
      }
      return { message: "Cant find movie, please try again" };
    }
    return { message: "Cant find platform, please try again" };
  } catch (error) {
    return error;
  }
}

export async function removeReview(id: string) {
  try {
    const removedReview = await Review.findByIdAndDelete(id);

    if (removedReview) {
      Review.remove();
      return { message: "Successfully removed this review" };
    }
    return { message: "Cant find review, please try again" };
  } catch (error) {
    return error;
  }
}
