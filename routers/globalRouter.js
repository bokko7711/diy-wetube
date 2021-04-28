import express from "express";
import { home, search } from "../controllers/videoController";
import { routes } from "../routes";

export const globalRouter = express.Router();

globalRouter.get(routes.itself, home);//"/"
globalRouter.get(routes.search, search);//"/search"
