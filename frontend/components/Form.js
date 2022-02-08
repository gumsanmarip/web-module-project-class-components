import React from 'react'

export default class Form extends React.Component {
  handleChanges = event => {
    this.setState({
        ...this.state,
        input: event.target.value
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    this.props.onSubmit(this.state.input);
  }

  render() {
      return (
          <form onSubmit={this.handleSubmit}>
              <input onChange={this.handleChanges} type="text" id="textInput" placeholder="type text" />
              <input type="submit" />
          </form>

      );
  }
}
