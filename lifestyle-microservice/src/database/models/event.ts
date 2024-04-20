import { Model, Sequelize, DataTypes } from 'sequelize';

export default class Event extends Model {
  public id?: number;
  public eventname!: String;
  public eventlocation?: String;
  public eventdate!: Date;
  public tickettype!: string;
  public bookingreference!: number;
}

export const EventMap = (sequelize: Sequelize) => {
    Event.init({
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    eventname: {
      type: DataTypes.CHAR
    },
    eventlocation: {
      type: DataTypes.CHAR
    },
    eventdate: {
        type: DataTypes.DATE
      },
    tickettype: {
        type: DataTypes.CHAR
      },
      bookingreference: {
        type: DataTypes.INTEGER
      },
  
  }, {
    sequelize,
    tableName: 'event',
    timestamps: true
  });
  Event.sync();
}
