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

// Import all controller
const userController = require("../controllers/userController");
const orderController = require("../controllers/orderController");
const productController = require("../controllers/productController");
const commentController = require("../controllers/commentController.js");
const actionController = require("../controllers/actionController");
const roleController = require("../controllers/roleController");
const authController = require("../controllers/authController");
const permissionController = require("../controllers/permissionController");

// Import validation
const duplicationCheck = require("../validators/duplicationCheck");
const userValidation = require("../validators/userValidation");
const permissionValidation = require("../validators/permissionValidation");
const roleValidation = require("../validators/roleValidation");
const validationResponse = require("../validators/validationResponse");

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
router.post(
  "/api/permission/add",
  [
    duplicationCheck.checkDuplicatePermission,
    permissionValidation.addPermissionValidator,
    validationResponse.validationResponse,
  ],
  permissionController.addPermission
);

// @route   GET /api/permission/all
// @desc    Create permission
// @access  Public
router.get(
  "/api/permission/all",
  permissionController.getAllPermission
);

// @route   POST /api/role/add
// @desc    Create role
// @access  Private
router.post(
  "/api/role/add",
  [
    duplicationCheck.checkDuplicateRole,
    roleValidation.addRoleValidator,
    validationResponse.validationResponse,
  ],
  roleController.addRole
);

// @route   GET /api/role/all
// @desc    Get all role
// @access  Private
router.get("/api/role/all", function (req, res) {
  roleController.getAllRoles(req, res);
});
// =======================================

// =======================================
// ALL the Signup API

// @route   POST /api/user/register
// @desc    Signup user
// @access  Private
router.post(
  "/api/user/register",
  [
    duplicationCheck.checkDuplicateEmail,
    duplicationCheck.checkDuplicateUsername,
    userValidation.signUpValidator,
    validationResponse.validationResponse,
  ],
  userController.signup
);
// =======================================

// =======================================
// ALL the Auth API

// @route   POST /api/user/login
// @desc    Create role
// @access  Public
router.post("/api/user/login", authController.signin);

// @route   GET /api/user/dashboard
// @desc    User dashboard
// @access  Private
router.get(
  "/api/user/dashboard",
  [authController.verifyToken],
  userController.userBoard
);

// @route   GET /api/user/admin
// @desc    Admin dashboard
// @access  Private
router.get(
  "/api/admin/dashboard",
  [authController.verifyToken, authController.getUserRolePermission],
  userController.adminBoard
);
// =======================================

// @route   GET /api/user/employee
// @desc    Employee dashboard
// @access  Private
router.get(
  "/api/user/employee",
  [authController.verifyToken, authController.isEmployee],
  userController.userBoard
);
// =======================================
// ALL the Auth API

// @route   GET /api/orders
// @desc    Get all orders
// @access  Private
router.get(
  "/api/orders",
  passport.authenticate("jwt", { session: false }),
  function (req, res) {
    orderController.getOrders(req, res);
  }
);

router.get(
  "/api/orders/:id",
  passport.authenticate("jwt", { session: false }),
  function (req, res) {
    orderController.getOrder(req, res);
  }
);

router.get(
  "/api/orders/:id/products",
  passport.authenticate("jwt", { session: false }),
  function (req, res) {
    productController.getProducts(req, res);
  }
);

router.delete(
  "/api/orders/:id",
  passport.authenticate("jwt", { session: false }),
  function (req, res) {
    orderController.deleteOrder(req, res);
  }
);

router.get(
  "/api/orders/:id/comments",
  passport.authenticate("jwt", { session: false }),
  function (req, res) {
    commentController.getComments(req, res);
  }
);

router.post(
  "/api/orders/:id/comments",
  passport.authenticate("jwt", { session: false }),
  function (req, res) {
    commentController.addComment(req, res);
  }
);

router.put(
  "/api/orders/:id",
  passport.authenticate("jwt", { session: false }),
  function (req, res) {
    orderController.updateOrder(req, res);
  }
);

router.get(
  "/api/users",
  passport.authenticate("jwt", { session: false }),
  function (req, res) {
    userController.getUsers(req, res);
  }
);

router.delete(
  "/api/users/:id",
  passport.authenticate("jwt", { session: false }),
  function (req, res) {
    userController.deleteUser(req, res);
  }
);

router.put(
  "/api/users/:id",
  passport.authenticate("jwt", { session: false }),
  function (req, res) {
    userController.updateUser(req, res);
  }
);

router.get(
  "/api/actions",
  passport.authenticate("jwt", { session: false }),
  function (req, res) {
    actionController.getActions(req, res);
  }
);

router.use(function (err, req, res, next) {
  if (err.name === "ValidationError") {
    return res.status(422).json({
      errors: Object.keys(err.errors).reduce(function (errors, key) {
        errors[key] = err.errors[key].message;

        return errors;
      }, {}),
    });
  }

  return next(err);
});

module.exports = router;
