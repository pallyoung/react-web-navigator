import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Scene from './Scene';
class Navigator extends Component {
    constructor(...props) {
        super(...props);
        this.state = {
            
        }
    }

    componentWillMount() {
        
    }
    componentWillUnmount() {

    }
    _renderScenes(){
  
    }
    _renderScene(){

    }
    _generateScene(name){
        var scene = {
            key:key,
            component:this._renderScene(key)
        }
        this.state.scenes.push(scene);
    }
    push(name){

    }
    goBack(name){
        index = index|| 1;
    }
    popTo(name){

    }
    replace(name){

    }
    render() {
        return <div
            style={[{ height: '100%', width: '100%',position:'relative' }, this.props.style]}>
            {this._renderScenes()}
        </div>
    }
}

Navigator.propTypes = {
    renderScene:PropTypes.func,
    initalScene:PropTypes.string,
    cacheBound:PropTypes.number
}