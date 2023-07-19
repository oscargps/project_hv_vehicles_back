import { Model, DataTypes } from 'sequelize';
import sequelize from "../database/database";
const Literal = require ('./literal.model');

export interface RecordMaintenanceDataAttributes {
  id?: number;
  recordId?: number;
  recordDataType: number;
  recordDataValue?: string | null;
  recordDataCost?: number | null;
  recordDataBrand?: string | null;
  recordDataTotalCost: number | null;
}

class RecordMaintenanceData extends Model{
  public id!: number;
  public recordId!: number;
  public recordDataType!: number;
  public recordDataValue!: string | null;
  public recordDataCost!: number | null;
  public recordDataBrand!: string | null;
  public recordDataTotalCost!: number;
  public createdAt!: Date;
  public updatedAt!: Date;

  public readonly dataType!: typeof Literal;

}
RecordMaintenanceData.init(
{
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  recordId: {
    type: DataTypes.INTEGER,
    allowNull:false,
    references: {
      model: 'records',
      key: 'recordId',
    },
  },
  recordDataType: {
    type: DataTypes.INTEGER,
    allowNull:false,
    references: {
      model: 'literals',
      key: 'id',
    },
  },
  recordDataValue: {
    type: DataTypes.STRING(50),
    allowNull: true,
  },
  recordDataCost: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
  recordDataBrand: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  recordDataTotalCost: {
    type: DataTypes.INTEGER,
    allowNull: false,
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
  tableName: 'record_maintenance_data',
  timestamps: true,
}
);
RecordMaintenanceData.belongsTo(Literal, { foreignKey: 'recordDataType', as: 'dataType' });

module.exports = RecordMaintenanceData;
