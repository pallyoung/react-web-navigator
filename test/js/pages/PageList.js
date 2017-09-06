'use strict'
import React, { Component } from 'react';
class PageList extends Component {
    constructor(...props) {
        super(...props);
        this.state = {

        }
    }
    _renderList(){
        return Object.keys(routeConfigMap).map((key)=>{
            return <p children = {key} key = {key} onClick = {()=>this.props.navigator.push(key)}/>
        });
    }

    render(){
        return <div>
            {this._renderList()}
        </div>
    }
}

export default PageList;