import { z } from "zod";

const Password = z.string();
const Note = z.string().max(500);

export const SchemaNoteCreate = z.object({
  note: Note,
});

export const SchemaPassword = z.object({
  Password: Password,
});
