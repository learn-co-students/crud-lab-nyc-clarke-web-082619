import React, { Component } from "react";
import RestaurantInput from "../components/restaurants/RestaurantInput";
import Restaurants from "../components/restaurants/Restaurants";
import { connect } from "react-redux";

class RestaurantsContainer extends Component {
  render() {
    return (
      <div>
        <RestaurantInput addRestaurant={this.props.addRestaurant} />
        <Restaurants
          restaurants={this.props.restaurants}
          deleteRestaurant={this.props.deleteRestaurant}
          addReview={this.props.addReview}
          deleteReview={this.props.deleteReview}
          reviews={this.props.reviews}
        />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    restaurants: state.manageRestaurant.restaurants,
    reviews: state.manageReview.reviews
  };
};

const mapDispatchToProps = dispatch => {
  return {
    addRestaurant: text => dispatch({ type: "ADD_RESTAURANT", text }),
    deleteRestaurant: id => dispatch({ type: "DELETE_RESTAURANT", id }),
    addReview: (text, restaurantId) =>
      dispatch({
        type: "ADD_REVIEW",
        payload: { text: text, restaurantId: restaurantId }
      }),
    deleteReview: id => dispatch({ type: "DELETE_REVIEW", id })
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RestaurantsContainer);
