import { DatabaseError, NotFound } from "@whisper/shared/errors";
import type { Prisma } from "../prisma/generated/client";
import { prisma } from "../prisma/prisma";

// query to create a new note
export async function createNote(data: Prisma.NoteCreateInput) {
  const note = await prisma.note.create({ data }).catch((err) => {
    console.log(err);
    throw DatabaseError;
  });
  return note;
}

// query to fetch note
export async function getNote(noteId: string) {
  const note = await prisma.note
    .findUnique({ where: { noteId } })
    .catch((err) => {
      console.log(err);
      throw DatabaseError;
    });
  if (note) return note;
  else throw NotFound;
}
