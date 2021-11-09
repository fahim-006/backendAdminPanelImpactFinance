//  Author: Mashrur Hossain Khan
//  Create Date: 03/11/2021
//  Modify Date: 03/11/2021
//  Description: HomeThreeCards controller file for rest api project for FamousAuto

// Model import
const models = require("../models");
const  HomeThreeCards = models.AidThreeCard;

// Create cause paragraph
exports.createHomeThreeCards = async function (req, res) {
    let body = req.body;
  
    try {
        await HomeThreeCards.create({
            headline: body.headline,
            subhead: body.subHead,
            headlineRename: body.headlineRename,
            details: body.details,
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
exports.getAllHomeThreeCards = async function (req, res) {
  try {
    await HomeThreeCards.findAll()
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
module.exports.updateHomeThreeCardsById = async (req, res) => {
  const id = req.params.id;
  let body = req.body;
  //console.log(`req.body.email= ${req.body.email}`)
  try {
    await HomeThreeCards.update( { 
        headline: body.headline,
        subHead: body.subHead,
        headlineRename: body.headlineRename,
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

//edit HomeThreeCards
module.exports.getHomeThreeCardsById = async (req, res) => {
  const id = req.params.id;
  //console.log(`req.body.email= ${req.body.email}`)
  try {
    await HomeThreeCards.findByPk(id)
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

module.exports.deleteHomeThreeCardsById =  async(req, res) => {
  await HomeThreeCards.destroy({
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