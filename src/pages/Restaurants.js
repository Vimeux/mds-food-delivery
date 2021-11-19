import React from 'react';
import RestaurantList from '../components/RestaurantList';
import { getRestaurants } from '../services/api';



class Restaurants extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      restaurants: []
    };
  }

  componentDidMount() {
      this.getData()
  }

  getData = async () => {
    const restaurants = await getRestaurants()
    this.setState({ restaurants })
  }

  

  render() {
    return (
      <div>
        <h1>Restaurant</h1>
        <RestaurantList 
          restaurants={this.state.restaurants}
        />
      </div>
    )
  }
}

export default Restaurants;
