import React from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import UHome from '../UComponents/UHome'
import TopBar from '../UComponents/TopBar'
import UAbout from '../UComponents/UAbout'
import Register from '../UComponents/Register'
import AddProduct from '../UComponents/AddProduct'
import Products from '../UComponents/Products'
import ProductDetails from '../UComponents/ProductDetails'
import Login from '../UComponents/Login'
import Myprofile from '../UComponents/Myprofile'


function AppContent() {
  const location = useLocation()
  const hidetopbar = ["/Register"]
  return (
    <div>
      {!hidetopbar.includes(location.pathname) && <TopBar />}
      <Routes>
        <Route path='/' element={<UHome />} />
        <Route path='/UAbout' element={<UAbout />} />
        <Route path='/Register' element={<Register />} />
        <Route path='/Login' element={<Login />} />
        <Route path='/AddProduct' element={<AddProduct />} />
        <Route path='/Products' element={<Products />} />
        <Route path='/Product/:id' element={<ProductDetails />} />
        <Route path='/Myprofile' element={<Myprofile />} />
      </Routes>

    </div>
  )
}
export default function UserRoute() {
  return (
    <div>
<AppContent/>

    </div>
  )
}
