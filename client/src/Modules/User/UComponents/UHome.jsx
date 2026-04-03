import React from 'react'
import Products from './Products'
import { Typography } from '@mui/material'

export default function UHome() {
  return (
    <div style={{padding: "40px 60px"}}>
      <Typography variant="h4" style={{ marginBottom: "16px" }}>
        USER HOME PAGE
      </Typography>
      
      <Products/>
    </div>

  )
}


