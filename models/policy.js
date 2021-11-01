//  Author: Mashrur Hossain Khan
//  Create Date: 6oct, 2021
//  Modify Date: 6oct, 2021
//  Description: Policy model file for rest api project for FamousAuto

module.exports = function (sequelize, DataTypes) {
    return sequelize.define(
      'Policy',
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
          field: 'name',
        },

        details: {
          type: DataTypes.STRING,
          allowNull: false,
          field: 'details',
        },    
      },
      {
        tableName: 'policies',
      }
    )
  }
  