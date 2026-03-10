const express = require("express")
const {registerproduct, getproduct, getproductbyid, deleteproduct, updateproduct} = require("../Controller/product_controller")
const route = express.Router();

route.post('/registerproduct', registerproduct)
route.get('/getproduct', getproduct)
route.get('/getproductbyid/:id', getproductbyid)
route.delete('/deleteproduct/:id', deleteproduct)
route.put('/updateproduct/:id', updateproduct)

module.exports = route