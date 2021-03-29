//  Author: Mohammad Jihad Hossain
//  Create Date: 14/02/2021
//  Modify Date: 14/02/2021
//  Description: Signup validation file for rest api project for E-Commerce

// Library import
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const jwtConfig = require("../config/jwtConfig");
const availableUserRoles = require("../config/userRolesConfig");

// Model import
const models = require("../models");
const User = models.user;
const Role = models.Role;


// Check duplicate email for user signup
exports.checkDuplicateEmail = (req, res, next) => {
  User.findOne({
    where: {
      email: req.body.email,
    },
  }).then((user) => {
    if (user) {
      return res.status(400).json("Failed! Email is already in use!");
    }
    next();
  });
};

// Check role exist in DB
exports.checkRoleExist = async (req, res, next) => {
  if (req.body.roles) {
    const existRole = await Role.findOne({
      where: {
        name: req.body.roles,
      },
    });
    if (!existRole) {
      return res
        .status(400)
        .json("Failed! Role does not exist = " + req.body.roles);
    }
  }
  next();
};
