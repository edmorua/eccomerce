import React from 'react'
import { Routes, Route } from 'react-router';
import { Home } from '../pages/home/home';
import { Login } from '../pages/login/login';

export const MainRoutes = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/login' element={<Login />} />
    </Routes>
  )
  
}
