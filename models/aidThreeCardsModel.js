//  Author: Mashrur Hossain Khan
//  Create Date: 31oct, 2021
//  Modify Date: 31oct, 2021
//  Description: aidThreeCards model file for rest api project

const { Schema } = require("mongoose")

module.exports = function (sequelize, DataTypes) {
    return sequelize.define(
      'AidthreeCard',
      {
        id: {
          type: DataTypes.BIGINT,
          allowNull: false,
          primaryKey: true,
          autoIncrement: true,
          field: 'id',
        },
       
        headline: {
          type: DataTypes.STRING,
          allowNull: false,
          required: true,
          field: 'headline',
        },
          
        headlineRename: {
            type: DataTypes.STRING(255),
            allowNull: false,
            field: "headlineRename"
          },
          
          subHead: {
            type: DataTypes.STRING(255),
            allowNull: false,
            field: "subhead"
          },

          details: {
            type: DataTypes.STRING(255),
            allowNull: false,
            field: "details"
          },    
                  
      },
      {
        tableName: 'aidthreeCard',
      }
    )
  }
  