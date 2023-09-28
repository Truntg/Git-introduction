/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { Component } from 'react';

class UserForm extends Component {
  constructor(props) {
    super(props);
    this.state = { userInput: '' };
  }

  handleChange = (event) => {
    this.setState({ userInput: event.target.value });
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.onSubmit(this.state.userInput);
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type="text"
          placeholder="Enter your name"
          value={this.state.userInput}
          onChange={this.handleChange}
        />
        <button type="submit">Submit</button>
      </form>
    );
  }
}

export default UserForm;
