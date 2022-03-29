// showing example of destructuring
import React from 'react'


// const Greetings=(props)=>{
    // instead of above line, we use the line given below
const Greetings=({name,heroName})=>{
    
    return (
        <div>
        {/* <h1>Hello {props.name} a.k.a {props.heroName}</h1> */}
        {/* instead of above line, we use the line given below */}
        <h1>Hello {name} a.k.a {heroName}</h1>
        
        </div>
        )
        
}
export default Greetings