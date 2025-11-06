import express from "express";
import cookieParser from "cookie-parser";
import sessionRouter from "./modules/session/session.routes";
import cors from 'cors';
import dotenv from "dotenv";
import taskRouter from "./modules/task/task.routes";
import { attachUser } from "./middlewares/attachUser";
import { requireAdmin } from "./middlewares/requireAdmin";
import userRouter from "./modules/user/user.routes";
import { errorHandler } from "./middlewares/errorHandler";
import { requestLogger } from "./middlewares/requestLogger";
dotenv.config();

const app = express();

app.use(cors({
  origin: process.env.REACT_APP_URL,
  credentials: true
}))

app.use(express.json());
app.use(cookieParser())
app.use(requestLogger);
app.use(sessionRouter);
app.use("/tasks", attachUser, requireAdmin, taskRouter);
app.use("/users", attachUser, requireAdmin, userRouter);

app.use(errorHandler);

export default app;
