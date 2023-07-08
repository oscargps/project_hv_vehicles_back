import { Request, Response } from 'express';
import httpStatus from "http-status";

const Record = require('../models/record.model')
const Vehicle = require("../models/vehicle.model");
const Literal = require("../models/literal.model");

class RecordController {
  public async getRecordsByVehicle(request: Request, res: Response, next: any) {
    if (request.get('vehicleCustomId')) {

      try {
        const records = await Record.findAll(
          {
            where: {
              recordVehicle: request.get('vehicleCustomId')
            },
            include: [
              {
                model: Vehicle,
                as: 'vehicle',
                attributes: ['vehicleCustomId'],
              },
              {
                model: Literal,
                as: 'type',
                attributes: ['value'],
              },
              {
                model: Literal,
                as: 'category',
                attributes: ['value'],
              },

            ],
          });
        res.status(httpStatus.OK).json(records);
      } catch (error: any) {
        res.status(httpStatus.SERVICE_UNAVAILABLE).json({ result: error });
      }
    } else {
      res.status(httpStatus.BAD_REQUEST).json({});

    }
  }
  public async createRecord(request: Request, res: Response, next: any) {
    try {
      await Record.create(request.body)
      res.status(httpStatus.OK).json({});
    } catch (error: any) {
      res.status(httpStatus.FAILED_DEPENDENCY).json({ result: error });
    }
  }
}

const recordController = new RecordController();
export default recordController;
