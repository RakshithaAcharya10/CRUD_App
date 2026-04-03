import React, { useState } from 'react'
import {
  Typography,
  TextField,
  Button,
  Paper
} from '@mui/material'

export default function Order() {

  const [order, setOrder] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    productName: "",
    quantity: ""
  })

  // handle input change
  const handleChange = (e) => {
    console.log({...order,[e.target.name]: e.target.value})
    setOrder({...order,[e.target.name]: e.target.value})
  }

  // handle submit
  const handleSubmit = (e) => {
    e.preventDefault()

    console.log("Order Data:", order)

    alert("Order Placed Successfully ✅")

    // reset form
    setOrder({
      name: "",
      email: "",
      phone: "",
      address: "",
      productName: "",
      quantity: ""
    })
  }

  return (
    <div style={{ backgroundColor: "#eae6d8", minHeight: "100vh", padding: "40px" }}>
      <Paper style={{ maxWidth: "500px", margin: "auto", padding: "30px" }}>
        <Typography variant="h4" gutterBottom align="center">Place Order</Typography>

          <TextField label="Full Name" name="name" fullWidth value={order.name} onChange={handleChange} required/>
          <TextField label="Email" name="email" fullWidth margin="normal" value={order.email} onChange={handleChange} required />
          <TextField label="Phone Number" name="phone" fullWidth margin="normal" value={order.phone} onChange={handleChange} required/>
          <TextField label="Address" name="address" fullWidth margin="normal" multiline rows={3} value={order.address} onChange={handleChange} required/>
          <TextField label="Product Name" name="productName" fullWidth margin="normal" value={order.productName} onChange={handleChange} required />
          <TextField label="Quantity" name="quantity" type="number" fullWidth margin="normal" value={order.quantity} onChange={handleChange} required />
          <Button type="submit" variant="contained" fullWidth onSubmit={handleSubmit}> Place Order </Button>

      </Paper>
    </div>
  )
}