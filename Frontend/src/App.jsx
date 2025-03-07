import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import RegisterPage from './pages/RegisterPage'
import Login from './pages/Login'
import Cart from './pages/Cart'
import Pizza from './pages/Pizza'
import Profile from './components/Profile'
import NotFound from './components/NotFound'
import Navbar from './components/Navbar'

function App() {
  return (
    <Router>
      <Navbar /> 
      <Routes>
        <Route path="/" element={<Home />} />
        
        <Route path="/register" element={<RegisterPage />} />
        
        <Route path="/login" element={<Login />} />

        <Route path="/cart" element={<Cart />} />
        
        <Route path="/pizza/p001" element={<Pizza />} />

        <Route path="/profile" element={<Profile />} />

        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  )
}

export default App