import { Schema, model, Document } from "mongoose";

export interface PlatformDocument extends Document {
  title: string;
  icon: string;
  createdAt: Date;
  updatedAt: Date;
}

const PlatformSchema = new Schema(
  {
    title: { type: String, required: true },
    icon: { type: String, required: true },
  },
  {
    timestamps: true,
  },
);

const Platform = model<PlatformDocument>("Platform", PlatformSchema);

export default Platform;
