//  Author: Mohammad Jihad Hossain
//  Create Date: 24/03/2021
//  Modify Date: 24/03/2021
//  Description: Main API file for rest api project for FamousAuto

// Library imports
var express = require("express");
var router = express.Router();
const passport = require("passport");
const jwtStrategry = require("../strategies/jwt");
passport.use(jwtStrategry);
const path = require('path')


//Import Finance controller
const carouselUpload = require('../controllers/carouselUploadController')
const causeController = require("../controllers/causeController");
const policyController = require("../controllers/policyController")
const socialController = require("../controllers/socialController")
const termController = require("../controllers/termController")
const buyController = require("../controllers/buyController")
const buyPhaseController = require("../controllers/buyPhaseController")
const addressTokenController = require("../controllers/addressTokenController")
const homeHeadController = require("../controllers/homeHeadController")
const homeThreeCardController = require("../controllers/homethreeCardsController")
const phaseController = require("../controllers/phaseController")

router.use(function (req, res, next) {
  res.header(
    "Access-Control-Allow-Headers",
    "x-access-token, Origin, Content-Type, Accept"
  );

  next();
});

// Entery point of the Application
router.get("/", (req, res) => res.send("Hello World"));
// =======================================
// ALL the role API

// @route   POST /api/permission/add
// @desc    Create permission
// @access  Private


// @route   GET /api/permission/all
// @desc    Create permission
// @access  Public

// =======================================

// =======================================
// ALL the Auth API





//cause APIs
router.post(
  "/api/create/cause",
  causeController.createCause
)

router.get(
  "/api/getall/cause",
  causeController.getAllCauses
)

  router.put(
    "/api/update/cause/:id",
    causeController.updateCauseById
  )

  router.get(
    "/api/cause/:id",
    causeController.getCauseById
  )

  router.delete(
    "/api/cause/:id",
    causeController.deleteCauseById
  )

  

    //Social APIs
router.post(
  "/api/create/social",
  socialController.createSocial
)

router.get(
  "/api/getall/social",
  socialController.getAllSocial
)

  router.put(
    "/api/update/social/:id",
    socialController.updateSocialById
  )

  router.get(
    "/api/social/getsocialbyid/:id",
    socialController.getSocialById
  )

  router.delete(
    "/api/social/deletebyid/:id",
    socialController.deleteSocialById
  )


//termController APIs
router.post(
  "/api/create/term",
  termController.createTerms
)

router.get(
  "/api/getall/term",
  termController.getAllTerms
)

  router.put(
    "/api/update/term/:id",
    termController.updateTermsById
  )

  router.get(
    "/api/term/:id",
    termController.getTermsById
  )

  router.delete(
    "/api/term/:id",
    termController.deleteTermsById
  )

//policyController APIs
router.post(
  "/api/create/policy",
  policyController.createPolicy
)

router.get(
  "/api/getall/policy",
  policyController.getAllPolicy
)
  router.put(
    "/api/update/policy/:id",
    policyController.updatePolicyById
  )

  router.get(
    "/api/policy/:id",
    policyController.getPolicyById
  )

  router.delete(
    "/api/policy/:id",
    policyController.deletePolicyById
  )

//buy APIS
router.post(
  "/api/create/buy",
  buyController.createBuy
)

router.get(
  "/api/getall/buy",
  buyController.getAllBuy
)
  router.put(
    "/api/update/buy/:id",
    buyController.updateBuyById
  )

  router.get(
    "/api/buy/:id",
    buyController.getBuyById
  )

  router.delete(
    "/api/buy/:id",
    buyController.deleteBuyById
  )


  //buyPhase APIS
router.post(
  "/api/create/buyphase",
  buyPhaseController.createBuyPhase
)

router.get(
  "/api/getall/buyphase",
  buyPhaseController.getAllBuyPhase
)
  router.put(
    "/api/update/buyphase/:id",
    buyPhaseController.updateBuyPhaseById
  )

  router.get(
    "/api/buyphase/:id",
    buyPhaseController.getBuyPhaseById
  )

  router.delete(
    "/api/buyphase/:id",
    buyPhaseController.deleteBuyPhaseById
  )


//tokenpage APIS
router.post(
  "/api/create/tokenpage",
  addressTokenController.createToken
)

router.get(
  "/api/getall/tokenpage",
  addressTokenController.getAllToken
)
  router.put(
    "/api/update/tokenpage/:id",
    addressTokenController.updateTokenById
  )

  router.get(
    "/api/tokenpage/:id",
    addressTokenController.getTokenById
  )

  router.delete(
    "/api/tokenpage/:id",
    addressTokenController.deleteTokenById
  )


//HomepageController APIS
router.post(
  "/api/create/homepagehead",
  homeHeadController.createHomeHead
)

router.get(
  "/api/getall/homepagehead",
  homeHeadController.getAllHomeHead
)
  router.put(
    "/api/update/homepagehead/:id",
    homeHeadController.updateHomeHeadById
  )

  router.get(
    "/api/homepagehead/:id",
    homeHeadController.getHomeHeadById
  )

  router.delete(
    "/api/homepagehead/:id",
    homeHeadController.deleteHomeHeadById
  )
  

  //HomeThreeCards APIS
router.post(
  "/api/create/homethreecards",
  homeThreeCardController.createHomeThreeCards
)

router.get(
  "/api/getall/homethreecards",
  homeThreeCardController.getAllHomeThreeCards
)
  router.put(
    "/api/update/homethreecards/:id",
    homeThreeCardController.updateHomeThreeCardsById
  )

  router.get(
    "/api/homethreecards/:id",
    homeThreeCardController.getHomeThreeCardsById
  )

  router.delete(
    "/api/homethreecards/:id",
    homeThreeCardController.deleteHomeThreeCardsById
  )



  //PhaseHomepahe APIS
router.post(
  "/api/create/homephaselist",
  phaseController.createphaseList
)

router.get(
  "/api/getall/homephaselist",
  phaseController.getAllphaseList
)
  router.put(
    "/api/update/homephaselist/:id",
    phaseController.updatephaseListById
  )

  router.get(
    "/api/homephaselist/:id",
    phaseController.getphaseListById
  )

  router.delete(
    "/api/homephaselist/:id",
    phaseController.deletephaseListById
  )
  
module.exports = router;
