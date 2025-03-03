import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'

const Navbar = () => {
  return (
    <nav className="navbar">
      <Link to="/" className="navbar-logo">
        Pizzería
      </Link>
      <div className="navbar-links">
        <Link to="/register">Registro</Link>
        <Link to="/login">Iniciar sesión</Link>
        <Link to="/profile">Perfil</Link>
      </div>
      <div className="navbar-cart">
        <Link to="/cart"><span>🛒 Total: $0</span></Link>
      </div>
    </nav>
  )
}

export default Navbar