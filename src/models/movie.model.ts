import {
  Schema, Types, model, PaginateModel, Document,
} from "mongoose";
import paginate from "mongoose-paginate-v2";

export interface MovieDocument extends Document {
  title: string;
  slug: string;
  image: string;
  director: string;
  platforms: Types.ObjectId;
  score: number;
  createdAt: Date;
  updatedAt: Date;
}

const MovieSchema = new Schema(
  {
    title: { type: String, required: true },
    slug: { type: String },
    image: { type: String },
    director: { type: String, required: true },
    platforms: [
      { type: Schema.Types.ObjectId, ref: "Platform", required: true },
    ],
    score: { type: Number },
  },
  {
    timestamps: true,
  },
);

MovieSchema.plugin(paginate);

const Movie = model<MovieDocument, PaginateModel<MovieDocument>>(
  "Movie",
  MovieSchema,
  "movie",
);

export default Movie;
