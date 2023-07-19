import { Model, DataTypes } from 'sequelize';
import sequelize from "../database/database";
const Vehicle = require ('./vehicle.model');
const Literal = require ('./literal.model');

export interface RecordAttributes {
  recordId: number;
  recordVehicle: number;
  recordType: number;
  recordDate: Date;
  recordCategory: number;
  recordKilometers?: number | null;
  recordLocation?: string | null;
  recordDescription?: string;
  createdAt?: Date
  updatedAt?: Date
}


class Record extends Model<RecordAttributes> {
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

  public readonly type!: typeof Literal;
  public readonly vehicle!: typeof Vehicle;
  public readonly category!: typeof Literal;
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
      allowNull: false,
      references: {
        model: Vehicle,
        key: 'vehicleId',
      },
    },
    recordType: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: Literal,
        key: 'id',
      },
    },
    recordDate: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
      allowNull: false,
    },
    recordCategory: {
      type: DataTypes.INTEGER,
      allowNull: false,
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
    tableName: 'records',
  }
);
Record.belongsTo(Literal, { foreignKey: 'recordType', as: 'type' });
Record.belongsTo(Literal, { foreignKey: 'recordCategory', as: 'category' });
Record.belongsTo(Vehicle, { foreignKey: 'recordVehicle', as: 'vehicle' });


module.exports = Record;
