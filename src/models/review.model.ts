import {
  Schema, Types, model, Document,
} from "mongoose";

export interface ReviewDocument extends Document {
  movie: Types.ObjectId;
  platform: Types.ObjectId;
  author: string;
  body: string;
  score: number;
  createdAt: Date;
  updatedAt: Date;
}

const ReviewSchema = new Schema(
  {
    movie: { type: Schema.Types.ObjectId, ref: "Movie", required: true },
    platform: { type: Schema.Types.ObjectId, ref: "Platform", required: true },
    author: { type: String },
    body: { type: String, required: true },
    score: { type: Number, required: true },
  },
  {
    timestamps: true,
  },
);

const Review = model<ReviewDocument>("Review", ReviewSchema);

export default Review;
