import { Model, Sequelize, DataTypes } from 'sequelize';

export default class User extends Model {
  public id?: number;
  public name!: string;
  public email?: String;
  public password?: String;
}

export const UserMap = (sequelize: Sequelize) => {
  User.init({
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING(255)
    },
    email: {
      type: DataTypes.DATE,
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
  User.sync();
}
