import React from 'react'
import ReuseComponent from './ReuseComponent';

const Map = () => {
    const userNames=['shivani','sam','peter','bruce'];

    const userData=[
      {
        name:"shivani",
        age:23,
        email:"shivani@gmail.com",
        id:1
      } ,
        {
        name:"sam",
        age:26,
        email:"sam@gmail.com",
        id:2
      } ,
       {
        name:"peter",
        age:29,
        email:"peter@gmail.com",
        id:3
      } ,
       {
        name:"bruce",
        age:28,
        email:"bruce@gmail.com",
        id:4
      } 
    ]
  return (
    <div>
      {/* <h1>Loop in jsx with map function</h1> */}
 {/* <table border="1">
        <thead>
            <tr>
                <td>ID</td>
                 <td>Name</td>
                 <td>Email</td>
                  <td>Age</td>
            </tr>
        </thead>
        <tbody>
            {
                userData.map((user)=>(
                      <tr key={user.id}>
                <td>{user.id}</td>
                 <td>{user.name}</td>
                 <td>{user.email}</td>
                  <td>{user.age}</td>
            </tr>
                ))
            }
        </tbody>
        </table> */}







<h1>reuse component in loop</h1>
{
  userData.map((user)=>(
  <div key={user.id}> 
    <ReuseComponent data={user} />
   </div>
  ))  
}







      {/* <h1>dummy data</h1>
      <table border="1">
        <thead>
            <tr>
                <td>ID</td>
                 <td>Name</td>
                 <td>Email</td>
                  <td>Age</td>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>1</td>
                <td>shivani</td>
                <td>shivani@gmail.com</td>
                <td>23</td>
            </tr>
             <tr>
                <td>1</td>
                <td>shivani</td>
                <td>shivani@gmail.com</td>
                <td>23</td>
            </tr>
             <tr>
                <td>1</td>
                <td>shivani</td>
                <td>shivani@gmail.com</td>
                <td>23</td>
            </tr>
             <tr>
                <td>1</td>
                <td>shivani</td>
                <td>shivani@gmail.com</td>
                <td>23</td>
            </tr>
        </tbody>
      </table> */}
    </div>
  )
}

export default Map
