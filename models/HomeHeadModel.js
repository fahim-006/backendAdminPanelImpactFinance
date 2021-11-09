//  Author: Mashrur Hossain Khan
//  Create Date: 3Nov, 2021
//  Modify Date: 3Nov, 2021
//  Description: Homehead model file for rest api project

const { Schema } = require("mongoose")

module.exports = function (sequelize, DataTypes) {
    return sequelize.define(
      'Homehead',
      {
        id: {
          type: DataTypes.BIGINT,
          allowNull: false,
          primaryKey: true,
          autoIncrement: true,
          field: 'id',
        },
       
        homeHead: {
          type: DataTypes.STRING,
          allowNull: false,
          required: true,
          field: 'homeHead',
        },
        
        homeHeadRename: {
            type: DataTypes.STRING,
            allowNull: false,
            required: true,
            field: 'homeHeadRename',
          }, 
      },
      {
        tableName: 'homeHead',
      }
    )
  }
  