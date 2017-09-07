'use strict'
import React, { Component } from 'react';
import PaddingDiv from './component/PaddingDiv'; 
class UserCenter extends Component {
    constructor(...props) {
        super(...props);
        this.state = {

        }

    }
    render(){
        return <PaddingDiv>
                <p style = {{
                    fontSize:'0.1rem'
                }}>{this.props.uri.search.username}，您已经成功登录！</p>
            </PaddingDiv>
    }
}

export default UserCenter;