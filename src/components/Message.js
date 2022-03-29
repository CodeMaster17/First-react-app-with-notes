import { toHaveClass } from '@testing-library/jest-dom/dist/matchers'
import React, { Component } from 'react'

export default class Message extends Component {
    constructor(){
        super()

        // creating object
        // this keyword is used beacuse we are inside the class component
        this.state={
            message: 'welcome bro'
        }
    }

    // creating class changeMesaage to changhe the text when the button is cliked
    changeMessage(){
        // setState is predifined function to change the state of the object
        this.setState({
            message:'Thankyou for subscribing'
        })
    }
  render() {
    return (
      <div>
        <h1>{this.state.message}</h1>
        {/* calling the fucntion on click */}
        <button onClick={()=> this.changeMessage()}>Subscribe</button>
      </div>
    )
  }
}
