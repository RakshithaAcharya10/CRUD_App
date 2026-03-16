const express = require('express');
//express → a Node.js framework used to build web servers and APIs.
const {addcategory,getcategory, getcategoryid, deletecategory, updatecategory} = require('../Controller/category_controller');

const route = express.Router();

route.post('/addcategory',addcategory)
route.get('/getcategory',getcategory)  
route.get('/getcategoryid/:id',getcategoryid)  
route.delete('/deletecategory/:id',deletecategory)  
route.put('/getcategoryid/:id',updatecategory)  


module.exports = route