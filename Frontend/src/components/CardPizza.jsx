import './CardPizza.css'

const CardPizza = ({ name, price, ingredients, img }) => {
  return (
    <div className="card-pizza">
      <img src={img} alt={name} className="pizza-image" />
      <h3>{name}</h3>
      <p><strong>Ingredientes:</strong></p>
      <ul>
        {ingredients.map((ingredient, index) => (
          <li key={index}>{ingredient}</li>
        ))}
      </ul>
      <p><strong>Precio:</strong> ${price.toLocaleString()}</p>
      <p className="max-installments">(3x Máx. ${(price / 3).toLocaleString()} c/u)</p>
      <div className="buttons-container">
        <button className="btn">Ver más</button>
        <button className="btn">Añadir</button>
      </div>
    </div>
  )
}

export default CardPizza