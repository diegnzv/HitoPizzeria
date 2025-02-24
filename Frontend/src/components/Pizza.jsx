import React, { useEffect, useState } from 'react'
import './Pizza.css'

const Pizza = () => {
  const [pizza, setPizza] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchPizza = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/pizzas/p001')
        if (!response.ok) {
          throw new Error('Error al obtener los detalles de la pizza')
        }
        const data = await response.json()
        setPizza(data)
      } catch (error) {
        setError(error.message)
      } finally {
        setLoading(false)
      }
    }

    fetchPizza()
  }, [])

  if (loading) {
    return <div className="center-message loading">Cargando...</div>;
  }
  
  if (error) {
    return <div className="center-message error">Error: {error}</div>;
  }

  return (
    <div className="pizza-container">
      {pizza && (
        <>
          <h1>{pizza.name}</h1>
          <img src={pizza.img} alt={pizza.name} />
          <p><strong>Precio:</strong> ${pizza.price}</p>
          <p><strong>Ingredientes:</strong> {pizza.ingredients.join(', ')}</p>
          <p><strong>Descripción:</strong> {pizza.desc}</p>
          <button>Añadir al carrito</button>
        </>
      )}
    </div>
  );
};

export default Pizza