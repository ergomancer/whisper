import { z } from "zod"

const Password = z
  .string("Password needs to be a string")
  .nonempty("Cannot be empty: Password is required")
const Note = z
  .string("Note needs to be a string")
  .nonempty("Cannot be empty: Note is required")
  .max(500, "Note cannot be more than 500 characters")
const Expiry = z.coerce
  .date("Expiry needs to be in the correct format")
  .refine((date) => date >= new Date(), "Expiry cannot be before tomorrow")

export const SchemaNoteCreate = z.object(
  {
    note: Note,
    expiry: Expiry.optional(),
  },
  "Note and optionally Expiry are required to create note"
)

export const SchemaPassword = z.object(
  {
    password: Password,
  },
  "Password field is required"
)
