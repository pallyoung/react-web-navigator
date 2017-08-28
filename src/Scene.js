'use strict'
import React from 'react';

class Scene extends React.Component {
    constructor(...props) {
        super(...props);
    }
    render() {
        return <div 
                children = {this.props.child}
                style={{position: 'absolute', top: 0, left: 0, right: 0, bottom: 0,...this.props.style}} />
    }
}


export default Scene;