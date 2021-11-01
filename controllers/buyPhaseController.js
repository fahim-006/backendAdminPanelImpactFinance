//  Author: Mashrur Hossain Khan
//  Create Date: 02/10/2021
//  Modify Date: 02/10/2021
//  Description: Brand controller file for rest api project for FamousAuto

// Model import
const models = require("../models");
const  BuyPhase = models.buyPhase;

// Create BuyPhase 
exports.createBuyPhase = async function (req, res) {
    let body = req.body;
  
    try {
        await BuyPhase.create({
            phaseno: body.phaseno,
            tokenNo: body.tokenNo,
            price: body.price,
            tax: body.tax,
            min_buy: body.min_buy,
            max_buy: body.max_buy,
            day: body.day,
            month: body.month,
            year: body.year,
            hour: body.hour,
            min: body.min,
            sec: body.sec
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

  // Get all Buy
exports.getAllBuyPhase = async function (req, res) {
  try {
    await BuyPhase.findAll()
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

//edit Buy
module.exports.updateBuyPhaseById = async (req, res) => {
  const id = req.params.id;
  let body = req.body;
  //console.log(`req.body.email= ${req.body.email}`)
  try {
    await BuyPhase.update( { 
        phaseNo: body.phaseNo,
        tokenNo: body.tokenNo,
        price: body.price,
        tax: body.tax,
        min_buy: body.min_buy,
        max_buy: body.max_buy,
        day: body.day,
        month: body.month,
        year: body.year,
        hour: body.hour,
        min: body.min,
        sec: body.sec
      
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

//edit Buy
module.exports.getBuyPhaseById = async (req, res) => {
  const id = req.params.id;
  //console.log(`req.body.email= ${req.body.email}`)
  try {
    await BuyPhase.findByPk(id)
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

module.exports.deleteBuyPhaseById =  async(req, res) => {
  await BuyPhase.destroy({
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