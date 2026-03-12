import { Router } from "express";
import { createNote, getNote } from "../controllers/note.controller.js";
import validate from "../middlewares/validator.js";
import { SchemaNoteCreate, SchemaPassword } from "../lib/schema.js";
import { getSummary } from "../controllers/ai.controller.js";

//instantiate the note router
const noteRouter = Router();

//route to create a new note
noteRouter.post("/", validate(SchemaNoteCreate), createNote);

//route to access a note
noteRouter.post("/:noteId", validate(SchemaPassword), getNote);

//route to generate summary
noteRouter.get("/:noteId/summarize", getSummary);

export default noteRouter;
