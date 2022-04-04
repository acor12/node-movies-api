import { DocumentDefinition } from "mongoose";
import Platform, { PlatformDocument } from "../models/platform.model";

export async function createPlatform(
  data: DocumentDefinition<PlatformDocument>,
) {
  try {
    return await Platform.create(data);
  } catch (error) {
    return error;
  }
}

export async function getPlatforms() {
  try {
    return await Platform.find();
  } catch (error) {
    return error;
  }
}

export async function getPlatformById(id: string) {
  try {
    return await Platform.findById(id);
  } catch (error) {
    return error;
  }
}

export async function updatePlatform(
  id: string,
  data: DocumentDefinition<PlatformDocument>,
) {
  try {
    const updatedPlatform = await Platform.findByIdAndUpdate(
      id,
      { ...data },
      { useFindAndModify: true, new: true },
    );

    if (updatedPlatform) {
      return { message: "Successfully updated this platform" };
    }
    return { message: "Cant find platform, please try again" };
  } catch (error) {
    return error;
  }
}

export async function removePlatform(id: string) {
  try {
    const removedPlatform = await Platform.findByIdAndDelete(id);

    if (removedPlatform) {
      Platform.remove();
      return { message: "Successfully removed this platform" };
    }
    return { message: "Cant find platform, please try again" };
  } catch (error) {
    return error;
  }
}
