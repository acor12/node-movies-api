import { Request, Response } from "express";
import { createReview, removeReview } from "../service/review.service";

export async function createReviewHandler(req: Request, res: Response) {
  try {
    const review = await createReview(req.body);
    return res.status(200).json(review);
  } catch (error) {
    return res.status(500).json(error);
  }
}

export async function removeReviewHandler(req: Request, res: Response) {
  try {
    const review = await removeReview(req.params.id);
    return res.status(200).json(review);
  } catch (error) {
    return res.status(500).json(error);
  }
}
