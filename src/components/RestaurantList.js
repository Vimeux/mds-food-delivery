import React from 'react'
import Restaurants from './Restaurants'

import './styles/Restaurants.css'

class RestaurantList extends React.Component {
  render () {
    if (!this.props.restaurants || this.props.restaurants.lenght < 1) {
      return (
        <div>
          <p>Aucune Notes</p>
        </div>
      )
    }
    return (
      <div className='restaurant-list'>
        {this.props.restaurants.map((restaurant) => {
          return <Restaurants {... this.props} key={restaurant._id} restaurant={restaurant} />
        })}
      </div>
    )
  }
}

export default RestaurantList
