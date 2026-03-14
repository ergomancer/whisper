import { DatabaseError, NotFound } from "../lib/errors.js";
import type { Prisma } from "../prisma/generated/client.js";
import { prisma } from "../prisma/prisma.js";

// query to create a new note
export async function createNote(data: Prisma.NoteCreateInput) {
  const note = await prisma.note.create({ data }).catch((err: Error) => {
    console.log(err);
    throw DatabaseError;
  });
  return note;
}

// query to fetch note
export async function getNote(noteId: string) {
  const note = await prisma.note
    .findUnique({ where: { noteId } })
    .catch((err: Error) => {
      console.log(err);
      throw DatabaseError;
    });
  if (note) return note;
  else throw NotFound;
}

//query to delete expired
export async function deleteExpired() {
  await prisma.note.deleteMany({
    where: {
      expiry: {
        lt: new Date(),
      },
    },
  });
}
