import { DataTypes, Model } from 'sequelize';
import sequelize from "../database/database";
const Literal = require ('./literal.model');

export interface RecordFuelDataAttributes {
    id?: number;
    recordId?: number;
    recordFuelType: number;
    recordFuelQuantity?: number | null;
    recordFuelCost?: number | null;
    recordFuelTotal: number;
  }

class RecordFuelData extends Model {
    public id!: number;
    public recordId!: number;
    public recordFuelType!: number;
    public recordFuelQuantity!: number | null;
    public recordFuelCost!: number | null;
    public recordFuelTotal!: number;
    public createdAt!: Date;
    public updatedAt!: Date;

    public readonly fuelType!: typeof Literal;

}

RecordFuelData.init(
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        recordId: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'records',
                key: 'recordId',
            },
        },
        recordFuelType: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'literals',
                key: 'id',
            },
        },
        recordFuelQuantity: {
            type: DataTypes.INTEGER,
            allowNull: true,
        },
        recordFuelCost: {
            type: DataTypes.INTEGER,
            allowNull: true,
        },
        recordFuelTotal: {
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
        tableName: 'record_fuel_data',
        timestamps: true,
    }
);
RecordFuelData.belongsTo(Literal, { foreignKey: 'recordFuelType', as: 'fuelType' });

module.exports = RecordFuelData;
