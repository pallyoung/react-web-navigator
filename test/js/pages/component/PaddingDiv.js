'use strict'
import React, { Component } from 'react';
class PaddingDiv extends Component {
    constructor(...props) {
        super(...props);
        this.state = {

        }

    }
    render(){
        return <div className = 'padding-horizontal'>
            {this.props.children}
        </div>
    }
}

export default PaddingDiv;