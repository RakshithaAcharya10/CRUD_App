import React, { useState } from 'react'
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function ALogin() {
  const [adminlogin, setAdminlogin] = useState({
    email: '',
    password: ''
  })
  const navigate = useNavigate()
  const handleChange = (e) => {
    console.log({ ...adminlogin, [e.target.name]: e.target.value })
    setAdminlogin({ ...adminlogin, [e.target.name]: e.target.value })
  }
  const handleLogin = () => {
    console.log("Login details:", adminlogin)
    axios.post('http://localhost:7000/admin/loginadmin', adminlogin)
      .then((res) => {
        console.log(res)
        if (res.data.success) {
          localStorage.setItem('UserToken', res.data.token)
          alert("Login successful")
          navigate('/Admin')
        }
        else {
          alert("Login Unsuccessful")
        }
      })
      .catch((error) => {
        console.log(error)
        alert("Login Failed")
      })
  }
  
  return (
    <div>
      <Paper elevation={20} style={{ width: "500px", padding: "20px", marginTop: "200px", marginBottom: "50px", marginLeft: "500px" }}>
        <Typography variant='h4' style={{ fontFamily: "math", fontWeight: "bold", marginLeft: "100px" }}>Admin Login</Typography>
        <TextField variant='outlined' label='Email' fullWidth name='email' type='Email' style={{ marginBottom: "10px" }} onChange={handleChange} />
        <TextField variant='outlined' label='Password' fullWidth name='password' type='password' style={{ marginBottom: "10px" }} onChange={handleChange} />
        <Button variant='contained' fullWidth onClick={handleLogin}>Login</Button>
      </Paper>
    </div>

  )
}