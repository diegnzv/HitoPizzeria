import React from 'react'
import { useState } from 'react'

const Login = () =>  {

const [email, setEmail] = useState('')
const [contraseña, setContraseña] = useState('')

const handleSubmit = (e) => {
  e.preventDefault()

  console.log(email, contraseña)

  if (!email.trim() || !contraseña.trim()) {
      alert("Todos los campos son obligatorios")
      return
  }

  if (contraseña.length <= 5) {
      alert("La contraseña debe tener al menos 6 caracteres")
      return
  }


  alert("Inicio de sesion exitosa")

  setEmail("")
  setContraseña("")
}

return (
    <div className="form-container">
    <form onSubmit={handleSubmit}>
      <label>Email</label>
      <input type="email" placeholder="Correo" value={email} 
      onChange={ (e) => setEmail(e.target.value)}/>
  
      <label>Contraseña</label>
      <input type="password" placeholder="Contraseña" value={contraseña}
      onChange={(e)=>setContraseña(e.target.value)} />
  
      <button type="submit">Aceptar</button>
    </form>
  </div>
  )
}

export default Login