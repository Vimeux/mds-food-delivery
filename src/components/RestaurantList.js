import React from 'react'
import RestaurantsListItem from './RestaurantsListItem'

import './styles/Restaurants.css'

class RestaurantList extends React.Component {
  render () {
    const { restaurants } = this.props
    if (!restaurants) {
      return (
        <div>
          <p>Aucune Restaurants</p>
        </div>
      )
    }
    return (
      <div className='restaurant-list'>
        {restaurants.map((restaurant) => {
          return <RestaurantsListItem {... this.props} key={restaurant._id} restaurant={restaurant} />
        })}
      </div>
    )
  }
}

export default RestaurantList
