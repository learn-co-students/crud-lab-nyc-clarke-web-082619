import React, { Component } from "react";

class ReviewInput extends Component {
  state = {
    text: ""
  };

  handleChange = event => {
    this.setState({
      text: event.target.value
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    this.props.addReview(this.state.text, this.props.restaurantId);
  };

  render() {
    return (
      <div>
        <form onSubmit={event => this.handleSubmit(event)}>
          <input
            type="text"
            placeholder="enter a review name"
            onChange={event => this.handleChange(event)}
          ></input>
          <button type="submit">Add Review</button>
        </form>
      </div>
    );
  }
}

export default ReviewInput;
