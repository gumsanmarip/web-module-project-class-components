import React from 'react'

export default class Form extends React.Component {
  render() {
      return (
          <form onSubmit={this.props.onSubmit}>
              <input onChange={this.props.onChange} value={this.props.textInput} type="text" id="textInput" placeholder="type text" />
              <input type="submit" />
          </form>

      );
  }
}
