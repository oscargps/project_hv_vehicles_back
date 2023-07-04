import { Model, DataTypes } from 'sequelize';
import sequelize from "../database/database";
const User = require ('./user.model');
const Literal = require ('./literal.model');

class Vehicle extends Model {
  public vehicleId!: number;
  public vehicleOwner!: number;
  public vehicleCustomId!: string;
  public vehicleBrand!: number;
  public vehicleModel!: number;
  public vehicleYear!: number;
  public vehicleStartKilometers!: number;
  public createdAt!: Date;
  public updatedAt!: Date;
}

Vehicle.init(
  {
    vehicleId: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    vehicleOwner: {
      type: DataTypes.INTEGER,
      references: {
        model: User,
        key: 'userId',
      },
    },
    vehicleCustomId: {
      type: DataTypes.STRING(10),
    },
    vehicleBrand: {
      type: DataTypes.INTEGER,
      references: {
        model: Literal,
        key: 'id',
      },
    },
    vehicleModel: {
      type: DataTypes.INTEGER,
    },
    vehicleYear: {
      type: DataTypes.INTEGER,
    },
    vehicleStartKilometers: {
      type: DataTypes.INTEGER,
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
    tableName: 'vehicles',
  }
);

module.exports = Vehicle;
