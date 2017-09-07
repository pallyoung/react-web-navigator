'use strict'
import React, { Component } from 'react';
import Button from './component/Button';
class Main extends Component {
    constructor(...props) {
        super(...props);
        this.state = {

        }

    }
    render(){
        var width = document.body.clientWidth;
        return <div>
            <Button text = '登录' onClick = {()=>this.props.navigator.push('login')}/>
            <Button text = '注册' onClick = {()=>this.props.navigator.push('register')}/>
            <Button text = '用户中心' onClick = {()=>this.props.navigator.push('usercenter')}/>
        </div>
    }
}
export default Main;