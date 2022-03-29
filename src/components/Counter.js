import React, { Component } from 'react'

class Counter extends Component {
    constructor(props){
        super(props)
        this.state={
            count:0
        }
    }

    increment(){
        // the follwing lines should not be used i.e the satte should not be modified directly
        // this will not work also as incremented value will not be reflected in UI
        // this.state.count=this.state.count + 1
        // console.log(this.state.count)

        // instead setState function should be used
    //     this.setState({
    //         count:this.state.count+1
    //     },()=>{console.log('callback value:',this.state.count)});
    //     // this console will print value one less than the original value beccause it will be executed even before the increment statement
    //     // to overcome this we use to pass callback function as parameter in set state that will be a arrow fucntion in this case given in line number 20
    //     console.log(this.state.count);
    this.setState(prevState=>({count: prevState.count + 1}))
    console.log(this.state.count) 
    }


    // to increment the value by 5 of the counter
    // the below statment will not work because React grups multiple function calls to a single one
    // to get the right result we pass an arrow function as parameter to setState() as given in line number 26
    incrementFive(){
        this.increment()
        this.increment()
        this.increment()
        this.increment()
        this.increment()
    }
  render() {
    return (
        <>
      <div>Counter : {this.state.count}  
      </div>
        <button onClick={()=>{
            this.incrementFive();
        }}>Increase the value</button>
        </>
    )
  }
}

export default Counter