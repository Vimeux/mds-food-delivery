import React from 'react';
import RestaurantList from '../components/RestaurantList';
import { getRestaurants } from '../services/api';



class Restaurant extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      restaurants: []
    };
  }

  componentDidMount() {
    this.timer = setInterval(() => {
      this.getData()
    }, 500)
  }

  getData = async () => {
    const restaurants = await getRestaurants()
    console.log(restaurants)
    this.setState({ restaurants })
  }

  componentWillUnmount() {
    clearInterval(this.timer)
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

export default Restaurant;
