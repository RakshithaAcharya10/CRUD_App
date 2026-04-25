import React, { useEffect, useState } from 'react'
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import axios from 'axios'

export default function Myprofile() {
    const [formdata, setFormdata] = useState({
        name: '',
        email: '',
        phone: '',
        address: ''
    })
    const handlechange = (e) => {
        console.log({ ...formdata, [e.target.name]: e.target.value })
        setFormdata({ ...formdata, [e.target.name]: e.target.value })
    }
    //   const handleregister = ()=>{
    //     // const existingusers =JSON.parse(localStorage.getItem('userdetails')) || [];
    //     // console.log(existingusers)
    //     // const allusers = [...existingusers,formdata]

    //     // localStorage.setItem('userdetails', JSON.stringify(allusers))
    //     // alert("Registration done!!!!!!!!!!!")

    //     console.log("Form details :", formdata)
    //     axios.post("http://localhost:7000/user/registeruser", formdata)
    //     .then((res)=>{
    //       console.log("registered user: ",res.data)
    //       // alert("Register succefully")
    //       alert(res.data.message)

    //     })
    //     .catch((error)=>{
    //       console.log(error)
    //     })
    //   }

    const token = localStorage.getItem("UserToken")
    console.log("usertoken details", token)

    useEffect(() => {
        viewprofile()
    }, [])


    const viewprofile = async (req, res) => {
        try {
            const response = await fetch("http://localhost:7000/user/getProfile", { method: "GET", headers: { "auth-token": token } })

            // axios.get("http://localhost:7000/user/getProfile",{headers:{"auth-token":token}})
            const details = await response.json()
            console.log("Details",details.udata)
            setFormdata(details.udata)
        } catch (error) {
            console.log(error)
        }
    }


    // const handleUpdate = async () => {
    //     try {
    //         const response = await axios.put(
    //              `http://localhost:7000/user/updateuser/${formdata._id}`,
    //             formdata,
    //             {
    //                 headers: {
    //                     "auth-token": token
    //                 }
    //             }
    //         )
    //         console.log("Updated data:", response.data)
    //         alert("Profile updated successfully")

    //     } catch (error) {
    //         console.log(error)
    //         alert("Update failed")
    //     }
    // }

    const handleprofile = async (req, res) => {
        try {
            const response = await fetch("http://localhost:7000/user/updateprofile", { method: "PUT",body:JSON.stringify(formdata), headers: {"Content-Type":"application/json", "auth-token": token } })

            // axios.get("http://localhost:7000/user/getProfile",{headers:{"auth-token":token}})
            const details = await response.json()
            alert("profile updated")
            setFormdata(details.udetails)
        } catch (error) {
            console.log(error)
            res.status(500).json({message:"server error"})
        }
    }


    return (
        <div>
            <Paper elevation={20} style={{ width: "550PX", padding: "20PX", margin: "50px auto" }}>
                <Typography variant='h4'>MY PROFILE</Typography>
                <TextField variant='outlined' type='text' label='NAME' name='name' fullWidth style={{ marginBottom: "10px" }} onChange={handlechange} value={formdata.name} />
                <TextField variant='outlined' type='email' label='EMAIL' name='email' fullWidth style={{ marginBottom: "10px" }} onChange={handlechange} value={formdata.email} />
                <TextField variant='outlined' type='number' label='PHONE' name='phone' fullWidth style={{ marginBottom: "10px" }} onChange={handlechange} value={formdata.phone} />
                <TextField variant='outlined' multiline rows={5} label='ADDRESS' name='address' fullWidth style={{ marginBottom: "10px" }} onChange={handlechange} value={formdata.address} />
                <Button variant='contained' fullWidth onClick={handleprofile} >UPDATE</Button>
            </Paper>
        </div>
    )
}