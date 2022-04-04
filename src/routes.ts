import { Express } from "express";
import {
  createMovieHandler,
  getMovieHandler,
  getMovieByIdHandler,
  updateMovieHandler,
  removeMovieHandler,
  cloneMovieBySlugHandler,
} from "./controllers/movie.controller";
import {
  createPlatformHandler,
  getPlatformsHandler,
  getPlatformByIdHandler,
  updatePlatformHandler,
  removePlatformHandler,
} from "./controllers/platform.controller";
import {
  createReviewHandler,
  removeReviewHandler,
} from "./controllers/review.controller";

export default function Routes(app: Express) {
  // Movie CRUD
  app.post("/movie", createMovieHandler);
  app.get("/movies", getMovieHandler);
  app.get("/movie/:id", getMovieByIdHandler);
  app.put("/movie/:id", updateMovieHandler);
  app.delete("/movie/:id", removeMovieHandler);

  app.get("/movie/clone/:slug", cloneMovieBySlugHandler);

  // Platform CRUD
  app.post("/platform", createPlatformHandler);
  app.get("/platforms", getPlatformsHandler);
  app.get("/platform/:id", getPlatformByIdHandler);
  app.put("/platform/:id", updatePlatformHandler);
  app.delete("/platform/:id", removePlatformHandler);

  // Review
  app.post("/review", createReviewHandler);
  app.delete("/review/:id", removeReviewHandler);
}
