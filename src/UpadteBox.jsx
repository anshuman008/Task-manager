import React, { useState } from 'react'

const UpdateCom = ({setEnterTask,data,ind,setTasks}) => {

    const [newtitle, setTitle]  = useState(data[ind].title);
    const [newdescription,setDescription] = useState(data[ind].description);

    function upDateDetails(){

        if(newtitle!=="" && newdescription!==""){
            let obj =  {title: newtitle,description: newdescription};
            let newArr = [...data];
     

            newArr[ind] = obj

            setTitle("");
            setDescription("");
            console.log(newArr,'huiiiiii');
            setTasks(newArr);
            setEnterTask(false);
        }
     
    }

  return (
    
<div className="input-wrapper">
    
<div className='input-Container'>

<div className="title">Update Task</div>

<div className="input-section">
Task name<br/>
<input style={{marginBottom:"5px"}} value={newtitle} onChange={(e)=>{setTitle(e.target.value)}} type="text" />

<br/>
 Description <br/>
 <textarea rows={5} value={newdescription}  onChange={(e)=>{setDescription(e.target.value)}}>  </textarea>
</div>


<div className="nav-buttons">
    <button onClick={upDateDetails}>Update</button>
    <button onClick={()=>{setEnterTask(false)}}>Cancel</button>
</div>
</div>

</div>

  )
}

export default UpdateCom
