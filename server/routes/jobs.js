import express from "express";
import { getJobs, createJob, deleteJob, applyJob, editJob } from "../controllers/job.js";
const router = express.Router();

router.get("/", getJobs);
router.post("/", createJob);
router.delete("/:id", deleteJob);
router.patch("/:id", editJob);
router.patch("/:id/apply", applyJob);
export default router;
