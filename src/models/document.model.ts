import { Model, DataTypes } from "sequelize";
import sequelize from "../database/database";
const Literal = require("./literal.model");
const User = require("./user.model");
const Vehicle = require("./vehicle.model");

class Document_Model extends Model {
  public documentId!: number;
  public documentType!: number;
  public documentCustomId!: number;
  public documentVehicle!: number | null;
  public documentOwner!: number;
  public documentStartDate!: Date;
  public documentExpirationDate!: Date;
  public documentStatus!: number;
  public documentEvidence!: string | null;
  public createdAt!: Date;
  public updatedAt!: Date;
}

Document_Model.init(
  {
    documentId: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    documentType: {
      type: DataTypes.INTEGER,
      references: {
        model: Literal,
        key: "id",
      },
    },
    documentCustomId: {
      type: DataTypes.INTEGER,
    },
    documentVehicle: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: Vehicle,
        key: "vehicleId",
      },
    },
    documentOwner: {
      type: DataTypes.INTEGER,
      references: {
        model: User,
        key: "userId",
      },
    },
    documentStartDate: {
      type: DataTypes.DATE,
    },
    documentExpirationDate: {
      type: DataTypes.DATE,
    },
    documentStatus: {
      type: DataTypes.INTEGER,
      references: {
        model: Literal,
        key: "id",
      },
    },
    documentEvidence: {
      type: DataTypes.STRING(255),
      allowNull: true,
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
    tableName: "documents",
  }
);

module.exports = Document_Model;
