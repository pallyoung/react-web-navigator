'use strict'
import React, { Component } from 'react';
class Button extends Component {
    constructor(...props) {
        super(...props);
        this.state = {

        }

    }
    _className(){
        return ['button',this.props.type,this.props.theme].join(' ');
    }
    render(){
        return <span 
                    onClick = {this.props.onClick}
                    className = {this._className()}>{this.props.text}</span>
    }
}

Button.defaultProps = {
    type:'small',
    theme:'red'
}
export default Button;