import express from "express";
import morgan from "morgan";
import helmet from "helmet";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import { globalRouter } from "./routers/globalRouter";
import { userRouter } from "./routers/userRouter";
import { videoRouter } from "./routers/videoRouter";
import { routes } from "./routes"

const app = express();

app.use(morgan("dev"));
app.use(helmet());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

app.use(routes.itself, globalRouter);//"/"
app.use(routes.user, userRouter);//"/user"
app.use(routes.video, videoRouter);//"/video"

export default app;