import { Model, Sequelize, DataTypes } from 'sequelize';

export default class Beneficiary extends Model {
  public id?: number;
  public beneficiaryName!: string;
  public beneficiaryAccountNumber!: number;
}

export const BeneficiaryMap = (sequelize: Sequelize) => {
  Beneficiary.init({
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    beneficiaryName: {
      type: DataTypes.CHAR,
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
