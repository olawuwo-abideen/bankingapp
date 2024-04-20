import { Model, Sequelize, DataTypes } from 'sequelize';

export default class PortfolioTransaction extends Model {
  public id?: number;
  public amount!: number;
  public description?: String;
  public transactiontype?: String;
}

export const AccountMap = (sequelize: Sequelize) => {
    PortfolioTransaction.init({
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    amount: {
        type: DataTypes.INTEGER
      },
    description: {
      type: DataTypes.CHAR
    },
    transactiontype: {
      type: DataTypes.CHAR
    },
  
  }, {
    sequelize,
    tableName: 'portfoliotransaction',
    timestamps: true
  });
  PortfolioTransaction.sync();
}
