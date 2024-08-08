import React from 'react';
import '../styles/taskColumn.css';
import TaskCard from './TaskCard';
import { CleaningServicesOutlined } from '@mui/icons-material';

const TaskColumn = ({ title, icon, tasks, status, handleDelete }) => {
  console.log('tasks TASKCOLUMN', tasks);
  return (
    <section className="task_column">
      <h2 className="task_column_heading">
        <img className="task_column_icon" src={icon} alt="" /> {title}
      </h2>
      {tasks.map(
        (task, index) =>
          task.status === status && (
            <TaskCard
              key={index}
              title={task.task}
              tags={task.tags}
              handleDelete={handleDelete}
              index={index}
            />
          )
      )}
      <TaskCard />
    </section>
  );
};

export default TaskColumn;
