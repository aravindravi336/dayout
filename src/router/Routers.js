import React from 'react'
import {Routes, Route} from 'react-router-dom'
import Home from '../pages/Home'
import Login from '../pages/Login'
import Register from '../pages/Register'

const Routers = () => {
  return (
    <Routes>
        <Route path='/' element={<Navigate to ='/home' />}/>
        <Route path='/login' element={<Login />}/>
        <Route path='/register' element={<Register />}/>

    </Routes>
  )
}

export default Routers