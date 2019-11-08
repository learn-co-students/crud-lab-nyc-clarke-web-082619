import React, { Component } from "react";

class RestaurantInput extends Component {
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
    this.props.addRestaurant(this.state.text);
  };

  render() {
    return (
      <div>
        <form onSubmit={event => this.handleSubmit(event)}>
          <input
            type="text"
            name="text"
            placeholder="enter a restaurant name..."
            onChange={event => this.handleChange(event)}
          ></input>
          <button type="submit">Add Restaurant</button>
        </form>
      </div>
    );
  }
}

export default RestaurantInput;
