import React, { Component } from 'react'

export class StateManagement extends Component {
    constructor() {
        super()
        this.state = {
            message: "Welcome"
        }
    }

    handleClick(){
        this.setState(
            {
                message: "B'bye"
            }
        ) 
    }
  render() {
    return (
      <div>
        <h5>
            {this.state.message}
        </h5>
        <button onClick={() => {this.handleClick()}}>Subscribe</button>
      </div>
    )
  }
}

export default StateManagement