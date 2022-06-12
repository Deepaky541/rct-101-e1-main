import React, { useState,useEffect } from "react";
import Tasks from "./Tasks/Tasks";
import TaskHeader from "./TaskHeader/TaskHeader";
import styles from "./taskApp.module.css";
import AddTask from "./AddTask/AddTask"
import Task from "./Task/Task";
import axios from "axios";

function dynamicSort(property) {
  var sortOrder = 1;
  if (property[0] === "-") {
    sortOrder = -1;
    property = property.substr(1);
  }
  return function (a, b) {
    var result =
      a[property] < b[property] ? -1 : a[property] > b[property] ? 1 : 0;
    return result * sortOrder;
  };
}


const TaskApp = () => {

  const [newtask,setNewtask]=useState([]);
  const [page, setpage] = useState(1);
  const [totalcount, settotalcount] = useState(0)
  const [limit, setlimit] = useState(5)
  const [type, settype] = useState("id");
  const [order, setorder] = useState("")




 const Ondelete = (id) => {
      fetch(`http://localhost:8000/todos/${id}`, {
        method: "DELETE",
      });
        setNewtask(newtask.filter((todo) => todo.id !== id));
    };



  useEffect(() => {
   const getTodo= async()=>{
     let r = await axios.get(
       `http://localhost:8000/todos?_page=${page}&_limit=${limit}`
     );
     if(order==="desc"){
        setNewtask(r.data.sort(dynamicSort(`${-type}`)));
     }
     else{
        setNewtask(r.data.sort(dynamicSort(`${type}`)));
     }
        settotalcount(Number(r.headers["x-total-count"]));
     
     }
   getTodo();
 
  }, [page,limit,type,order]);
 
    const newTaskData = (data) => {

      let isPresent=newtask.some((task)=>task.text===data);
      if(!isPresent){
      fetch("http://localhost:8000/todos", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify({
          text: data,
          done: false,
          count: 0,
        }),
      })
        .then((r) => r.json())
        .then((d) => {
          setNewtask([...newtask, d]);
        });
      }
    };
  

 
  return (
    <div data-cy="task-app" className={styles.taskApp}>
      <TaskHeader count={totalcount} />

      <AddTask onNewTask={newTaskData} />

      <Tasks>
        {newtask.map((todo) => (
          <Task key={todo.id} info={todo} ondelete={Ondelete} />
        ))}
      </Tasks>

      <button disabled={page <= 1} onClick={() => setpage(page - 1)}>
        {"<"}
      </button>

      <select onChange={(e) => setlimit(Number(e.target.value))}>
        <option value={5}>5</option>
        <option value={10}>10</option>
        <option value={15}>15</option>
      </select>

      <select onChange={(e)=>settype(e.target.value)} >
        <option value="id">id</option>
        <option value="count">count</option>
      </select>

      <select onChange={(e)=>setorder(e.target.value) }>
        <option value="asc">asc</option>
        <option value="desc">desc</option>
      </select>

      <button
        disabled={totalcount < page * limit}
        onClick={() => setpage(page + 1)}
      >
        {">"}
      </button>
    </div>
  );
};

export default TaskApp;
