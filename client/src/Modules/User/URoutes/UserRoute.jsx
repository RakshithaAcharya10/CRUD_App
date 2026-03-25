import React from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import UHome from '../UComponents/UHome'
import TopBar from '../UComponents/TopBar'
import UAbout from '../UComponents/UAbout'
import Register from '../UComponents/Register'
import AddProduct from '../UComponents/AddProduct'
import Products from '../UComponents/Products'


function AppContent() {
  const location = useLocation()
  const hidetopbar = ["/Register"]
  return (
    <div>
      {!hidetopbar.includes(location.pathname) && <TopBar />}
      <Routes>
        <Route path='/UHome' element={<UHome />} />
        <Route path='/' element={<UAbout />} />
        <Route path='/Register' element={<Register />} />
        <Route path='/AddProduct' element={<AddProduct />} />
        <Route path='/Products' element={<Products />} />
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
