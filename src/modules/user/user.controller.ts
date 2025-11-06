import { Request, Response, NextFunction } from "express";
import { getAssignees } from "./user.service";

export const assignees = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const assignees = await getAssignees()
    res.json({assignees})
  } catch (err) {
    next(err);
  }
};
