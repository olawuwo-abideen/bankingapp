import { Model, Sequelize, DataTypes } from 'sequelize';

export default class CableTV extends Model {
  public id?: number;
  public billers!: String;
  public product?: String;
  public customerid!: String;
}

export const DataPurchaseMap = (sequelize: Sequelize) => {
    CableTV.init({
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    billers: {
      type: DataTypes.INTEGER
    },
    product: {
      type: DataTypes.INTEGER
    },
    customerid: {
        type: DataTypes.CHAR
      }
  }, {
    sequelize,
    tableName: 'cabletv',
    timestamps: true
  });
  CableTV.sync();
}
