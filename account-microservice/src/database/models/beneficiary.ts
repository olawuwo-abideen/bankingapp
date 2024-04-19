import { Model, Sequelize, DataTypes } from 'sequelize';

export default class Beneficiary extends Model {
  public id?: number;
  public beneficiaryName!: string;
  public beneficiaryAccountNumber!: string;
}

export const UserMap = (sequelize: Sequelize) => {
  Beneficiary.init({
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    beneficiaryName: {
      type: DataTypes.INTEGER,
      unique: true
    },
    beneficiaryAccountNumber: {
      type: DataTypes.INTEGER
    }
  }, {
    sequelize,
    tableName: 'beneficiary',
    timestamps: true
  });
  Beneficiary.sync();
}
