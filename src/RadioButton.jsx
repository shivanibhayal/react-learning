import React, { useState } from 'react'

const RadioButton = () => {
    const[gender,setGender]=useState('male');
    const[city,setCity]=useState("delhi");
  return (
    <div>
     <h1>Handle radio and dropdown</h1>
     <input type='radio' name='gender' value='male' id='male' checked={gender=='male'} onChange={(e)=>setGender(e.target.value)}/>
     <label htmlFor='male'>Male</label>
     <input type='radio' name='gender' value='female' checked={gender=='female'} id='female'/>
      <label htmlFor='female' onChange={(e)=>setGender(e.target.value)}>Female</label>

      <h2>Selected gender:{gender}</h2>
      <br/><br/>
      <h4>select city</h4>
      <select name="" id="" defaultValue={"delhi"} onChange={(e)=>setCity(e.target.value)}>
        <option value="noida">Noida</option>
          <option value="gurgaun">Gurgaon</option>
            <option value="delhi">Delhi</option>
      </select>
      <h1>Selected city:{city}</h1>
    </div>
  )
}

export default RadioButton


