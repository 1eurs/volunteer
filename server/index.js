import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import users from "./routes/users.js";
import jobs from "./routes/jobs.js";
const app = express();
app.use(express.json());
app.use(cors());

//routes
app.use("/users", users);
app.use("/jobs", jobs);
const PORT = process.env.PORT || 5000;
const DB = process.env.DB || "mongodb+srv://eurus:kmzdQC8FXpGLKheF@cluster0.21gwvri.mongodb.net/?retryWrites=true&w=majority";
mongoose.connect(DB).then(() => app.listen(PORT));
