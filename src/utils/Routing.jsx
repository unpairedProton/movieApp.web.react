import React from 'react'
import { Routes,Route } from 'react-router-dom'
import Home from '../components/Home'

const Routing = () => {
  return (
    <Routes>
        <Route path='/' element={<Home/>} ></Route>
        
    </Routes>
  )
}

export default Routing