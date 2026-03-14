import type {
  Request,
  Response,
  NextFunction,
} from "node_modules/@types/express/index.js";

export function log(req: Request, res: Response, next: NextFunction) {
  console.log(`method: ${req.method}\troute: ${req.path}`);
  next();
}
