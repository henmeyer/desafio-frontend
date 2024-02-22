import { Router } from "express";
import UserController from "../controllers/userController";

const userRouter: Router = Router();

// GET
userRouter.get("/", UserController.index);
userRouter.get("/:id", UserController.show);

// POST
userRouter.post("/", UserController.create);

// PUT
userRouter.put("/:id", UserController.update);

// DELETE
userRouter.delete("/:id", UserController.delete);

export default userRouter;
