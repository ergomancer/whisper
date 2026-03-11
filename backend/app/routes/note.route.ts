import { Router } from "express";
import { createNote, getNote } from "../controllers/note.controller";
import validate from "../middlewares/validator";
import { SchemaNoteCreate, SchemaPassword } from "@whisper/shared/schema";

//instantiate the notes router
const noteRouter = Router();

//route to create a new note
noteRouter.post(
  "/",
  validate(SchemaNoteCreate),
  createNote,
);

//route to access a note
noteRouter.get("/:noteId", validate(SchemaPassword), getNote);

export default noteRouter;
