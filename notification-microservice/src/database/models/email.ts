import { Model, Sequelize, DataTypes } from 'sequelize';

export default class Email extends Model {
  public id?: number;
  public recepient!: String;
  public message?: String;
}

export const EmailMap = (sequelize: Sequelize) => {
    Email.init({
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
    tableName: 'email',
    timestamps: true
  });
  Email.sync();
}
