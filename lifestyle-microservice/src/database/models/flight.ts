import { Model, Sequelize, DataTypes } from 'sequelize';

export default class Flight extends Model {
  public id?: number;
  public departuredate!: String;
  public departurelocation?: String;
  public arrivallocation?: String;
  public sittype!: Date;
  public bookingreference!: number;
}

export const FlightMap = (sequelize: Sequelize) => {
    Flight.init({
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    departuredate: {
      type: DataTypes.DATE
    },
    departurelocation: {
      type: DataTypes.CHAR
    },
    arrivallocation: {
        type: DataTypes.CHAR
      },
      sittype: {
        type: DataTypes.CHAR
      },
      bookingreference: {
        type: DataTypes.INTEGER
      },
  
  }, {
    sequelize,
    tableName: 'flight',
    timestamps: true
  });
  Flight.sync();
}
