import { Request, Response, NextFunction } from "express";
import { ZodSchema } from "zod";
import ValidationError from "../errors/validationError";

export const validate = (schema: ZodSchema<any>) => (req: Request, res: Response, next: NextFunction) => {
  try {
    schema.parse(req.body);
    next();
  } catch (err: any) {
    const message = `${err.issues[0].path} ${err.issues[0].message}`;
    throw new ValidationError(message, 422);
  }
};
