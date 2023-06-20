import React, { useState } from 'react';

import Todo from './Todo';
import NewTodoForm from './NewTodoForm';

function TodoList() {
  const [todos, setTodos] = useState([]);
  const add = (newTodo) => {
    setTodos(todos => [...todos, newTodo])
  }
  console.log(todos)
  const remove = (id) => {
    setTodos(todos => todos.filter(todo => todo.id !== id));
  }

  return (
    <div>
      <h3>Todo List</h3>
      <NewTodoForm addTodo={add} />
      <div>
        {todos.map(({id, task}) => 
          <Todo 
            id={id} 
            task={task} 
            handleRemove={remove}/>)}
      </div>
    </div>
  )
}

export default TodoList;