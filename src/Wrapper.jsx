import React from 'react'

const Wrapper = ({children,color="green"}) => {
  return (
    <div style={{border:"6px solid color ",padding:"50px", color:color}}>
      <h1>hello evryone {children}</h1>
    </div>
  )
}

export default Wrapper
