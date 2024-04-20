import { Model, Sequelize, DataTypes } from 'sequelize';

export default class Branch extends Model {
  public id?: number;
  public bankname!: String;
  public address?: String;
  public phonenumber!: Number;
}

export const BranchMap = (sequelize: Sequelize) => {
    Branch.init({
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    bankname: {
      type: DataTypes.CHAR
    },
    address: {
      type: DataTypes.CHAR
    },
    phonenumber: {
        type: DataTypes.INTEGER
      }
  
  }, {
    sequelize,
    tableName: 'branches',
    timestamps: true
  });
  Branch.sync();
}
