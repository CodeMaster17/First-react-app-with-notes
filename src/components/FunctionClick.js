import React from 'react'

function FunctionClick() {
    function clickHandler(){
        console.log("button clicked")
    }
  return (
    <div>
        {/* event function should be called like this */}
        <button onClick={clickHandler}>Click me</button>

        {/* event handler function should not be called like this , otherwise the fucntion will run on page load and not on the event */}
        {/* <button onClick={clickHandler()}>Click me</button> */}
    </div>
  )
}

export default FunctionClick