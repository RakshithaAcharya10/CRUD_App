const express = require("express")
const registerproduct = require("../Controller/product_controller")
const route = express.Router();
route.post('/registerproduct', registerproduct)
module.exports = route