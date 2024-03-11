import { Router } from "express";

export default class AuthRouter {
    private router: Router;

    constructor(){
        this.router = Router();
        this.configRouter();
    }

    private configRouter = () => {
        this.router.post('/login');
    }

    getRouter = () => this.router;
}