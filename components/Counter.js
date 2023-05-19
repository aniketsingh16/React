import React, { Component } from 'react'

class Counter extends Component {
    constructor(){
        super()
        this.state = {
            count: 0
        }
    }

    increment(){
        this.setState(prevState => ({
            count: prevState.count + 1
        }))
        
    }

    decrement(){
        this.setState({
            count : this.state.count - 1
        })
    }
    incrementFive(){
        this.increment()
        this.increment()
        this.increment()
        this.increment()
        this.increment()
        
    }
  render() {
    return (

      <div>
        <div>Counter {this.state.count}</div>
        <button onClick={() => this.incrementFive()}>Increment</button>
        <button onClick={() => this.decrement()}>Decrement</button>
      </div>
    )
  }
}

export default Counter