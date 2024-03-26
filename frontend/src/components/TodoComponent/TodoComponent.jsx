import { useState } from 'react';
import Header from '../Header/Header';
import './TodoComponent.css'
import { toast } from 'react-toastify';


const TodoHeader = () => {

  const [currentIndex, setCurrentIndex] = useState();
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [taskList, setTaskList] = useState([]);
  const [isUpdate, setIsUpdate] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    if (currentIndex === undefined) {
      if (title.trim() === "") {
        toast("Fields can't be empty.");
        return;
      }
      if (body.trim() === "") {
        toast("Fields can't be empty.");

        return;
      }
      else {
        let newTask = { title, body };
        setTaskList((taskList) => [...taskList, newTask]);
        console.log(taskList);
        setBody("");
        setTitle("");
        toast("Task Added Successfully");
      }
    } else {
      const updateTasks = [...taskList];
      updateTasks[currentIndex] = { ...updateTasks[currentIndex], title, body };
      setBody("");
      setTitle("");
      setTaskList(updateTasks);
      setIsUpdate(!isUpdate);
      toast("Task updated Successfully");
    }
    setCurrentIndex();
  }

  function updateTaskEdit(index) {
    setTitle(taskList[index].title);
    setBody(taskList[index].body);
    setCurrentIndex(index);
    setIsUpdate(!isUpdate);
    toast("Task Edit");
  }

  function deleteTask(index) {
    const updateTasks = [...taskList];
    updateTasks.splice(index, 1);
    setTaskList(updateTasks);
    toast("Task Deleted Successfully");
  }



  return (
    <>
      <Header />
      <div className='todoHeader'>
        <div className="heading">
          <div class="content">
            <h1>To-Do List</h1>
            <h1>To-Do List</h1>
          </div>

        </div>
        <form className="heading" onSubmit={handleSubmit}>
          <input
            className="inputText"
            type="text"
            placeholder="Task Title..."
            value={title}
            onChange={(e) => {
              setTitle(e.target.value);
            }}

          />
          <input
            className="inputText"
            type="text"
            placeholder="Task Body..."
            value={body}
            onChange={(e) => {
              setBody(e.target.value);
            }}

          />
          {!isUpdate ? <button type="submit" name="submit" className="btn">
            Add Task
          </button> : (<button name="update" className="btn">
            Update Task
          </button>)}
        </form>
      </div>
      <ul>
        {taskList.length === 0
          ? ""
          : taskList.map((item, index) => (
            <li key={index} className='listItem' id={index}>
              <h4>{item.title}</h4>
              <p>{item.body}</p>
              <div className='btncont'>
                <button className='updbtn' onClick={() => { updateTaskEdit(index) }}>Update</button>
                <button className='dltBtn' onClick={() => { deleteTask(index) }}>Delete</button>
              </div>
            </li>
          ))}
      </ul>
    </>
  );
}

export default TodoHeader;
