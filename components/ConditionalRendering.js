import React, { Component } from 'react'
class ConditionalRendering extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         isLoggedIn: false
      }
    }

  render() {
    // let message
    // if (this.state.isLoggedIn) {
    //     message = <div>Hello Aniket</div>
    // }
    // else{
    //     message = <div>Hello Guest</div>1
    // }
    // return (
    //   <div>{message}</div>
    // )
// return this.state.isLoggedIn && <div> Hello Aniket </div>

    return(
        this.state.isLoggedIn ?
        (<div>Hello Aniket </div>) :
        (<div>Hello Guest</div>)
      )
  }

  
}

export default ConditionalRendering