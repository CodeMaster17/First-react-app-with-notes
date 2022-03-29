import React, { Component } from 'react'

class ClassClick extends Component {
    // function keyword is not used before a function in class based component
    ClickHandler(){
        console.log("Button was clicked");
    }
  render() {
    return (
      <div><button onClick={this.ClickHandler}>Click Me, I am a class component</button></div>
    )
  }
}
export default ClassClick
