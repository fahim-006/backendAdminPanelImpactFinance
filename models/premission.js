//  Author: Mohammad Jihad Hossain
//  Create Date: 24/03/2021
//  Modify Date: 24/03/2021
//  Description: Premission model file for rest api project for FamousAuto


module.exports = function (sequelize, DataTypes) {
    return sequelize.define(
      "Permission",
      {
        id: {
          type: DataTypes.BIGINT,
          allowNull: false,
          primaryKey: true,
          autoIncrement: true,
          field: "id",
        },
        name: {
          type: DataTypes.STRING,
          allowNull: false,
          field: "name",
        },
        isActive:{
          type: DataTypes.BOOLEAN,
          allowNull: true,
          defaultValue: true,
          field: "isActive" 
        },
        createdAt: {
          type: DataTypes.DATE,
          allowNull: true,
          field: "created_at",
        },
        updatedAt: {
          type: DataTypes.DATE,
          allowNull: true,
          field: "updated_at",
        },
        deletedAt: {
          type: DataTypes.DATE,
          allowNull: true,
          field: "deletedAt",
        }
    },
    {
      tableName: "permissions",
    }
  );
};