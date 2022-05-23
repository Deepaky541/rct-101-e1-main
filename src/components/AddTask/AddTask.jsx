import React from "react";
import styles from "./addTask.module.css";
import { useState } from "react";

const AddTask = (props) => {
  // NOTE: do not delete `data-cy` key value pair
   let [task, setTask] = useState('');
   let [submittask,setSubmittask]=useState([]);
   const taskHandler = (event) => {
     setTask(event.target.value);
   }
   const submitHandler=()=>{
   submittask.push(task);
    props.onNewTask(submittask);
    console.log(submittask);
   }
  return (
    <div className={styles.todoForm}>
      <input data-cy="add-task-input" type="text" value={task} onChange={taskHandler} />
      <button data-cy="add-task-button" onClick={submitHandler}>+</button>
    </div>
  );
};

export default AddTask;
