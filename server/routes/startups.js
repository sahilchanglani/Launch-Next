import express from "express";
import { getStartups, submitStartup } from "../controllers/startups.js";

const router = express.Router();

router.get("/", getStartups);
router.post("/submit", submitStartup);

export default router;
