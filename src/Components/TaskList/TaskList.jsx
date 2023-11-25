import React, { useState } from 'react';
import TaskItem from '../TaskItem/TaskItem.jsx';

export default function TaskList({ tasks, updateTask, handleDelete }) {

  return (
    <>
      {tasks && tasks.map((task) => (
        <div key={task.id} className="col-md-12 mb-4">
          <TaskItem
            task={task}
            updateTask={updateTask}
            handleDelete={handleDelete}
          />
        </div>
      ))}
    </>
  );
}