//  Author: Mashrur Hossain Khan
//  Create Date: 10oct, 2021
//  Modify Date: 10oct, 2021
//  Description: Term model file for rest api project

module.exports = function (sequelize, DataTypes) {
    return sequelize.define(
      'Term',
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
        tableName: 'terms',
      }
    )
  }
  