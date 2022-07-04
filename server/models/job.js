import mongoose from "mongoose";

const jobSchema = {
  title: String,
  info: String,
  location: String,
  requirements: String,
  createdAt: String,
  users: [String],
};

const jobModel = mongoose.model("jobModel", jobSchema);

export default jobModel;
