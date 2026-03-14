import express from "express";
import errorHandler from "./middlewares/error-handler.js";
import { NotFound } from "./lib/errors.js";
import noteRouter from "./routes/note.route.js";
import { getSummary } from "./controllers/ai.controller.js";
import validate from "./middlewares/validator.js";
import { SchemaSummarize } from "./lib/schema.js";
import { expiryCleanup } from "./controllers/maintenance.controller.js";
import { log } from "./middlewares/logger.js";

const app = express();

app.use(express.static("public"));

app.use(express.json());

//redirect requests to "/" to the frontend or my github profile
app.get("/", log, (req, res) =>
  res.redirect(process.env.APP_URL || "https://github.com/ergomancer/"),
);

//create routes
//for summary generation
app.post("/summarize", log, validate(SchemaSummarize), getSummary);
//for cleanup cron job
app.get("/expiryCleanup", log, expiryCleanup);

//connect routers
app.use("/note", noteRouter);

//set a catch-all and error handler
app.all("/{*splat}", log, () => {
  throw NotFound;
});
app.use(errorHandler);

//activate the server
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Rito - Listening on port ${PORT}!`);
});
