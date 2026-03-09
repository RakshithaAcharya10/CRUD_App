import React from 'react'
import { Routes,Route } from 'react-router-dom'
import UHome from '../UComponents/UHome'
import TopBar from '../UComponents/TopBar'
import UAbout from '../UComponents/UAbout'
import Register from '../UComponents/Register'
export default function UserRoute() {
  return (
    <div>
        <TopBar/>
      <Routes>
        <Route path='/' element={<UHome/>}/>
        <Route path='/UAbout' element={<UAbout/>}/>
        <Route path='/Register' element={<Register/>}/>
      </Routes>
    </div>
  )
}
