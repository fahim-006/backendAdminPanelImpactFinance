//  Author: Mashrur Hossain Khan
//  Create Date: 02/10/2021
//  Modify Date: 02/10/2021
//  Description: Brand controller file for rest api project for FamousAuto

// Import file
const secret = require("../config/secret");

// Model import
const models = require("../models");
const  Terms = models.term;

// Signup user
exports.createTerms = async function (req, res) {
    let body = req.body;
  
    try {
        await Terms.create({
            name: body.name,
            details: body.details
        })
        .then((user) => {
          //console.log("user created");
          res.status(200).json("Terms has created successfully");
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

  // Get all brands
exports.getAllTerms = async function (req, res) {
  try {
    await Terms.findAll()
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

//edit Terms
module.exports.updateTermsById = async (req, res) => {
  const id = req.params.id;
  let body = req.body;
  //console.log(`req.body.email= ${req.body.email}`)
  try {
    await Terms.update( { 
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

//edit Terms
module.exports.getTermsById = async (req, res) => {
  const id = req.params.id;
  //console.log(`req.body.email= ${req.body.email}`)
  try {
    await Terms.findByPk(id)
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

module.exports.deleteTermsById =  async(req, res) => {
  await Terms.destroy({
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