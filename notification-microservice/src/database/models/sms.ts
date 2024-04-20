import { Model, Sequelize, DataTypes } from 'sequelize';

export default class Sms extends Model {
  public id?: number;
  public recepient!: String;
  public message?: String;
}

export const SmsMap = (sequelize: Sequelize) => {
    Sms.init({
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    recepient: {
      type: DataTypes.CHAR
    },
    message: {
      type: DataTypes.CHAR
    }
  }, {
    sequelize,
    tableName: 'sms',
    timestamps: true
  });
  Sms.sync();
}
