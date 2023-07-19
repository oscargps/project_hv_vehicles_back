import { Model, DataTypes, literal } from "sequelize";
import sequelize from "../database/database";

class Literal extends Model {
    public id!: number;
    public type!: string;
    public value!: string;
    public createdAt!: Date;
    public updatedAt!: Date;
}

Literal.init(
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
        },
        type: {
            type: DataTypes.STRING(100),
            allowNull: false,
        },
        value: {
            type: DataTypes.STRING(255),
            allowNull: false,
        },
        createdAt: {
            type: DataTypes.DATE,
            allowNull: false,
            defaultValue: DataTypes.NOW,
        },
        updatedAt: {
            type: DataTypes.DATE,
            allowNull: false,
            defaultValue: DataTypes.NOW,
        },
    },
    {
        sequelize,
        tableName: "literals",
        timestamps: true,
        underscored: true,
    }
);


module.exports = Literal;
