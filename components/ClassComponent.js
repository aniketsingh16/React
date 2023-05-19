import React, { Component } from 'react';

class ClassComponent extends Component{
    render() {
        const {name, surName} = this.props
        return <h3> Hello {name} {surName} </h3>
    }
}

export default ClassComponent;