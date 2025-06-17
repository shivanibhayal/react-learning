import { useState } from "react"

const ControlledCompo=()=>{
    const[name,setName]=useState("shivani");
       const[password,setPassword]=useState("");
          const[email,setEmail]=useState("");
    return(
        <div>
            <h1>
                Contrilled components
            </h1>
            <form action="" method="get">
<input type="text" placeholder="enter your name" value={name} onChange={(e)=>setName(e.target.value)} /><br/><br/>
<input type="password" placeholder="enter your password" value={password} onChange={(e)=>setPassword(e.target.value)}/><br/><br/>
<input type="email" value={email} placeholder="enter your email" onChange={(e)=>setEmail(e.target.value)} /><br/><br/>
<button>submit</button>
<button onClick={()=>{setName("");setPassword("");setEmail("")}}>clear</button>
<h3>{name}</h3>
<h3>{password}</h3>
<h3>{email}</h3>
            </form>
        </div>
    )
}
export default ControlledCompo