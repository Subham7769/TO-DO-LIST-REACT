import React, { useState } from 'react';
import List from './List';
import SwitchButton from './SwitchButton';

const Header = () => {
  const [task, setTask] = useState("");
  const [taskList, setTaskList] = useState([]);

  function handleSubmit(e) {
    e.preventDefault();
    if (task.trim() === "") {
        return;
    }
    else{
      let newTask = task;
      setTaskList((taskList) => [...taskList, newTask]);
      console.log(taskList);

      setTask("");
    }
  }


  return (
    <>
      <header>
        <div className="heading">
          <div class="content">
            <h1>To-Do List</h1>
            <h1>To-Do List</h1>
          </div>
          <div>
            <SwitchButton />
          </div>
        </div>
        <form className="heading" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Task Name..."
            value={task}
            onChange={(e) => {
              setTask(e.target.value);
            }}
          />
          <button type="submit" className="btn">
            Add Task
          </button>
        </form>
      </header>
      <List taskList={taskList} setTaskList={setTaskList} />
    </>
  );
}

export default Header;
