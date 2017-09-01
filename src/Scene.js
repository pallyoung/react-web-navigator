'use strict'
import React from 'react';

class Scene extends React.Component {
    constructor(...props) {
        super(...props);
    }
    _style() {
        return {
            ...this.props.style,
            ...baseStyle,
            display: this.props.isCurrent ? 'block' : 'none'
        }
    }
    _mountChild(){
        var Child = this.props.child;
        return <Child />
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