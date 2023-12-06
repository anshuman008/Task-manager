import React, { useEffect, useState } from 'react'
import "./inputBox.css"
import "./App.css"
import InputComp from './InputComp';
import Card from './Cards';


  const getLocalStorage = () =>{
     let data = localStorage.getItem('data');
     console.log(data)
     if(data) return JSON.parse(data);
     else return [];
  }

const HomePage = () => {

const [enterTask, setEnterTask] = useState(false);
const[tasks,setTasks] = useState(getLocalStorage());

console.log(tasks,'loooooosuhugt')
  
useEffect(()=>{
      localStorage.setItem("data",JSON.stringify(tasks));
},[tasks])


const hideInput = () => {
 setEnterTask(false)   
}

if(!tasks){
  return <div>eroor</div>
}
else return (
    <div className='baap-container'>
     <div className='main-conatiner'>
         <div className="title">Task Mangager</div>
         <button className='addTask' onClick={()=> setEnterTask(true)}>Add Task</button>
    </div>
  
   {enterTask &&   <InputComp hideInput={hideInput}  setTasks={setTasks} tasks={tasks} />}

    {console.log(tasks,'afterrrrrrrrrr')}
   <div className='red-div'>
     {tasks.map((task,index)=>{
      return <Card  task={task} ind={index} data={tasks} setTasks={setTasks}/>
     })}

   </div>

    </div>
  )
}

export default HomePage
