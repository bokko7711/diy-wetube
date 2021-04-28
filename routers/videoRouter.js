import express from "express";
import { videoHome } from "../controllers/videoController";
import { routes } from "../routes";

export const videoRouter = express.Router();

videoRouter.get(routes.itself, videoHome);//"/"