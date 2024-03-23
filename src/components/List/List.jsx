import React from 'react'

const List = (props) => {
let taskList = props.taskList;
let setTaskList = props.setTaskList;
    
  function deleteTask(index){
    const updateTasks = [...taskList];
    updateTasks.splice(index,1);
    setTaskList(updateTasks);

  }
  return (
    <main>
        <ul>
        {taskList.length === 0
          ? ""
          : taskList.map((taskName, index) => (
              <li key={index} className='listItem' id={index}>
                {taskName} 
                <button className='dltBtn' onClick={()=>{deleteTask(index)}}>X</button>
              </li>
            ))}
      </ul>
    </main>
  )
}

export default List