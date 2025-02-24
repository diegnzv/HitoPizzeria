import React, { useState } from 'react'
import { pizzaCart } from '../assets/utils/pizzas'
import './Cart.css'

const Carrito = () => {
  const [carrito, setCarrito] = useState(pizzaCart)

  const actualizarCantidad = (id, cambio) => {
    setCarrito(carrito => {
      const carritoActualizado = carrito.map(pizza =>
        pizza.id === id ? { ...pizza, count: Math.max(0, pizza.count + cambio) } : pizza
      ).filter(pizza => pizza.count > 0);
      return carritoActualizado
    })
  }

  const total = carrito.reduce((suma, pizza) => suma + pizza.price * pizza.count, 0)

  return (
    <div className="contenedor-carrito">
      <h2>Detalles del pedido:</h2>
      <ul className="lista-carrito">
        {carrito.map(pizza => (
          <li key={pizza.id} className="item-carrito">
            <img src={pizza.img} alt={pizza.name} className="imagen-carrito" />
            <span className="nombre-carrito">{pizza.name} - ${pizza.price.toLocaleString()}</span>
            <div className="controles-carrito">
              <button onClick={() => actualizarCantidad(pizza.id, -1)}>-</button>
              <span>{pizza.count}</span>
              <button onClick={() => actualizarCantidad(pizza.id, 1)}>+</button>
            </div>
          </li>
        ))}
      </ul>
      <h3>Total: ${total.toLocaleString()}</h3>
      <button className="boton-pagar">Pagar</button>
    </div>
  )
}

export default Carrito
