import React, { useState } from 'react'

function InputField() {
const[val,setVal]=useState("shivani bhayal");
  return (
    <>
    <div> Get InputField value</div>
    <input type='text' placeholder='enter your name' value={val} onChange={(event)=>setVal(event.target.value)}/>
    <h1>{val}</h1>
    <button onClick={()=>setVal(" ")}>clear value</button>
    </>

  )
}

export default InputField