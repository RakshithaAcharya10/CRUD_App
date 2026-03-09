const producttable = require("../Models/Product_model")
const registerproduct = async(req, res) =>{
    try {
        const{pname, pprice, pquantity, pdescription} = req.body;
        const productdetails = new producttable({
            pname,
            pprice,
            pquantity,
            pdescription
        })
        await productdetails.save();
        res.status(201).json({message:"Product added successfully", pdata:productdetails})
    } catch (error) {
        console.log(error)
        res.status(500).json({message:"Server error", error})
    }
}

module.exports = registerproduct