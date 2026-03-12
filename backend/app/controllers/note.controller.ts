import type { Request, Response } from "express";
import { addNote, fetchNote } from "../services/note.js";

export async function createNote(req: Request, res: Response) {
  const noteAccessData = await addNote(req.body);
  res.status(200).json(noteAccessData);
}

export async function getNote(req: Request, res: Response) {
  const note = await fetchNote(req.params.noteId as string, req.body.password);
  res.status(200).json({ note });
}
