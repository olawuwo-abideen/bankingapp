import { Model, Sequelize, DataTypes } from 'sequelize';

export default class Movie extends Model {
  public id?: number;
  public moviename!: String;
  public cinemalocation?: String;
  public moviedate?: String;
  public movietime!: Date;
  public bookingreference!: number;
}

export const MovieMap = (sequelize: Sequelize) => {
    Movie.init({
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    moviename: {
      type: DataTypes.CHAR
    },
    cinemalocation: {
      type: DataTypes.CHAR
    },
    moviedate: {
        type: DataTypes.DATE
      },
      movietime: {
        type: DataTypes.DATE
      },
      bookingreference: {
        type: DataTypes.INTEGER
      },
  
  }, {
    sequelize,
    tableName: 'movie',
    timestamps: true
  });
  Movie.sync();
}
