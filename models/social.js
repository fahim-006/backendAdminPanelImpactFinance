//  Author: Mashrur Hossain Khan
//  Create Date: 12oct, 2021
//  Modify Date: 12oct, 2021
//  Description: Category model file for rest api project

const { Schema } = require("mongoose")

module.exports = function (sequelize, DataTypes) {
    return sequelize.define(
      'Social',
      {
        id: {
          type: DataTypes.BIGINT,
          allowNull: false,
          primaryKey: true,
          autoIncrement: true,
          field: 'id',
        },
       
        name: {
          type: DataTypes.STRING,
          allowNull: false,
          unique: true,
          required: true,
          field: 'name',
        },

          details: {
            type: DataTypes.STRING(255),
            allowNull: false,
            field: "details"
          },    
      },
      {
        tableName: 'social',
      }
    )
  }
  