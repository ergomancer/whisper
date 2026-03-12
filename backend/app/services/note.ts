import { NotUnlocked } from "backend/app/lib/errors";
import type { Prisma } from "../prisma/generated/client";
import { createNote, getNote } from "../repositories/note.repository";

export async function addNote(data: Prisma.NoteCreateInput) {
  const note = await createNote(data);
  return { noteId: note.noteId, password: note.password };
}

export async function fetchNote(noteId: string, password: string) {
  const note = await getNote(noteId);
  if (note.password == password) return note.note;
  else throw NotUnlocked;
}
