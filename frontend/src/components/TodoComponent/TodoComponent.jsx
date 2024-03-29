import { useEffect, useState } from "react";
import Header from "../Header/Header";
import "./TodoComponent.css";
import { toast } from "react-toastify";
import axios from "axios";

const TodoComponent = () => {
  const id = sessionStorage.getItem("id");
  const [currentIndex, setCurrentIndex] = useState();
  const [taskList, setTaskList] = useState([]);
  const [isUpdate, setIsUpdate] = useState(false);
  const [listUpdate, setListUpdate] = useState(false);
  const [list, setList] = useState({
    title: "",
    body: "",
  });

  const handleSubmit = async (e) => {
    console.log("===running");
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
            .post(`${window.location.origin}/api/v2/addTask`, {
              title: list.title,
              body: list.body,
              id,
            })
            .then((response) => console.log(response));
          setList({ title: "", body: "" });
          toast("Task Added Successfully");
        } else {
          setTaskList((prevTaskList) => [...prevTaskList, list]);
          setList({ title: "", body: "" });
          toast("Task Added Successfully");
        }
      }
    } else {
      try {
        const updateTasks = [...taskList];
        const taskId = updateTasks[currentIndex]._id;
        await axios
          .put(`${window.location.origin}/api/v2/updateTask/${taskId}`, {
            title: list.title,
            body: list.body,
          })
          .then((response) => toast(response.data.message));
        setList({ title: "", body: "" });
        setIsUpdate(!isUpdate);
      } catch (error) {
        toast.error("Task Update failed");
        console.log(error);
      }
    }
    setCurrentIndex();
    setListUpdate(!listUpdate);
  };

  function updateTaskEdit(index) {
    setList({ title: taskList[index].title, body: taskList[index].body });
    setCurrentIndex(index);
    if (list.title === "") {
      setIsUpdate(!isUpdate);
    }
    toast.info("Task Edit");
  }

  const deleteTask = async (itemId) => {
    await axios
      .delete(`${window.location.origin}/api/v2/deleteTask/${itemId}`, {
        data: { id: id },
      })
      .then((response) => console.log("deleteTask===", response));
    toast("Task Deleted Successfully");
    setListUpdate(!listUpdate);
  };

  function handleChange(e) {
    const { name, value } = e.target;
    setList((prev) => {
      return { ...prev, [name]: value };
    });
  }

  useEffect(() => {
    const fetchData = async () => {
      await axios
        .get(`${window.location.origin}/api/v2/getTask/${id}`)
        .then((response) => {
          console.log("====getlist", response);
          setTaskList(response.data.list);
        });
    };
    fetchData();
  }, [listUpdate]);
  return (
    <>
      <Header />
      <div className="TodoComponent">
        <div className="heading">
          <div class="content">
            <h1>To-Do List</h1>
            <h1>To-Do List</h1>
          </div>
        </div>
        <div>
          <form className="form" onSubmit={handleSubmit}>
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
      </div>
      <div>
        <ul>
          {taskList.length === 0
            ? ""
            : taskList.map((item, index) => (
                <li key={item._id} className="listItem" id={item._id}>
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
                        deleteTask(item._id);
                      }}
                    >
                      Delete
                    </button>
                  </div>
                </li>
              ))}
        </ul>
      </div>
    </>
  );
};

export default TodoComponent;
