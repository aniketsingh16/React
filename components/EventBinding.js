import React, { Component } from 'react'

class EventBinding extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         message: "Hello.."
      }
      this.clickHandler = this.clickHandler.bind(this) //3
    }

    // clickHandler(){
    //     this.setState({
    //         message: "Goodbye.."
    //     })
    // }

    clickHandler = () => {
        this.setState({
            message: "Arrow Function"
        })
    }
  render() {
    return (
      <div>
        {this.state.message}
        {/* <button onClick={this.clickHandler.bind(this)}> Click! </button> */}   
        <button onClick={this.clickHandler}>Click!</button>
      </div>
    )
  }
}

export default EventBinding