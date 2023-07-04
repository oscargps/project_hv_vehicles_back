import { Model, DataTypes } from 'sequelize';
import sequelize from "../database/database";
const Vehicle = require ('./vehicle.model');
const Literal = require ('./literal.model');

class Record extends Model {
  public recordId!: number;
  public recordVehicle!: number;
  public recordType!: number;
  public recordDate!: Date;
  public recordCategory!: number;
  public recordKilometers!: number | null;
  public recordLocation!: string | null;
  public recordDescription!: string;
  public createdAt!: Date;
  public updatedAt!: Date;
}

Record.init(
  {
    recordId: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    recordVehicle: {
      type: DataTypes.INTEGER,
      references: {
        model: Vehicle,
        key: 'vehicleId',
      },
    },
    recordType: {
      type: DataTypes.INTEGER,
      references: {
        model: Literal,
        key: 'id',
      },
    },
    recordDate: {
      type: DataTypes.DATE,
    },
    recordCategory: {
      type: DataTypes.INTEGER,
      references: {
        model: Literal,
        key: 'id',
      },
    },
    recordKilometers: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    recordLocation: {
      type: DataTypes.STRING(100),
      allowNull: true,
    },
    recordDescription: {
      type: DataTypes.TEXT,
    },
    createdAt: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    updatedAt: {
      type: DataTypes.DATE,
      allowNull: false,
    },
  },
  {
    sequelize,
    tableName: 'records',
  }
);

module.exports = Record;
