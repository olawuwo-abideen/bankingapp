import { Model, Sequelize, DataTypes } from 'sequelize';

export default class CableTV extends Model {
  public id?: number;
  public billers!: String;
  public product?: String;
  public customerid!: String;
}

export const CableTVMap = (sequelize: Sequelize) => {
    CableTV.init({
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    billers: {
      type: DataTypes.CHAR
    },
    product: {
      type: DataTypes.CHAR
    },
    customerid: {
        type: DataTypes.INTEGER
      }
  }, {
    sequelize,
    tableName: 'cabletv',
    timestamps: true
  });
  CableTV.sync();
}
