'use strict'
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Scene from './Scene';
import Location from './Location';
var key = 1
function Route(component, path, name,uri) {
    return {
        component,
        path,
        name,
        uri,
        key: key++
    }
}

function makeParams(params) {
    var queryString = '?';
    for (var o in params) {
        if (params.hasOwnProperty(o)) {
            queryString += o + '=' + params[o];
        }
    }
    return queryString;
}

class Navigator extends Component {
    constructor(...props) {
        super(...props);
        this.state = {
        }
        this._changeHandle;
        this.uri = Location.uri;
        this.referrer = Location.uri;
        this._routeStacks = [];
        this._routeNameDict = {};
        this._routePathDict = {}
    }
    componentWillReceiveProps(nextProps) {
        this._setRouteDicts(nextProps.routeConfigMap);
    }
    componentWillMount() {
        var self = this;
        this._setRouteDicts(this.props.routeConfigMap);
        this._routeStacks.push(this._routeWithUri(this.uri));
        this._changeHandle = function (e) {
            if(e.newUri.path == this.uri.path){
                //goback
            }
        }
        Location.on('change', this._changeHandle);
    }
    componentDidMount() {
        
    }


    componentWillUnmount() {
        Location.off('change', this._changeHandle);
        this._changeHandle = undefined;
    }
    _setRouteDicts(routeConfigMap) {
        var o, route, routeNameDict = {}, routePathDict = {};
        for (var o in routeConfigMap) {
            var route = routeConfigMap[o];
            route.name = o;
            if(routeConfigMap.hasOwnProperty(o)){
                routeNameDict[o] = route;
                routePathDict[route.path] = route;
            }
        }
        this._routeNameDict = routeNameDict;
        this._routePathDict = routePathDict;
    }
    _routeWithUri(uri) {
        if(!uri){
            uri = {}
        }
        var routeConfig = this._routePathDict[uri.path]||this._routeNameDict[this.props.initalRoute];   
        return Route(routeConfig.component,routeConfig.path,routeConfig.name,uri);
    }
    _routeConfigWithName(name) {
        return this._routeNameDict[name];
    }
    _renderScenes() {
        var routeStacks = this._routeStacks;
        return routeStacks.map((route, i) => {
            return <Scene key={route.key} route={route} uri = {this.uri} navigator = {this}/>
        })
    }

    push(name, params) {
        var route = this._routeConfigWithName(name);
        Location.push(route.path + makeParams(params));
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
Navigator.propTypes = {
    initalRoute: PropTypes.string,
    cacheBound: PropTypes.number,
    routeConfigMap: PropTypes.any
}
export default Navigator;