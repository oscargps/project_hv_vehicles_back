import { Model, DataTypes } from 'sequelize';
import sequelize from "../database/database";
const User = require('./user.model');
const Literal = require('./literal.model');

class Vehicle extends Model {
  public vehicleId!: number;
  public vehicleOwner!: number;
  public vehicleCustomId!: string;
  public vehicleType!: string;
  public vehicleBrand!: number;
  public vehicleModel!: number;
  public vehicleYear!: number;
  public vehicleStartKilometers!: number;
  public createdAt!: Date;
  public updatedAt!: Date;

  public readonly type!: typeof Literal;
  public readonly owner!: typeof User;
  public readonly brand!: typeof Literal;

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
      allowNull: false,
      references: {
        model: User,
        key: 'userId',
      },
    },
    vehicleCustomId: {
      type: DataTypes.STRING(10),
    },
    vehicleType: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: Literal,
        key: 'id',
      },
    },
    vehicleBrand: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: Literal,
        key: 'id',
      },
    },
    vehicleModel: {
      type: DataTypes.STRING(20),
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
    modelName: 'Vehicle',
    tableName: 'vehicles',
  }
);

Vehicle.belongsTo(User, { foreignKey: 'vehicleOwner', as: 'owner' });
Vehicle.belongsTo(Literal, { foreignKey: 'vehicleBrand', as: 'brand' });
Vehicle.belongsTo(Literal, { foreignKey: 'vehicleType', as: 'type' });
module.exports = Vehicle;
