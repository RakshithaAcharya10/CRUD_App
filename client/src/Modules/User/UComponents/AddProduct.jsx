import React, { useState } from 'react'
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import axios from 'axios'

export default function AddProduct() {
  const [product, setproduct] = useState({
    pname:'',
    pprice:'',
    pquantity:'',
    pdescription:''
  })
  const handlechange = (e)=>{
    console.log({...product,[e.target.name]:e.target.value})
    setproduct({...product,[e.target.name]:e.target.value})
  }
  const handleregister = ()=>{
    // const existingusers =JSON.parse(localStorage.getItem('userdetails')) || [];
    // console.log(existingusers)
    // const allusers = [...existingusers,formdata]

    // localStorage.setItem('userdetails', JSON.stringify(allusers))
    // alert("Registration done!!!!!!!!!!!")

    console.log("Form details :", product)
    axios.post("http://localhost:7000/product/registerproduct", product)
    .then((res)=>{
      console.log("registered user: ",res.data)
      // alert("Register succefully")
      alert(res.data.message)

    })
    .catch((error)=>{
      console.log(error)
    })
  }
  return (
    <div>
      <Paper elevation={20} style={{width:"550PX",padding:"20PX",margin:"50px auto"}}>
        <Typography variant='h4'>REGISTER PAGE</Typography>
        <TextField variant='outlined' type='text' label='PNAME' name='pname' fullWidth style={{marginBottom:"10px"}} onChange={handlechange}/>
        <TextField variant='outlined' type='number' label='PPRICE' name='pprice' fullWidth style={{marginBottom:"10px"}}  onChange={handlechange}/>
        <TextField variant='outlined' type='number' label='PQUANTITY' name='pquantity' fullWidth style={{marginBottom:"10px"}} onChange={handlechange}/>
        <TextField variant='outlined' multiline rows={5} label='PDESCRIPTION' name='pdescription' fullWidth style={{marginBottom:"10px"}} onChange={handlechange}/>
        <Button variant='contained' fullWidth onClick={handleregister}>ADD PRODUCT</Button>
      </Paper>
    </div>
  )
}
