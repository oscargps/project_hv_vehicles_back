import { Model, DataTypes } from 'sequelize';
import sequelize from "../database/database";
const  Record  = require ('./record.model');

class RecordEvidence extends Model {
  public evidenceId!: number;
  public evidenceRecordId!: number;
  public evidenceLocation!: string;
  public createdAt!: Date;
  public updatedAt!: Date;
}

RecordEvidence.init(
  {
    evidenceId: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    evidenceRecordId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: Record,
        key: 'recordId',
      },
    },
    evidenceLocation: {
      type: DataTypes.STRING,
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
    tableName: 'record_evidences',
  }
);

module.exports = RecordEvidence;
