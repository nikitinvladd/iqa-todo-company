import React from 'react';
import './maintask.sass';

const ClientTask = ({ task }) => {
  return (
        <div className="new-project">Задача
            <div className="enter-task">
                <p>{task}</p>
            </div>
        </div>  
  );
};

export default ClientTask;