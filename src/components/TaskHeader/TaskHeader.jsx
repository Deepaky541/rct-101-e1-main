import React from "react";
import styles from "./taskHeader.module.css";
import { useState } from "react";

const TaskHeader = (props) => {
  // sample values to be replaced
  const [totalTask, settotalTAsk] = useState(props.total)
  const [unCompletedTask, setunCompletedTask] = useState(0)
  // NOTE: do not delete `data-cy` key value pair
  return (
    <div data-cy="task-header" className={styles.taskHeader}>
      <b data-cy="header-remaining-task">{unCompletedTask}</b>
      <b data-cy="header-total-task">{totalTask}</b>
    </div>
  );
};

export default TaskHeader;
