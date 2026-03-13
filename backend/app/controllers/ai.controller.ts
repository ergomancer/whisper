import type { Request, Response } from "express";
import { summarize } from "../services/ai.js";

export async function getSummary(req: Request, res: Response) {
  const { note } = req.body;
  const summary = await summarize(note);
  res.status(200).json({ summary });
}
