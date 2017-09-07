'use strict'
import React, { Component } from 'react';
class TopArea extends Component {
    constructor(...props) {
        super(...props);
        this.state = {

        }

    }
    render(){
        return <p style = {{
            textAlign:'center',
            paddingTop:'0.3rem',
            paddingBottom:'0.2rem',
            fontSize:'0.2rem',
            color:'#002233'
        }}>
            {this.props.children}
        </p>
    }
}

export default TopArea;