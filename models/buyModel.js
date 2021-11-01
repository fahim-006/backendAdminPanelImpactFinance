//  Author: Mashrur Hossain Khan
//  Create Date: 12oct, 2021
//  Modify Date: 12oct, 2021
//  Description: Category model file for rest api project

const { Schema } = require("mongoose")

module.exports = function (sequelize, DataTypes) {
    return sequelize.define(
      'Buy',
      {
        id: {
          type: DataTypes.BIGINT,
          allowNull: false,
          primaryKey: true,
          autoIncrement: true,
          field: 'id',
        },
       
        currency: {
          type: DataTypes.STRING,
          allowNull: false,
          required: true,
          field: 'currency',
        },

        totalAmount: {
            type: DataTypes.STRING(255),
            allowNull: false,
            field: "totalAmount"
          },
          
          token: {
            type: DataTypes.STRING(255),
            allowNull: false,
            field: "token"
          },    

          bscWaltetAddress: {
            type: DataTypes.STRING(255),
            allowNull: false,
            field: "bscWaltetAddress"
          },   
          
          transactionHashNumber: {
            type: DataTypes.STRING(255),
            allowNull: false,
            field: "transactionHashNumber"
          },   

          telegramHandle: {
            type: DataTypes.STRING(255),
            allowNull: false,
            field: "telegramHandle"
          },   
      },
      {
        tableName: 'buy',
      }
    )
  }
  