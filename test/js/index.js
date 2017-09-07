import Navigator from './../../src';


import React from 'react';
import ReactDOM from 'react-dom';
import routeConfigMap from './routeConfigMap'
import StatusBar from './pages/component/StatusBar'
import NavigationBar from './pages/component/NavigationBar'
window.routeConfigMap = routeConfigMap;
class Hello extends React.Component {
    constructor(...props) {
        super(...props);
    }
    render() {
        console.log(this.props.index + 'render')
        return <div onClick={this.props.onClick}>{this.props.message}</div>
    }
}
class List extends React.Component {
    constructor(...props) {
        super(...props);
        this.state = {
            count: 1
        }
    }
    _renderList() {
        //setTimeout(()=>this.setState({count:this.state.count+1}),2000);
        return new Array(this.state.count).fill(1).map((item, index) => {
            return <Hello index={index} message={Date.now()} />
        })
    }
    render() {
        return <div style={{ width: '100%', height: '100%' }}>
            <Navigator
                routeConfigMap={routeConfigMap}
                initalRoute='main'
                style={{ width: '100%', height: '100%' }} />
        </div>
    }
}
class Main extends React.Component {
    constructor(...props) {
        super(...props);
        this.state = {
            message: 'hello react'
        }
    }
    componentWillUnmount() {
        console.log('componentWillUnmount');
    }

    changeMessage(message) {
        this.setState({ message })
    }
    render() {
        return <div style={{ width: '100%', height: '100%' }}>
            <StatusBar />
            <Navigator
                routeConfigMap={routeConfigMap}
                initalRoute='main'
                ref = 'Navigator'
                style = {{height:document.body.clientHeight - 64}}/>
            <NavigationBar getNavigator = {()=>this.refs.Navigator} />
        </div>
    }
}
window.addEventListener('load', function () {
    ReactDOM.render(<Main />,
        document.getElementById('root'))
}
    , false)
