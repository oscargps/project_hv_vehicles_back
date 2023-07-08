import { Router } from "express";
import recordController from "../controllers/record.controller";
class RecordRouter {
  public router: Router = Router();

  constructor() {
    this.config();
  }

  private config() {
    this.router.get("/", recordController.getRecordsByVehicle);
    this.router.post("/create", recordController.createRecord);
  }
}

const recordRouter = new RecordRouter();
export default recordRouter.router;
