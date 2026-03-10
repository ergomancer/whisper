import type { Request, Response } from "express";
import { addNote, getNote } from "../services/notes";

export async function createNote(req: Request, res: Response) {
  const noteAccessData = await addNote(req.body);
  res.status(200).json(noteAccessData);
}

export async function fetchNote(req: Request, res: Response) {
  const note = await getNote(req.params.noteId as string);
  res.status(200).json(note);
}
