import { Schema, model } from "mongoose";

export interface MovieDocument extends Document {
  title: string;
  slug: string;
  image: string;
  director: string;
  //platforms: Types.ObjectId;
  score: number;
  //reviews: Types.ObjectId;
  createdAt: Date;
  updatedAt: Date;
}

const MovieSchema = new Schema(
  {
    title: { type: String, required: true },
    slug: { type: String, required: true },
    image: { type: String },
    director: { type: String, required: true },
    //platforms: { type: Schema.Types.ObjectId, ref: "Platforms" },
    score: { type: Number }
    //reviews: { type: Schema.Types.ObjectId, ref: "Reviews" }
  },
  {
    timestamps: true
  }
);

const Movie = model<MovieDocument>("Movie", MovieSchema);

export default Movie;
