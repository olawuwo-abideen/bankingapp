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
      type: DataTypes.CHAR(255)
    },
    date: {
      type: DataTypes.DATE,
    },
    sender: {
      type: DataTypes.NUMBER,
    },
    receiver: {
      type: DataTypes.STRING,
    },
    reference: {
      type: DataTypes.STRING(100),
    },
    status: {
      type: DataTypes.STRING,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'transaction',
    timestamps: false
  });
  Transaction.sync();
}
