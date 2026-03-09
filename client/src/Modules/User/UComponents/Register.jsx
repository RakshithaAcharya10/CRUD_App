import React, { useState } from 'react'
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
export default function Register() {
  const [formdata, setFormdata] = useState({
    name:'',
    email:'',
    password:'',
    phone:'',
    address :''
  })
  const handlechange = (e)=>{
    console.log({...formdata,[e.target.name]:e.target.value})
    setFormdata({...formdata,[e.target.name]:e.target.value})
  }
  const handleregister = ()=>{
    const existingusers =JSON.parse(localStorage.getItem('userdetails')) || [];
    console.log(existingusers)
    const allusers = [...existingusers,formdata]

    localStorage.setItem('userdetails', JSON.stringify(allusers))
    alert("Registration done!!!!!!!!!!!")
  }
  return (
    <div>
      <Paper elevation={20} style={{width:"550PX",padding:"20PX",margin:"50px auto"}}>
        <Typography variant='h4'>REGISTER PAGE</Typography>
        <TextField variant='outlined' type='text' label='NAME' name='name' fullWidth style={{marginBottom:"10px"}} onChange={handlechange}/>
        <TextField variant='outlined' type='email' label='EMAIL' name='email' fullWidth style={{marginBottom:"10px"}}  onChange={handlechange}/>
        <TextField variant='outlined' type='password' label='PASSWORD' name='password' fullWidth style={{marginBottom:"10px"}} onChange={handlechange}/>
        <TextField variant='outlined' type='number' label='PHONE' name='phone' fullWidth style={{marginBottom:"10px"}} onChange={handlechange}/>
        <TextField variant='outlined' multiline rows={5} label='ADDRESS' name='address' fullWidth style={{marginBottom:"10px"}} onChange={handlechange}/>
        <Button variant='contained' fullWidth onClick={handleregister}>REGISTER</Button>
      </Paper>
    </div>
  )
}
