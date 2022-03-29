import React from 'react';

// ------------------------------------------------------------for showing exporting methods and type of functions----------------------
// function Greet(){
//     return <h1>Hello Vishwas</h1>
// }

//it is preffered to use arrow fucntions while crwating a fucntion

// first method for export
// const Greet=()=><h1>Hello Vishwas</h1>
// export default Greet;

// the above line can aslo be written as:(last line containing `export default Greet` will be removed):and in this case we have to import the component with the saame name

// second method for export
// export const Greet=()=><h1>Hello Vishwas</h1>

// ------------------------------------------------------------for showing props-------------------------------------------

        // here `(props)` can have any name but by convention we use the name props and its highly recommended not to deviate form this
const Greet=(props)=>{
    console.log(props);
    return (
        <div>
        {/* <h1>Hello {props.name} a.k.a {props.heroName}</h1> */}
        {/* <p>{props.children}</p> */}
        </div>
        )
}
export default Greet