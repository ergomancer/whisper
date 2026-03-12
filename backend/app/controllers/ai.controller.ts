import type { Request, Response } from "express";
import { summarize } from "../services/ai.js";

export async function getSummary(req: Request, res: Response) {
  const noteId = req.params.noteId as string;
  const summary = await summarize(noteId);
  res.status(200).json({ summary });
}
