//  Author: Mashrur Hossain Khan
//  Create Date: 02/10/2021
//  Modify Date: 02/10/2021
//  Description: Brand controller file for rest api project for FamousAuto

// Model import
const models = require("../models");
const  Cause = models.cause;

// Create cause paragraph
exports.createCause = async function (req, res) {
    let body = req.body;
  
    try {
        await Cause.create({
            name: body.name,
            rename: body.rename,
            name1: body.name1,
            details: body.details
        })
        .then((user) => {
          //console.log("user created");
          res.status(200).json("Cause has created successfully");
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

  // Get all Cause
exports.getAllCauses = async function (req, res) {
  try {
    await Cause.findAll()
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

//edit Cause
module.exports.updateCauseById = async (req, res) => {
  const id = req.params.id;
  let body = req.body;
  //console.log(`req.body.email= ${req.body.email}`)
  try {
    await Cause.update( { 
      name: body.name,
      name1: body.name1,
      rename: body.rename,
      details: body.details,
      
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

//edit Cause
module.exports.getCauseById = async (req, res) => {
  const id = req.params.id;
  //console.log(`req.body.email= ${req.body.email}`)
  try {
    await Cause.findByPk(id)
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

module.exports.deleteCauseById =  async(req, res) => {
  await Cause.destroy({
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