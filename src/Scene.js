'use strict'
import React from 'react';

class Scene extends React.Component {
    constructor(...props) {
        super(...props);
    }
    _style() {
        console.log(this.props.uri,this.props.route.uri)
        return {
            ...this.props.style,
            ...baseStyle,
            display: this.props.uri.path === this.props.route.uri.path
        }
    }
    _mountChild(){
        var route = this.props.route;
        return <route.component navigator = {this.props.navigator} uri = {this.props.route.uri}/>
    }
    render() {
        return <div
            children={this._mountChild()}
            style={this._style()} />
    }
}

var baseStyle = {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
}

export default Scene;