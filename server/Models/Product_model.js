const mongoose = require("mongoose")
const productschema = new mongoose.Schema({
    pname:{type:String},
    pprice:{type:Number},
    pquantity:{type:Number},
    pdescription:{type:String}
})

module.exports = mongoose.model("Product", productschema)