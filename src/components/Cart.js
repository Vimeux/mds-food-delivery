import Draggable from 'react-draggable'
import { Link, useLocation } from 'react-router-dom'
import { useCart, actionType } from '../contexts/CardContext'

function Cart () {
  const { state: { cart, total }, dispatch } = useCart()
  const location = useLocation()

  const removeItem = (item) => {
    dispatch({
      type: actionType.REMOVE_ITEM_FROM_CART,
      data: item
    })
  }
  // on fait disparaitre le panier sur la page commande
  if (location.pathname.includes('order')) {
    return null
  }

  return (
    <Draggable>
      <div className='cart-container'>
        <h2>Cart</h2>
        {
          cart.map(item => {
            return (
              <div key={item.dish._id} className='item-container'>
                <h4>{item.dish.name}</h4>
                <p>{item.dish.price.toFixed(2)} €</p>
                <p>{item.quantity}</p>
                {/* () => sert à empêcher que la fonction s'execute directement et juste quand on clique */}
                <button onClick={() => removeItem(item)}>X</button>
              </div>
            )
          })
        }
        <h4>Total : {total.toFixed(2)} €</h4>
        <button>
          <Link to='/order'>Passer la commande</Link>
        </button>
      </div>
    </Draggable>
  )
}

export default Cart
