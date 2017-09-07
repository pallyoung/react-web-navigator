'use strict'
import React, { Component } from 'react';

import TopArea from './component/TopArea';
import PaddingDiv from './component/PaddingDiv';
import EditRow from './component/EditRow';
import Button from './component/Button';
class Register extends Component {
    constructor(...props) {
        super(...props);
        this.state = {
            registered:false,
            restTime:0,
            username:'',
            password:''
        }

    }
    _register() {
        this.setState({restTime:3,registered:true});
        var self = this;
        
        setTimeout(function countDown(){
            var restTime = self.state.restTime-1;
            if(restTime == 0){
                setTimeout(()=>{
                    self.props.navigator.push('login');
                },200)
            }else{
                setTimeout(countDown,1000) ;       
            }
            self.setState({restTime});            
        },1000);
    }
    render() {
        return <div>
            <TopArea children='登录' />
            <PaddingDiv>
                <EditRow
                    onChange={(e) => {
                        this.state.username = e.nativeEvent.target.value
                    }}
                    title='用户名'
                    placeholder='请输入用户名' />
                <EditRow
                    onChange={(e) => {
                        this.state.password = e.nativeEvent.target.value
                    }}
                    title='密码'
                    security = {true}
                    placeholder='请输入密码' />
                <Button
                    onClick={() => this._register()}
                    type='lagre'
                    text='注册' />
                {this.state.registered&&<p 
                                            children = {'注册成功,'+this.state.restTime +'s后将前往登录页面'}/>}
            </PaddingDiv>
        </div>
    }
}

export default Register;