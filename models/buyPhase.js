//  Author: Mashrur Hossain Khan
//  Create Date: 31oct, 2021
//  Modify Date: 31oct, 2021
//  Description: buyPhase model file for rest api project

const { Schema } = require("mongoose")

module.exports = function (sequelize, DataTypes) {
    return sequelize.define(
      'BuyPhase',
      {
        id: {
          type: DataTypes.BIGINT,
          allowNull: false,
          primaryKey: true,
          autoIncrement: true,
          field: 'id',
        },
       
        phaseNo: {
          type: DataTypes.STRING,
          allowNull: false,
          required: true,
          field: 'phaseNo',
        },
          
          tokenNo: {
            type: DataTypes.STRING(255),
            allowNull: false,
            field: "tokenNo"
          },    

          price: {
            type: DataTypes.STRING(255),
            allowNull: false,
            field: "price"
          },   
          
          tax: {
            type: DataTypes.STRING(255),
            allowNull: false,
            field: "tax"
          },   

          min_buy: {
            type: DataTypes.STRING(255),
            allowNull: false,
            field: "min_buy"
          },
          max_buy: {
            type: DataTypes.STRING(255),
            allowNull: false,
            field: "max_buy"
          },
          
          day: {
            type: DataTypes.STRING(255),
            allowNull: false,
            field: "day"
          },
          month: {
            type: DataTypes.STRING(255),
            allowNull: false,
            field: "month"
          },
          year: {
            type: DataTypes.STRING(255),
            allowNull: false,
            field: "year"
          },

          hour: {
            type: DataTypes.STRING(255),
            allowNull: false,
            field: "hour"
          },

          min: {
            type: DataTypes.STRING(255),
            allowNull: false,
            field: "min"
          },

          sec: {
            type: DataTypes.STRING(255),
            allowNull: false,
            field: "sec"
          },
                    
      },
      {
        tableName: 'buyPhase',
      }
    )
  }
  