import React, { Component } from 'react'

class UserGreeting extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         isLoggedIn:false
      }
    }
    
  render() {
    // --------------------------------------------First Approach----------------------------------------------
    //   when the person is logged in it will show hello vishwas otherwise it will showw welcome new user 
    //   if(this.state.isLoggedIn)
    //   {
    //       return(
    //           <div>
    //               Welcome VIshwas
    //           </div>
    //       )
    //   }
    //   else{
    //       return(
    //           <div>
    //               Welcome new user
    //           </div>
    //       )

    // -------------------------------------------------Second Approach--------------------------------------------
    // jsx variables method
    // let message;
    // if(this.state.isLoggedIn)
    // {
    //     message=<div>WElcome Vishwas</div>
    // }
    // else{
    //     message=<div>WElcome New User</div>

    // }
    // return <div>{message}</div>
    
    // -------------------------------------------------Third Approach--------------------------------------------
    // Ternary Operator Approach
    return(
        this.state.isLoggedIn?(

            <div>Welcome Vishwas</div>
        ):
        (<div>Welome new user</div>)
    )
    // return (
    //   <div>
    //     <h1>welcome Vishwas</h1>
    //     <h1>welcoome New User</h1>
    //   </div>
    // )
  }
}

export default UserGreeting
