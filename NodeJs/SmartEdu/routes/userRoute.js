const express = require("express");
const {body} = require("express-validator")
const authController = require("../controllers/authController");
const authMiddleware = require("../middlewares/authMiddleware")
const router = express.Router();
const User = require("../models/User")



router.route("/signup").post([
    body('name').not().isEmpty().withMessage('Please Enter Your Name'),
    body("email").isEmail().withMessage('Please Enter A Valid Email').custom((userEmail)=>{
        return User.findOne({email: userEmail}).then(user=>{
            if(user){
                return Promise.reject("Email is already exists!")
            }
        })
    }) ,
    body('password').not().isEmpty().withMessage('Please Enter Your Password'),
  
],authController.createUser);
router.route("/login").post([
    body("email").isEmail().withMessage('Please Enter A Valid Email'),
    body('password').not().isEmpty().withMessage('Please Enter Your Password'),
], authController.loginUser);
router.route("/logout").get(authController.logoutUser);
router.route("/dashboard").get(authMiddleware,authController.getDashboardPage);
router.route('/:id').delete(authController.deleteUser);

module.exports = router;
