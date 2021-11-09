//  Author: Mashrur Hossain Khan
//  Create Date: 03/11/2021
//  Modify Date: 03/11/2021
//  Description: homeHead controller file for rest api project for FamousAuto

// Model import
const models = require("../models");
const  HomeHead = models.HomeHead;

// Create cause paragraph
exports.createHomeHead = async function (req, res) {
    let body = req.body;
  
    try {
        await HomeHead.create({
            homeHead: body.homeHead,
            homeHeadRename: body.homeHeadRename,
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

  // Get all HomeHead
exports.getAllHomeHead = async function (req, res) {
  try {
    await HomeHead.findAll()
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
module.exports.updateHomeHeadById = async (req, res) => {
  const id = req.params.id;
  let body = req.body;
  //console.log(`req.body.email= ${req.body.email}`)
  try {
    await HomeHead.update( { 
        homeHead: body.homeHead,
        homeHeadRename: body.homeHeadRename,
      
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
module.exports.getHomeHeadById = async (req, res) => {
  const id = req.params.id;
  //console.log(`req.body.email= ${req.body.email}`)
  try {
    await HomeHead.findByPk(id)
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

module.exports.deleteHomeHeadById =  async(req, res) => {
  await HomeHead.destroy({
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