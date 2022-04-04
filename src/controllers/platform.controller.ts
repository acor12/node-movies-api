import { Request, Response } from "express";
import {
  createPlatform,
  getPlatforms,
  getPlatformById,
  updatePlatform,
  removePlatform,
} from "../service/platform.service";

export async function createPlatformHandler(req: Request, res: Response) {
  try {
    const platform = await createPlatform(req.body);
    return res.status(201).json(platform);
  } catch (error) {
    return res.status(500).json(error);
  }
}

export async function getPlatformsHandler(req: Request, res: Response) {
  try {
    const platforms = await getPlatforms();
    return res.status(200).json(platforms);
  } catch (error) {
    return res.status(500).json(error);
  }
}

export async function getPlatformByIdHandler(req: Request, res: Response) {
  try {
    const platform = await getPlatformById(req.params.id as string);
    if (platform) {
      return res.status(200).json(platform);
    }
    return res
      .status(404)
      .json({ message: "Cant find platform, please try again" });
  } catch (error) {
    return res.status(500).json(error);
  }
}

export async function updatePlatformHandler(req: Request, res: Response) {
  try {
    const platform = await updatePlatform(req.params.id, req.body);
    return res.status(200).json(platform);
  } catch (error) {
    return res.status(500).json(error);
  }
}

export async function removePlatformHandler(req: Request, res: Response) {
  try {
    const platform = await removePlatform(req.params.id);

    return res.status(200).json(platform);
  } catch (error) {
    return res.status(500).json(error);
  }
}
