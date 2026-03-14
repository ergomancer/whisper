import { deleteExpired } from "../repositories/note.repository.js";

export async function cleanup() {
  deleteExpired();
}
