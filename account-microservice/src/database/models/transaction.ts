import { Model, Sequelize, DataTypes } from 'sequelize';

export default class Account extends Model {
  public id?: number;
  public userid!: string;
  public email?: String;
  public phoneNumber?: String;
  public password?: String;
  public salt?: String;
}

export const UserMap = (sequelize: Sequelize) => {
    Account.init({
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    userid: {
      type: DataTypes.STRING(255)
    },
    lastName: {
      type: DataTypes.STRING(255)
    },
    email: {
      type: DataTypes.DATE,
      allowNull: true
    },
    phoneNumber: {
      type: DataTypes.NUMBER,
      allowNull: true
    },
    salt: {
      type: DataTypes.STRING,
      allowNull: true
    },
    password: {
      type: DataTypes.STRING(100),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'users',
    timestamps: false
  });
  Account.sync();
}
