'use strict'
import React, { Component } from 'react';

class Wifi extends Component {
    constructor(...props) {
        super(...props);
        this.state = {
        }

    }
    render() {
        return <svg
            height='20'
            width='30'
            style={{ position: 'absolute', top: 0, left: 10 }}>
            <path
                stroke='black'
                strokeWidth='1.5'
                d='M7 7 A30 30 0 0 1 23 7' />
            <path
                stroke='black'
                strokeWidth='1.5'
                d='M9 10 A20 20 0 0 1 21 10' />
            <path
                stroke='black'
                strokeWidth='1.5'
                d='M11 13 A10 10 0 0 1 19 13' />
            <circle
                fill='black'
                r='1.5'
                cx='15'
                cy='16'
            />
        </svg>
    }
}
class CMCC extends Component {
    constructor(...props) {
        super(...props);
        this.state = {
        }
    }
    render() {
        return <svg
            height='20'
            width='40'
            style={{ position: 'absolute', top: 0, left: 40 }}>
            <rect
                fill='black'
                height = '2'
                x = '0'
                y = '16'
                width = '1.5' />
            <rect
                fill='black'
                x = '3'
                y = '13'
                height = '5'
                width = '1.5' />
            <rect
                fill='black'
                height = '8'
                x = '6'
                y = '10'
                width = '1.5' />
            <rect
                fill='black'
                height = '11'
                x = '9'
                y = '7'
                width = '1.5' />
        </svg>
    }
}
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
        return <svg height='20' width='30' className='battery'>
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
                rx='2'
                height='6'
                width='4' />
            <rect
                strokeWidth='1'
                stroke='green'
                fill='white'
                x='3'
                y='5'
                rx='2'
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
            <Wifi />
            <CMCC />
        </div>
    }

}
export default StatusBar;