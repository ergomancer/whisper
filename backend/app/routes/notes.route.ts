import { Router } from "express";
import multer from "multer";
import { createNote, fetchNote } from "../controllers/notes.controller";
import validate from "../middlewares/validate";
import { SchemaNoteCreate } from "@whisper/shared/schema";

//instantiate the notes router
const notesRouter = Router();

//route to create a new note
notesRouter.post("/", multer().none(), validate(SchemaNoteCreate), createNote);

//route to access a note
notesRouter.get("/:noteId", fetchNote);

export default notesRouter;
