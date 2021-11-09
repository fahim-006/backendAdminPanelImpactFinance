//  Author: Mashrur Hossain Khan
//  Create Date: 03/11/2021
//  Modify Date: 03/11/2021
//  Description: HomeThreeCards controller file for rest api project for FamousAuto

// Model import
const models = require("../models");
const  phaseModel = models.phaseModel;

// Create cause paragraph
exports.createphaseList = async function (req, res) {
    let body = req.body;
  
    try {
        await phaseModel.create({
            phaseName: body.phaseName,
            listItem: body.listItem,
        })
        .then((user) => {
          //console.log("user created");
          res.status(200).json("created successfully");
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

  // Get all HomeThreeCards
exports.getAllphaseList = async function (req, res) {
  try {
    await phaseModel.findAll()
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

//edit HomeThreeCards
module.exports.updatephaseListById = async (req, res) => {
  const id = req.params.id;
  let body = req.body;
  //console.log(`req.body.email= ${req.body.email}`)
  try {
    await phaseModel.update( { 
        phaseName: body.phaseName,
        listItem: body.listItem,
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

//edit HomeThreeCards
module.exports.getphaseListById = async (req, res) => {
  const id = req.params.id;
  //console.log(`req.body.email= ${req.body.email}`)
  try {
    await phaseModel.findByPk(id)
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

module.exports.deletephaseListById =  async(req, res) => {
  await phaseModel.destroy({
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