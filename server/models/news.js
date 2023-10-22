'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class News extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  News.init({
    title: DataTypes.STRING,
    content: DataTypes.TEXT,
    author: DataTypes.STRING,
    category: DataTypes.STRING,
    status: DataTypes.BOOLEAN,
    imageUrl: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'News',
  });
  return News;
};