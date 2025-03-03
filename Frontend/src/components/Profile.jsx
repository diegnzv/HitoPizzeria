import React from 'react'
import './Profile.css'

const Profile = () => {
  return (
    <div className="profile-container">
      <h1>Perfil de Usuario</h1>
      <p>Email: usuario@example.com</p>
      <button onClick={() => alert('Sesión cerrada')}>Cerrar sesión</button>
    </div>
  )
}

export default Profile