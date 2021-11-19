import { useCart, actionType } from '../contexts/CardContext'
import './styles/Restaurants.css'

function DishesListItem ({ dish }) {
  const { dispatch } = useCart()

  const addToCart = () => {
    dispatch({
      type: actionType.ADD_ITEM_TO_CART,
      data: dish
    })
  }

  return (
    <div className='restaurant-item'>
      <h3 className='restaurant-title'>{dish.name}</h3>
      <p className='restaurant-txt'>{dish.description}</p>
      <p>{dish.price.toFixed(2)} €</p>
      <button onClick={addToCart}>Ajouter au pannier</button>
    </div>
  )
}

export default DishesListItem
