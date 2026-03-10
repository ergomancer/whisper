import type { Request, Response, NextFunction } from "express";
import type { ZodObject } from "zod";

export default function validate(Schema: ZodObject) {
  return (req: Request, res: Response, next: NextFunction) => {
    // TODO: write logic
  };
}
