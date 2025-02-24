import React from 'react'
import './RegisterPage.css'
import { useState } from 'react'



const RegisterPage = () => {

const [email, setEmail] = useState('')
const [contraseña, setContraseña] = useState('')
const [confirmC, setConfirmC] = useState('')

const handleSubmit = (e) => {
  e.preventDefault()

  console.log(email, contraseña, confirmC)

  if (!email.trim() || !contraseña.trim() || !confirmC.trim()) {
      alert("Todos los campos son obligatorios")
      return
  }

  if (contraseña.length <= 5) {
      alert("La contraseña debe tener al menos 6 caracteres")
      return
  }

  if (contraseña !== confirmC) {
      alert("Las contraseñas deben ser iguales")
      return
  }

  alert("¡Su cuenta ha sido registrada con éxito!")

  setEmail("")
  setContraseña("")
  setConfirmC("")
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

    <label>Confirmar Contraseña</label>
    <input type="password" placeholder="Confirmar contraseña" value={confirmC}
    onChange={(e) => setConfirmC(e.target.value)} />

    <button type="submit">Aceptar</button>
  </form>
</div>
  )
}

export default RegisterPage