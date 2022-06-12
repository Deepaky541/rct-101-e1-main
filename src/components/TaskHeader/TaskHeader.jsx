import React from "react";
import styles from "./taskHeader.module.css";
import { useState } from "react";

const TaskHeader = (props) => {
  // sample values to be replaced
  const [totalTask, settotalTAsk] = useState(0)
  const [unCompletedTask, setunCompletedTask] = useState(0)
  // NOTE: do not delete `data-cy` key value pair
  return (
    <div data-cy="task-header" className={styles.taskHeader}>
      total task:
      <b data-cy="header-total-task">{props.count}</b>
    </div>
  );
};

export default TaskHeader;
