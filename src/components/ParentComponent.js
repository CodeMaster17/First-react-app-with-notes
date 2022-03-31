// example of methods as props
import React, { Component } from 'react'
import ChildComponent from './ChildComponent'
class ParentComponent extends Component {
    constructor(props) {
        super(props)
      
        this.state = {
           parentName: 'Parent'
        }
        // binding the method
        this.greetParent=this.greetParent.bind(this)
      }

      greetParent(childName){
          //   alert('Hello' + this.state.parentName)
          // in ES6 this line will be written as:
          alert(`Hello ${this.state.parentName} from ${childName}`)
        }
    render() {
        // passing refernce of greetParent method as prop named as greetHandler
    return <div><ChildComponent greetHandler={this.greetParent}/></div>
  }
}
export default ParentComponent