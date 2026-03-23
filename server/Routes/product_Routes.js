const express = require("express")
const {registerproduct, getproduct, getproductbyid, deleteproduct, updateproduct} = require("../Controller/product_controller")
const route = express.Router();

const upload = require('../Middleware/imageUpload')

route.post('/registerproduct',upload.single('productimage'), registerproduct)
route.get('/getproduct', getproduct)
route.get('/getproductbyid/:id', getproductbyid)
route.delete('/deleteproduct/:id', deleteproduct)
route.put('/updateproduct/:id', updateproduct)

module.exports = route