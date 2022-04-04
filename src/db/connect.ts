import mongoose from "mongoose";
import config from "config";

function connect() {
  const dbUri = config.get("dbUri") as string;

  mongoose.connect(dbUri);
}

export default connect;
