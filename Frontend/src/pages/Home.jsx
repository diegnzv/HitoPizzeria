import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import CardPizza from '../components/CardPizza'

const Home = () => {
  const [pizzas, setPizzas] = useState([])

  useEffect(() => {
    const fetchPizzas = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/pizzas')
        if (!response.ok) {
          throw new Error('Error al obtener las pizzas')
        }
        const data = await response.json()
        setPizzas(data)
      } catch (error) {
        console.error('Error:', error)
      }
    }

    fetchPizzas()
  }, [])

  return (
    <>
      <Header />
      <div className="home-container">
        <div className="pizzas-container">
          {pizzas.map((pizza) => (
            <CardPizza
              key={pizza.id}
              name={pizza.name}
              price={pizza.price}
              ingredients={pizza.ingredients}
              img={pizza.img}
            />
          ))}
        </div>
      </div>
    </>
  )
}

export default Home