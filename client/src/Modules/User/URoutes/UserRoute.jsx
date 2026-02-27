import React from 'react'
import { Routes,Route } from 'react-router-dom'
import UHome from '../UComponents/UHome'
import TopBar from '../UComponents/TopBar'
export default function UserRoute() {
  return (
    <div>
        <TopBar/>
      <Routes>
        <Route path='/' element={<UHome/>}/>
      </Routes>
    </div>
  )
}
