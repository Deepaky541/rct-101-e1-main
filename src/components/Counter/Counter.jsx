import React, { useState } from "react";
import styles from "./counter.module.css";

const Counter = () => {
  // sample value to be replaced
  
  const[count,setCount]=useState(1);
  const addCountHandler=()=>{
    setCount(count+1);
  }
  const deleteCountHandler = () => {
    setCount(count - 1);
  };

  // NOTE: do not delete `data-cy` key value pair
  return (
    <div className={styles.counter}>
      <button data-cy="task-counter-increment-button" onClick={addCountHandler}>+</button>
      <span data-cy="task-counter-value">{count}</span>
      <button data-cy="task-counter-decrement-button" onClick={deleteCountHandler}>-</button>
    </div>
  );
};

export default Counter;
