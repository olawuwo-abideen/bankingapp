import { Model, Sequelize, DataTypes } from 'sequelize';

export default class AccountOfficer extends Model {
  public id?: number;
  public officername!: string;
  public contact!: string;
}

export const UserMap = (sequelize: Sequelize) => {
  AccountOfficer.init({
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    officername: {
      type: DataTypes.INTEGER,
      unique: true
    },
    contact: {
      type: DataTypes.INTEGER
    }
  }, {
    sequelize,
    tableName: 'accountofficer',
    timestamps: true
  });
  AccountOfficer.sync();
}
