import jobModel from "../models/job.js";
import mongoose from "mongoose";
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

export const deleteJob = async (req, res) => {
  const { id } = req.params;
  await jobModel.findByIdAndDelete(id);
  res.status(201);
};

export const applyJob = async (req, res) => {
  const { id } = req.params;
  const jobById = await findbyId(id);
  jobById.users.push("id");
  await jobModel.findByIdAndUpdate(id, jobById);
  res.json({ message: "done" });
};

export const editJob = async (req, res) => {
  const { id } = req.params;
  const job = req.body;
  const updatedjob = await findByIdAndUpdate(id, job, { new: true });
  res.json(updatedjob);
};
