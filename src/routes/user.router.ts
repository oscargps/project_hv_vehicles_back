import { Router } from "express";
// import {bodyParser} from 'express';
import userController from "../controllers/user.controller";
class UserRouter {
  public router: Router = Router();

  constructor() {
    this.config();
  }

  private config() {
    this.router.get("/", userController.getUsers);
    this.router.post("/create", userController.createUser);
  }
}

const userRouter = new UserRouter();
export default userRouter.router;
