import { useState } from "react";
import User from "./user";

const Counter=()=>{

    const[count,setCount]=useState(0);
     const[rcount,setRCount]=useState(10);
    const[display,setDisplay]=useState(true);
    function changeCount(){
        setCount(count+1);
    }
    return(
      <div>
        
       <h1>{count}</h1>
       
        <button onClick={changeCount}>update counter</button>
        <h1>{rcount}</h1>
        <button onClick={()=>setRCount(rcount-1)}> reverseupdate counter</button>

    <h2>toggle in react js</h2>
{display?<User/>:null}
<button onClick={()=>setDisplay(!display)}>Toggle</button>
      </div> 

  

    );
}
export default Counter