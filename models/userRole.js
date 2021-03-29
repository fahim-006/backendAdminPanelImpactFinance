//  Author: Mohammad Jihad Hossain
//  Create Date: 07/02/2021
//  Modify Date: 07/02/2021
//  Description: UserRole model file for rest api project for E-Commerce


module.exports = function (sequelize, DataTypes) {
    return sequelize.define(
      "UserRole",
      {
        roleId: {
          type: DataTypes.INTEGER,
          allowNull: false,
          references: {
            model: "Role",
            key: "id"
          },
          field: "roleId",
        },
        userId: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
              model: "user",
              key: "id"
            },
            field: "userId",
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
      tableName: "userRoles",
    }
  );
};