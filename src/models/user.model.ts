import { Model, DataTypes } from 'sequelize';
import sequelize from "../database/database";
const Literal = require('./literal.model');
class User extends Model {
  public userId!: number;
  public userName!: string;
  public userMail!: string;
  public userNickname!: string;
  public userPassword!: string;
  public userRegisterDate!: Date;
  public userSubscriptionType!: number;
  public userSubscriptionStatus!: number;
  public userCity!: number;
  public userCountry!: number;
  public userLastUpdate!: Date;
  public createdAt!: Date;
  public updatedAt!: Date;

  public readonly subscriptionType!: typeof Literal;
  public readonly subscriptionStatus!: typeof Literal;
  public readonly city!: typeof Literal;
  public readonly country!: typeof Literal;


}

User.init(
  {
    userId: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    userName: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    userMail: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
    userNickname: {
      type: DataTypes.STRING(50),
      allowNull: false,
    },
    userPassword: {
      type: DataTypes.STRING(20),
      allowNull: false,
    },
    userRegisterDate: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: DataTypes.NOW
    },
    userSubscriptionType: {
      type: DataTypes.INTEGER,
      references: {
        model: Literal,
        key: 'id',
      },
    },
    userSubscriptionStatus: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: Literal,
        key: 'id',
      },
    },
    userCity: {
      type: DataTypes.INTEGER,
      references: {
        model: Literal,
        key: 'id',
      },
    },
    userCountry: {
      type: DataTypes.INTEGER,
      references: {
        model: Literal,
        key: 'id',
      },
    },
    userLastUpdate: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: DataTypes.NOW
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
    tableName: 'users',
    timestamps: true,
  }
);

User.belongsTo(Literal, { foreignKey: 'userSubscriptionType', as: 'subscriptionType' });
User.belongsTo(Literal, { foreignKey: 'userSubscriptionStatus', as: 'subscriptionStatus' });
User.belongsTo(Literal, { foreignKey: 'userCity', as: 'city' });
User.belongsTo(Literal, { foreignKey: 'userCountry', as: 'country' });

module.exports = User;
