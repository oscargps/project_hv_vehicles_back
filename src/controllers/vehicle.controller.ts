import httpStatus from "http-status";
import { Request, Response } from "express";
const Vehicle = require("../models/vehicle.model");
const User = require("../models/user.model");
const Literal = require("../models/literal.model");

const includeOptions = [
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
]
class VehicleController {
  public async getVehicles(request: Request, res: Response, next: any) {
    if (request.get('idUSer')) {
      await VehicleController.getVehiclesByUser(request, res, request.get('idUSer'))
    } else if (request.get('vehicleCustomId')) {
      await VehicleController.getVehiclesByCustomId(request, res, request.get('vehicleCustomId'))
    } else {
      res.status(httpStatus.BAD_REQUEST).json();
    }
  }


  private static async getAllVehicles(request: Request, res: Response) {
    try {
      const vehicles = await Vehicle.findAll(
        {
          include: includeOptions,
        });
      res.status(httpStatus.OK).json(vehicles);
    } catch (error: any) {
      res.status(httpStatus.SERVICE_UNAVAILABLE).json({ result: error });
    }
  }
  private static async getVehiclesByUser(request: Request, res: Response, idUser: any) {
    try {
      const vehicles = await Vehicle.findAll(
        {
          where: {
            vehicleOwner: idUser
          },
          include: includeOptions,
        });
      res.status(httpStatus.OK).json(vehicles);
    } catch (error: any) {
      res.status(httpStatus.SERVICE_UNAVAILABLE).json({ result: error });
    }
  }
  private static async getVehiclesByCustomId(request: Request, res: Response, vehicleCustomId: any) {
    try {
      const vehicles = await Vehicle.findAll(
        {
          where: {
            vehicleCustomId: vehicleCustomId
          },
          include: includeOptions,
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
      res.status(httpStatus.FAILED_DEPENDENCY).json({ result: error });
    }
  }
}

const vehicleController = new VehicleController();
export default vehicleController;
