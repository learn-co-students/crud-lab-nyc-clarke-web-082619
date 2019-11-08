import React, { Component } from "react";
import ReviewsContainer from "../../containers/ReviewsContainer";

class Restaurant extends Component {
  handleDelete = event => {
    this.props.deleteRestaurant(event.target.id);
  };
  render() {
    return (
      <div>
        <li>
          {this.props.restaurant.text}
          <button
            id={this.props.restaurant.id}
            onClick={event => {
              this.handleDelete(event);
            }}
          >
            X
          </button>
          <ReviewsContainer
            restaurantId={this.props.restaurant.id}
            addReview={this.props.addReview}
            deleteReview={this.props.deleteReview}
            reviews={this.props.reviews}
          />
        </li>
      </div>
    );
  }
}

export default Restaurant;
