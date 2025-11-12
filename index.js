import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./db.js";
import router from "./api/user.js";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/api/user", router);

connectDB();

export default app; // Vercel picks this up