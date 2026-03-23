const mongoose = require("mongoose")
const productschema = new mongoose.Schema({
    pname:{type:String,  require:true},
    pprice:{type:Number},
    pquantity:{type:Number},
    pdescription:{type:String},
    categoryId:{type: mongoose.Schema.Types.ObjectId, ref:"Category"},
    productimage:{type:String}
})

module.exports = mongoose.model("Product", productschema)