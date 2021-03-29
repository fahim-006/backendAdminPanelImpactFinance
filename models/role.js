//  Author: Mohammad Jihad Hossain
//  Create Date: 07/02/2021
//  Modify Date: 07/02/2021
//  Description: Role model file for rest api project for E-Commerce


module.exports = function (sequelize, DataTypes) {
    return sequelize.define(
      "Role",
      {
        id: {
          type: DataTypes.BIGINT,
          allowNull: false,
          primaryKey: true,
          autoIncrement: true,
          field: "id",
        },
        name: {
          type: DataTypes.STRING(255),
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
      tableName: "roles",
    }
  );
};