//  Author: Mashrur Hossain Khan
//  Create Date: 10/10/2021
//  Modify Date: 10/10/2021
//  Description: Group controller file for rest api project for FamousAuto

// Library import
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const jwtConfig = require("../config/jwtConfig");
const availableUserRoles = require("../config/userRolesConfig");

// Import file
const secret = require("../config/secret");

// Model import
const models = require("../models");
const  Social = models.social;

// Signup user
exports.createSocial = async function (req, res) {
    let body = req.body;
  
    try {
        await Social.create({
            name: body.name,
            details: body.details
        })
        .then((user) => {
          //console.log("user created");
          res.status(200).json("Social has created successfully");
          res.json(user)
        })
        .catch((err) => {
          return res.status(500).json("Something error there " + err);
        });
      //exports.authenticate(req, res);
    } catch (e) {
      return res.status(400).send({ error: e.message });
    }
  };

  // Get all Social
exports.getAllSocial= async function (req, res) {
  try {
    await Social.findAll()
      .then((users) => {
        res.status(200).json(users);
      })
      .catch((err) => {
        res.status(400).json(err);
      });
  } catch (e) {
    res.status(400).send({ error: e.message });
  }
};

//edit Social
module.exports.updateSocialById = async (req, res) => {
  const id = req.params.id;
  let body = req.body;
  //console.log(`req.body.email= ${req.body.email}`)
  try {
    await Social.update( { 
        name: body.name,
        details: body.details
      }, 
      {where : { id: id}}
      )
      .then((users) => {
        res.status(200).json(users);
      })
      .catch((err) => {
        res.status(400).json(err);
      });
  } catch (e) {
    res.status(400).send({ error: e.message });
  }
 
}

//edit  Social
module.exports.getSocialById = async (req, res) => {
  const id = req.params.id;
  //console.log(`req.body.email= ${req.body.email}`)
  try {
    await Social.findByPk(id)
      .then((users) => {
        res.status(200).json(users);
      })
      .catch((err) => {
        res.status(400).json(err);
      });
  } catch (e) {
    res.status(400).send({ error: e.message });
  }
 
}

module.exports.deleteSocialById =  async(req, res) => {
  await Social.destroy({
    where:{
      id: req.params.id
    }
  })
    .then((users) => {
      res.status(200).json(users);
    })
    .catch((err) => {
      res.status(400).json(err);
    });
}