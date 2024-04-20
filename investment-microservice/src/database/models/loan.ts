import { Model, Sequelize, DataTypes } from 'sequelize';

export default class Loan extends Model {
  public id?: number;
  public amount!: number;
  public interestrate?: String;
  public status?: String;
}

export const LoanMap = (sequelize: Sequelize) => {
    Loan.init({
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    amount: {
      type: DataTypes.INTEGER
    },
    interestrate: {
      type: DataTypes.INTEGER
    },
    status: {
        type: DataTypes.CHAR
      },
  
  }, {
    sequelize,
    tableName: 'loan',
    timestamps: true
  });
  Loan.sync();
}
