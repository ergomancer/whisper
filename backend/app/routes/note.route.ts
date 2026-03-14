import { Router } from "express";
import { createNote, getNote } from "../controllers/note.controller.js";
import validate from "../middlewares/validator.js";
import { SchemaNoteCreate, SchemaPassword } from "../lib/schema.js";
import { log } from "../middlewares/logger.js";

//instantiate the note router
const noteRouter = Router();

//route to create a new note
noteRouter.post("/", log, validate(SchemaNoteCreate), createNote);

//route to access a note
noteRouter.post("/:noteId", log, validate(SchemaPassword), getNote);

export default noteRouter;
