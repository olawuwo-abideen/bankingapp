import { Model, Sequelize, DataTypes } from 'sequelize';

export default class Payment extends Model {
  public id?: number;
  public accountnumber!: String;
  public accountname?: String;
  public bankname!: String;
  public amount?: Number;
  public description!: String;
  public status!: String;
}

export const PaymentMap = (sequelize: Sequelize) => {
    Payment.init({
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    accountnumber: {
      type: DataTypes.INTEGER
    },
    accountname: {
      type: DataTypes.CHAR
    },
    bankname: {
        type: DataTypes.CHAR
      },
    amount: {
        type: DataTypes.INTEGER
      },
    description: {
        type: DataTypes.CHAR
      },
      status: {
        type: DataTypes.CHAR
      }
  }, {
    sequelize,
    tableName: 'payment',
    timestamps: true
  });
  Payment.sync();
}
