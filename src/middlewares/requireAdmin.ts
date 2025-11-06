import { NextFunction, Response } from "express";
import { AuthRequest } from "../types/auth";

export const requireAdmin = (req: AuthRequest, res: Response, next: NextFunction) => {
  if (req.user?.role != "admin"){
    return res.status(401).json({ message: "Unauthorized" });
  }

  next();
}
