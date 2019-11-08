import React, { Component } from "react";
import Restaurant from "./Restaurant.js";

class Restaurants extends Component {
  makeRestaurants = () => {
    return this.props.restaurants.map(restaurant => {
      return (
        <Restaurant
          restaurant={restaurant}
          deleteRestaurant={this.props.deleteRestaurant}
          addReview={this.props.addReview}
          deleteReview={this.props.deleteReview}
          reviews={this.props.reviews.filter(
            review => review.restaurantId === restaurant.id
          )}
        />
      );
    });
  };
  render() {
    return <ul>{this.makeRestaurants()}</ul>;
  }
}

export default Restaurants;
