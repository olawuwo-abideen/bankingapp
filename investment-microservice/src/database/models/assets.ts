import { Model, Sequelize, DataTypes } from 'sequelize';

export default class Asset extends Model {
  public id?: number;
  public assetname!: number;
  public quantity?: String;
  public value!: number;
}

export const AssetMap = (sequelize: Sequelize) => {
    Asset.init({
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    assetname: {
      type: DataTypes.CHAR
    },
    quantity: {
      type: DataTypes.INTEGER
    },
    value: {
        type: DataTypes.INTEGER
      },
  
  }, {
    sequelize,
    tableName: 'asset',
    timestamps: true
  });
  Asset.sync();
}
