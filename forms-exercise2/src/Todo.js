import React from 'react';

const Todo = ({id, task, handleRemove}) => {
  const remove = () => handleRemove(id);
  return (
    <ul>
      <li>{task}<button onClick={remove}>X</button></li>
    </ul>
  )
}

export default Todo;