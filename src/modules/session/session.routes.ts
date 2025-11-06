import { Router } from "express";
import { attachUser } from "../../middlewares/attachUser";
import { requireAdmin } from "../../middlewares/requireAdmin";
import { me, signin, signout } from "./session.controller";

const sessionRouter = Router();

sessionRouter.post("/signin", signin);
sessionRouter.get("/me", [attachUser, me])
sessionRouter.post("/signout", [attachUser, requireAdmin, signout])

export default sessionRouter;
