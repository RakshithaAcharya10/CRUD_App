import { Box, Button, TextField, Typography } from '@mui/material'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

export default function Bookingform() {
  const { productID } = useParams()  //Fetch the id from the url
  const [booking, setBooking] = useState({
    fullname: '',
    email: '',
    phone: '',
    address: '',
    quantity: '',
    totalamount: ' '
  })

  const navigate = useNavigate()

  const [price, setPrice] = useState(0)

  const handlechange = (e) => {

    if (e.target.name === "quantity") {
      const qty = e.target.value
      setBooking({ ...booking, quantity: qty, totalamount: qty * price })
    }
    else {
      setBooking({ ...booking, [e.target.name]: e.target.value })
      console.log({ ...booking, [e.target.name]: e.target.value })
    }
  }
  useEffect(() => {
    axios.get(`http://localhost:7000/product/getproductbyid/${productID}`)
      .then((res) => {
        console.log("Product details", res.data.byid.pprice)
        setPrice(res.data.byid.pprice)
      })
      .catch((error) => {
        console.log(error)
      })
  }, [])
  const utoken = localStorage.getItem('UserToken')
  const Handlebooking = async () => {
    try {
      await axios.post("http://localhost:7000/booking/Createbooking", { ...booking, productID }, { headers: { "auth-token": utoken } })
      alert("Booking done succefully")
      navigate("/Trackstatus")
    } catch (error) {
      console.log(error)
      alert("Booking fafiled")
    }
  }


  return (
    <div>
      <Box
        sx={{
          height: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "#f5f5f5"
        }}
      >
        <Box
          sx={{
            width: { xs: "90%", sm: "500px" },
            padding: "30px",
            backgroundColor: "white",
            borderRadius: "10px",
            boxShadow: 3
          }}
        >
          <Typography>BOOK NOW</Typography>
          <TextField label="Full Name" name='fullname' fullWidth onChange={handlechange} />
          <TextField label="Email" name='email' fullWidth onChange={handlechange} />
          <TextField type='number' label="Phone" name='phone' fullWidth onChange={handlechange} />
          <TextField label="Address" name='address' fullWidth multiline rows={4} onChange={handlechange} />
          <TextField label="Quantity" type='number' name='quantity' fullWidth onChange={handlechange} />
          <TextField label="Price" type='number' name='pprice' inputProps={{ readOnly: true }} fullWidth onChange={handlechange} value={price} />
          <TextField label="Total Amount" type='number' name='totalamount' inputProps={{ readOnly: true }} fullWidth onChange={handlechange} value={booking.totalamount} />
          <Button fullWidth variant='contained' color='success' onClick={Handlebooking}>BOOK NOW</Button>
        </Box>
      </Box>
    </div>
  )
}
