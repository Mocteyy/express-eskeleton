import express, { Application } from "express";
import AuthRouter from "../routes/auth.routes";

export default class MyApp {

    private app: Application;
    private authRouter: AuthRouter;

    constructor(){
        this.app = express();
        this.authRouter = new AuthRouter();
        this.configRoutes();
    }

    private configRoutes = () => {
        this.app.use("/auth", this.authRouter.getRouter());
    }

    public start = () => {
        this.app.listen(process.env.PORT || 3000, () => {
            console.log("Listen!!");
        });
    }
}