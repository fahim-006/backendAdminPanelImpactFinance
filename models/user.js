//  Author: Mohammad Jihad Hossain
//  Create Date: 07/02/2021
//  Modify Date: 24/02/2021
//  Description: User model file for rest api project for E-Commerce

module.exports = function (sequelize, DataTypes) {
  return sequelize.define(
    "User",
    {
      id: {
        type: DataTypes.BIGINT,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
        field: "id",
      },
      roleId: {
        type: DataTypes.BIGINT,
        allowNull: false,
        references: {
          model: "roles",
          key: "id"
        },
        field: "roleId"
      },
      firstName: {
        type: DataTypes.STRING(100),
        allowNull: false,
        field: "firstName",
      },
      lastName: {
        type: DataTypes.STRING(100),
        allowNull: false,
        field: "lastName",
      },
      email: {
        type: DataTypes.STRING(255),
        allowNull: false,
        validate: {
          isEmail: {
            args: true,
            msg: "Invalid email",
          },
        },
        unique: {
          args: true,
          msg: "Email address already in use!",
        },
        field: "email",
      },
      emailVerifiedAt: {
        type: DataTypes.DATE,
        allowNull: true,
        field: "emailVerifiedAt",
      },
      password: {
        type: DataTypes.STRING(255),
        allowNull: false,
        field: "password",
      },
      rememberToken: {
        type: DataTypes.STRING(100),
        allowNull: true,
        field: "rememberToken"
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
        field: "createdAt",
      },
      updatedAt: {
        type: DataTypes.DATE,
        allowNull: true,
        field: "updatedAt",
      },
      deletedAt: {
        type: DataTypes.DATE,
        allowNull: true,
        field: "deletedAt",
      }
    },
    {
      tableName: "users",
    }
  );
};
