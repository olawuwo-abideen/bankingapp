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
      type: DataTypes.STRING(255),
      allowNull: false
    },
    lastName: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    email: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false
    },
    phoneNumber: {
      type: DataTypes.NUMBER,
      allowNull: false
    },
    salt: {
      type: DataTypes.STRING,
      allowNull: false
    },
    password: {
      type: DataTypes.STRING(100),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'users',
    timestamps: false
  });
  User.sync();
}
