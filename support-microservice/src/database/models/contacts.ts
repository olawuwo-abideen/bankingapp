import { Model, Sequelize, DataTypes } from 'sequelize';

export default class Contact extends Model {
  public id?: number;
  public email!: String;
  public phonenumber?: String;
}

export const ContactMap = (sequelize: Sequelize) => {
    Contact.init({
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    email: {
      type: DataTypes.CHAR
    },
    phonenumber: {
      type: DataTypes.INTEGER
    }
  }, {
    sequelize,
    tableName: 'contact',
    timestamps: true
  });
  Contact.sync();
}
