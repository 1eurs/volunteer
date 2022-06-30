import express from "express";
const router = express.Router();

router.get("/", getJobs);
router.post("/", createJob);
