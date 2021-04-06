//  Author: Mohammad Jihad Hossain
//  Create Date: 24/03/2021
//  Modify Date: 24/03/2021
//  Description: User model file for rest api project for FamousAuto

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
        type: DataTypes.STRING,
        allowNull: false,
        field: "firstName",
      },
      lastName: {
        type: DataTypes.STRING,
        allowNull: false,
        field: "lastName",
      },
      userName: {
        type: DataTypes.STRING,
        allowNull: false,
        field: "userName",
      },
      email: {
        type: DataTypes.STRING,
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
      password: {
        type: DataTypes.STRING,
        allowNull: false,
        field: "password",
      },
      phoneNo: {
        type: DataTypes.STRING,
        allowNull: false,
        field: "phoneNo"
      },
      address: {
        type: DataTypes.STRING,
        allowNull: false,
        field: "address"
      },
      status: {
        type: DataTypes.BOOLEAN,
        field: "status"
      },
      isSuperAdmin: {
        type: DataTypes.BOOLEAN,
        field: "isSuperAdmin"
      },
      emailVerifiedAt: {
        type: DataTypes.DATE,
        allowNull: true,
        field: "emailVerifiedAt",
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
