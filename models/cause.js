//  Author: Mashrur Hossain Khan
//  Create Date: 6oct, 2021
//  Modify Date: 6oct, 2021
//  Description: Brands model file for rest api project for FamousAuto

module.exports = function (sequelize, DataTypes) {
    return sequelize.define(
      'Cause',
      {
        id: {
          type: DataTypes.BIGINT,
          allowNull: false,
          primaryKey: true,
          autoIncrement: true,
          field: 'id',
        },
       
        name: {
          type: DataTypes.STRING(767),
          allowNull: false,
          field: 'name',
          unique: true,
        },

        rename: {
          type: DataTypes.STRING(767),
          allowNull: false,
          field: 'rename',
          unique: true,
        },

        name1: {
          type: DataTypes.STRING(767),
          allowNull: true,
          field: 'name1',
        },

        details: {
            type: DataTypes.STRING(767),
            allowNull: false,
            field: 'details',
          },

    
      },
      {
        tableName: 'cause',
      }
    )
  }
  