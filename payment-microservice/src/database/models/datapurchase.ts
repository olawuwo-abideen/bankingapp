import { Model, Sequelize, DataTypes } from 'sequelize';

export default class DataPurchase extends Model {
  public id?: number;
  public phonenumber!: String;
  public amount?: String;
  public network!: String;
}

export const DataPurchaseMap = (sequelize: Sequelize) => {
    DataPurchase.init({
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    phonenumber: {
      type: DataTypes.INTEGER
    },
    amount: {
      type: DataTypes.INTEGER
    },
    network: {
        type: DataTypes.CHAR
      }
  }, {
    sequelize,
    tableName: 'datapurchase',
    timestamps: true
  });
  DataPurchase.sync();
}
