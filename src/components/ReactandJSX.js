import React from 'react'

const ReactandJSX = () => {
    // writing in JSX
    // return(
    //     <div className="line">
    //         <h1>Comparison between React and JSX</h1>
    //     </div>
    // )

    // writing the above code in react
    return React.createElement('div',
    //  null,
    {id:"sentence" ,className:"line"},
      React.createElement(
        'h1',
         null,
         'This is written in React code'));
}

export default ReactandJSX