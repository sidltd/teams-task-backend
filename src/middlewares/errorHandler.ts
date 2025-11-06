import { NextFunction, Request, Response } from "express";
import BaseError from "../errors/baseError";
import { getErrorMessage } from "../utils";

export const errorHandler = (error: Error, req: Request, res: Response, next: NextFunction) => {
  console.log("error", error, error.stack)
  if (error instanceof BaseError) {
    return res.status(error.statusCode).json({message: getErrorMessage(error)})
  }

  return res.status(500).json({message: getErrorMessage(error) || "An error occured. Please view logs for more details"})
};
