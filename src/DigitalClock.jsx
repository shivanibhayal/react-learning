// import React, { useState } from 'react'

// const DigitalClock = () => {
//   const [color,setColor]=useState("");
//     let date=new Date();
//   return (
//     <div>
//       <h1>Default props in react js</h1>
//       <select name="" id="" defaultValue="red" onChange={(e)=>setColor(e.target.value)}>
//         <option value="green">Green</option>
//         <option value="red">Red</option>
//          <option value="yellow">yellow</option>
//       </select>
// <span style={{color:color}}>{date.toLocaleTimeString()}</span>
// {/* <h1>{date.toLocaleTimeString()}</h1> */}
//     </div>
//   )
// }

// export default DigitalClock


import React, { useState, useEffect } from 'react';

const DigitalClock = () => {
  const [color, setColor] = useState("red");
  const [time, setTime] = useState(new Date());

  // Update time every second
  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);

    // Clear interval on unmount
    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <h1>Digital Clock with Color Selection</h1>

      <select defaultValue="red" onChange={(e) => setColor(e.target.value)}>
        <option value="green">Green</option>
        <option value="red">Red</option>
        <option value="yellow">Yellow</option>
        <option value="blue">Blue</option>
        <option value="purple">Purple</option>
      </select>

      <h2 style={{ color: color ,backgroundColor:'black',padding:"10px",width:"300px",borderRadius:"10px", marginLeft:"250px"}}>{time.toLocaleTimeString()}</h2>
    </div>
  );
};

export default DigitalClock;

