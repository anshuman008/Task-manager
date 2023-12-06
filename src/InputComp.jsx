import React, { useState } from 'react'

const InputComp = ({hideInput,tasks,setTasks}) => {


    const [title, setTitle]  = useState("");
    const [description,setDescription] = useState("");



    function saveDeatil(){

        if(title!==""&&description!==""){
            let obj =  {title: title,description:description};
            let newArr = [...tasks,obj];
            setTitle("")
            setDescription("");
            // console.log(newArr,'huiiiiii');
            setTasks(newArr);  
            hideInput()
        }
     
    }
  return (
    
<div className="input-wrapper">
    
<div className='input-Container'>

<div className="title">Create Task</div>

<div className="input-section">
Task name<br/>
<input style={{marginBottom:"5px"}} type="text" value={title} onChange={(e)=>{setTitle(e.target.value)}}/>

<br/>
 Description <br/>
 <textarea rows={5} value={description} onChange={(e)=>{setDescription(e.target.value)}}> </textarea>
</div>


<div className="nav-buttons">
    <button onClick={saveDeatil}>Create</button>
    <button onClick={hideInput}>Cancel</button>
</div>
</div>

</div>

  )
}

export default InputComp
