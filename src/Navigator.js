'use strict'
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Scene from './Scene';
import Location from './Location';
var key = 1
function Route(component, path, name) {
    return {
        component,
        path,
        name,
        key: key++
    }
}

Location.on('change',function(e){
    
});
class Navigator extends Component {
    constructor(...props) {
        super(...props);
        this.state = {

        }
        var routeConfig = this.props.routeConfigMap[this.props.initalRoute];
        this._routeStacks = [Route(routeConfig.component, routeConfig.path, routeConfig.name)];     
    }
    componentWillMount() {
 
    }
    componentDidMount() {
        
    }
    
    
    componentWillUnmount() {

    }
    getChildContext() {
        return { parent: this }
    }
    _getRouteConfig(name) {
        return this.props.routeConfigMap && this.props.routeConfigMap[name] || null;
    }
    _renderScenes() {
        var routeStacks = this._routeStacks;
        return routeStacks.map((route, i) => {
            return <Scene key={route.key} child={route.component} />
        })
    }

    push(name, params) {
        var route = this._getRouteConfig(name);
        Location.push(name)
    }
    goBack() {
        Location.goBack(1);

    }
    goBackTo(name) {
        var i = 0, l = this._routeStacks.length;
        for (; i < l; i++) {
            if (name = this._routeStacks[i].name) {
                Location.goBack(l - i - 1);
                return;
            }
        }
    }
    render() {
        return <div
            style={[{ height: '100%', width: '100%', position: 'relative' }, this.props.style]}>
            {this._renderScenes()}
        </div>
    }
}
Navigator.childContextTypes = {
    parent: PropTypes.any
}
Navigator.contextTypes = {
    parent: PropTypes.any
}
Navigator.propTypes = {
    initalRoute: PropTypes.string,
    cacheBound: PropTypes.number,
    routeConfigMap: PropTypes.any
}
export default Navigator;