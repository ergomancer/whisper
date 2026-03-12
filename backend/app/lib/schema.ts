import { z } from "zod";

const Password = z
  .string("Password needs to be a string")
  .nonempty("Cannot be empty: Password is required");
const Note = z
  .string("Note needs to be a string")
  .nonempty("Cannot be empty: Note is required")
  .max(500, "Note cannot be more than 500 characters");

export const SchemaNoteCreate = z.object(
  {
    note: Note,
  },
  "Note field is required",
);

export const SchemaPassword = z.object(
  {
    password: Password,
  },
  "Password field is required",
);
