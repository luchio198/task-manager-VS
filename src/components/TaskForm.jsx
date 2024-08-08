import React, { useState } from 'react';
import '../styles/taskForm.css';
import { Button } from '@mui/material';
import { Add } from '@mui/icons-material';
import Tag from './Tag';

const TaskForm = ({ setTasks }) => {
  const [taskData, setTaskData] = useState({
    task: '',
    status: 'todo',
    tags: [],
  });

  const checkTag = (tag) => {
    return taskData.tags.some((item) => item === tag);
  };

  const selectTag = (tag) => {
    if (taskData.tags.some((item) => item === tag)) {
      const filterTags = taskData.tags.filter((item) => item !== tag);
      setTaskData((prev) => {
        return { ...prev, tags: filterTags };
      });
    } else {
      setTaskData((prev) => {
        return { ...prev, tags: [...prev.tags, tag] };
      });
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setTaskData((prev) => {
      return { ...prev, [name]: value };
    });
  };

  const handleSubmit = () => {
    console.log('taskData TASKFORM', taskData);
    if (taskData.task === '') {
      taskData.task === 'This is a default task';
    }
    setTasks((prev) => {
      return [...prev, taskData];
    });
    setTaskData({
      task: '',
      status: 'todo',
      tags: [],
    });
  };
  return (
    <header className="app_header">
      <form>
        <input
          name="task"
          type="text"
          value={taskData.task}
          className="task_input"
          placeholder="Enter your task*"
          onChange={handleChange}
          required={true}
        />
        <div className="task_form_bottom_line">
          <div>
            <Tag
              tagName="HTML"
              selectTag={selectTag}
              selected={checkTag('HTML')}
            />
            <Tag
              tagName="CSS"
              selectTag={selectTag}
              selected={checkTag('CSS')}
            />
            <Tag
              tagName="JavaScript"
              selectTag={selectTag}
              selected={checkTag('JavaScript')}
            />
            <Tag
              tagName="React"
              selectTag={selectTag}
              selected={checkTag('React')}
            />
          </div>
          <div className="task_select_button">
            <select
              name="status"
              value={taskData.status}
              className="task_status"
              onChange={handleChange}
            >
              <option value="todo">To Do</option>
              <option value="doing">Doing</option>
              <option value="done">Done</option>
            </select>

            {/* <button type="submit" className="task_submit">
              + Add Task
            </button> */}
            <Button
              size="large"
              style={{ marginBottom: '2px' }}
              variant="contained"
              startIcon={<Add />}
              onClick={handleSubmit}
              disabled={taskData.task === ''}
            >
              Add Task
            </Button>
          </div>
        </div>
      </form>
    </header>
  );
};

export default TaskForm;
