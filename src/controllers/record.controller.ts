import { Request, Response } from 'express';
import httpStatus from "http-status";
import { RecordAttributes } from '../models/record.model';
import { IRecordRequest } from '../types/IRecordRequest';

const Record = require('../models/record.model')
const Vehicle = require("../models/vehicle.model");
const Literal = require("../models/literal.model");
const RecordMaintenanceData = require("../models/record_maintenance_data.model")
const RecordFuelData = require("../models/record_fuel_data.model")
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

  public async getRecordDetails(req: Request, res: Response) {
    if (req.get('recordId')) {
      try {
        const record = await Record.findByPk(req.get('recordId'))
        let dataRecord: any
        if (record.recordCategory === 14) {
          dataRecord = await RecordFuelData.findAll({
            where: {
              recordId: req.get('recordId')
            }, include: [
              {
                model: Literal,
                as: 'fuelType',
                attributes: ['value'],
              }
            ]
          })
        } else {
          dataRecord = await RecordMaintenanceData.findAll({
            where: {
              recordId: req.get('recordId')
            }, include: [
              {
                model: Literal,
                as: 'dataType',
                attributes: ['value'],
              }
            ]
          })
        }
        res.status(httpStatus.OK).json(dataRecord);
      } catch (error: any) {
        res.status(httpStatus.SERVICE_UNAVAILABLE).json({ result: error });
      }
    } else {
      res.status(httpStatus.BAD_REQUEST).json({});

    }

  }

  public async createRecord(request: Request, res: Response, next: any) {
    try {
      const RecordBody = request.body as IRecordRequest
      const { data, ...RecordData } = RecordBody
      const savedRecord: RecordAttributes = await Record.create(RecordData)
      if (RecordBody.recordCategory === 14) {
        RecordFuelData.create({
          recordId: savedRecord.recordId,
          ...RecordBody.data
        })
      } else {
        RecordMaintenanceData.create({
          recordId: savedRecord.recordId,
          ...RecordBody.data

        })
      }
      res.status(httpStatus.OK).json({});
    } catch (error: any) {
      res.status(httpStatus.FAILED_DEPENDENCY).json({ result: error });
    }
  }
}

const recordController = new RecordController();
export default recordController;
