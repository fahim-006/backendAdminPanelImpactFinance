//  Author: Mohammad Jihad Hossain
//  Create Date: 31/03/2021
//  Modify Date: 31/03/2021
//  Description: Customer model file for rest api project for FamousAuto

module.exports = function (sequelize, DataTypes) {
    return sequelize.define(
      "Customer",
      {
        id: {
          type: DataTypes.BIGINT,
          allowNull: false,
          primaryKey: true,
          autoIncrement: true,
          field: "id",
        },
        createdBy: {
            type: DataTypes.BIGINT,
            allowNull: true,
            references: {
              model: "users",
              key: "id"
            },
            field: "userId"
        },
        name: {
          type: DataTypes.STRING,
          allowNull: false,
          field: "name",
        },
        phoneNo: {
            type: DataTypes.STRING,
            allowNull: false,
            field: "phoneNo"
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
        deposite: {
          type: DataTypes.BIGINT,
          allowNull: false,
          field: "address"
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
        isDeleted:{
          type: DataTypes.BOOLEAN,
          allowNull: true,
          defaultValue: false,
          field: "isDeleted" 
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
        tableName: "customers",
      }
    );
  };
  