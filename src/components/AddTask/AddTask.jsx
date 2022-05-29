import React from "react";
import styles from "./addTask.module.css";
import { useState } from "react";

const AddTask = ({onNewTask}) => {
   const [task, setTask] = useState('');
   const taskHandler = (event) => {
     setTask(event.target.value);
   }
   const submitHandler=()=>{
     onNewTask(task);
     setTask("");
   }
  return (
    <div className={styles.todoForm}>
      <input data-cy="add-task-input" type="text" value={task} onChange={taskHandler} />
      <button  type="submit" data-cy="add-task-button" onClick={submitHandler} >+</button>
    </div>
  );
};

export default AddTask;
