import React, { useState } from 'react'

const Checkbox = () => {
    const[skills,setSkills]=useState(["java"]);

    const handleSkills=(event)=>{
console.log(event.target.value,event.target.checked);
if(event.target.checked){
    setSkills([...skills,event.target.value]);
}else{
   setSkills([...skills.filter((item)=>item!=event.target.value
)]) 
}
    }
  return (
    <div>
      <h1>select your skills</h1>
      <label htmlFor='php'>PHP</label>
      <input type='checkbox' id='php' value="php" onChange={handleSkills}/><br/><br/>
      <label htmlFor='js'>JS</label>
      <input type='checkbox' id='js' value="js" onChange={handleSkills}/><br/><br/>
      <label htmlFor='java'>JAVA</label>
      <input type='checkbox' id='java' value="java" onChange={handleSkills}/><br/><br/>
      <label htmlFor='python'>PYTHON</label>
      <input type='checkbox' id='python' value="python" onChange={handleSkills}/><br/><br/>
      
        <h3>{skills}</h3>
    </div>
  
  )
}

export default Checkbox
