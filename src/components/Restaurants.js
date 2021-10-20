import React from 'react'

import './styles/Restaurants.css'

class Restaurants extends React.Component {
  render () {
    const { restaurant } = this.props
    if (!restaurant) {
      return <h1>Pas de donnée</h1>
    }
    return (
      <div className='restaurant-item'>
        {restaurant.Photos &&
          <img src={`https://strapi.myidea.fr${restaurant.Photos[0].url}`} className='restaurant-img' alt='img' />}
        <div className='restaurant-info'>
          <h3 className='restaurant-title'>{restaurant.name}</h3>
          <p className='restaurant-txt'>{restaurant.description}</p>
        </div>
      </div>
    )
  }
}

export default Restaurants
