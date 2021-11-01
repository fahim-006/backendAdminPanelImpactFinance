//  Author: Mashrur Hossain Khan
//  Create Date: 12/10/2021
//  Modify Date: 12/10/2021
//  Description: Policy controller file for rest api project 
// Model import

const models = require("../models");
const  Policy = models.policy;

// Signup user
exports.createPolicy = async function (req, res) {
    let body = req.body;
  
    try {
        await Policy.create({
            name: body.name,
            details: body.details
        })
        .then((user) => {
          //console.log("user created");
          res.status(200).json("Policy has created successfully");
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

  // Get all Policy
exports.getAllPolicy = async function (req, res) {
  try {
    await Policy.findAll()
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

//edit users
module.exports.updatePolicyById = async (req, res) => {
  const id = req.params.id;
  let body = req.body;
  //console.log(`req.body.email= ${req.body.email}`)
  try {
    await Policy.update( { 
      name: body.name,
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

//edit Policy
module.exports.getPolicyById = async (req, res) => {
  const id = req.params.id;
  //console.log(`req.body.email= ${req.body.email}`)
  try {
    await Policy.findByPk(id)
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

module.exports.deletePolicyById =  async(req, res) => {
  await Policy.destroy({
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