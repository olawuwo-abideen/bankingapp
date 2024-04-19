import { Model, Sequelize, DataTypes } from 'sequelize';

export default class Account extends Model {
  public id?: number;
  public accountnumber!: number;
  public balance?: String;
}

export const AccountMap = (sequelize: Sequelize) => {
  Account.init({
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    accountnumber: {
      type: DataTypes.INTEGER
    },
    balance: {
      type: DataTypes.INTEGER
    },
  
  }, {
    sequelize,
    tableName: 'accounts',
    timestamps: true
  });
  Account.sync();
}
