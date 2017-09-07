'use strict'
import React, { Component } from 'react';
class Navigation extends Component {
    constructor(...props) {
        super(...props);
        this.state = {

        }

    }
    render() {
        var width = document.body.clientWidth;
        var qWidth = width*0.25;
        return <svg height='44' fill='rgba(0,0,0,0.5)' style={{ backgroundColor: 'rgb(0,0,0)' }} width={width}>
            <polygon
                strokeWidth='2'
                stroke = 'white' 
                onClick = {()=>this.props.getNavigator().goBack()}
                points = {(qWidth)+',12,'+(qWidth)+',32,'+(qWidth-15)+',22'}/>
            <circle
                strokeWidth='2'
                stroke = 'white' 
                cx={width/2}
                cy="24"
                r = '10'/>
            <rect
                strokeWidth='2'
                stroke = 'white'
                height = '20'
                y = '12'
                rx = '2'
                ry = '2'
                x = {width*0.75}
                width = '20' />
        </svg>
    }

}
export default Navigation;