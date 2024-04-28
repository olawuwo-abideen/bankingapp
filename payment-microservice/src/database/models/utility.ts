import { Model, Sequelize, DataTypes } from 'sequelize';

export default class Utility extends Model {
  public id?: number;
  public billers!: String;
  public product?: String;
  public meternumber!: String;
}

export const UtilityMap = (sequelize: Sequelize) => {
    Utility.init({
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
    meternumber: {
        type: DataTypes.INTEGER
      }
  }, {
    sequelize,
    tableName: 'utility',
    timestamps: true
  });
  Utility.sync();
}
