//  Author: Mohammad Jihad Hossain
//  Create Date: 24/03/2021
//  Modify Date: 31/03/2021
//  Description: All the relation, data, database sync for rest api project for FamousAuto


"use strict";

const fs = require("fs");
const path = require("path");
const Sequelize = require("sequelize");
const basename = path.basename(__filename);
const env = process.env.NODE_ENV || "development";
const config = require(__dirname + "/../config/config.json")[env];
const db = {};

let sequelize;

// Get all database config keys
if (config.use_env_variable) {
  sequelize = new Sequelize(process.env[config.use_env_variable], config);
} else {
  sequelize = new Sequelize(
    config.database,
    config.username,
    config.password,
    config
  );
}


// Check connection with DB
sequelize
  .authenticate()
  .then(() => {
    console.log("Connection has been established successfully.");
  })
  .catch((err) => {
    console.error("Unable to connect to the database:", err);
  });

// All association sync
Object.keys(db).forEach((modelName) => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

// Initialize DB with ORM
db.sequelize = sequelize;
db.Sequelize = Sequelize;

// Import models
db.cause = require("./cause")(sequelize, Sequelize);
db.policy = require("./policy")(sequelize, Sequelize);
db.social = require("./social")(sequelize, Sequelize);
db.term = require("./term")(sequelize, Sequelize);
db.buy = require("./buyModel")(sequelize, Sequelize);
db.buyPhase = require("./buyPhase")(sequelize, Sequelize);
db.addressToken = require("./addressTokenModel")(sequelize, Sequelize);
db.HomeHead = require("./HomeHeadModel")(sequelize, Sequelize);
db.AidThreeCard = require("./aidThreeCardsModel")(sequelize, Sequelize);
db.phaseModel = require("./phaseModel")(sequelize, Sequelize);
db.carouselUpload = require("./carouselUpload")(sequelize, Sequelize);
//Drop the table if it already exists
// db.sequelize.sync({ force: true }).then(() => {
//   console.log("Drop and re-sync db.");
// });

// Datasource syc
db.sequelize.sync();

module.exports = db;
