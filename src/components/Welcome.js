// showing example of class based component

// in this case we need to import react and one of its class {component}
import React, { Component } from 'react'

class Welcome extends Component {
    render() {
        // we can also use this line
        const {name,heroName}=this.props

        // for using state
        // const{state1, state2} =this.state
        return (
            <h1>
                {/* Welcome {this.props.name} a.ka. {this.props.heroName} */}
                {/* using the line below instead of the line above */}
                Welcome {name} a.k.a {heroName}
            </h1>
        )
    }
}
export default Welcome;