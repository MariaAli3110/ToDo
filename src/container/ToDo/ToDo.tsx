import React, { useState } from "react";
import style from './ToDo.module.scss';

import Task from "../../component/tasks/task";
import Input from '../../component/input/input';
import EnterButton from "../../component/enterButton/enterButton";

const ToDo = (props:any) => {
    const [TasksArray, setTaskArray] = useState([
        "Wake Up",
        "Eat Breakfast",
        "Study",
        "Sleep",
      ]);
      const enterNewTaskHandler = () => {
        const enteredTask = document.getElementsByTagName('input')[0].value
       setTaskArray([
         ...TasksArray,
         enteredTask
       ])
       document.getElementsByTagName('input')[0].value =''
      }
      const removeTaskHandler = (event:any) => {
        const removeElementId = event?.target.id
        let updatedTask = [...TasksArray]
        updatedTask.splice(removeElementId,1)    
        setTaskArray(updatedTask)
      }
      return (
        <div className={style.ToDo}>
          <h1>To-Do App</h1>
          <Input/>
          <EnterButton 
          clicked={enterNewTaskHandler}/>
          {TasksArray.map((task, index) => {
            return <Task
              key={index}
              id={index}
              value={task} 
              clicked={(event:any)=>removeTaskHandler(event)}/>
              
          })}
        </div>
      );
}

export default ToDo