import React from 'react'

const ReuseComponent = ({data}) => {
  return (
    <div style={{
        border:"1px solid green",
        padding:"10px",
        margin:"10px",
        width:"400px",
        borderRadius:"8px"
        }}>
      <h3>Name:<span style={{color:'green'}}>{data.name}</span></h3>
       <h3>Age:<span style={{color:'green'}}>{data.age}</span></h3>
        <h3>Email:<span style={{color:'green'}}>{data.email}</span></h3>
    </div>
  )
}

export default ReuseComponent
