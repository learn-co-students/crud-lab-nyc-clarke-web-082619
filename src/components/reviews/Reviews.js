import React, { Component } from "react";
import Review from "./Review";

class Reviews extends Component {
  makeReviews = () => {
    return this.props.reviews.map(review => (
      <Review {...review} deleteReview={this.props.deleteReview} />
    ));
  };
  render() {
    return <ul>{this.makeReviews()}</ul>;
  }
}

export default Reviews;
