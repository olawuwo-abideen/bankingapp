import { Model, Sequelize, DataTypes } from 'sequelize';

export default class Transaction extends Model {
  public id?: number;
  public amount!: string;
  public transactionType?: String;
  public date?: String;
  public sender?: String;
  public receiver?: String;
  public reference?: String;
  public status?: String;
}

export const TransactionMap = (sequelize: Sequelize) => {
  Transaction.init({
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    amount: {
      type: DataTypes.INTEGER
    },
    transactionType: {
      type: DataTypes.CHAR
    },
    date: {
      type: DataTypes.DATE,
    },
    sender: {
      type: DataTypes.NUMBER,
    },
    receiver: {
      type: DataTypes.CHAR,
    },
    reference: {
      type: DataTypes.CHAR
    },
    status: {
      type: DataTypes.CHAR,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'transaction',
    timestamps: false
  });
  Transaction.sync();
}
