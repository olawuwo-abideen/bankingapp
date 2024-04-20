import { Model, Sequelize, DataTypes } from 'sequelize';

export default class About extends Model {
  public id?: number;
  public bankname!: String;
  public bankaddress?: String;
  public registrationnumber!: Number;
}

export const AboutMap = (sequelize: Sequelize) => {
    About.init({
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    bankname: {
      type: DataTypes.CHAR
    },
    bankaddress: {
      type: DataTypes.CHAR
    },
    registrationnumber: {
        type: DataTypes.INTEGER
      }
  }, {
    sequelize,
    tableName: 'about',
    timestamps: true
  });
  About.sync();
}
