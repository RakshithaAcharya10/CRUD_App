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
import FAQ from '../UComponents/FAQ'
import Bookingform from '../UComponents/Bookingform'
import Trackstatus from '../UComponents/Trackstatus'


function AppContent() {
  const location = useLocation()
  const hidetopbar = ["/"]
  return (
    <div>
      {!hidetopbar.includes(location.pathname) && <TopBar />}
      <Routes>
        <Route path='/UHome' element={<UHome />} />
        <Route path='/UAbout' element={<UAbout />} />
        <Route path='/' element={<Register />} />
        <Route path='/Login' element={<Login />} />
        <Route path='/AddProduct' element={<AddProduct />} />
        <Route path='/Products' element={<Products />} />
        <Route path='/Product/:id' element={<ProductDetails />} />
        <Route path='/Myprofile' element={<Myprofile />} />
        <Route path='/FAQ' element={<FAQ />} />
        <Route path='/Trackstatus' element={<Trackstatus />} />
        <Route path='/Bookingform/:productID' element={<Bookingform />} />
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