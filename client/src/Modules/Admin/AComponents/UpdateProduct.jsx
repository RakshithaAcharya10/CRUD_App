import React, { useState } from 'react'
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import axios from 'axios'
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';

export default function UpdateProduct() {
  const [product, setproduct] = useState({
    pname:'',
    pprice:'',
    pquantity:'',
    pdescription:'',
    categoryId:'',
    productimage:''
  })

  const{rowid} = useParams();
  const handlechange = (e)=>{
    console.log({...product,[e.target.name]:e.target.value})
    setproduct({...product,[e.target.name]:e.target.value})
  }

  useEffect(()=>{
    axios.get(`http://localhost:7000/product/getproductbyid/${rowid}`)
    .then((res)=>{
      console.log(res.data.byid)
      setproduct(res.data.byid)
    })
    .catch((error)=>{
      console.log(error)
    })
  },[])



  const handleUpdate = async ()=>{
    const productdata = new FormData()
    productdata.append('pname',product.pname)
    productdata.append('pprice',product.pprice)
    productdata.append('pquantity',product.pquantity)
    productdata.append('pdescription',product.pdescription)
    productdata.append('categoryId',product.categoryId)
    productdata.append('productimage',product.productimage)
    

    try {
      await axios.put(`http://localhost:7000/product/updateproduct/${rowid}`,product)
      alert("Product Updated")

    } catch (error) {
     console.log(error) 
    }

  }

  return (
    <div>
      <Paper elevation={20} style={{width:"550PX",padding:"20PX",margin:"50px auto"}}>
        <Typography variant='h4'>Update Product</Typography>
        <TextField variant='outlined' type='text' label='PRODUCT NAME' name='pname' fullWidth style={{marginBottom:"10px"}} onChange={handlechange} value={product.pname}/>
        <TextField variant='outlined' type='number' label='PRODUCT PRICE' name='pprice' fullWidth style={{marginBottom:"10px"}} onChange={handlechange} value={product.pprice}/>
        <TextField variant='outlined' type='number' label='PRODUCT QUANTITY' name='pquantity' fullWidth style={{marginBottom:"10px"}} onChange={handlechange} value={product.pquantity}/>
        <TextField variant='outlined' multiline rows={5} label='PRODUCT DESCRIPTION' name='pdescription' fullWidth style={{marginBottom:"10px"}} onChange={handlechange} value={product.pdescription}/>
        {/* <TextField variant='outlined' type='file' InputLabelProps={{shrink:true}} label='PRODUCT IMAGE' name='productimage' fullWidth style={{marginBottom:"10px"}} onChange={handlechange} value={product.pdescription}/> */}
        <Button variant='contained' fullWidth  onClick={handleUpdate}>Update Product</Button>
      </Paper>
    </div>
  )
}
