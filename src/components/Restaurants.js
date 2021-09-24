import React from 'react';

import './styles/Restaurants.css'

class Restaurants extends React.Component {
  render() {
    return (
      <div className='restaurant-item' >
        <img src={`https://strapi.myidea.fr${this.props.restaurant.Photos[0].url}`} className='restaurant-img' />
        <div className='restaurant-info'>
          <h3 className='restaurant-title'>{this.props.restaurant.title}</h3>
          <p className='restaurant-txt'>{this.props.restaurant.description}</p>
        </div>
      </div>
    )
  }
}

export default Restaurants;
