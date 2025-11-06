import { NextFunction, Request, Response } from "express";
import { verifyToken } from "../modules/session/session.service";
import { AuthRequest, JwtUserPayload } from "../types/auth";

export const attachUser = (req: AuthRequest, res: Response, next: NextFunction) => {
  const token = req.cookies.token;
  if (!token) next();

  try {
    const user = verifyToken(token) as JwtUserPayload;
    req.user = user
  } catch(err){}

  next();
}
