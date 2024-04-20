import { Model, Sequelize, DataTypes } from 'sequelize';

export default class Chat extends Model {
  public id?: number;
  public message!: String;
}

export const ChatMap = (sequelize: Sequelize) => {
    Chat.init({
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    message: {
      type: DataTypes.CHAR
    }
  }, {
    sequelize,
    tableName: 'chat',
    timestamps: true
  });
  Chat.sync();
}
