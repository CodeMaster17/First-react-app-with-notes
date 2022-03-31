import React from 'react'

function ChildComponent(props) {
  return (
    <div>
      {/* <button onClick={props.greetHandler}>Greet Parent</button> */}

      {/* now to pass parameters from child to parent */}
      {/* for this we use arrow functions */}
      <button onClick={()=>props.greetHandler('child')}>Greet Parent</button>
      </div>
  )
}

export default ChildComponent