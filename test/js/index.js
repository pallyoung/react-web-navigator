import Navigator from './../../src';


import React from 'react';
import ReactDOM from 'react-dom';

class Hello extends React.Component{
    constructor(...props){
        super(...props);
        console.log(this.props.index)
    }
    render(){
        console.log(this.props.index+'render')
        return <div onClick = {this.props.onClick}>{this.props.message}</div>
    }
}
class List extends React.Component{
    constructor(...props){
        super(...props);
        this.state = {
            count:1
        }
    }
    _renderList(){
        //setTimeout(()=>this.setState({count:this.state.count+1}),2000);
        return new Array(this.state.count).fill(1).map((item,index)=>{
            return <Hello index = {index} message = {Date.now()}/>
        })
    }
    render(){
        return <div>
              {this._renderList()}  
        </div>
    }
}
class Main extends React.Component{
    constructor(...props){
        super(...props);
        this.state = {
            message:'hello react'
        }
    }
    componentWillUnmount() {
        console.log('componentWillUnmount');
    }
    
    changeMessage(message){
        this.setState({message})
    }
    render(){
        return <List />
    }
}
window.addEventListener('load',function(){
    
    ReactDOM.render(<Main />,document.getElementById('root'),function(component){console.log(this)})},false)
