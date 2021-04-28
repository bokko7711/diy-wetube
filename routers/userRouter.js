import express from "express";
import { join, login, logout, userHome } from "../controllers/userController";
import { routes } from "../routes";

export const userRouter = express.Router();

userRouter.get(routes.itself, userHome);//"/"
userRouter.get(routes.join, join);//"/join"
userRouter.get(routes.login, login);//"/login"
userRouter.get(routes.logout, logout);//"/logout"