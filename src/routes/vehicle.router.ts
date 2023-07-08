import { Router } from "express";
// import {bodyParser} from 'express';
import vehicleController from "../controllers/vehicle.controller";
class VehicleRouter {
  public router: Router = Router();

  constructor() {
    this.config();
  }

  private config() {
    this.router.get("/", vehicleController.getVehicles);
    this.router.post("/create", vehicleController.createVehicle);
  }
}

const vehicleRouter = new VehicleRouter();
export default vehicleRouter.router;
