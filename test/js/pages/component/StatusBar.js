'use strict'
import React, { Component } from 'react';

class Clock extends Component {
    constructor(...props) {
        super(...props);
        this.state = {
            time: this._getCurrentTime()
        }
        this._timeoutId

    }
    componentDidMount() {
        this._startTick();
    }
    componentWillUnmount() {
        clearTimeout(this._timeoutId);
    }

    _startTick() {
        this._timeoutId = setTimeout(() => {
            this.setState({ time: this._getCurrentTime() });
            this._startTick();
        }, 500);
    }
    _getCurrentTime() {
        var date = new Date();
        return date.getHours() + ':' + (date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes());
    }
    render() {
        return <svg height='20' width = '30' className='battery'>
               <text x="0" y="15" fill="black">{this.state.time}</text>
            </svg>
    }
}

class Battery extends Component {
    constructor(...props) {
        super(...props);
    }
    render() {
        return <svg height='20' width='40' className='battery'>
            <rect
                fill='green'
                x='0'
                y='7'
                rx = '2'
                height='6'
                width='4' />
            <rect
                strokeWidth='1'
                stroke='green'
                fill='white'
                x='3'
                y='5'
                rx = '2'
                height='10'
                width='20' >

            </rect>
            <rect
                fill='green'
                x='5'
                y='7'
                height='6'
                width='16' >
            </rect>
            <rect
                fill='white'
                x='5'
                y='7'
                height='6'
                width='16' >
                <animate
                    attributeName="width"
                    from="12"
                    to="0"
                    dur="3"
                    repeatCount="indefinite" />
            </rect>
            
        </svg>
    }
}
class StatusBar extends Component {
    constructor(...props) {
        super(...props);
        this.state = {

        }

    }
    render() {
        return <div className='status-bar'>
            <Battery />
            <Clock />
        </div>
    }

}
export default StatusBar;