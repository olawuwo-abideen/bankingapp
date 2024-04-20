import { Model, Sequelize, DataTypes } from 'sequelize';

export default class Portfolio extends Model {
  public id?: number;
  public name!: number;
  public description?: String;
}

export const PortfolioMap = (sequelize: Sequelize) => {
    Portfolio.init({
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    name: {
      type: DataTypes.CHAR
    },
    description: {
      type: DataTypes.CHAR
    },
  
  }, {
    sequelize,
    tableName: 'portfolio',
    timestamps: true
  });
  Portfolio.sync();
}
