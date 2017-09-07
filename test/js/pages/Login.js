'use strict'
import React, { Component } from 'react';

import TopArea from './component/TopArea';
import PaddingDiv from './component/PaddingDiv';
import EditRow from './component/EditRow';
import Button from './component/Button';
class Login extends Component {
    constructor(...props) {
        super(...props);
        this.state = {
            password:'',
            username:''
        }

    }
    _goLogin(){
        this.props.navigator.push('usercenter',this.state);
    }
    render(){
        return <div>
            <TopArea children = '登录'/>
            <PaddingDiv>
                <EditRow 
                    onChange = {(e)=>{
                        this.state.username = e.nativeEvent.target.value
                    }}
                    title = '用户名'
                    placeholder = '请输入用户名'/>
                <EditRow 
                    onChange = {(e)=>{
                        this.state.password = e.nativeEvent.target.value
                    }}
                    title = '密码'
                    placeholder = '请输入密码'/>
                <Button
                    onClick = {()=>this._goLogin()}
                    type = 'lagre' 
                    text = '登录'/> 
            </PaddingDiv>
        </div>
    }
}

export default Login;