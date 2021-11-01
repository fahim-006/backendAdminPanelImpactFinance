//  Author: Mashrur Hossain Khan
//  Create Date: 02/10/2021
//  Modify Date: 02/10/2021
//  Description: Brand controller file for rest api project for FamousAuto

// Model import
const models = require("../models");
const  Token = models.addressToken;

// Create cause paragraph
exports.createToken = async function (req, res) {
    let body = req.body;
  
    try {
        await Token.create({
            tokenPage: body.tokenPage,
            tokenNo: body.tokenNo,
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

  // Get all Token
exports.getAllToken = async function (req, res) {
  try {
    await Token.findAll()
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

//edit Token
module.exports.updateTokenById = async (req, res) => {
  const id = req.params.id;
  let body = req.body;
  //console.log(`req.body.email= ${req.body.email}`)
  try {
    await Token.update( { 
        tokenPage: body.tokenPage,
        tokenNo: body.tokenNo,
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

//edit Token
module.exports.getTokenById = async (req, res) => {
  const id = req.params.id;
  //console.log(`req.body.email= ${req.body.email}`)
  try {
    await Token.findByPk(id)
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

module.exports.deleteTokenById =  async(req, res) => {
  await Token.destroy({
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