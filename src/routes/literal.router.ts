import { Router } from "express";
import LiteralControllerInstance from "../controllers/literals.controller";
class LiteralRouter {
  public router: Router = Router();

  constructor() {
    this.config();
  }

  private config() {
    this.router.get("/", LiteralControllerInstance.getLiterals);
  }
}

const literalRouter = new LiteralRouter();
export default literalRouter.router;
