import { Model, Sequelize, DataTypes } from 'sequelize';

export default class Restaurant extends Model {
  public id?: number;
  public restaurantname!: String;
  public restaurantlocation!: String;
  public reservationdate?: String;
  public reservationtime!: Date;
  public bookingreference!: Date;
}

export const EventMap = (sequelize: Sequelize) => {
    Restaurant.init({
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    restaurantname: {
      type: DataTypes.CHAR
    },
    restaurantlocation: {
      type: DataTypes.CHAR
    },
    reservationdate: {
        type: DataTypes.DATE
      },
      reservationtime: {
        type: DataTypes.CHAR
      },
      bookingreference: {
        type: DataTypes.INTEGER
      },
  
  }, {
    sequelize,
    tableName: 'restaurant',
    timestamps: true
  });
  Restaurant.sync();
}
