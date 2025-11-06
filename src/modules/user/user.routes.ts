import { Router } from "express";
import { assignees } from "./user.controller";

const userRouter = Router();

userRouter.get("/assignees", assignees)

export default userRouter;
