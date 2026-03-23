const producttable = require("../Models/Product_model")
const registerproduct = async(req, res) =>{
    try {
        const{pname, pprice, pquantity, pdescription, categoryId} = req.body;
        const pimage = req.file ? req.file.filename:null

        const productdetails = new producttable({
            pname,
            pprice,
            pquantity,
            pdescription,
            categoryId,
            productimage:pimage
        })
        await productdetails.save();
        res.status(201).json({message:"Product added successfully", pdata:productdetails})
    } catch (error) {
        console.log(error)
        res.status(500).json({message:"Server error", error})
    }
}

const getproduct = async(req, res)=>{
    try {
        const getallproducts = await producttable.find()
        console.log(getallproducts)
        res.status(200).json({message:"Product fetched", allproducts:getallproducts})
    } catch (error) {
        console.log(error)
        res.status(500).json({message:"Server error",error})
    }
}

const getproductbyid = async(req, res)=>{
    try {
        const pid = req.params.id
        const productbyid = await producttable.findById(pid)
        console.log(productbyid)
        res.status(200).json({message:"Poduct found",byid:productbyid})
    } catch (error) {
        console.log(error)
        res.status(500).json({message:"Server error",error})
    }
}

const deleteproduct = async(req, res)=>{
    try {
        const did = req.params.id
        const deleteproduct = await producttable.findByIdAndDelete(did)
        console.log(deleteproduct)
        res.status(200).json({message:"User deleted", duser:deleteproduct})
    } catch (error) {
        console.log(error)
        res.status(500).json({message:"Server error",error})
    }
}

const updateproduct = async(req, res)=>{
    try {
        // const uid = req.params.id
        const {id} = req.params
        const body = req.body
        const updateproduct = await producttable.findByIdAndUpdate(id, body,{new:true})
        console.log(updateproduct)
        res.status(201).json({message:"Product updated",updatedata:updateproduct})
    } catch (error) {
        console.log(error)
        res.status(500).json({message:"Server error",error})
    }
}

module.exports = {registerproduct, getproduct, getproductbyid, deleteproduct, updateproduct}