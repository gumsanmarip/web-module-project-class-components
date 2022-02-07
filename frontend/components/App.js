import React from 'react';
import { render } from 'react-dom';

import Todo from './Todo';
import TodoList from './TodoList';
import Form from './Form';

import './styles/reset.css';
import './styles/styles.css';

const todo = 
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
];


export default class App extends React.Component {




  render() {
    return (
      <div>
        <h1>Todo List: MVP</h1>

      </div>
    )
  }
}
