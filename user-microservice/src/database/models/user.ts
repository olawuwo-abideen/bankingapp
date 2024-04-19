import { Model, Sequelize, DataTypes } from 'sequelize';

export default class User extends Model {
  public id?: number;
  public firstName!: string;
  public lastName!: string;
  public email?: String;
  public phoneNumber?: String;
  public password?: String;
  public salt?: String;
}

export const UserMap = (sequelize: Sequelize) => {
  User.init({
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    firstName: {
      type: DataTypes.CHAR(255),
      allowNull: false
    },
    lastName: {
      type: DataTypes.CHAR(255),
      allowNull: false
    },
    email: {
      type: DataTypes.CHAR,
      unique: true,
      allowNull: false
    },
    phoneNumber: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    salt: {
      type: DataTypes.CHAR,
      allowNull: false
    },
    password: {
      type: DataTypes.CHAR(100),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'users',
    timestamps: false
  });
  User.sync();
}
