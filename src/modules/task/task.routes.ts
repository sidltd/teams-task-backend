import { Router } from "express";
import { validate } from "../../middlewares/validate";
import { taskSchema } from "./task.schema";
import { create, list, remove, update } from "./task.controller";

const taskRouter = Router();

taskRouter.post("/", validate(taskSchema), create);
taskRouter.get("/", list);
taskRouter.put("/:id", validate(taskSchema), update);
taskRouter.delete("/:id", remove);

export default taskRouter;
