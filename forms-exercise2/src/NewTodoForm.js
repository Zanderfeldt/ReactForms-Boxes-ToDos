import React, { useState } from 'react';
import { v4 as uuid } from 'uuid';

function NewTodoForm({ addTodo }) {
  const [task, setTask] = useState('');

  const handleChange = e => {
    setTask(e.target.value);
  };

  const gatherInput = e => {
    e.preventDefault();
    addTodo({ task, id: uuid() } );
    setTask('');
  };
  
  return (
    <form onSubmit={gatherInput}>
      <div>
        <label htmlFor='task'>Task</label>
        <input 
          onChange={handleChange}
          type='text'
          name='task'
          value={task}
          id='task'
        />
      </div>
      <button id='newTaskButton'>Add Task</button>
    </form>
  );
}

export default NewTodoForm;