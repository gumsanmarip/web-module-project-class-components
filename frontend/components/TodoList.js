import React from 'react'
import Todo from './Todo';

export default class TodoList extends React.Component {
  render (){
    return(
        <div className='list'>
           {this.props.todo.map(todo => {
                    return <Todo handleToggleTodo={this.props.handleToggleTodo} key={todo.id} todo={todo}/>
                })}
        </div>
    );
}
}
