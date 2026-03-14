import type { Request, Response } from "node_modules/@types/express/index.js";
import { cleanup } from "../services/maintenance.service.js";

export async function expiryCleanup(req: Request, res: Response) {
  if (req.headers.authorization !== `Bearer ${process.env.CRON_SECRET}`)
    cleanup();
}
