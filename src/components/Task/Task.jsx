import React from "react";
import styles from "./task.module.css";
import Counter from "../Counter/Counter";
import {useState} from "react";


const Task = ({info,ondelete}) => {
  const [change,setChange]=useState();
  const changeHandler=(e)=>{
    setChange(e.target.checked)
    }
   

 
  // NOTE: do not delete `data-cy` key value pair
  return (
    <div>
      <li data-cy="task" className={styles.task}>
        <input
          type="checkbox"
          data-cy="task-checkbox"
          onChange={changeHandler}
        />
        <div data-cy="task-text" className={change ? styles.truee : ""}>
          {info.text}
        </div>
        <Counter  />
        <button data-cy="task-remove-button" onClick={()=>{ondelete(info.id)}} >delete</button>
      </li>
    </div>
  );
};

export default Task;
