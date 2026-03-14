import { NotFound, NotUnlocked } from "../lib/errors.js";
import type { Prisma } from "../prisma/generated/client.js";
import { createNote, getNote } from "../repositories/note.repository.js";

export async function addNote(data: Prisma.NoteCreateInput) {
  const note = await createNote(data);
  return { noteId: note.noteId, password: note.password };
}

export async function fetchNote(noteId: string, password: string) {
  const note = await getNote(noteId);
  if (note.expiry && note.expiry < new Date()) throw NotFound;
  if (note.password == password) return note.note;
  else throw NotUnlocked;
}
