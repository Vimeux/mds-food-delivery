/**
 * 1. Ecrire le contexte
 *  - actionType : ADD_ITEM_TO_CART, REMOVE_ITEM_FROM_CART
 *  - Etat initial : cart = array
 *  - .push pour ajouter les éléments
 * 2. Brancher le contexte sur les plats et sur le composant Cart
 *  - Provider dans le app.js
 */
import React, { useEffect } from 'react'

const CardContext = React.createContext()

// création des actionType
const actionType = {
  ADD_ITEM_TO_CART: 'ADD_ITEM_TO_CART',
  REMOVE_ITEM_FROM_CART: 'REMOVE_ITEM_FROM_CART',
  RESET_CART: 'RESET_CART'
}

// état initial
const initialState = JSON.parse(window.localStorage.getItem('CART')) || {
  cart: [],
  total: 0
}

/* const cartItem = {
  dish: parseFloat,
  quantity: quantité
} */

const CartReducer = (state, action) => {
  switch (action.type) {
    case actionType.ADD_ITEM_TO_CART:
      // mon élément est déja présent dans mon panier, j'incrémente la quantité
      if (state.cart.some(item => item.dish._id === action.data._id)) {
        return {
          ...state,
          cart: state.cart.map(item => {
            // je récupère l'élément à modifié
            if (item.dish._id === action.data._id) {
              // je met à jour la quantité
              return { ...item, quantity: item.quantity + 1 }
            } else {
              // on retoure les items non concerné par le changement
              return item
            }
          }),
          total: state.cart.length > 0
            ? state.cart.reduce((prev, cur) => prev + (cur.dish.price * cur.quantity), action.data.price)
            : action.data.price
        }
      } else {
        // on ajoute le nouvel état
        // ...state = on conserve l'état courant
        // on concatène le tableau de l'état courant avec notre item à ajouter
        return {
          ...state,
          cart: state.cart.concat([{ dish: action.data, quantity: 1 }]),
          total: state.cart.length > 0
            ? state.cart.reduce((prev, cur) => prev + (cur.dish.price * cur.quantity), action.data.price)
            : action.data.price
        }
      }
    case actionType.REMOVE_ITEM_FROM_CART:
      return {
        ...state,
        cart: state.cart.map(item => {
          if (item.dish._id === action.data.dish._id) {
            return {
              ...item, quantity: item.quantity - 1
            }
          } else {
            return item
          }
          // on retire les éléments ayant une quantité < 1 ou on conserve ceux qui ont une quantité > 0
        }).filter(item => item.quantity > 0),
        total: state.cart.length > 0
          ? state.cart.reduce((prev, cur) => prev + (cur.dish.price * cur.quantity), -action.data.dish.price)
          : 0
      }
    case actionType.RESET_CART:
      window.localStorage.removeItem('CART')
      return { cart: [], total: 0 }
    default:
      throw new Error(`Unhandled action type : ${action.type}`)
  }
}

// composant provider
const CartProvider = ({ children }) => {
  const [state, dispatch] = React.useReducer(CartReducer, initialState)
  useEffect(() => {
    window.localStorage.setItem('CART', JSON.stringify(state))
  }, [state])
  return <CardContext.Provider value={{ state, dispatch }}>{children}</CardContext.Provider>
}

// Hook personnalisé permettant de vérifier que le composant applelant est bien dans le bon contexte
const useCart = () => {
  const context = React.useContext(CardContext)
  if (!context) {
    throw new Error('UseCart must be used inside a CartProvider')
  }
  return context
}

export {
  CartProvider,
  useCart,
  actionType
}
