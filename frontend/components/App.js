import React from 'react';
import { render } from 'react-dom';

import TodoList from './TodoList';
import Form from './Form';

const initialState = { 
  todo:
    [
      {
        name: 'Organize Garage',
        id: 1528817077286, // could look different, you could use a timestamp to generate it
        completed: false
      },
      {
        name: 'Bake Cookies',
        id: 1528817084358,
        completed: false
      }
    ],
  textInput: '', 
}

export default class App extends React.Component {
  state = initialState;

  componentDidMount() { 
      this.state.todo;
  }

  onChange = event => { 
    const { value } = event.target
    this.setState({ ...this.state, taskInput: value })
  }

  onSubmit = event => {
    const newTodo = {
      name: this.state.taskInput,
      id: Date.now(),
      completed: false
    };

    event.preventDefault()
    this.setState({ ...this.state, todo:[ ...this.state.todo, newTodo]}) 
  }

  handleToggleTodo = (selectedTodo) => {
    this.setState({
      ...this.state,
      todo: this.state.todo.map(todo => {
        if(todo.id === selectedTodo.id) {
          return({
            ...todo,
            completed: !todo.completed
          })
        } else {
          return todo;
        }
      })
    });
  }

  render() {
    return (
    <div>
      <div>
        <h2>ToDo List: MVP</h2>
        <TodoList handleToggleTodo={this.handleToggleTodo} todo={this.state.todo} />
      </div>
      <Form 
      onSubmit={this.onSubmit}
      onChange={this.onChange}
      textInput={this.state.textInput} />
    </div>
    );
  }
}
