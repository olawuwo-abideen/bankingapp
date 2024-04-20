import { Model, Sequelize, DataTypes } from 'sequelize';

export default class Food extends Model {
  public id?: number;
  public restaurantname!: String;
  public homeaddress!: String;
  public foodtype?: String;
  public amount!: Date;
  public bookingreference!: Date;
}

export const EventMap = (sequelize: Sequelize) => {
    Food.init({
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    restaurantname: {
      type: DataTypes.CHAR
    },
    homeaddress: {
      type: DataTypes.CHAR
    },
    foodtype: {
        type: DataTypes.CHAR
      },
    amount: {
        type: DataTypes.INTEGER
      },
      bookingreference: {
        type: DataTypes.INTEGER
      },
  
  }, {
    sequelize,
    tableName: 'food',
    timestamps: true
  });
  Food.sync();
}
