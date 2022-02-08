import React from 'react'
import Todo from './Todo';

export default class TodoList extends React.Component {
  render (){
    return(
        <div className='list'>
          <ul>
            {
              this.state.todo.map(qo => (
                <li key={qo.id}>{qo.name} <button onClick={this.onDelete(qo.id)}>del</button></li>
              ))
            }
          </ul>
        </div>
    );
}
}
