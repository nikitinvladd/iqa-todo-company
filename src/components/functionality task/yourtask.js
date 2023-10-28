import React from 'react';
import { useParams } from 'react-router-dom';
import './maintask.sass';

const ClientTask = ({ data }) => {
  const { id } = useParams();
  const task = data.find(item => item.id === Number(id));

  if (!task) {
    return <div className="user-task"><p className='warning'>Task not found.</p></div>;
  }

  return (
    <div className="user-task">
      <div className="field-task">Task: {task.task}</div>
    </div>
  );
};

export default ClientTask;