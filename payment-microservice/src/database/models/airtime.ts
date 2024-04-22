import { Model, Sequelize, DataTypes } from 'sequelize';

export default class Airtime extends Model {
  public id?: number;
  public phonenumber!: String;
  public amount?: String;
  public network!: String;
}

export const PaymentMap = (sequelize: Sequelize) => {
    Airtime.init({
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
    tableName: 'airtime',
    timestamps: true
  });
  Airtime.sync();
}
