import httpStatus from "http-status";
import { Request, Response } from "express";
const Vehicle = require("../models/vehicle.model");
const User = require("../models/user.model");
const Literal = require("../models/literal.model");
class VehicleController {
    public async getVehicles(request: Request, res: Response, next: any) {
        try {
            const vehicles = await Vehicle.findAll(
                {
                include: [
                  {
                    model: Literal,
                    as: 'brand',
                    attributes: ['value'], // Obtener solo el nombre del documento
                  },
                  {
                    model: Literal,
                    as: 'type',
                    attributes: ['value'], // Obtener solo el nombre del documento
                  },
                  {
                    model: User,
                    as: 'owner',
                    attributes: ['userName'], // Obtener solo el nombre del documento
                  },
                ],
              });
            res.status(httpStatus.OK).json(vehicles);
        } catch (error: any) {
            res.status(httpStatus.SERVICE_UNAVAILABLE).json({ result: error });
        }
    }
    public async createVehicle(request: Request, res: Response, next: any) {
        try {
            await Vehicle.create(request.body)
            res.status(httpStatus.OK).json({});
        } catch (error: any) {
            res.status(httpStatus.FAILED_DEPENDENCY).json({ result: error});
        }
    }
}

const vehicleController = new VehicleController();
export default vehicleController;
