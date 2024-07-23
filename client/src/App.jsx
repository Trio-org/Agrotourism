import { useState } from 'react'
import './App.css'
import Register from './pages/Register'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Login from './pages/Login'
import Home from './pages/Home'
// import TourDetails from './pages/TourDetails'
function App() {

  return (
   <BrowserRouter>
   <Routes>
    <Route path='/register' element={<Register />}/>
    <Route path='/login' element={<Login />}/>
    <Route path='/' element={<Home />}/>
    {/* <Route path='/details/:id' element={<TourDetails />}/> */}
    </Routes>
   </BrowserRouter>
  )
}

export default App
