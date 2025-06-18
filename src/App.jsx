

import { useState } from 'react';
import './App.css'
import Login,{Setting} from './UserComponent'
import Counter from './Counter';
import User from './user';
import College from './college';
import Student from './Student';
import User2 from './User2';
import Wrapper from './Wrapper';
import InputField from './InputField';
import ControlledCompo from './ControlledCompo';
import Checkbox from './Checkbox';
import RadioButton from './RadioButton';
import Map from './Map';
import DigitalClock from './DigitalClock';


function App() {

  let userObject={
    name:"shivani",
    age:23,
    email:"shivani@gmail.com"
  }

  let collegeNames=['IIT','NIT','MIT','IET','DU'];
  const [student,setStudent]=useState();
//   const[fruit,setFruit]=useState("apple");
//   const[count,setCount]=useState(0);
// const x=4;
// const y=5;
// function changeFruit(){
//   setFruit("banana");
// }
// function sum(){
//   alert("hello learners");
// }
// const add=()=>{
//   alert("hello");
// }

  return (
    // <>
    //   <div>
    //     <h1>
    //       hello everyone!
    //     </h1>
    //     <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nemo a omnis facilis?</p>
    //   </div>
    //   <Fruit/>
    //   <Login/>
    //   <Setting/>
    // </>


    <>
    
    {/* <div>
      <h1>hello react</h1>
      <h1>{x+y}</h1>
      <button onClick={sum}>button</button>
      <button onClick={add}>button2</button>
<button onClick={changeFruit}>{fruit}</button>
    </div>
    <Counter/>
  
    <h1>multiple conditions in react js</h1>
    <h1>{count}</h1>
    <button onClick={()=>setCount(count+1)}>Counterr</button>
{
  count==0?<h1>condition 0</h1>
  :count==1?<h1>condition1</h1>
  :count==2?<h1>condition2</h1>
  :count==3?<h1>condition3</h1>
   :count==4?<h1>condition4</h1>
   :null
} */}


{/* <User user={userObject}/>
<College names={collegeNames}/>
{student&&<Student name={student}/>}
<button onClick={()=>setStudent("bhaskar")}>Update student name</button>
<User2/>
<Wrapper color="pink" >
  <h1>welcome</h1>
</Wrapper>

<InputField/> */}
{/* <ControlledCompo/> */}

<Checkbox/>
<RadioButton/>
<Map/>

<DigitalClock/>
    </>
  )
}

function Fruit(){
  return(
<h1>Apple</h1>

  )
}

export default App
