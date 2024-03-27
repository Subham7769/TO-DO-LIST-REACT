import { useEffect, useState } from "react";
import Header from "../Header/Header";
import "./TodoComponent.css";
import { toast } from "react-toastify";
import axios from "axios";

const TodoHeader = () => {
  useEffect(() => {
    const fetchData = async () => {
      await axios
        .get(`https://tqmdqr-8000.csb.app/api/v2/getTask/${id}`)
        .then((response) => console.log(response));
    };
    fetchData();
  }, []);

  const id = sessionStorage.getItem("id");
  const [currentIndex, setCurrentIndex] = useState();
  const [list, setList] = useState({
    title: "",
    body: "",
  });
  const [taskList, setTaskList] = useState([]);
  const [isUpdate, setIsUpdate] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (currentIndex === undefined) {
      if (list.title.trim() === "") {
        toast("Fields can't be empty.");
        return;
      }
      if (list.body.trim() === "") {
        toast("Fields can't be empty.");

        return;
      } else {
        if (id) {
          await axios
            .post("https://tqmdqr-8000.csb.app/api/v2/addTask", {
              title: list.title,
              body: list.body,
              id,
            })
            .then((response) => console.log(response));
          setList(() => {
            return { title: "", body: "" };
          });
          toast("Task Added Successfully");
        } else {
          setTaskList((taskList) => [...taskList, list]);
          console.log(taskList);
          setList(() => {
            return { title: "", body: "" };
          });
          toast("Task Added Successfully");
        }
      }
    } else {
      const updateTasks = [...taskList];
      updateTasks[currentIndex] = { ...updateTasks[currentIndex], ...list };
      setList(() => {
        return { title: "", body: "" };
      });
      setTaskList(updateTasks);
      setIsUpdate(!isUpdate);
      toast("Task updated Successfully");
    }
    setCurrentIndex();
  };

  function updateTaskEdit(index) {
    setList(() => {
      return { title: taskList[index].title, body: taskList[index].body };
    });
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

  function handleChange(e) {
    const { name, value } = e.target;
    setList((prev) => {
      return { ...prev, [name]: value };
    });
  }
  return (
    <>
      <Header />
      <div className="todoHeader">
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
            value={list.title}
            name="title"
            onChange={handleChange}
          />
          <input
            className="inputText"
            type="text"
            placeholder="Task Body..."
            value={list.body}
            name="body"
            onChange={handleChange}
          />
          {!isUpdate ? (
            <button type="submit" name="submit" className="btn">
              Add Task
            </button>
          ) : (
            <button name="update" className="btn">
              Update Task
            </button>
          )}
        </form>
      </div>
      <ul>
        {taskList.length === 0
          ? ""
          : taskList.map((item, index) => (
              <li key={index} className="listItem" id={index}>
                <h4>{item.title}</h4>
                <p>{item.body}</p>
                <div className="btncont">
                  <button
                    className="updbtn"
                    onClick={() => {
                      updateTaskEdit(index);
                    }}
                  >
                    Update
                  </button>
                  <button
                    className="dltBtn"
                    onClick={() => {
                      deleteTask(index);
                    }}
                  >
                    Delete
                  </button>
                </div>
              </li>
            ))}
      </ul>
    </>
  );
};

export default TodoHeader;
