import jobModel from "../models/job";

export const getJobs = async (req, res) => {
  const jobs = await jobModel.find();
  res.json(jobs);
};

export const createJob = async (req, res) => {
  const jobForm = req.body;
  const newJob = new jobModel({ ...jobForm, createdAt: new Date().toString() });
  await newJob.save();
  res.json(newJob);
};
