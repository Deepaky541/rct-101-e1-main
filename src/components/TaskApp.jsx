import React, { useState,useEffect } from "react";
import Tasks from "./Tasks/Tasks";
import TaskHeader from "./TaskHeader/TaskHeader";
import styles from "./taskApp.module.css";
import AddTask from "./AddTask/AddTask";
import Task from "./Task/Task";
import { v4 as uuidv4 } from 'uuid';

const TaskApp = () => {
  const [newtask,setNewtask]=useState([]);
  const newTaskData=(data)=>{ 
    setNewtask([...newtask, { id:uuidv4 , text:data, done: false, count: 0 }]);
  };
  const ondelete = (id)=>{
setNewtask(newtask.filter((todo)=> todo.id !==id ))
  }
  useEffect(() => {
    fetch("http://localhost:8080/todos")
    .then((r)=>r.json())
    .then((d)=>{
     setNewtask(d);

     console.log(d);
    });
  
    return () => {
    }
  }, []);
  
 
  return (
    <div data-cy="task-app" className={styles.taskApp}>
      <TaskHeader />
      <AddTask onNewTask={newTaskData} />
      <Tasks>
        {newtask.map((todo) => (
          <Task key={todo.id} info={todo} ondelete={ondelete}/>
        ))}
      </Tasks>
    </div>
  );
};

export default TaskApp;
