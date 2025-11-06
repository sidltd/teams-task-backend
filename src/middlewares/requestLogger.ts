import { NextFunction, Request, Response } from "express";

export const requestLogger = (req: Request, res: Response, next: NextFunction) => {
  console.log(`${req.method} ${req.url}`)
  console.log("Request Data:", JSON.stringify(req.body, null, 2));

  next();
}
