import React, { useState } from "react";
import Tasks from "./Tasks/Tasks";
import TaskHeader from "./TaskHeader/TaskHeader";
import styles from "./taskApp.module.css";
import AddTask from "./AddTask/AddTask";

const TaskApp = () => {
  let [newtask,setNewtask]=useState([]);
  const newTaskData=(data)=>{
   newtask.push(data);
    setNewtask([...data]);
    console.log(newtask);
    
  }
  // NOTE: do not delete `data-cy` key value pair
  return (
    <div data-cy="task-app" className={styles.taskApp}>
      {/* Header */}
      {/* Add Task */}
      {/* Tasks */}
      <TaskHeader />
      <AddTask onNewTask={newTaskData} />
      <Tasks info={newtask} />
    </div>
  );
};

export default TaskApp;
