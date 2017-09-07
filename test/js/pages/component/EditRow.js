'use strict'
import React, { Component } from 'react';
class EditRow extends Component {
    constructor(...props) {
        super(...props);
        this.state = {
            isFocused:false
        }

    }
    _onFocus(){
        this.setState({
            isFocused:true
        })
    }
    _onBlur(){
        this.setState({
            isFocused:false
        })
    }
    render(){
        return <div className = 'row'>
                <p>
                    <span className = 'label'>{this.props.title}</span>
                    <input
                        className = 'input'
                        onFocus = {(e)=>this._onFocus(e)}
                        onBlur = {(e)=>this._onBlur(e)}
                        placeholder = {this.props.placeholder}
                        onChange = {this.props.onChange} 
                        type="text" />
                </p>
                <p className = {this.state.isFocused?'border focus':'border'}/>
            </div>
    }
}

export default EditRow;
