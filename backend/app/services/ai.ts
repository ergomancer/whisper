import { GoogleGenAI } from "@google/genai";
import { getNote } from "../repositories/note.repository";
import { AIError } from "shared/errors";

const ai = new GoogleGenAI({});

export async function summarize(noteId: string) {
  const { note } = await getNote(noteId);
  let summary: string = "";
  try {
    const aiRes = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: `Generate a summary of the following note.\nCharacter Limit: Lesser of 100 or original text. Format: Paragraph.\n"${note}"`,
    });
    if (!aiRes.text) throw AIError;
    else summary = aiRes.text;
  } catch (err) {
    console.log(err);
    throw AIError;
  }
  return summary;
}
