import { Request, Response, NextFunction } from "express";
import * as TaskService from "./task.service";

export const create = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const task = await TaskService.createTask(req.body);
    res.status(201).json({ task });
  } catch (err) {
    next(err);
  }
};

export const list = async (_req: Request, res: Response, next: NextFunction) => {
  try {
    const tasks = await TaskService.getTasks();
    res.json({ tasks });
  } catch (err) {
    next(err);
  }
};

export const update = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const task = await TaskService.updateTask(req.params.id, req.body);
    res.json({ task });
  } catch (err) {
    next(err);
  }
};

export const remove = async (req: Request, res: Response, next: NextFunction) => {
  try {
    await TaskService.deleteTask(req.params.id);
    res.status(204).send();
  } catch (err) {
    next(err);
  }
};
