import React from 'react'
import UpdateCom from './UpadteBox';
import { useState } from 'react';

const Card = ({task,ind,data,setTasks}) => {

    const [enterTask, setEnterTask] = useState(false);
   
    function deleteTask(){
        let newArr = [];
        for(let i = 0; i<data.length;i++){
            if(i !== ind)  newArr.push(data[i]);
        }

        setTasks(newArr)
    }


    function showDiv(){
        return <InputComp/>
    }

    const d = new Date();
  return (
    <div className="card">
   
   <div>{d.toDateString()}</div>
    <div className="info">
    <div className="card-title">{task.title}</div>
    <div className="description">{task.description}</div>
    </div>
  
     <div className="tasksButton" style={{marginTop:"20px"}}>
     <button onClick={()=>{setEnterTask(true)}}>Edit</button>
     <button onClick={()=>{deleteTask()}}>Delete</button>
     </div>
  
      {enterTask && <UpdateCom setEnterTask={setEnterTask} data={data} ind={ind} setTasks={setTasks}/>}

  </div>
  )
}

export default Card
