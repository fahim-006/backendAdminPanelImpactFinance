//  Author: Mashrur Hossain Khan
//  Create Date: 31oct, 2021
//  Modify Date: 31oct, 2021
//  Description: carouselUpload model file for rest api project

const { Schema } = require("mongoose")

module.exports = function (sequelize, DataTypes) {
    return sequelize.define(
      'CarouselUpload',
      {
        id: {
          type: DataTypes.BIGINT,
          allowNull: false,
          primaryKey: true,
          autoIncrement: true,
          field: 'id',
        },
       
        image: {
          type: DataTypes.STRING,
          allowNull: false,
          required: true,
          field: 'image',
        },                 
      },
      {
        tableName: 'carouselUpload',
      }
    )
  }
  